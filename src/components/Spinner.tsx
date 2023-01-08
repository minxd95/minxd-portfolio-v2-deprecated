import React from "react"
import { useTheme } from "@emotion/react"
import { CircleLoader } from "react-spinners"

function Spinner() {
  const { color } = useTheme()

  return <CircleLoader color={color.spinner} />
}

export default Spinner
