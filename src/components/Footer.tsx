import React from "react"
import { css, useTheme } from "@emotion/react"

function Footer() {
  const { size, typography, color } = useTheme()

  return (
    <footer
      css={css`
        background: ${color.footer};
        height: ${size.footer};
        padding: 0 16px;
        display: flex;
        align-items: center;
        margin: 0 auto;
        max-width: 800px;
        font-size: ${typography.size.footer};
      `}
    >
      <div>
        Design inspired by{" "}
        <a href="https://benadam.me/" target="_blank" rel="noreferrer">
          Ben Adam
        </a>
      </div>
    </footer>
  )
}

export default Footer
