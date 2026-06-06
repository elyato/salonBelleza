import React, { useState } from "react";
import { Box, Button, Typography, IconButton, Menu, MenuItem, useTheme, useMediaQuery } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import "./Header.css";
interface headerProps {
    scrollToSection: (id: string) => void;
}
export const Header = ({ scrollToSection }: headerProps) => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleOpen = (e: React.MouseEvent<HTMLElement>) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <Box className="app-header" sx={{ bgcolor: "#f7f5f1", borderBottom: "1px solid #E0E0E0", p: 2, position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <Typography variant="h6" className="app-header-title" sx={{fontFamily: "Playfair Display, serif"}}>
        Aleja nails & beauty
      </Typography>

      {isSmall ? (
        <>
          <IconButton onClick={handleOpen} aria-label="menu" size="large">
            <MenuIcon />
          </IconButton>
          <Menu anchorEl={anchorEl} open={open} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} transformOrigin={{ vertical: 'top', horizontal: 'right' }}>
            <MenuItem onClick={() => { handleClose(); /* no scroll id for Servicios */ }}>{'Servicios'}</MenuItem>
            <MenuItem onClick={() => { handleClose(); scrollToSection('galeria'); }}>Galeria</MenuItem>
            <MenuItem onClick={() => { handleClose(); scrollToSection('Equipo'); }}>Equipo</MenuItem>
            <MenuItem onClick={() => { handleClose(); scrollToSection('Agendar'); }}>
              <Typography>Agendar cita</Typography>
            </MenuItem>
          </Menu>
        </>
      ) : (
        <Box className="app-header-nav" sx={{display:'flex', gap:2, alignItems:'center'}}>
          <Typography variant="subtitle1" align="center">Servicios</Typography>
          <Typography variant="subtitle1" align="center" sx={{ cursor: "pointer" }} onClick={() => scrollToSection("galeria")}>
            galeria
          </Typography>
          <Typography variant="subtitle1" align="center" sx={{ cursor: "pointer" }} onClick={() => scrollToSection("Equipo")}>
            Equipo
          </Typography>
          <Button
            variant="contained"
            color="info"
            sx={{ borderRadius: 5, bgcolor: "black",p:2 }}
            size="small"
            onClick={() => scrollToSection("Agendar")}
          >
            Agendar cita
          </Button>
        </Box>
      )}
    </Box>
  );
};
