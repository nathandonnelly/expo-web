import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Card, Subheading, Text, TextInput } from 'react-native-paper'
import { magicEightBall } from '../../data/magicEightBall'

const MagicEightBall = (props) => {

  const [textInput, setTextInput] = useState("");
  const [answer, setAnswer] = useState("Don't be shy.");

  const handleAsk = () => {
    const response = magicEightBall[Math.floor(Math.random() * magicEightBall.length)]
    setTextInput("");
    setAnswer(response);
  }

  return (
    <Card style={{padding: 20, margin: 10,}}>
      <Subheading style={[styles.subheading,]}>Magic Eight Ball</Subheading>
      <TextInput
        label="Ask Me Anything"
        value={textInput}
        onChangeText={(text) => setTextInput(text)}
      />
      <Button mode="contained" onPress={() => {handleAsk()}} style={{marginTop: 10,}}>Ask</Button>
      <Text style={[styles.text]}>{answer}</Text>
    </Card>
  )
}

export default MagicEightBall

const styles = StyleSheet.create({
  subheading: {
    fontWeight: "600",
    fontSize: 25,
    lineHeight: 25,
    marginBottom: 10,
  },
  text: {
    fontSize: 15,
    fontWeight: "600",
    textAlign: 'center',
    marginTop: 15,
  },
})