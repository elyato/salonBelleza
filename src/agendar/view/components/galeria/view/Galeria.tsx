import { Box,  Grid, Typography } from "@mui/material";

export interface galeria {
  id: number;
  img: string;
}
interface galeriaProps {
  fotos: galeria[];
}

export const Galeria = ({ fotos }: galeriaProps) => {
  return (
    <Box sx={{ bgcolor: "#FFF4F2", width: "100%", p: 4, display: "flex",flexDirection:"column", alignItems: "center" }}>
      <Typography
        variant="h2"
        align="center"
        sx={{ marginTop: "32px", fontFamily: "Playfair Display, serif" }}
      >
        Nuestra galeria
      </Typography>
      <Typography variant="h4" align="center" sx={{ marginTop: "32px" }}>
        Inspirate con nuestros trabajos mas recientes y encuentra tu proximo
        estilo.
      </Typography>
      <Grid container spacing={4} sx={{ marginTop: "32px" }}>
            {fotos.map((foto) => (
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <Box
            sx={{
              display: "flex",
              gap: 2,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
                <Box
                  component="img"
                  sx={{
                    width: "100%",
                    maxWidth: "250px",
                    borderRadius: 4,
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 500ms",
                    "&:hover": { transform: "scale(1.10)" },
                  }}
                  src={foto.img}
                  alt={`Foto ${foto.id}`}
                  key={foto.id}
                />
          </Box>
        </Grid>
            ))}
      </Grid>
    </Box>
  );
};
