import React from "react"
import { HashRouter, Routes, Route } from "react-router-dom"

function Router() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<>hello</>} />
        <Route path="/1" element={<>1</>} />
        <Route path="/2" element={<>2</>} />
        <Route path="/3" element={<>3</>} />
        <Route path="/4" element={<>4</>} />
        <Route path="/5" element={<>5</>} />
      </Routes>
    </HashRouter>
  )
}

export default Router
