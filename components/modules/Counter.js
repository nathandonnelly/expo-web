import React, {useState} from 'react'
import { StyleSheet, View } from 'react-native'
import { Card, IconButton, Subheading, Text, } from 'react-native-paper'

const Counter = (props) => {

  // Pieces of state.
  const [count, setCount] = useState(0);

  return (
    <Card style={{padding: 20, margin: 10,}}>
      <Subheading style={[styles.subheading,]}>Counter</Subheading>
      <View style={[styles.alignItemsCenter, styles.justifyContentSpaceBetween, styles.flexDirectionRow,]}>
        <IconButton icon="minus" onPress={() => {setCount(count - 1)}} />
        <Text style={[styles.text]}>{count}</Text>
        <IconButton icon="plus" onPress={() => {setCount(count + 1)}} />
      </View>
    </Card>
  )
}

export default Counter

const styles = StyleSheet.create({
  alignItemsCenter: {
    alignItems: 'center',
  },
  flexDirectionRow: {
    flexDirection: 'row',
  },
  justifyContentSpaceBetween: {
    justifyContent: 'space-between',
  },
  subheading: {
    fontWeight: "600",
    fontSize: 25,
    lineHeight: 25,
    marginBottom: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: "600",
  },
})