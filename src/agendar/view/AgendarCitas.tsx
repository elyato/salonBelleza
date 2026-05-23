import {
  Box,
  Button,
  Card,
  Grid,
  Typography,
} from "@mui/material";
import { Header } from "./components/header/Header";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import img1 from "../../assets/imgs/foto1.jpeg";
import img2 from "../../assets/imgs/foto2.jpeg";
import img3 from "../../assets/imgs/foto4.jpeg";
import CardServicios from "./components/view/CardServicios";
import type { servicios } from "./interfaces/servicios";
import { Citas } from "./citas/Citas";
const AgendarCitas = () => {
  const servicios:servicios[] = [
    {
      id: 1,
      nombre: "Manicure",
      descripcion:
        "Cuida y embellece tus manos con nuestro servicio de manicure.",
      tiempo: "30 Min.",
      precio: "$20",
    },
    {
      id: 2,
      nombre: "Pedicure",
      descripcion:
        "Relaja y rejuvenece tus pies con nuestro servicio de pedicure.",
      tiempo: "45 Min.",
      precio: "$30",
    },
    {
      id: 3,
      nombre: "Unas Acrilicas",
      descripcion: "Extension y esculpido profesional con diseno incluido.",
      tiempo: "1 Hora",
      precio: "$50",
    },
    {
      id: 4,
      nombre: "Combo Mani-Pedi",
      descripcion: "Manicure y pedicure con gel, el paquete mas popular.",
      tiempo: "1 hora y 15 Min.",
      precio: "$45",
    },
    {
      id: 5,
      nombre: "Nail Art",
      descripcion: "Disenos personalizados, decoraciones y piedras.",
      tiempo: "30 Min. adicionales al servicio base",
      precio: "Desde $10 adicionales",
    },
    {
      id: 6,
      nombre: "Manicure con Gel",
      descripcion: "Durabilidad de hasta 3 semanas con acabado brillante.",
      tiempo: "45 Min.",
      precio: "$25",
    },
  ];

 

  const manicuristas = [
    {
      id: 1,
      nombre: "Alejandra",
      especialidad: "Manicure y Nail Art",
      foto: "https://randomuser.me/api/portraits/women/44.jpg",
    },
  ];

  const galeria = [
    {
      id: 1,
      img: img1,
    },
    {
      id: 2,
      img: img2,
    },
    {
      id: 3,
      img: img3,
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        bgcolor: "#f7f5f1",
      }}
    >
      <Header />
      <Box sx={{ marginTop: 10, bgcolor: "#FFF4F2", width: "40%", p: 4 }}>
        <Typography
          variant="h1"
          align="center"
          sx={{ marginTop: "32px", fontFamily: "Playfair Display, serif" }}
        >
          Elegancia en cada detalle
        </Typography>

        <Typography
          variant="subtitle1"
          align="center"
          sx={{ marginTop: "32px" }}
        >
          Transforma tus manos en obras de arte con nuestros tratamientos
          exclusivos de manicure, pedicure y disenos personalizados.
        </Typography>

        <Box
          sx={{
            marginTop: "32px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 2,
            flexWrap: "wrap",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: 2,
              width: "300px",
              justifyContent: "center",
              alignSelf: "center",
            }}
          >
            <Button
              variant="contained"
              color="secondary"
              fullWidth
              endIcon={<ArrowForwardIcon fontSize="small" />}
              sx={{ bgcolor: "black", p: 2, borderRadius: 5 }}
            >
              Agendar cita
            </Button>
            <Button
              variant="outlined"
              fullWidth
              sx={{
                borderRadius: 5,
                p: 2,
                color: "black",
                borderColor: "grey",
              }}
            >
              Ver galeria
            </Button>
          </Box>
          <Grid container>
            {galeria.map((foto) => (
              <Grid
                key={foto.id}
                size={{ xs: 12, sm: 6, md: 4 }}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <img
                  src={foto.img}
                  key={foto.id}
                  width={250}
                  style={{ borderRadius: 30, objectFit: "contain" }}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
<CardServicios servicios={servicios} />
      <Box>
        <Typography
          variant="h4"
          align="center"
          sx={{ marginTop: "32px", fontFamily: "Playfair Display, serif" }}
        >
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

      <Box sx={{ bgcolor: "#fdfcf9" }}>
        <Typography
          variant="h4"
          align="center"
          sx={{ marginTop: "32px", fontFamily: "Playfair Display, serif" }}
        >
          Nuestro equipo
        </Typography>
        <Typography variant="h4" align="center" sx={{ marginTop: "32px" }}>
          Conoce a las expertas detras de cada tratamiento, dedicadas a
          brindarte una experiencia de belleza excepcional.
        </Typography>

        <Grid container spacing={2} sx={{ marginTop: "32px" }}>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            {manicuristas.map((manicurista) => (
              <Card
                key={manicurista.id}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  p: 2,
                  gap: 2,
                }}
              >
                <img
                  src={manicurista.foto}
                  width={150}
                  style={{ borderRadius: "50%" }}
                />
                <Typography variant="h6">{manicurista.nombre}</Typography>
                <Typography variant="body2">
                  {manicurista.especialidad}
                </Typography>
              </Card>
            ))}
          </Grid>
        </Grid>
      </Box>
      <Citas servicios={servicios} />
    </Box>
  );
};

export default AgendarCitas;
