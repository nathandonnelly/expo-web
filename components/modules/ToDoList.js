import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, } from 'react-native'
import { Card, IconButton, List, Subheading, TextInput, useTheme, } from 'react-native-paper'

const ToDoList = (props) => {

  const Theme = useTheme();

  const [textInput, setTextInput] = useState("");
  const [toDoList, setToDoList] = useState([]);
  const [flatListRenderSwitch, setFlatListRenderSwitch] = useState(false);

  const handleSubmitListItem = () => {
    if (textInput !== "") {
      setToDoList([...toDoList, {
        title: textInput,
        id: textInput + Math.random(),
      }]);
      setTextInput("");
    }
  };

  const handleDeleteListItem = (item) => {
    const newList = toDoList;
    newList.splice(toDoList.indexOf(item), 1)
    setToDoList(newList);
    rerenderFlatList();
  };

  const rerenderFlatList = () => {
    setFlatListRenderSwitch(!flatListRenderSwitch);
  }

  return (
    <Card style={{padding: 20, margin: 10,}}>
      <Subheading style={[styles.subheading,]}>To Do List</Subheading>
      <TextInput
        label="Add List Item"
        onChangeText={(text) => setTextInput(text)}
        onSubmitEditing={() => {handleSubmitListItem()}}
        right={<TextInput.Icon name="keyboard-return" onPress={() => {handleSubmitListItem()}}/>}
        style={{marginBottom: 5,}}
        value={textInput}
      />
      <FlatList
        data={toDoList}
        renderItem={({ item }) => (
          <List.Item
            left={() => <List.Icon icon='format-list-bulleted-square'/>}
            right={() => <IconButton icon="delete" onPress={() => handleDeleteListItem(item)} />}
            style={{
              backgroundColor: Theme.colors.diztroOrange,
              borderRadius: Theme.roundness,
              marginVertical: 5,
            }}
            title={item.title}
          />
        )}
        keyExtractor={item => item.id}
        extraData={toDoList}
      />
    </Card>
  )
}

export default ToDoList

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
})