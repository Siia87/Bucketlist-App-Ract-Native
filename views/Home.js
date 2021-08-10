import React from 'react';
import { Text, View, StyleSheet, ImageBackground, StatusBar } from 'react-native';

import Balloon from '../assets/Balloon.png'

export default function Home() {
  return (
    <View style={styles.homepage}>
      <StatusBar style={styles.statusbar} />
      <ImageBackground source={Balloon} style={styles.image}>
        <Text style={styles.text}>Welcome to your
          Bucketlist app!</Text>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  homepage: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",

  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  text: {
    fontSize: 30,
    textAlign: "center",
  },
  statusbar: {
    backgroundColor: '#157185',
  }

})