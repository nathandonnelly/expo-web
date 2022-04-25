import React from 'react'
import { Appearance } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import AppNavigator from './AppNavigator'
import { APP_NAME } from './data/constants'
import LoadingScreen from './navigation/screens/LoadingScreen'
import AppDefaultTheme from './themes/AppDefaultTheme'
import AppDarkTheme from './themes/AppDarkTheme'
import { useSelector } from 'react-redux';

const AppContainer = (props) => {

  const appTheme = useSelector((state) => state.preferences.appTheme);
  const systemTheme = useSelector((state) => state.preferences.systemTheme);
  const colorScheme = Appearance.getColorScheme();

  // Link configuration.
  const config = {
    screens: {
      HomeScreen: "/",
      LoadingScreen: 'loading',
    },
  };
  const linking = {
    prefixes: ['nathandonnelly://', 'https://nathandonnelly.com', 'https://*.nathandonnelly.com'],
    config,
  };


  // Handle theme changes.
  const handleTheme = () => {
    if (systemTheme === true) {
      if (colorScheme === 'dark') {
        return AppDarkTheme
      } else return AppDefaultTheme;
    } else {
      if (appTheme === 'dark') {
        return AppDarkTheme
      } else return AppDefaultTheme;
    }
  };
  const theme = handleTheme();
  

  // Render the application container.
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer
        documentTitle={{
          formatter: (options, route) =>
          `${APP_NAME} - ${options?.title ?? route?.name}`,
				}}
        fallback={<LoadingScreen />}
        linking={linking}
        theme={theme}
      >
        <AppNavigator />
      </NavigationContainer>
    </PaperProvider>
  )
}

export default AppContainer