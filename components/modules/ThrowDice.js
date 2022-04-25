import React, { useState } from 'react'
import { StyleSheet, View, } from 'react-native'
import { Card, IconButton, Subheading, } from 'react-native-paper'

const ThrowDice = (props) => {

  const [diceValue, setDiceValue] = useState(1);

  const handleDiceThrow = () => {
    const diceThrow = Math.round(Math.random() * 5) + 1;
    setDiceValue(diceThrow)
  } 

  return (
    <Card style={{padding: 20, margin: 10,}}>
      <Subheading style={[styles.subheading]}>Throw Dice</Subheading>
      <View style={[styles.alignItemsCenter, styles.justifyContentCenter]}>
        <IconButton
          icon={"dice-" + diceValue} onPress={() => {handleDiceThrow()}}
          size={50}
          style={{margin: 0, padding: 0,}}
        />
      </View>
    </Card>
  )
}

export default ThrowDice

const styles = StyleSheet.create({
  alignItemsCenter: {
    alignItems: 'center',
  },
  justifyContentCenter: {
    justifyContent: 'center',
  },
  subheading: {
    fontWeight: "600",
    fontSize: 25,
    lineHeight: 25,
    marginBottom: 10,
  },
})