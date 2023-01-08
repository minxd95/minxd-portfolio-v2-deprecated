import { css } from "@emotion/react"

function Header() {
  return (
    <header css={css``}>
      <div
        css={css`
          margin: 0 auto;
          max-width: 1280px;
          height: 72px;
        `}
      >
        Header
      </div>
    </header>
  )
}

export default Header
