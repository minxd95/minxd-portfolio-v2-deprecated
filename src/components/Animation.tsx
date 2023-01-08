import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/react"

type TAnimation = "fadeIn"
type TTimingFunction =
  | "ease"
  | "ease-in"
  | "ease-out"
  | "ease-in-out"
  | "linear"
  | "step-start"
  | "step-end"

function Animation({
  children,
  type = "fadeIn",
  delay = 0,
  duration = 1,
  timing = "ease",
}: {
  children: React.ReactNode
  type?: TAnimation
  delay?: number
  duration?: number
  timing?: TTimingFunction
}) {
  return (
    <AnimatedDiv type={type} delay={delay} duration={duration} timing={timing}>
      {children}
    </AnimatedDiv>
  )
}

export default Animation

const AnimatedDiv = styled.div<{
  type: TAnimation
  delay: number
  duration: number
  timing: TTimingFunction
}>`
  ${({ type }) =>
    type === "fadeIn" &&
    css`
      @keyframes animation {
        from {
          opacity: 0%;
        }
        to {
          opacity: 100%;
        }
      }
      opacity: 0%;
    `}
  ${({ duration, delay, timing }) =>
    css`
      animation-duration: ${duration}s;
      animation-timing-function: ${timing};
      animation-delay: ${delay}s;
      animation-name: animation;
      animation-fill-mode: forwards;
    `}
`
