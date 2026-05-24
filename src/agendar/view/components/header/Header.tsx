import { Box, Button, Typography } from "@mui/material";
import "./Header.css";
interface headerProps {
    scrollToSection: (id: string) => void;
}
export const Header = ({ scrollToSection }: headerProps) => {
  return (
    <Box className="app-header" sx={{ bgcolor: "#f7f5f1",borderBottom: "1px solid #E0E0E0", p: 2, position: "fixed", top: 0, left: 0, right: 0, zIndex: 100 }}>
      <Typography variant="h6" className="app-header-title" sx={{fontFamily: "Playfair Display, serif"}}>
        Aleja nails & beauty
      </Typography>
      <Box className="app-header-nav">
        <Typography variant="subtitle1" align="center">
          Servicios
        </Typography>
        <Typography variant="subtitle1" align="center" sx={{ cursor: "pointer" }} onClick={() => scrollToSection("galeria")} >
          galeria
        </Typography>
        <Typography variant="subtitle1" align="center" sx={{ cursor: "pointer" }} onClick={() => scrollToSection("Equipo")}  >
          Equipo
        </Typography>
        <Button
          variant="contained"
          color="info"
          sx={{ borderRadius: 5, bgcolor: "black",p:2 }}
          fullWidth
          size="small"
          onClick={() => scrollToSection("Agendar")}
        >
          Agendar cita
        </Button>
      </Box>
    </Box>
  );
};
