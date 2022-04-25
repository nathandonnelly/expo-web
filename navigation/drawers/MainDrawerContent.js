import React, { useEffect, useState, } from 'react'
import { StyleSheet, View, } from 'react-native'
import { DrawerContentScrollView } from '@react-navigation/drawer'
import { Appbar, Avatar, Drawer, Headline, IconButton, Switch, Text, TouchableRipple, useTheme } from 'react-native-paper'
import { useDispatch, useSelector } from 'react-redux'
import { updateAppTheme, updateSystemTheme } from '../../redux/slices/preferencesSlice'
import { greetings } from '../../data/greetings'

const MainDrawerContent = (props) => {

  const Theme = useTheme();
  const dispatch = useDispatch();

  const appTheme = useSelector((state) => state.preferences.appTheme);
  const systemTheme = useSelector((state) => state.preferences.systemTheme);
  const currentDate = new Date;
  const currentYear = currentDate.getFullYear();

  // Pieces of state.
  const [greeting, setGreeting] = useState("Hello");

  // Determine greeting.
  useEffect(() => {
    const selectedGreeting = greetings[Math.floor(Math.random() * greetings.length)];
    setGreeting(selectedGreeting);
  }, [])


  // Handle theme actions.
  const handleThemeSwitch = () => {
    if (systemTheme === true) {
      return;
    } else if (appTheme === 'light') {
      dispatch(updateAppTheme('dark'));
      return;
    } else {
      dispatch(updateAppTheme('light'));
      return;
    }
  };

  const handleThemeLabel = () => {
    if (systemTheme === true) {
      return 'System Theme';
    } else if (appTheme === 'dark') {
      return 'Dark Theme'
    } else return 'Light Theme';
  };

  const handleUseSystemTheme = () => {
    dispatch(updateSystemTheme());
    return;
  }

  return (
    <View style={{flex: 1,}}>
      <DrawerContentScrollView contentContainerStyle={[styles.drawerContentScrollView,]}>
        <Appbar style={[styles.appbar, {backgroundColor: Theme.colors.diztroPinkLight,}]}>
          <TouchableRipple
            onPress={() => {props.navigation.navigate('HomeScreen')}}
            style={{borderRadius: Theme.roundness, padding: 7,}}
          >
            <Avatar.Image
              source={require('../../assets/images/logos/laptop.png')}
              size={40}
              style={[styles.avatar, {backgroundColor: Theme.colors.diztroBlue,}]}
            />
          </TouchableRipple>
        </Appbar>
        <Drawer.Section>
          <View style={{margin: 10,}}>
            <Headline style={[styles.headline,]}>{greeting}.</Headline>
          </View>
          <Drawer.Item 
            icon="tools"
            label="Tools"
            onPress={() => {props.navigation.navigate("ToolsScreen")}}
          />
        </Drawer.Section>
        <Drawer.Section title="Preferences">
          <Drawer.Item
            icon='theme-light-dark'
            label={handleThemeLabel()}
            onPress={() => handleThemeSwitch()}
          />
          <Drawer.Item
            icon='compare'
            label="System Theme"
            onPress={() => handleUseSystemTheme()}
            right={() => <Switch value={systemTheme} />}
            style={{label: Theme.colors.primary}}
          />
        </Drawer.Section>
      </DrawerContentScrollView>
      <View style={[styles.alignItemsCenter, {bottom: 0, padding: 10,}]}>
        <View style={[styles.flexDirectionRow, {}]}>
          <IconButton icon="github" onPress={() => {}} />
          <IconButton icon="linkedin" color={Theme.colors.diztroBlueDark} onPress={() => {}} />
          <IconButton icon="twitter" color={Theme.colors.diztroBlue} onPress={() => {}} />
        </View>
        <Text style={[{fontSize: 10,}]}>Nathan Donnelly © {currentYear}, All Rights Reserved.</Text>
      </View>
    </View>
  )
}

export default MainDrawerContent

const styles = StyleSheet.create({
  alignItemsCenter: {
    alignItems: 'center',
  },
  appbar: {
    elevation: 0,
  },
  avatar: {
    padding: 10,
  },
  drawerContentScrollView: {
    paddingTop: 0,
  },
  flexDirectionRow: {
    flexDirection: 'row',
  },
  headline: {
    fontWeight: "600",
  },
});