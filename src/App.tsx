import { ThemeProvider, createTheme } from '@mui/material/styles'
import AgendarCitas from "./agendar/view/AgendarCitas"
import {SincoTheme  } from "@sinco/react"
import "./estilos.css"
import '@fontsource/nunito/300.css';
import '@fontsource/nunito/400.css';
import '@fontsource/nunito/500.css';
import '@fontsource/nunito/600.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import "@fontsource/playfair-display/400.css";
function App() {

       
  const theme = createTheme(SincoTheme)

  return (
    <ThemeProvider theme={theme}> 
    <AgendarCitas />
    </ThemeProvider>
  )
}

export default App
