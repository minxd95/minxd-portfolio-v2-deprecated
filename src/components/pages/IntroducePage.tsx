import Animation from "@/components/Animation"
import { css } from "@emotion/react"
import React from "react"

function IntroducePage() {
  return (
    <div
      css={css`
        font-size: 36px;
        font-weight: 700;
        padding: 96px 0;
        display: flex;
        flex-direction: column;
        gap: 36px;
      `}
    >
      <p>
        <Animation>안녕하세요.</Animation>
      </p>
      <p>
        <Animation delay={1}>웹개발자 서민석입니다.</Animation>
      </p>
    </div>
  )
}

export default IntroducePage
