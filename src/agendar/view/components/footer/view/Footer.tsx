import { Box, Grid,  Typography } from "@mui/material"

export const Footer = () => {
  return (
 <Box component="footer" sx={{ bgcolor: '#000000', mt: 4, py: 4 }}>
          <Grid container spacing={2} >
            <Grid >
              <Typography variant="h5" sx={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, color: '#FFFFFF' }}>
                Nail Studio
              </Typography>
              <Typography sx={{ mt: 1 ,color:"white"}}>Tu destino para el cuidado y embellecimiento de manos y pies. Creando arte en cada una de tus visitas.</Typography>
            </Grid>
            <Grid >
              <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#FFFFFF' }}>Contacto</Typography>
              <Typography sx={{ color: '#FFFFFF' }}>Av. Principal 123, Centro</Typography>
              <Typography sx={{ color: '#FFFFFF' }}>+1 234 567 8900</Typography>
              <Typography sx={{ color: '#FFFFFF' }}>Lun - Sab: 9:00 AM - 7:00 PM</Typography>
            </Grid>
            <Grid >
              <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#FFFFFF' }}>Síguenos</Typography>
              <Typography sx={{ color: '#FFFFFF' }}>@nailstudio</Typography>
            </Grid>
            <Grid >
              <Typography variant="body2" align="center" sx={{ mt: 2,  color: '#FFFFFF' }}>2024 Nail Studio. Todos los derechos reservados.</Typography>
            </Grid>
          </Grid>
        </Box>
  )
}
