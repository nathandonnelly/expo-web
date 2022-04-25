import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Headline, } from 'react-native-paper'
import Counter from '../../components/modules/Counter';
import MagicEightBall from '../../components/modules/MagicEightBall';
import ThrowDice from '../../components/modules/ThrowDice';
import ToDoList from '../../components/modules/ToDoList';

const ToolsScreen = (props) => {

  return (
    <ScrollView>
      <View style={{margin: 20,}}>
        <Headline style={[styles.headline]}>Tools.</Headline>
      </View>
      <View style={[{flexDirection: 'row', flexWrap: 'wrap',}]}>
        <View>
          <Counter />
        </View>
        <View>
          <ThrowDice />
        </View>
        <View>
          <ToDoList />
        </View>
        <View>
          <MagicEightBall />
        </View>
      </View>
    </ScrollView>
  )
}

export default ToolsScreen

const styles = StyleSheet.create({
  headline: {
    fontSize: 50,
    fontWeight: "600",
    lineHeight: 50,
  },
})