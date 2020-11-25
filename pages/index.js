import {ChakraProvider,theme,CSSReset} from "@chakra-ui/react"
import Home from "./Home"

function HomePage() {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset/>
      <Home/>
    </ChakraProvider>
  )
}
export default HomePage