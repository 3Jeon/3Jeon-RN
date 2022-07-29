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
  Image,
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



const NoResult = ({navigation}) => {
    return (
      <SafeAreaView style = {styles.container}>
        <View style = {styles.case1}>
          <Text style={styles.boldText}> 길음동 </Text>
        </View>
        <View style = {styles.case2}>
          <Text style={styles.boldText}> 주변에 치킨집이 없어요 </Text>
          <Text> 오늘은 다른 걸 먹어보는 게 어떨까요? {"\n"}</Text>
          <Image source={require('../../images/sad.png')}/>
        </View>
        <View style = {styles.case3}>
          <CustomButton
            title = {'돌아가기'}
            onPress={()=>navigation.navigate('ID')}
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
    textAlign : "left"
  },
  case2 : {
    flex : 8,
    justifyContent: "center",
    alignItems: "center",
    
  },
  case3 : {
    flex : 1,
    width : '85%',
    marginBottom : 20
  },
  
  boldText : {
    fontFamily : "Cochin",
    fontSize : 20,
    fontWeight : "bold",
    color : "black",
    marginBottom : 10,
  },
  baseText : {
    fontFamily : "Cochin",
    fontSize : 18,
    color : "black",
  },
  
});

export default NoResult;