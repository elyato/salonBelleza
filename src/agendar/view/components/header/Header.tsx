import { Box, Button, Typography } from "@mui/material"

const Header = () => {
  return (
     <Box
        sx={{
            bgcolor: "#e5a2ac",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid #ccc",
          padding: "16px",  
        }}
      >
        <Typography variant="h6" align="center">
          Aleja nails & beauty
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Typography variant="subtitle1" align="center">
            Servicios
          </Typography>
          <Typography variant="subtitle1" align="center">
            galeria
          </Typography>
          <Typography variant="subtitle1" align="center">
            Equipo
          </Typography>
          <Button variant="contained" color="info" fullWidth size="small"  >
            Agendar cita
          </Button>
        </Box>
      </Box>
  )
}

export default Header