import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';

export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.navView}>
            <View style={styles.navContainer}>
              <TouchableOpacity>
                <Image style={{width: 40, height : 40}} source={require('./img/left-arrow.png')}/>
                <Text style={styles.location}>길음동</Text>
                <Image style={{width: 40, height : 40}} source={require('./img/magnifier.png')}/>
              </TouchableOpacity>
            </View>
          </View>
        <View style={styles.mainView}>

        </View>
        <View style={styles.buttonView}>
          <TouchableOpacity style={styles.sendButton}>
              <Text>
                메뉴 고르기
              </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
  },
  navView : {
    flex : 2,
    backgroundColor : 'red',
    flexDirection: "row",
    flexWrap: "wrap",
    // justifyContent : "space-between",
    // alignItems : "center",
    // alignItems : "flex-end",
  },
  navContainer : {
    justifyContent : "space-between",
    alignItems : "center",
  },
  location : {
    fontSize: 25,
  },
  mainView : {
    flex : 12,
    backgroundColor : 'green',
  },
  buttonView : {
    flex : 2,
    backgroundColor : 'blue',
    justifyContent : "center",
  },
  sendButton : {
    backgroundColor : "rgb(97,99,250)",
    height : 40,
    width : 350,
    borderRadius : 5,
    padding : 5,
    justifyContent : "center",
    alignItems : "center",
    marginLeft : 5,
  },
});