import Layout from "@/components/Layout"
import { ThemeProvider } from "@emotion/react"
import Router from "@/Router"
import theme from "@/styles/theme"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Router />
      </Layout>
    </ThemeProvider>
  )
}

export default App
