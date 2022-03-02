import { palette } from "./palette";
export default Themes = {
    // bg: palette.lightGray,
    buttonBackground: palette.gold, // to access this: Themes.buttonBackground
    bgSecondary: palette.white,
    text: palette.black,
    textSecondary: palette.white,
    statusBar: 'dark-content',
    navigation: palette.black,
    shadows: {
      shadowColor: palette.black,
      shadowOpacity: 0.4,
      shadowRadius: 5,
      shadowOffset: { width: -1, height: 5 },
    },
};
