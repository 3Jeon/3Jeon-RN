import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
  TextInput
} from 'react-native';

const App: () => Node = () => {

  return (
    <SafeAreaView>
      <View style = {styles.titleContainer}>
        <Text style = {styles.titleText}>3전</Text>
      </View>

      <View>
        <View style = {styles.emailTitle}>
          <Text style = {styles.emailText}>이메일</Text>
          <Text style = {styles.important}>*</Text>
        </View>
        <View style = {styles.input}>
          <TextInput
            style = {styles.blank}
            placeholder = "이메일 입력"
          />
        </View>
        <View style = {styles.emailHelp1}>
          <Text style = {styles.emailhelpText}>아이디를 찾는 경우에 활용하는 이메일입니다!</Text>
        </View>
        <View style = {styles.emailHelp2}>
          <Text style = {styles.emailhelpText}>오타가 있는지 확인해주세요!</Text>
        </View>
      </View>

      <View>
        <View style = {styles.title}>
          <Text style = {styles.IDText}>아이디</Text>
          <Text style = {styles.important}>*</Text>
        </View>
        <View style = {styles.IDInput}>
          <TextInput
            style = {styles.IDBlank}
            placeholder = "아이디"
          />
          <View style = {styles.IDCheck}>
            <TouchableOpacity style = {styles.IDButton}>
              <Text style = {styles.IDButtonText}>중복확인</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style = {styles.IDHelp}>
          <Text style = {styles.refuseText}>이미 존재하는 ID입니다.</Text>
          <Text style = {styles.okText}>사용 가능합니다.</Text>
        </View>
      </View>

      <View>
        <View style = {styles.title}>
          <Text style = {styles.PWText}>비밀번호</Text>
          <Text style = {styles.important}>*</Text>
        </View>
        <View style = {styles.input}>
          <TextInput
            style = {styles.blank}
            placeholder = "비밀번호 (6-11자리의 영문, 숫자조합)"
          />
        </View>
        <View style = {styles.PWHelp}>
          <Text style = {styles.importantText}>비밀번호는 6~11자의 영문, 숫자 조합으로 해주세요.</Text>
        </View>
      </View>

      <View>
        <View style = {styles.title}>
          <Text style = {styles.PWcheckText}>비밀번호 확인</Text>
          <Text style = {styles.important}>*</Text>
        </View>
        <View style = {styles.input}>
          <TextInput
            style = {styles.blank}
            placeholder = "비밀번호 확인"
          />
        </View>
        <View style = {styles.PWcheckHelp}>
          <Text style = {styles.importantText}>일치하지 않습니다.</Text>
        </View>
      </View>

      <View>
        <View style = {styles.placesetTitle}>
          <Text style = {styles.placesetText}>기본 위치를 설정해주세요!</Text>
        </View>
        <View style = {styles.placesetHelp}>
          <Text style = {styles.placesetHelpText}>추후 설정에서 변경 가능합니다!</Text>
        </View>
        <View style = {styles.placesetInput}>
          <TextInput
            style = {styles.placesetBlank}
          />
        </View>
      </View>

      <View style = {styles.finContainer}>
        <TouchableOpacity style = {styles.finbutton}>
            <Text style = {styles.finbuttonText}>회원가입</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  titleContainer : {
    alignItems : 'center',
    marginTop : 20
  },

  titleText : {
    color : 'black',
    fontSize : 25
  },

  important : {
    color : '#FF0000',
    fontSize : 20,
    marginLeft : 5
  },

  importantText : {
    color : '#FF0000'
  },

  title : {
    flexDirection : 'row',
    marginTop : 6,
    marginLeft : 10
  },

  input : {
    marginLeft : 10
  },

  blank : { 
    width : 360,
    height : 40,
    backgroundColor : '#EEEEEE'
  },

  emailTitle : {
    flexDirection : 'row',
    marginTop : 15,
    marginLeft : 10
  },

  emailText : {
    color : 'black',
    fontSize : 16,
    fontWeight : 'bold'
  },

  emailHelp1 : {
    marginTop : 5,
    marginLeft : 10
  },

  emailHelp2 : {
    marginLeft : 10
  },

  emailhelpText : {
    color : '#6A6A6A'
  },

  IDText : {
    color : 'black',
    fontSize : 16,
    fontWeight : 'bold'
  },

  IDInput : {
    flexDirection : 'row',
    marginLeft : 10
  },

  IDBlank : {
    width : 280,
    height : 40,
    backgroundColor : '#EEEEEE'
  },

  IDCheck : {
    marginLeft : 10
  },

  IDButton : {
    backgroundColor : '#ACACAC',
    width : 90,
    height : 40
  },

  IDButtonText : {
    color : 'black',
    fontSize : 18,
    marginTop : 7,
    marginLeft : 12
  },

  IDHelp : {
    flexDirection : 'row',
    marginLeft : 10
  },

  refuseText : {
    color : '#FF0000'
  },

  okText : {
    color : '#0500FF',
    marginLeft : 20
  },

  PWText : {
    color : 'black',
    fontSize : 16,
    fontWeight : 'bold'
  },

  PWHelp : {
    marginLeft : 10
  },

  PWcheckText : {
    color : 'black',
    fontSize : 16,
    fontWeight : 'bold'
  },

  PWcheckHelp : {
    marginLeft : 10
  },

  placesetTitle : {
    marginTop : 5,
    marginLeft : 20
  },

  placesetText : {
    color : 'black',
    fontSize : 22
  },

  placesetHelp : {
    marginTop : 5,
    marginLeft : 20
  },

  placesetHelpText : {
    color : '#868585'
  },

  placesetInput : {
    marginTop : 5,
    marginLeft : 10
  },

  placesetBlank : { 
    width : 360,
    height : 40,
    backgroundColor : '#EEEEEE'
  },

  finContainer : {
    marginTop : 20,
    marginLeft : 15
  },
  
  finbutton : {
    backgroundColor : 'black',
    height : 60,
    width : 380,
    borderRadius : 10,

  },

  finbuttonText : {
    color : 'white',
    fontSize :  18,
    marginTop : 18,
    marginLeft : 158
  }

});

export default App;
