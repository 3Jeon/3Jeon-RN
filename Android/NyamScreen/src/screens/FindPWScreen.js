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

const FindPWScreen = ({navigation}) => {
  return(
    <SafeAreaView>
      <View style = {styles.title}>
        <TouchableOpacity
          onPress = {() => navigation.goBack()}
        >
          <Image
            style = {styles.backStyle}
            source = {require('./back.png')}
          />
        </TouchableOpacity>

        <View style = {styles.name}>
          <Text style = {styles.nameText}>비밀번호 찾기</Text>
        </View>
      </View>

      <View style = {styles.line}>
        <Image 
          source = {require('./line.png')}
        />
      </View>

      <View style = {styles.intro}>
        <Text style = {styles.introText}>가입할때 등록한</Text>
        <Text style = {styles.introText}>이메일을 입력해주세요!</Text>
      </View>

      <View style = {styles.input}>
        <TextInput
          style = {styles.inputStyle}
          placeholder = "이메일 입력"
        />

        <TextInput
          style = {styles.inputStyle}
          placeholder = "아이디 입력"
        />

        <Text style = {styles.error}>해당 이메일과 아이디가 일치하지 않습니다.</Text>
      </View>

      <View>
        <TouchableOpacity
          style = {styles.button}
          onPress = {() => navigation.navigate('Login')}
        >
          <Image 
            style = {styles.buttonImage}
            source = {require('./goLoginButton.png')}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    
  title : {
    flexDirection : 'row',
    marginTop : '5%',
    marginLeft : '1%'
  },

  backStyle : {
    resizeMode : 'contain',
    width : 24,
    height : 23
  },

  name : {
    marginLeft : '30%'
  },

  nameText : {
    fontSize : 16,
    color : 'black',
    fontWeight : 'bold'
  },

  line : {
    marginTop : '3%'
  },

  intro : {
    marginTop : '5%',
    marginLeft : '3%'
  },

  introText : {
    marginTop : '1%',
    fontSize : 22,
    color : 'black'
  },  

  input : {
    marginTop : '5%',
    alignItems : 'center'
  },

  inputStyle : {
    marginTop : '3%',
    width : 343,
    height : 47,
    backgroundColor : '#F5F5F5'
  },

  error : {
    marginTop : '2%',
    marginRight : '40%',
    fontSize : 11,
    color : '#E03D32'
  },

  button : {
    alignItems : 'center',
    marginTop : '110%'
  },

  buttonImage : {
    resizeMode : 'contain',
    width : 342,
    height : 56
  }
});
  
export default FindPWScreen;