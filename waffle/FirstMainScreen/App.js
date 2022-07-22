import React from 'react';
import {Node} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions
} from 'react-native';
//import { TouchableOpacity } from 'react-native-gesture-handler';

const DeviceWidth = Dimensions.get('window').width

const App: () => Node =() =>{
    return (
      <SafeAreaView>
        <View style={styles.titlecontainer}>
          <View style={styles.address}>
            <Text style ={styles.addressText}>길음동</Text>
          </View>
          <TouchableOpacity style={styles.mypage}>
            <Text style ={styles.mypageText}>내 정보</Text>
          </TouchableOpacity>
          <View style={styles.icon}>
            <Text style ={styles.iconText}>|</Text>
          </View>
          <TouchableOpacity style={styles.logout}>
            <Text style ={styles.logoutText}>로그아웃</Text>
          </TouchableOpacity>
        </View>

        <View>
          <View style={styles.typeTitle}>
            <Text style ={styles.typeText}>지금 먹고 싶은 음식 종류는?</Text></View>
          <View style={styles.oneTitle}>
            <Text style={styles.oneText}>하나만 선택하세요!</Text></View>
        </View>

        <View>

          <View style={styles.content}>
          <View>
            <TouchableOpacity style={styles.food}><Text style={styles.foodText}>한식</Text></TouchableOpacity>
            <TouchableOpacity style={styles.food}><Text style={styles.foodText}>양식</Text></TouchableOpacity>
            <TouchableOpacity style={styles.food}><Text style={styles.foodText}>고기/구이</Text></TouchableOpacity>
            <TouchableOpacity style={styles.food}><Text style={styles.foodText}>패스트푸드</Text></TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.food}><Text style={styles.foodText}>일식</Text></TouchableOpacity>
          <TouchableOpacity style={styles.food}><Text style={styles.foodText}>치킨</Text></TouchableOpacity>
          <TouchableOpacity style={styles.food}><Text style={styles.foodText}>도시락</Text></TouchableOpacity>
          <TouchableOpacity style={styles.food}><Text style={styles.foodText}>디저트</Text></TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.food}><Text style={styles.foodText}>중식</Text></TouchableOpacity>
          <TouchableOpacity style={styles.food}><Text style={styles.foodText}>분식</Text></TouchableOpacity>
          <TouchableOpacity style={styles.food}><Text style={styles.foodText}>야식</Text></TouchableOpacity>
          <TouchableOpacity style={styles.food}><Text style={styles.foodText}>아시안푸드</Text></TouchableOpacity>
        </View>
          </View>

        </View>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  titlecontainer: {
    flex:1,
    marginTop: 40,
    marginLeft: 20,
    marginBottom: 20,
    flexDirection:'row',
  },
  address:{
    //backgroundColor:"#7cb48f",
    width: DeviceWidth*0.58,
    marginRight:30,
    height:30,
    justifyContent: 'center',
  },
  mypage:{
    //backgroundColor:"yellow",
    width: 40,
    height:30,
    alignItems:'center',
    justifyContent: 'center',
  },
  icon:{
    //backgroundColor:"#7cb48f",
    width: 10,
    height:30,
    alignItems:'center',
    justifyContent: 'center',
  },
  logout:{
    //backgroundColor:"pink",
    width:40,
    height:30,
    marginRight:30,
    alignItems:'center',
    justifyContent: 'center',
  },
  addressText:{
    color:'black',
    fontSize: 18,
    fontWeight: 'bold'
  },
  mypageText:{
    color:'black',
    fontSize: 10,
  },
  iconText:{
    color: 'black',
    fontSize: 10
  },
  logoutText:{
    color:'black',
    fontSize: 10
  },
  typeTitle: {
    marginTop:45,
    marginLeft:20,
    marginBottom:40,
  },
  typeText:{
    color: 'black',
    fontSize:22,
    fontWeight: 'bold'
  },
  oneTitle: {
    flexDirection:'row',
    marginTop:8,
    marginLeft:20,
  },
  oneText:{
    color: 'black',
    fontSize:15
  },
  content:{
    flexDirection:'row',
    marginTop:30,
    marginLeft:15,
    width:'90%',
    height:'65%',
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor: '#d6ca1a',
  },
  food:{
    width: DeviceWidth*0.27,
    height: DeviceWidth*0.17,
    marginBottom:7,
    marginLeft:7,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E2E2E2',
  },
  foodText:{
    color:'black',
    fontSize:20
  }
});

export default App;