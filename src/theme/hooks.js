import { UserContext } from '../../src/components/UserContext'
import { themedColors } from './index'

function ThemeHook () {
  const [theme, setTheme] = useState(UserContext.theme);
}

export const useTheme = () => {
    //@TODO make theme variable
    const theme = ThemeHook.theme; //settings this to 'light' or 'dark' updates the theme
    const colors = theme ? themedColors[theme] : themedColors.default
    return {
        colors,
        theme,
  }
}