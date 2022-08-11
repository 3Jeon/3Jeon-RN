import React from 'react';

import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Picker
} from 'react-native';

const SignupScreen = ({navigation}) => {
    return(
        <SafeAreaView>
            <View style = {styles.mainText}>
              <Image
                source = {require('./Nyam-Nyam.png')}
              />
            </View>

            <View style = {styles.name}>
              <Text style = {styles.nameStyle}>닉네임</Text>
              <TextInput 
                style = {styles.inputStyle}
                placeholder = "닉네임 입력"
              />
              <Text style = {styles.introStyle}>아이디를 찾는 경우에 활용하는 이메일입니다!</Text>
              <Text style = {styles.introStyle}>오타가 있는지 확인해주세요!</Text>
            </View>

            <View style = {styles.name}>
              <Text style = {styles.nameStyle}>기본 위치를 설정해주세요.</Text>
              <TextInput 
                style = {styles.inputStyle}
                placeholder = "주소 입력"
              />
              <TextInput 
                style = {styles.inputStyle}
                placeholder = "상세주소 입력"
              />
              <Text style = {styles.introStyle}>추후 설정에서 변경 가능합니다!</Text>
            </View>

            <View>
              <TouchableOpacity
                style = {styles.button}
                onPress = {() => navigation.navigate('SignupEnd')}
              >
                <Image 
                  style = {styles.buttonStyle}
                  source = {require('./signup.png')}
                />
              </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    
    mainText : {
      alignItems : 'center',
      marginTop : '25%',
    },
  
    name : {
      marginTop : '15%',
      marginLeft : '5%'
    },

    nameStyle : {
      fontSize : 18,
      color : 'black',
      fontWeight : 'bold'
    },

    inputStyle : {
      marginTop : '1%',
      resizeMode : 'contain',
      width : 343,
      height : 47,
      alignItems : 'center',
      backgroundColor : '#F5F5F5'
    },

    introStyle : {
      marginTop : '1%',
      marginLeft : '2%',
      fontSize : 12,
      color : '#949494'
    },

    button : {
      alignItems : 'center',
      marginTop : '60%'
    },

    buttonStyle : {
      resizeMode : 'contain',
      width : 342,
      height : 56
    }
});
  
export default SignupScreen;