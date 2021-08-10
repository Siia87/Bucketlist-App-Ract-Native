import React, { useState } from 'react'
import { Text, View, FlatList, TouchableOpacity, Button, StyleSheet, Alert } from 'react-native';
import Newtask from '../components/Newtask'



export default function Bucketlist() {
  const [newItem, setNewItem] = useState([])
  const [addMode, setAddMode] = useState(false)

  const addTask = task => {
    setNewItem(newItem => [
      { id: Math.random().toString(), value: task },
      ...newItem,
    ])
    setAddMode(false)
  }
  const removeTask = taskId => {
    setNewItem(newItem => {
      return newItem.filter((item) => item.id !== taskId)
    })
  }
  const alertButton = taskId =>
    Alert.alert(
      "Delete",
      "Do you want to delete this item?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        {
          text: "Delete",
          onPress: () => removeTask(taskId)
        }

      ]
    );


  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Button
          raised={true}
          backgroundColor='#157185'
          title='Add to my list'
          onPress={() => setAddMode(true)} />
      </View>
      <Newtask show={addMode} onAdd={addTask} />

      <FlatList
        keyExtractor={(item) => item.id}
        data={newItem}
        renderItem={itemData => (
          <TouchableOpacity

            onPress={() => alertButton(itemData.item.id)}
          >
            <View style={styles.list}>
              <Text >{itemData.item.value}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>

  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#67BBC7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#157185',
  },
  list: {
    backgroundColor: '#C2DADD',
    padding: 5,
    margin: 5,
    borderColor: '#C2DADD',
    borderRadius: 10
    ,

  }
});

