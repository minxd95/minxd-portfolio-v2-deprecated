import React, { useEffect, useState } from "react"
import IntroducePage from "@/components/pages/IntroducePage"
import { HashRouter, Routes, Route } from "react-router-dom"
import Layout from "@/components/Layout"
import { css, useTheme } from "@emotion/react"
import Spinner from "@/components/Spinner"

function Router() {
  const { color } = useTheme()

  // 추후 실제 로딩으로 변경
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [])

  if (isLoading)
    return (
      <div
        css={css`
          background: ${color.background};
          width: 100vw;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        `}
      >
        <Spinner />
        <div
          css={css`
            position: fixed;
            opacity: 0%;
          `}
        >
          <span
            css={css`
              font-weight: 400;
            `}
          >
            Aㄱ
          </span>
          <span
            css={css`
              font-weight: 500;
            `}
          >
            Aㄱ
          </span>
          <span
            css={css`
              font-weight: 700;
            `}
          >
            Aㄱ
          </span>
        </div>
      </div>
    )
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<IntroducePage />} />
          <Route path="/introduce" element={<IntroducePage />} />
        </Routes>
      </Layout>
    </HashRouter>
  )
}

export default Router
