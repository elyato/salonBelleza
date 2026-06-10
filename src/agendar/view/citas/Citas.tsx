import { Box, Button, Card, CardActions, CardContent, CardHeader, Grid, Step, StepLabel, Stepper, Typography, TextField,  Divider,  } from "@mui/material"
import type {  Employee, servicios } from "../interfaces/servicios";

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { useCitas } from "./hook/useCitas";


interface citasProps {
  servicios: servicios[];
  selectedService: number;
  handleSelectService: (id: number) => void;
  manicuristas?: Employee[];
}
export const Citas = ({ servicios, selectedService, handleSelectService, manicuristas }: citasProps) => {

  const {bookedAppointments,clientName,clientPhone ,generateSlots ,handleNext,handleSelectSlot,selectedDate,
    selectedManicuristaId,selectedTime,serviceName,stylistName,step,selectedServiceId,setClientName,setClientPhone,setSelectedDate,setSelectedManicuristaId,setSelectedServiceId,setSelectedTime,steps,formatDate,setStep} = useCitas({ selectedService, manicuristas, servicios });
   
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
                      bgcolor: selectedServiceId === servicio.id ? "#e0e0e0" : "white",
                    }}
                                          onClick={() => { handleSelectService(servicio.id); setSelectedServiceId(servicio.id); }}
                    >
                    <Typography
                    variant="h6"
                    align="center"
                    sx={{ marginBottom: "8px" }}
                    >
                    {servicio.nombre}
                    </Typography>
                    <Typography
                    variant="subtitle1"
                    align="center"
                    sx={{ marginBottom: "8px",color: "#e5a2ac",  }}
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
                  bgcolor: selectedManicuristaId === manicurista.id ? "#e0e0e0" : "white",
              }}
                                onClick={() => { handleSelectService(manicurista.id); setSelectedManicuristaId(manicurista.id); }}
            >
              <img
                src={manicurista.foto}
                alt={manicurista.name}
                width={150}
                style={{ borderRadius: "50%" }}
              />
              <Typography variant="h6">{manicurista.name}</Typography>
              <Typography variant="body2">
                {manicurista.skills || "Especialista en uñas"}
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
        <TextField label="Nombre completo" fullWidth value={clientName} onChange={(e) => setClientName(e.target.value)} />
        <TextField label="Número de teléfono" fullWidth value={clientPhone} onChange={(e) => setClientPhone(e.target.value)} />
      </Box>
    )
  }
  {/* Modal de confirmación cuando step === 4 */}
  {
    step === 4 && (
      <Box sx={{  p: 3, borderRadius: 2, width: { xs: '90%', sm: 480 } }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography id="appointment-modal-title" variant="h6">Cita Agendada</Typography>
        
      </Box>
      <Divider sx={{ my: 1 }} />
      <Typography>Tu cita ha sido reservada exitosamente. Te enviaremos un recordatorio.</Typography>
      <Box sx={{ mt: 2 }}>
        <Typography><strong>Servicio:</strong> {serviceName || 'Combo Mani-Pedi'}</Typography>
        <Typography><strong>Estilista:</strong> {stylistName || 'Laura Rodriguez'}</Typography>
        <Typography><strong>Fecha:</strong> {selectedDate ? selectedDate.toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }) : 'lunes, 25 de mayo de 2026'}</Typography>
        <Typography><strong>Hora:</strong> {selectedTime ?? '18:00'}</Typography>
        <Typography><strong>Cliente:</strong> {clientName || 'das'}</Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
        <Button variant="contained" onClick={() => { setStep(0); setSelectedDate(null); setSelectedTime(null); }}>Agendar otra cita</Button>
      </Box>
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
          >{
            step === 4 ? (
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={() => {
                  // Reiniciar todo para agendar otra cita
                  setStep(0);
                  handleSelectService(0);
                  setSelectedDate(null);
                  setSelectedTime(null);
                }}
              >
                Agendar Otra Cita
              </Button>
            ) : (
              <>
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
              </>
            )}
            
          </CardActions>
        </Card>

       
      </Box>
  )
}
