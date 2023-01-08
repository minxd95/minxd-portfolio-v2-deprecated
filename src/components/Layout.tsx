import React from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { css, useTheme } from "@emotion/react"
import Main from "@/components/Main"

function Layout({ children }: { children: React.ReactNode }) {
  const { color, typography } = useTheme()

  return (
    <div
      css={css`
        background: ${color.background};
        color: ${typography.color.primary};
      `}
    >
      <Header />
      <Main>{children}</Main>
      <Footer />
    </div>
  )
}

export default Layout
