import { Box, Button, Card, CardActions, CardContent, CardHeader, Grid, Step, StepLabel, Stepper, Typography } from "@mui/material"
import type { manicuristas, servicios } from "../interfaces/servicios";
import { useState } from "react";

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
              fullWidth
              onClick={handleNext}
            >
              Continuar
            </Button>
          </CardActions>
        </Card>
      </Box>
  )
}
