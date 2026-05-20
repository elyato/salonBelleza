import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import Header from "./components/header/Header";

const AgendarCitas = () => {
  const servicios = [
    {
      id: 1,
      nombre: "Manicure",
      descripcion:
        "Cuida y embellece tus manos con nuestro servicio de manicure.",
      tiempo: "30 minutos",
    },
    {
      id: 2,
      nombre: "Pedicure",
      descripcion:
        "Relaja y rejuvenece tus pies con nuestro servicio de pedicure.",
      tiempo: "45 minutos",
    },
    {
      id: 3,
      nombre: "Unas Acrilicas",
      descripcion: "Extension y esculpido profesional con diseno incluido.",
      tiempo: "1 hora",
    },
    {
      id: 4,
      nombre: "Combo Mani-Pedi",
      descripcion: "<Manicure y pedicure con gel, el paquete mas popular.",
      tiempo: "1 hora y 15 minutos",
    },
    {
      id: 5,
      nombre: "Nail Art",
      descripcion: "Disenos personalizados, decoraciones y piedras.",
      tiempo: "30 minutos adicionales al servicio base",
    },
    {
      id: 6,
      nombre: "Manicure con Gel",
      descripcion: "Durabilidad de hasta 3 semanas con acabado brillante.",
      tiempo: "45 minutos",
    },
  ];

  const steps = [
    "Select master blaster campaign settings",
    "Create an ad group",
    "Create an ad",
  ];
  return (
    <Box>
      <Header />
      <Box>
        <Typography variant="h4" align="center" sx={{ marginTop: "32px" }}>
          Elegancia en cada detalle
        </Typography>

        <Typography variant="h4" align="center" sx={{ marginTop: "32px" }}>
          Transforma tus manos en obras de arte con nuestros tratamientos
          exclusivos de manicure, pedicure y disenos personalizados.
        </Typography>

        <Box>
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            sx={{ marginTop: "32px" }}
          >
            Agendar cita
          </Button>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ marginTop: "32px" }}
          >
            Ver galeria
          </Button>
        </Box>
      </Box>
      <Box>
        <Typography variant="h4" align="center" sx={{ marginTop: "32px" }}>
          Nuestros servicios
        </Typography>
        <Typography variant="h4" align="center" sx={{ marginTop: "32px" }}>
          Ofrecemos una gama de tratamientos para el cuidado y embellecimiento
          de tus manos y pies, incluyendo manicure, pedicure, disenos
          personalizados.
        </Typography>

        <Grid container spacing={2} sx={{ marginTop: "32px" }}>
          {servicios.map((servicio) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Card>
                <Typography variant="h6">{servicio.nombre}</Typography>
                <Typography variant="body2">{servicio.descripcion}</Typography>
                <Typography variant="caption">{servicio.tiempo}</Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box>
        <Typography variant="h4" align="center" sx={{ marginTop: "32px" }}>
          Nuestra galeria
        </Typography>
        <Typography variant="h4" align="center" sx={{ marginTop: "32px" }}>
          Inspirate con nuestros trabajos mas recientes y encuentra tu proximo
          estilo.
        </Typography>
        <Grid container spacing={2} sx={{ marginTop: "32px" }}>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Card>fotos</Card>
          </Grid>
        </Grid>
      </Box>

      <Box>
        <Typography variant="h4" align="center" sx={{ marginTop: "32px" }}>
          Nuestro equipo
        </Typography>
        <Typography variant="h4" align="center" sx={{ marginTop: "32px" }}>
          Conoce a las expertas detras de cada tratamiento, dedicadas a
          brindarte una experiencia de belleza excepcional.
        </Typography>

        <Grid container spacing={2} sx={{ marginTop: "32px" }}>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Card>fotos</Card>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Typography variant="h4" align="center" sx={{ marginTop: "32px" }}>
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
                <Grid container spacing={2}>
                    {servicios.map((servicio) => (
                        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={servicio.id}>
                            <Button variant="outlined" fullWidth>
                                {servicio.nombre}
                            </Button>
                        </Grid>
                    ))}
                </Grid>
            </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default AgendarCitas;
