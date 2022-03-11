import { palette } from "./palette";
import { text } from "./text";

export default Themes = {
    // bg: palette.lightGray,
    buttonBackground: palette.gold, // to access this: Themes.buttonBackground
    bgPrimary: palette.lightGray,
    bgSecondary: palette.white,
    textSecondary: palette.white,
    statusBar: 'dark-content',
    navigation: palette.black,
    searchBar: palette.darkGray,
    shadows: {
      shadowColor: palette.black,
      shadowOpacity: 0.6,
      shadowRadius: 5,
      shadowOffset: { width: -1, height: 5 },
    },
    header: text.header,
    body: text.body,
    text: text.text,
    pantryText: text.pantryText,
    textInput: palette.textInput,
};
