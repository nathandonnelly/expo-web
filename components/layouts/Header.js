import React from 'react'
import { StyleSheet, useWindowDimensions, } from 'react-native'
import { Appbar, useTheme } from 'react-native-paper'

const Header = (props) => {

  const Theme = useTheme();
  const dimensions = useWindowDimensions();

  return (
    <Appbar style={{elevation: 0, backgroundColor: Theme.colors.diztroBlueLight, }}>
      {
        dimensions.width <= 768 ? (
          <Appbar.Action
            icon="menu"
            onPress={() => props.navigation.toggleDrawer()}
            color={Theme.colors.diztroBlueDark}
          />
        ) : null
      }
    </Appbar>
  )
}

export default Header

const styles = StyleSheet.create({})