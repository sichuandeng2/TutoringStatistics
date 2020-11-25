import {ThemeProvider,theme,CSSReset} from "viviui"
import Home from "./Home"

function HomePage() {

  return (
    
    <ThemeProvider theme={theme}>
      <CSSReset/>
      <Home/>
    </ThemeProvider>
  )
}
export default HomePage