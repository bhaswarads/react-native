/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ImageBackground, Image} from 'react-native';
import Judul from './Components/Judul';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <ImageBackground source={require('./Maripposa.jpg')} style={styles.gambar}>
      <View style={styles.container}>
        <Judul/>
        <Text style={styles.welcome}>Bhaswara Dertiyuga Sentanu</Text>
        <Text style={styles.instructions}>09</Text>
        <Text style={styles.instructions}>XI RPL 1</Text>
        <Image source={require('./Screenshot_2017-06-10-22-33-34.png')} style={{width:200, height:200}}/>
      </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#f442a7',
  },
  instructions: {
    textAlign: 'center',
    color: '#f442a7',
    marginBottom: 5,
  },
  gambar: {
    width: '100%',
    height:'100%',
  }
});
