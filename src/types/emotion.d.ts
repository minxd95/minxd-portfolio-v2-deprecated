import { theme } from "@/App"

type ThemeType = typeof theme

declare module "@emotion/react" {
  export interface Theme extends ThemeType {}
}
