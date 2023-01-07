import { css, useTheme } from "@emotion/react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

function Layout({ children }: { children: React.ReactNode }) {
  const theme = useTheme()

  return (
    <div
      css={css`
        background: ${theme.colors.primary};
      `}
    >
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
