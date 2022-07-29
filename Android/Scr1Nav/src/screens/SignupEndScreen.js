import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  View,
  Button,
  TouchableOpacity
} from 'react-native';

const SignupEndScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <View style = {styles.textContainer}>
        <Text style = {styles.text}>회원가입 완료</Text>
      </View>

      <View style = {styles.checkContainer}>
        <Text style={styles.check}>✓</Text>
      </View>

      <View style = {styles.buttonContainer}>
        <TouchableOpacity
          style = {styles.button}
          onPress = {() => navigation.navigate('Login')}
        >
          <Text style = {styles.buttonText}>확인</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

  textContainer : {
    alignItems : 'center',
    marginTop : 80
  },

  text : {
    color : 'black',
    fontWeight : 'bold',
    fontSize : 28
  },

  
  checkContainer : {
    alignItems : 'center',
    marginTop : 100
  },

  check : {
    color : 'black',
    fontSize : 150,
  },

  buttonContainer : {
    marginTop : 150,
    alignItems : 'center'
  },

  button : {
    backgroundColor : '#D1FF17',
    height : 60,
    width : 370
  },

  buttonText : {
    color : 'black',
    fontWeight : 'bold',
    fontSize : 20,
    marginLeft : 167,
    marginTop : 15
  }
});

export default SignupEndScreen;
