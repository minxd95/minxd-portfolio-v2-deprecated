import React from "react"
import IntroducePage from "@/components/pages/IntroducePage"
import { HashRouter, Routes, Route } from "react-router-dom"
import Layout from "@/components/Layout"

function Router() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<>hello</>} />
          <Route path="/introduce" element={<IntroducePage />} />
        </Routes>
      </Layout>
    </HashRouter>
  )
}

export default Router
