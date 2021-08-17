import React, { useState } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import axios from 'axios'
import { Picker } from '@react-native-picker/picker'

export default function Inspiration() {

  const [myInspiration, setMyInspiration] = useState('Here it comes')
  const [myPicker, setMyPicker] = useState('charity')


  function inspiration(mypick) {

    (async () => {
      setMyInspiration((await axios.get(`https://www.boredapi.com/api/
activity?type=${mypick}`)).data.activity)
    })()
  }



  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.inspiration}>{myInspiration}</Text>
      </View>
      <View>
        <Text>Choose a category</Text>
        <Picker
          myPicker={myPicker}
          style={{ height: 50, width: 150 }}
          onValueChange={(itemValue) => setMyPicker(itemValue)}
        >
          <Picker.Item label="Education" value="education" />
          <Picker.Item label="Social" value="social" />
          <Picker.Item label="Relax" value="relaxation" />
          <Picker.Item label="Charity" value="charity" />
          <Picker.Item label="Food" value="cooking" />
          <Picker.Item label="Music" value="music" />
        </Picker>
      </View>

      <View style={styles.button}>
        <Button
          color='#157185'
          title="Go"
          onPress={() => inspiration(myPicker)} />
      </View>


    </View>
  )
}
const styles = StyleSheet.create({
  button: {
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#FF8E8E',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inspiration: {
    height: 200,
    fontSize: 30,
    textAlign: "center",
  },

})

