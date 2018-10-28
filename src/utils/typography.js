import Typography from "typography"
import sutroTheme from "typography-theme-sutro"

sutroTheme.overrideThemeStyles = () => ({
    '@font-face': {
      fontDisplay: 'auto',
    },
    'a': {
      color: 'white',
    }
  })

const typography = new Typography(sutroTheme)



export default typography