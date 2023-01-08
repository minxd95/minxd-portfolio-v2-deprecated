import { css, useTheme } from "@emotion/react"
import React from "react"

function Main({ children }: { children: React.ReactNode }) {
  const { size, typography, color } = useTheme()

  return (
    <main
      css={css`
        background: ${color.main};
        margin: 0 auto;
        padding: 0 16px;
        max-width: 800px;
        min-height: calc(100vh - ${size.header} - ${size.footer});
        font-size: ${typography.size.main};
      `}
    >
      {children}
    </main>
  )
}

export default Main
