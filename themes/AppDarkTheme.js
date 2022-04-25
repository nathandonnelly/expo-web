import { DarkTheme as PaperDarkTheme } from "react-native-paper";
import { DarkTheme as NavigationDarkTheme } from "@react-navigation/native";

const AppDarkTheme = {
  ...NavigationDarkTheme,
  ...PaperDarkTheme,
  roundness: 4,
  colors: {
    ...NavigationDarkTheme.colors,
    ...PaperDarkTheme.colors,
    primary: '#8c00bf',
    accent: '#ffffff',
    background: "#181818",
    surface: "#212121",
    black: "#000000",
    white: "#ffffff",
    diztroBlue: "#0080ff",
    diztroBlueDark: "#0055cb",
    diztroBlueLight: "#69afff",
    diztroGreen: "#00bf00",
    diztroGreenDark: "#008d00",
    diztroGreenLight: "#5ff349",
    diztroOrange: "#ff8000",
    diztroOrangeDark: "#c55100",
    diztroOrangeLight: "#ffb143",
    diztroPink: "#ff80ff",
    diztroPinkDark: "#ca4dcb",
    diztroPinkLight: "#ffb3ff",
    diztroPurple: "#8c00bf",
    diztroPurpleDark: "#58008e",
    diztroPurpleLight: "#c149f3",
    diztroYellow: "#ffff00",
    diztroYellowDark: "#c7cc00",
    diztroYellowLight: "#ffff5a",
  },
}

export default AppDarkTheme