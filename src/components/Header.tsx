import React from "react"
import { css, useTheme } from "@emotion/react"
import { mdiRocketLaunchOutline } from "@mdi/js"
import Icon from "@mdi/react"
import { Link } from "react-router-dom"

function Header() {
  const { typography, color, size } = useTheme()

  return (
    <header
      css={css`
        position: sticky;
        top: 0;
        background: ${color.header};
        font-size: ${typography.size.header};
      `}
    >
      <nav
        css={css`
          height: ${size.header};
          padding: 0 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 0 auto;
          max-width: 1280px;
          font-weight: ${typography.weight.bold};
        `}
      >
        <Link to="/">
          <div
            css={css`
              display: flex;
              align-items: center;
              gap: 8px;
            `}
          >
            <Icon path={mdiRocketLaunchOutline} size="24px" />
            <span>MINSEOK SEO</span>
          </div>
        </Link>
        <div
          css={css`
            display: flex;
            gap: 28px;
          `}
        >
          <Link to="/introduce">INTRODUCE</Link>
          <Link to="/works">WORKS</Link>
          <Link to="/contact">CONTACT</Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
