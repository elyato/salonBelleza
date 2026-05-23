import { Box, Card, Chip, Grid, Typography } from "@mui/material"
import type { servicios } from "../../interfaces/servicios"
interface ServicioProps {
   servicios: servicios[]
 }
const CardServicios = ({servicios}: ServicioProps) => {
  return (
      <Box sx={{ bgcolor: "#fdfcf9" }}>
        <Typography
          variant="h2"
          align="center"
          sx={{ marginTop: "32px", fontFamily: "Playfair Display, serif" }}
        >
          Nuestros servicios
        </Typography>
        <Typography variant="h6" align="center" sx={{ marginTop: "32px" }}>
          Ofrecemos una gama de tratamientos para el cuidado y embellecimiento
          de tus manos y pies, incluyendo manicure, pedicure, disenos
          personalizados.
        </Typography>

        <Grid
          container
          spacing={2}
          sx={{ marginTop: "32px", justifyContent: "center" }}
        >
          <Grid
            container
            spacing={2}
            size={{ xs: 12, sm: 6, md: 8, lg: 8 }}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            {servicios.map((servicio) => (
              <Grid
                sx={{ alignSelf: "center" }}
                size={{ xs: 12, sm: 6, md: 6, lg: 4 }}
              >
                <Card
                  sx={{
                    p: 2,
                    display: "flex",
                    height: "200px",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    borderRadius: 4,
                    bgcolor: "transparent",
                    gap: 2,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      height: "100%",
                      alignItems: "center",
                      width: "100%",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{ fontFamily: "Playfair Display, serif" }}
                    >
                      {servicio.nombre}
                    </Typography>
                    <Typography sx={{ color: "#ffb0d8" }} variant="h6">
                      {servicio.precio}
                    </Typography>
                  </Box>
                  <Typography variant="body2">
                    {servicio.descripcion}
                  </Typography>
                  <Chip
                    label={servicio.tiempo}
                    color="default"
                    sx={{ marginTop: "8px" }}
                  />
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Box>
  )
}

export default CardServicios