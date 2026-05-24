import { Box, Button, Card, CardActions, CardContent, CardHeader, Grid, Step, StepLabel, Stepper, Typography } from "@mui/material"
import type { servicios } from "../interfaces/servicios";

interface citasProps {
  servicios: servicios[];
}
export const Citas = ({ servicios }: citasProps) => {
   const steps = [
      "Servicio",
      "Estilista",
      "Fecha y hora",
      "Datos",
    ];
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
          <Stepper activeStep={1} alternativeLabel>
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
            <Grid container spacing={2}>
              {servicios.map((servicio) => (
                <Grid size={{ xs: 12, sm: 6, md: 4, lg: 6 }} key={servicio.id}>
                  <Box sx={{ border: "1px grey solid" ,display:"flex",justifyContent:"space-between",  alignItems:"center", p:2, borderRadius: 2 }}>
                    <Typography
                      variant="h6"
                      align="center"
                      sx={{ marginBottom: "8px" }}
                    >
                      {servicio.nombre}
                    </Typography>
                    <Typography
                      variant="body2"
                      align="center"
                      sx={{ marginBottom: "8px" }}
                    >
                      {servicio.precio}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
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
            >
              Atras
            </Button>

            <Button
              variant="contained"
              sx={{ borderRadius: 2 }}
              color="primary"
              fullWidth
            >
              Continuar
            </Button>
          </CardActions>
        </Card>
      </Box>
  )
}
