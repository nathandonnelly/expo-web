import React from 'react'
import { StyleSheet, useWindowDimensions, } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { useTheme } from 'react-native-paper'
import Header from './components/layouts/Header'
import MainDrawerContent from './navigation/drawers/MainDrawerContent'
import HomeScreen from './navigation/screens/HomeScreen'
import ProductScreen from './navigation/screens/ProductScreen'
import ToolsScreen from './navigation/screens/ToolsScreen'

const AppNavigator = (props) => {

  const Drawer = createDrawerNavigator();
  const dimensions = useWindowDimensions();
  const Theme = useTheme();

  return (
    <Drawer.Navigator
      drawerContent={(props) => (
        <MainDrawerContent navigation={props.navigation} route={props.route} />
      )}
      initialRouteName="HomeScreen"
      screenOptions={{
        header: (props) => (
          <Header navigation={props.navigation} />
        ),
        drawerType: dimensions.width >= 768 ? 'permanent' : 'front',
        drawerStyle: {
          borderRightColor: 'transparent',
          borderRightWidth: 0,
          elevation: 0,
          width: 275,
          backgroundColor: Theme.colors.surface,
        },
      }}
    >
      <Drawer.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: "Home",
        }}
      />
      <Drawer.Screen
        name="ProductScreen"
        component={ProductScreen}
        options={{
          title: "Product",
        }}
      />
      <Drawer.Screen
        name="ToolsScreen"
        component={ToolsScreen}
        options={{
          title: "Tools",
        }}
      />
    </Drawer.Navigator>
  )
}

export default AppNavigator

const styles = StyleSheet.create({})