import React from 'react';

import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image
} from 'react-native';

const SignupEndScreen = ({navigation}) => {
    return (
        <SafeAreaView>
          <View style = {styles.main}>
            <Image 
              source = {require('./signupEndMain.png')}
            />
          </View>

          <View style = {styles.end}>
            <Image 
             style = {styles.checkImage}
             source = {require('./check.png')}
            />
            <Text style = {styles.checkText}>회원가입 완료</Text>
          </View>

          <View>
            <TouchableOpacity
              style = {styles.checkButton}
              onPress = {() => navigation.navigate('Login')}
            >
              <Image 
                style = {styles.buttonImage}
                source = {require('./checkButton.png')}
              />
            </TouchableOpacity>
          </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    
    main : {
      alignItems : 'center',
      marginTop : '5%'
    },

    end : {
      alignItems : 'center',
      marginTop : '65%'
    },
  
    checkImage : {
      resizeMode : 'contain',
      width : 68.48,
      height : 44.79
    },

    checkText : {
      fontSize : 18,
      color : 'black',
      fontWeight : 'bold',
      marginTop : '5%'
    },

    checkButton : {
      alignItems : 'center',
      marginTop : '95%'
    },

    buttonImage : {
      resizeMode : 'contain',
      width : 342,
      height : 56
    }
});
  
export default SignupEndScreen;