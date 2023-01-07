import { ThemeProvider } from "@emotion/react"
import Router from "./Router"

const theme = {
  colors: {
    primary: "hotpink",
  },
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  )
}

export default App
