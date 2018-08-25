import Typography from "typography"
import sutroTheme from "typography-theme-sutro"

sutroTheme.overrideThemeStyles = () => ({
    'a': {
      color: 'white',
    }
  })

const typography = new Typography(sutroTheme)



export default typography