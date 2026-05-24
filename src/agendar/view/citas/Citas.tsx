import { Box, Button, Card, CardActions, CardContent, CardHeader, Grid, Step, StepLabel, Stepper, Typography, TextField } from "@mui/material"
import type { manicuristas, servicios } from "../interfaces/servicios";
import { useState } from "react";

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';


interface citasProps {
  servicios: servicios[];
  selectedService: number;
  handleSelectService: (id: number) => void;
  manicuristas?: manicuristas[];
}
export const Citas = ({ servicios, selectedService, handleSelectService, manicuristas }: citasProps) => {
   const steps = [
      "Servicio",
      "Estilista",
      "Fecha y hora",
      "Datos",
    ];

    const [step, setStep] = useState(0);
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    // selectedTime stores 'HH:mm'
    const [selectedTime, setSelectedTime] = useState<string | null>(null);
    // Datos quemados: citas ya agendadas (ISO: YYYY-MM-DDTHH:mm:SS)
    const [bookedAppointments, setBookedAppointments] = useState<string[]>([
      '2026-05-24T09:00:00',
      '2026-05-24T10:30:00',
      '2026-05-25T13:00:00',
    ]);

    // Genera ranuras cada 30 minutos entre 09:00 y 17:00
    const generateSlots = () => {
      const slots: string[] = [];
      for (let h = 9; h <= 16; h++) {
        slots.push(`${h.toString().padStart(2, '0')}:00`);
        slots.push(`${h.toString().padStart(2, '0')}:30`);
      }
      // incluir 17:00 como última opción
      slots.push('17:00');
      return slots;
    };

    const formatDate = (d: Date) => {
      const y = d.getFullYear();
      const m = (d.getMonth() + 1).toString().padStart(2, '0');
      const day = d.getDate().toString().padStart(2, '0');
      return `${y}-${m}-${day}`;
    };

    const handleSelectSlot = (slot: string) => {
      if (!selectedDate) return;
      const dateStr = formatDate(selectedDate);
      const iso = `${dateStr}T${slot}:00`;
      // Si ya está reservado, no hacer nada
      if (bookedAppointments.includes(iso)) return;
      // Seleccionar y marcar como reservado (simula agendado)
      setSelectedTime(slot);
      setBookedAppointments((prev) => [...prev, iso]);
    };

    const handleNext = () => {
      setStep((prevStep) => prevStep + 1);
    };
  return (
<Box sx={{ bgcolor: "#f7f5f1" }} id="Agendar">
        <Typography
          variant="h4"
          align="center"
          sx={{ marginTop: "32px", fontFamily: "Playfair Display, serif" }}
        >
          Agenda tu cita
        </Typography>
        <Typography variant="h4" align="center" sx={{ marginTop: "32px" }}>
          Reserva en minutos y asegura tu espacio con tu estilista favorita
        </Typography>

        <Box sx={{ width: "100%" }}>
          <Stepper activeStep={step} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
        <Card>
          <CardHeader title="Selecciona tu servicio" />
          <CardContent>
            <Box>
              <Typography
                variant="h6"
                align="center"
                sx={{ marginBottom: "16px" }}
              >
                Selecciona un servicio
              </Typography>
            </Box>
              {step === 0 && (
            <Grid container spacing={2}>
              {servicios.map((servicio) => (
                <Grid size={{ xs: 12, sm: 6, md: 4, lg: 6 }} key={servicio.id}>

                <Box
                sx={{
                  border: "1px grey solid",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      p: 1.5,
                      borderRadius: 2,
                      bgcolor: selectedService === servicio.id ? "#e0e0e0" : "white",
                    }}
                    onClick={() => handleSelectService(servicio.id)}
                    >
                    <Typography
                    variant="h6"
                    align="center"
                    sx={{ marginBottom: "8px" }}
                    >
                    {servicio.nombre}
                    </Typography>
                    <Typography
                    align="center"
                    sx={{ marginBottom: "8px",color: "#ffb0d8", fontWeight: "bold" }}
                    >
                    {servicio.precio}
                    </Typography>
                    </Box>
                    
                </Grid>
                
              ))}
            </Grid>
            )}

            {
              step === 1 && (
                
<Box>
  {
    manicuristas && manicuristas.length > 0 ? (
      <Grid container spacing={2}>
        {manicuristas.map((manicurista) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={manicurista.id}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                  alignItems: "center",
                  p: 2,
                  gap: 2,
                  bgcolor: selectedService === manicurista.id ? "#e0e0e0" : "white",
              }}
              onClick={() => handleSelectService(manicurista.id)}
            >
              <img
                src={manicurista.foto}
                alt={manicurista.nombre}
                width={150}
                style={{ borderRadius: "50%" }}
              />
              <Typography variant="h6">{manicurista.nombre}</Typography>
              <Typography variant="body2">
                {manicurista.especialidad}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    ) : (
      <Typography variant="body1" align="center">
        No hay estilistas disponibles en este momento.
      </Typography>
    )
  }

 
</Box>
              )
            }
            {
               step === 2 && (
      <Grid container spacing={2}>
        <Grid >
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar
              onChange={(newValue: any) => { setSelectedDate(newValue ? newValue.toDate() : null); setSelectedTime(null); }}
            />
          </LocalizationProvider>
        </Grid>

        <Grid >
          {selectedDate ? (
            <>

              <Grid container spacing={1} >
                {generateSlots().map((slot) => {
                  const dateStr = formatDate(selectedDate);
                  const slotIso = `${dateStr}T${slot}:00`;
                  const isBooked = bookedAppointments.includes(slotIso);
                  const isSelected = selectedTime === slot && !isBooked;
                  return (
                    <Grid  key={slot} size={{ xs: 3, sm: 4, md: 3 }} sx={{ display: "flex", justifyContent: "center" }}>
                      <Button
                        variant={isSelected ? "contained" : "outlined"}
                        disabled={isBooked}
                        onClick={() => handleSelectSlot(slot)}
                      >
                        {slot}
                      </Button>
                    </Grid>
                  );
                })}
              </Grid>

              {selectedTime && (
                <Typography align="center" sx={{ mt: 1 }}>
                  Hora seleccionada: {selectedTime}
                </Typography>
              )}
            </>
          ) : (
            <Typography align="center">Selecciona una fecha para ver horarios disponibles.</Typography>
          )}
        </Grid>
      </Grid>
  )}
  {
    step === 3 && (
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Typography variant="h6" align="center">
          Ingresa tus datos para confirmar tu cita
        </Typography>
        <TextField label="Nombre completo" fullWidth />
        <TextField label="Número de teléfono" fullWidth />
      </Box>
    )
  }
             
          </CardContent>
          <CardActions
            sx={{
              display: "flex",
              justifyContent: "space-between",
              p: 2,
              borderTop: "1px solid #E0E0E0",
            }}
          >
            <Button
              variant="outlined"
              sx={{ borderRadius: 2 }}
              color="primary"
              fullWidth
              disabled={step === 0}
              onClick={() => setStep((prevStep) => prevStep - 1)}
            >
              Atras
            </Button>

            <Button
              variant="contained"
              sx={{ borderRadius: 2 }}
              color="primary"
              disabled={(step === 0 && selectedService === 0) || (step === 1 && selectedService === 0) || (step === 2 && !selectedTime)}
              fullWidth
              onClick={handleNext}
            >
             {
               
                step === steps.length - 1 ? "Confirmar Cita" : "Siguiente"
            } 
            </Button>
          </CardActions>
        </Card>

       
      </Box>
  )
}
