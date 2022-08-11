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
  Touchable
} from 'react-native';

const FindIDScreen = ({navigation}) => {
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
          <Text style = {styles.nameText}>아이디 찾기</Text>
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
        <TouchableOpacity>
          <Image 
            style = {styles.button}
            source = {require('./IDfind.png')}
          />
        </TouchableOpacity>
      </View>

      <View style = {styles.IDshow}>
        <Text style = {styles.showText}>등록되어있는 아이디는 아래와 같습니다.</Text>
        <Text style = {styles.showText}>smpark0213</Text>
      </View>

      <View>
        <TouchableOpacity
          style = {styles.gotoLogin}
          onPress = {() => navigation.navigate('Login')}
        >
          <Image 
            style = {styles.loginButton}
            source = {require('./gotoLogin.png')}
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
      width : 343,
      height : 47,
      backgroundColor : '#F5F5F5'
    },
    
    button : {
      marginTop : '3%',
      resizeMode : 'contain',
      width : 342,
      height : 47
    },

    IDshow : {
      alignItems : 'center',
      marginTop : '40%'
    },

    showText : {
      fontSize : 16,
      color : '#111111'
    },

    gotoLogin : {
      alignItems : 'center',
      marginTop : '10%'
    },

    loginButton : {
      resizeMode : 'contain',
      width : 97,
      height : 22
    }
});
  
export default FindIDScreen;