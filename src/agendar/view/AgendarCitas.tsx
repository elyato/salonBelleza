import { Box, Button, Card, Grid, Typography } from "@mui/material";
import { Header } from "./components/header/Header";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import img1 from "../../assets/imgs/foto1.jpeg";
import img2 from "../../assets/imgs/foto2.jpeg";
import img3 from "../../assets/imgs/foto4.jpeg";
import CardServicios from "./components/view/CardServicios";
import type { servicios } from "./interfaces/servicios";
import { Citas } from "./citas/Citas";
import { Galeria } from "./components/galeria/view/Galeria";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { useState } from "react";
import { Footer } from "./components/footer/view/Footer";
const AgendarCitas = () => {
  const servicios: servicios[] = [
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

  const [selectedService, setSelectedService] = useState(0);


  const handleSelectService = (id: number) => {
    setSelectedService(id);
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    element?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        bgcolor: "#f7f5f1",
      }}
    >
      <Header scrollToSection={scrollToSection} />
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
              onClick={() => scrollToSection("Agendar")}
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
              onClick={() => scrollToSection("galeria")}
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
      <Galeria fotos={galeria} />

      <Box id="Equipo" sx={{ bgcolor: "#fdfcf9", width: "100%", p: 4 }}>
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
      <Citas servicios={servicios} selectedService={selectedService} handleSelectService={handleSelectService} manicuristas={manicuristas} />
      <Footer />
      <Button sx={{ zIndex: 1, position: "fixed", bottom: 16, right: 16, bgcolor: "#07df19", color: "white", p: 2, borderRadius: "300px" }} href="https://wa.me/3137610049" target="_blank" startIcon={<LocalPhoneIcon/>}>
        WhatsApp
      </Button>
    </Box>
  );
};

export default AgendarCitas;
