import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {View, Text, Image, StyleSheet, TouchableOpacity, Button} from "react-native";

function NotificationsScreen() {
  const navigation = useNavigation(); 
  return(
  <Button
          onPress={() => navigation.navigate('Notifications')}
          title="Go to notifications"
        />
  );
  }

const MainView = ({navigation}) => {
    return(
        <View style={styles.mainView}>
        <View style= {styles.container_box}>
          <View style = {styles.store_list}>
            <View>
              <Image style={styles.logo} source={require('../../images/puradak.jpg')} onPress={()=>navigation.navigate('PickMenu')}></Image>
            </View>
            <View style={styles.store_name}>
              <Text style= {{fontSize : 15}}>프라닭치킨 강북스타삼양점</Text>
            </View>
          </View>
        </View>
      </View>
    )
}

const PickStore = ({navigation}) => {
    return(
        <View style={styles.container}>

    <View style={styles.navView}>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent : "space-between", alignItems:'center', margin: 30 }}>
          <View>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
              <Image style={styles.leftarrow} source={require('../../images/left-arrow.png')}/>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.location}>길음동</Text>
          </View>
          <View>
            <TouchableOpacity onPress={()=>navigation.navigate('SEARCH')}>
              <Image style={styles.manifier} source={require('../../images/magnifier.png')}/>
            </TouchableOpacity>
          </View>
      </View>
    </View>

    <MainView></MainView>
    <MainView></MainView>
    <MainView></MainView>
    <MainView></MainView>
    <MainView></MainView>


    <View style={styles.buttonView}>
      <TouchableOpacity 
        style={styles.sendButton}
        onPress = {() => navigation.navigate('PickMenu')}>
        <Text style={{color: "white"}}>
          메뉴 고르기
        </Text>
      </TouchableOpacity>
    </View>
  </View>
  );
}


const styles = StyleSheet.create({
container : {
  flex : 1,
  padding : 10,
},
navView : {
  flex : 2,
  // backgroundColor : 'red',
},
leftarrow : {
  width: 16, 
  height : 15.56, 
  resizeMode: 'contain',
},
location : {
  fontSize: 20,
},
manifier : {
  width : 17.05, 
  height : 17.06, 
  resizeMode: 'contain',
},
mainView : {
  flex : 2,
  // backgroundColor : 'green',
  flexDirection : "column",
},
container_box : {
  flex: 1, 
  flexDirection: 'column', 
  justifyContent : "flex-start", 
  alignItems:'center', 
  // margin : 3,
  // padding : 30,
  borderTopWidth : 1,
  borderTopColor :  "gray",
  // backgroundColor : 'orange',
},
store_list : {
  width : 350,
  height : 90,
  // padding : 1,
  margin : 3,
  borderBottomWidth : 1,
  borderBottomColor :  "gray",
  // backgroundColor : "hotpink",
  flexDirection : "row",
  alignItems : "center",
},
logo : {
  width : 90,
  height : 90,
},
store_name : {
  marginLeft : 20,
},
buttonView : {
  flex : 2,
  // backgroundColor : 'blue',
  justifyContent : "center",
  alignItems:"center"
},
sendButton : {
  backgroundColor : "black",
  height : 40,
  width : 350,
  borderRadius : 5,
  padding : 5,
  justifyContent : "center",
  alignItems : "center",
},
});

export default PickStore