import React from "react"
import Layout from "@/components/Layout"
import { ThemeProvider } from "@emotion/react"
import Router from "@/Router"

export const theme = {
  colors: {
    primary: "hotpink",
  },
}

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
