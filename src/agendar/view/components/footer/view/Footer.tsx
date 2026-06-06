import { Box, Divider, Grid,  Typography } from "@mui/material"

export const Footer = () => {
  return (
 <Box  sx={{ bgcolor: '#000000', width: '100%', p: 4, mt: 4, }}>
          <Grid container spacing={5} size={{ xs: 12, sm: 6, md: 3 }} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Grid  >
              <Typography variant="h5" sx={{ fontFamily: 'Playfair Display, serif',  color: '#FFFFFF' }}>
                Nail Studio
              </Typography>
              <Typography sx={{ mt: 1 ,color:"white"}}>Tu destino para el cuidado y embellecimiento de manos y pies. Creando arte en cada una de tus visitas.</Typography>
            </Grid>
            <Grid  >
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>

              <Typography variant="subtitle1" sx={{  color: '#FFFFFF' }}>Contacto</Typography>
              <Typography sx={{ color: '#FFFFFF' }}>Av. Principal 123, Centro</Typography>
              <Typography sx={{ color: '#FFFFFF' }}>+1 234 567 8900</Typography>
              <Typography sx={{ color: '#FFFFFF' }}>Lun - Sab: 9:00 AM - 7:00 PM</Typography>
              </Box>
            </Grid>
            <Grid >
              <Typography variant="subtitle1" sx={{  color: '#FFFFFF' }}>Síguenos</Typography>
              <Typography sx={{ color: '#FFFFFF' }}>@nailstudio</Typography>
            </Grid>
            <Grid size={12} >
            <Divider  flexItem sx={{ borderColor: '#acacac' ,width: '100%' }} />
              <Typography variant="body2" align="center" sx={{ mt: 2,  color: '#FFFFFF' }}>2024 Nail Studio. Todos los derechos reservados.</Typography>
            </Grid>
          </Grid>
        </Box>
  )
}
