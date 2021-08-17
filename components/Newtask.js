import React, { useState } from 'react'
import { Button, StyleSheet, View, TextInput, Text, Modal, TouchableOpacity } from 'react-native';


export default function NewTask({ onAdd, show }) {

  const [myTask, setMyTask] = useState('')

  const inputHandler = text => {
    setMyTask(text);
  }

  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={show}
    >

      <View style={styles.input}>

        <TextInput
          placeholder="add to bucketlist"
          onChangeText={inputHandler}
          value={myTask}
        />

        <TouchableOpacity
          style={styles.addButton}
          onPress={() => onAdd(myTask)} >
          <Text>+</Text>
        </TouchableOpacity>

        <Button
          color='#157185'
          title='Back'
          onPress={() => onAdd('')} />

      </View>

    </Modal>
  )
}

const styles = StyleSheet.create({
  addButton: {
    alignItems: 'center',
    backgroundColor: '#157185',
    borderRadius: 60,
    height: 60,
    justifyContent: 'center',
    padding: 15,
    width: 60,
    margin: 80,
  },

  input: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 60,
    backgroundColor: "white",
    borderRadius: 15,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 4
  }
});