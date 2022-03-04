import { palette } from "./palette";
import { text } from "./text";

export default Themes = {
    // bg: palette.lightGray,
    buttonBackground: palette.gold, // to access this: Themes.buttonBackground
    bgPrimary: palette.lightGray,
    bgSecondary: palette.white,
    text: palette.black,
    textSecondary: palette.white,
    statusBar: 'dark-content',
    navigation: palette.black,
    shadows: {
      shadowColor: palette.black,
      shadowOpacity: 0.6,
      shadowRadius: 5,
      shadowOffset: { width: -1, height: 5 },
    },
    header: text.h1,
    body: text.body,
};
