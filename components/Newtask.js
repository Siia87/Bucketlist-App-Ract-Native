import React, { useState } from 'react'
import { StyleSheet, View, TextInput, Button, Modal } from 'react-native';


export default function NewTask({ onAdd, show }) {

  const [myTask, setMyTask] = useState('')

  const inputHandler = text => {
    setMyTask(text);
  }

  return (
    <Modal
      animationType="fade"
      style={styles.modal}
      visible={show}
    >

      <View style={styles.input}>

        <TextInput
          placeholder="add to bucketlist"
          onChangeText={inputHandler}
          value={myTask}

        />
        <Button
          buttonStyle={{
            backgroundColor: 'red'
          }}
          title="+" onPress={() => onAdd(myTask)} />
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({

  input: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});