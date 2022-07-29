import React, {Component} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import CustomButton from '../../CustomButton';
import Input from '../../input';

const SearchPW = ({navigation}) => {

    return (
      <SafeAreaView style = {styles.container}>
        <View style = {styles.case1}>
          <Text style={styles.boldText}> 비밀번호 찾기 </Text>
        </View>
        <View style = {styles.case2}>
          <Text style={styles.boldText}> 가입할 때 등록한 이메일과 아이디를{"\n"} 입력해주세요! </Text>
        </View>
        <View style = {styles.case3}>
          <Input 
            placeholder = {"이메일"}
          />
          <Input 
            placeholder = {"아이디"}
          />
          <Text style={styles.minitext1}> 해당 이메일과 아이디가 일치하지 않습니다. </Text>
          <Text style={styles.minitext2}> 해당 이메일로 임시 비밀번호를 보내드렸습니다. </Text>
        </View>
        <View style = {styles.case4}/>
        <View style = {styles.case5}>
          <CustomButton
            title = {'로그인 하러 가기'}
            onPress={()=>navigation.navigate('NO')}
          />
        </View>
      </SafeAreaView>
    );
  };

const styles = StyleSheet.create({
  container : {
    flex : 1,
    justifyContent: "center",
    alignItems: "center",
  },
  case1 : {
    flex : 2,
    justifyContent: "center",
    alignItems: "center",
  },
  case2 : {
    flex : 0.8,
    justifyContent: "center",
    alignItems: "center",
    
  },
  case3 : {
    flex : 0.8,
    width : '85%',
  },
  case4 : {
    flex : 5
  },
  case5 : {
    flex : 0.8,
    width : '90%',
    marginBottom : 20
  },
  
  boldText : {
    fontFamily : "Cochin",
    fontSize : 20,
    fontWeight : "bold",
    color : "black",
  },
  baseText : {
    fontFamily : "Cochin",
    fontSize : 18,
    color : "black",
  },
  minitext1 : {
    fontSize : 12,
    color : "red",
    marginTop : 5
  },
  minitext2 : {
    fontSize : 12,
    color : "blue",
    marginTop : 3
  }
  
});

export default SearchPW