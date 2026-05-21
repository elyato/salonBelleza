import { Box, Button, Typography } from "@mui/material";
import "./Header.css";
export const Header = () => {
  return (
    <Box className="app-header" sx={{ bgcolor: "#FFF4F2",borderBottom: "1px solid #E0E0E0", p: 2, position: "fixed", top: 0, left: 0, right: 0, zIndex: 100 }}>
      <Typography variant="h6" className="app-header-title">
        Aleja nails & beauty
      </Typography>
      <Box className="app-header-nav">
        <Typography variant="subtitle1" align="center">
          Servicios
        </Typography>
        <Typography variant="subtitle1" align="center">
          galeria
        </Typography>
        <Typography variant="subtitle1" align="center">
          Equipo
        </Typography>
        <Button
          variant="contained"
          color="info"
          sx={{ borderRadius: 5, bgcolor: "black",p:2 }}
          fullWidth
          size="small"
        >
          Agendar cita
        </Button>
      </Box>
    </Box>
  );
};
