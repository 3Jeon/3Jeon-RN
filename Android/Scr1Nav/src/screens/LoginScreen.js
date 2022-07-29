import React from 'react';

import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

const LoginScreen = ({navigation}) => {
   return (
    <SafeAreaView>
      <View style = {styles.titleContainer}>
        <View>
          <Text style = {styles.titleText}>3전</Text>
        </View>
      </View>

      <View style = {styles.blankContainer}>
        <View>
          <TextInput
            style = {styles.IDBlank}
            placeholder = '아이디'
          />
        </View>
        <View>
          <TextInput
            style = {styles.PWBlank}
            placeholder = "비밀번호"
          />
        </View>
      </View>

      <View style = {styles.buttonContainer}>
        <View>
          <TouchableOpacity
            style = {styles.button}
          >
            <Text style = {styles.buttontext}>확인</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style = {styles.help}>
          <TouchableOpacity>
            <Text style = {styles.helpText}> 아이디 찾기</Text>
          </TouchableOpacity>

          <Text style = {styles.slash}>/</Text>

          <TouchableOpacity style = {styles.helpTextGap}>
            <Text style = {styles.helpText}> 비밀번호 초기화</Text>
          </TouchableOpacity>

          <Text style = {styles.slash}>/</Text>

          <TouchableOpacity 
            style = {styles.helpTextGap}
            onPress = {() => navigation.navigate('Signup')}
          >
            <Text style = {styles.helpText}> 회원가입</Text>
          </TouchableOpacity>
      </View>
    </SafeAreaView>
    );
}


const styles = StyleSheet.create({
  titleContainer : {
    marginTop : 100,
    alignItems : 'center'
  },

  titleText : {
    color : 'black',
    fontWeight : 'bold',
    fontSize : 30
  },

  blankContainer : {
    marginTop : 100,
    alignItems : 'center'
  },

  IDBlank : {
    width : 330,
    backgroundColor : '#EEEEEE'
  },

  PWBlank : {
    width : 330,
    backgroundColor : '#EEEEEE',
    marginTop : 20
  },
  
  buttonContainer : {
    marginTop : 80,
    alignItems : 'center'
  },

  button : {
    backgroundColor : '#D1FF17',
    height : 40,
    width : 330
  },

  buttontext : {
    color : 'black',
    fontSize : 20,
    fontWeight : 'bold',
    marginLeft : 150,
    marginTop : 7
  },

  help : {
    flexDirection : 'row',
    marginTop : 20,
    marginLeft : 75
  },

  slash : {
    fontWeight : 'bold',
    color : '#C0C0C0',
    marginLeft : 5
  },

  helpText : {
    fontWeight : 'bold',
    color : '#C0C0C0'
  },

  helpTextGap : {
    marginLeft : 2
  }

});

export default LoginScreen;