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
      <View>
        <Image
          source = {{uri : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqn9AKVfM8wfpsY8ujQjp3Ee9-qgiN7A7RbA&usqp=CAU"}}
          style = {styles.image}
        />
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
  image : {
    width : '50%',
    height : 100,
    marginTop : 250,
    marginLeft : 110
  },

  textContainer : {
    alignItems : 'center',
    marginTop : 30
  },

  text : {
    color : 'black',
    fontWeight : 'bold',
    fontSize : 25
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
