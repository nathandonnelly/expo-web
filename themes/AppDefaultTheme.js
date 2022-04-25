import { DefaultTheme as PaperDefaultTheme } from "react-native-paper";
import { DefaultTheme as NavigationDefaultTheme } from "@react-navigation/native";

const AppDefaultTheme = {
  ...NavigationDefaultTheme,
  ...PaperDefaultTheme,
  roundness: 4,
  colors: {
    ...NavigationDefaultTheme.colors,
    ...PaperDefaultTheme.colors,
    primary: '#8c00bf',
    accent: '#f1c40f',
    background: "#f9f9f9",
    surface: "#ffffff",
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

export default AppDefaultTheme