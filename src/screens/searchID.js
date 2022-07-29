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

const SearchID = ({navigation}) => {

  return (
    <SafeAreaView style = {styles.container}>
      <View style = {styles.case1}>
        <Text style={styles.boldText}> 아이디 찾기 </Text>
      </View>
      <View style = {styles.case2}>
        <Text style={styles.boldText}> 가입할 때 등록한 이메일을 입력해주세요! {"\n"}</Text>
      </View>
      <View style = {styles.case3}>
      <Input 
          placeholder = {"이메일"}
        />
      </View>
      <View style = {styles.case4}>
      <CustomButton
          title = {'ID 찾기'}
        />
      </View>
      <View style = {styles.case5}>
        <Text style={styles.baseText}> 등록되어 있는 아이디는 아래와 같습니다.</Text>
        <Text style={styles.baseText}> smpark0213 </Text>
        <CustomButton
          buttonColor = {'none'}
          title = {'로그인하러가기 >'}
          titleColor = {'gray'}
          onPress={() => navigation.navigate('PW')}
        />
      </View>
      <View style = {styles.case6}/>
    </SafeAreaView>
  );
}


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
    flex : 1,
    width : '85%'
  },
  case4 : {
    flex : 0.8,
    width : '55%',
    marginTop : 20
  },
  case5 : {
    flex : 3,
    justifyContent: "center",
    alignItems: "center",
    marginTop : 70
  },
  case6 : {
    flex : 3
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
  
});

export default SearchID