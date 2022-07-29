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
      <View style = {styles.checkContainer}>
        <Text style={styles.check}>✓</Text>
      </View>

      <View style = {styles.textContainer}>
        <Text style = {styles.text}>회원가입 완료</Text>
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

  checkContainer : {
    alignItems : 'center',
    marginTop : 150
  },

  check : {
    color : 'black',
    fontSize : 150,
  },
  textContainer : {
    alignItems : 'center',
    marginTop : 10
  },

  text : {
    color : 'black',
    fontWeight : 'bold',
    fontSize : 28
  },

  buttonContainer : {
    marginTop : 170,
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
