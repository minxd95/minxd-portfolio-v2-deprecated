import AboutMePage from "@/components/pages/AboutMePage"
import React from "react"
import { HashRouter, Routes, Route } from "react-router-dom"

function Router() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<>hello</>} />
        <Route path="/aboutme" element={<AboutMePage />} />
      </Routes>
    </HashRouter>
  )
}

export default Router
