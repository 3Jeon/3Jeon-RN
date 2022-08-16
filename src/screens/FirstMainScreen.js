// import React from 'react';
// import {Node} from 'react';
// import {useState} from 'react';

// import {
//   SafeAreaView,
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity,
//   Pressable,
//   Dimensions,
//   onPressHandler
// } from 'react-native';
// //import { TouchableOpacity } from 'react-native-gesture-handler';

// const DeviceWidth = Dimensions.get('window').width
// const itemIds = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

// const FirstScreen =({navigation}) =>{
//   // const [submitted, SetSubmitted]=useState(false);
//   // const onPressHandler =() => {
//   // SetSubmitted(!submitted);
//   // }

//   const [idx, setIdx] = React.useState([]);

//     return (
//       <SafeAreaView>
//         <View style={styles.titlecontainer}>
//           <View style={styles.address}>
//             <Text style ={styles.addressText}>길음동</Text>
//           </View>
//           <TouchableOpacity style={styles.mypage}>
//             <Text style ={styles.mypageText}>내 정보</Text>
//           </TouchableOpacity>
//           <View style={styles.icon}>
//             <Text style ={styles.iconText}>|</Text>
//           </View>
//           <TouchableOpacity 
//             style={styles.logout}
//             onPress={() => navigation.navigate('LOGIN')}>
//             <Text style ={styles.logoutText}>로그아웃</Text>
//           </TouchableOpacity>
//         </View>

//         <View>
//           <View style={styles.typeTitle}>
//             <Text style ={styles.typeText}>지금 먹고 싶은 음식 종류는?</Text></View>
//           <View style={styles.oneTitle}>
//             <Text style={styles.oneText}>하나만 선택하세요!</Text></View>
//         </View>

//         <View>

//           <View style={styles.content}>
//           <View>
//             <Pressable onPress={onPressHandler} style={({pressed})=>[{backgroundColor: pressed ? '#00ff00' :'#E2E2E2'},styles.food]}>
//               <Text style={styles.foodText}>한식</Text></Pressable>
//             <Pressable onPress={onPressHandler} style={({pressed})=>[{backgroundColor: pressed ? '#00ff00' :'#E2E2E2'},styles.food]}>
//               <Text style={styles.foodText}>양식</Text></Pressable>
//             <Pressable onPress={onPressHandler} style={({pressed})=>[{backgroundColor: pressed ? '#00ff00' :'#E2E2E2'},styles.food]}>
//               <Text style={styles.foodText}>고기/구이</Text></Pressable>
//             <Pressable onPress={onPressHandler} style={({pressed})=>[{backgroundColor: pressed ? '#00ff00' :'#E2E2E2'},styles.food]}>
//               <Text style={styles.foodText}>패스트푸드</Text></Pressable>
//             <Text style={styles.none}></Text>
//           </View>
//           <View>
//             <Pressable onPress={onPressHandler} style={({pressed})=>[{backgroundColor: pressed ? '#00ff00' :'#E2E2E2'},styles.food]}>
//               <Text style={styles.foodText}>일식</Text></Pressable>
//             <Pressable onPress={onPressHandler} style={({pressed})=>[{backgroundColor: pressed ? '#00ff00' :'#E2E2E2'},styles.food]}>
//               <Text style={styles.foodText}>치킨</Text></Pressable>
//             <Pressable onPress={onPressHandler} style={({pressed})=>[{backgroundColor: pressed ? '#00ff00' :'#E2E2E2'},styles.food]}>
//               <Text style={styles.foodText}>도시락</Text></Pressable>
//             <Pressable onPress={onPressHandler} style={({pressed})=>[{backgroundColor: pressed ? '#00ff00' :'#E2E2E2'},styles.food]}>
//               <Text style={styles.foodText}>디저트</Text></Pressable>
//             <Pressable onPress={onPressHandler} style={({pressed})=>[{backgroundColor: pressed ? '#00ff00' :'#E2E2E2'},styles.food]}>
//               <Text style={styles.foodText}>1인분</Text></Pressable>
//           </View>
//           <View>
//           <Pressable onPress={onPressHandler} style={({pressed})=>[{backgroundColor: pressed ? '#00ff00' :'#E2E2E2'},styles.food]}>
//               <Text style={styles.foodText}>중식</Text></Pressable>
//             <Pressable onPress={onPressHandler} style={({pressed})=>[{backgroundColor: pressed ? '#00ff00' :'#E2E2E2'},styles.food]}>
//               <Text style={styles.foodText}>분식</Text></Pressable>
//             <Pressable onPress={onPressHandler} style={({pressed})=>[{backgroundColor: pressed ? '#00ff00' :'#E2E2E2'},styles.food]}>
//               <Text style={styles.foodText}>야식</Text><Text>(족발,보쌈)</Text></Pressable>
//             <Pressable onPress={onPressHandler} style={({pressed})=>[{backgroundColor: pressed ? '#00ff00' :'#E2E2E2'},styles.food]}>
//               <Text style={styles.foodText}>아시안푸드</Text></Pressable>
//             <Text style={styles.none}></Text>
//           </View>
//           </View>

//         </View>

//         <View>
//           <View style={styles.bottomBox}>
//             <TouchableOpacity 
//               style={styles.bottom}
//               onPress={() => navigation.navigate('PickStore')}>
//                 <Text style={styles.bottomText}>가게 리스트 불러오기</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </SafeAreaView>
//     );
// }

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

const FirstScreen =({navigation}) =>{
    return (
      <SafeAreaView>
        <View style={styles.titlecontainer}>
          <TouchableOpacity style={styles.address}>
            <Text style ={styles.addressText}>안암동</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.toggle}>
            <Text style ={styles.toggleText}>▾</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.logout}
            onPress={() => navigation.navigate('LOGIN')}>
            <Text style ={styles.logoutText}>로그아웃</Text>
          </TouchableOpacity>
        </View>

        <View>
          <View style={styles.typeTitle}>
            <Text style ={styles.typeText}>지금 먹고 싶은 음식 종류는 무엇인가요? 👀</Text></View>
          <View style={styles.bubbleTitle}></View>
        </View>

        <View>

          <View style={styles.content}>
          <View>
            <TouchableOpacity 
              style={styles.food}
              onPress={() => navigation.navigate('PickStore')}>
              <Text style={styles.foodText}>한식</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.food}
              onPress={() => navigation.navigate('PickStore')}>
              <Text style={styles.foodText}>분식</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.food}
              onPress={() => navigation.navigate('PickStore')}>
              <Text style={styles.foodText}>양식</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.food}
              onPress={() => navigation.navigate('PickStore')}>
              <Text style={styles.foodText}>아시안</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.food}
              onPress={() => navigation.navigate('PickStore')}>
              <Text style={styles.foodText}>도시락</Text>
            </TouchableOpacity>
        </View>

        <View>
            <TouchableOpacity 
              style={styles.food}
              onPress={() => navigation.navigate('PickStore')}>
              <Text style={styles.foodText}>치킨</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.food}
              onPress={() => navigation.navigate('PickStore')}>
              <Text style={styles.foodText}>피자</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.food}
              onPress={() => navigation.navigate('PickStore')}>
              <Text style={styles.foodText}>고기·구이</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.food}
              onPress={() => navigation.navigate('PickStore')}>
              <Text style={styles.foodText}>패스트푸드</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.food}
              onPress={() => navigation.navigate('PickStore')}>
              <Text style={styles.foodText}>돈가스·회·일식</Text>
            </TouchableOpacity>
        </View>

        <View>
            <TouchableOpacity 
              style={styles.food}
              onPress={() => navigation.navigate('PickStore')}>
              <Text style={styles.foodText}>카페·디저트</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.food}
              onPress={() => navigation.navigate('PickStore')}>
              <Text style={styles.foodText}>찜·탕·찌개</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.food}
              onPress={() => navigation.navigate('PickStore')}>
              <Text style={styles.foodText}>족발·보쌈</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.food}
              onPress={() => navigation.navigate('PickStore')}>
              <Text style={styles.foodText}>야식</Text>
            </TouchableOpacity>
          <Text style={styles.none}></Text>
        </View>
          </View>

        </View>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  titlecontainer: {
    flex:1,
    //marginTop: 20,
    //marginLeft: 16,
    marginBottom: 43.06,
    flexDirection:'row',
  },
  address:{
    //backgroundColor:"#7cb48f",
    height:29,
    width:52,
    marginTop: 34,
    marginLeft:15.8,
    justifyContent: 'center',
  },
  toggle:{
    //backgroundColor:"#7cb48f",
    height:29,
    width:20,
    marginTop:34,
    justifyContent: 'center',
    alignItems:'center'
  },
  logout:{
    //backgroundColor:"pink",
    width:49,
    height:22,
    marginLeft:216.96,
    marginTop: 36.5,
    alignItems:'center',
    justifyContent: 'center',
  },
  addressText:{
    color:'#000000',
    fontSize: 17,
    fontWeight: 'bold'
  },
  toggleText:{
    color:'#24292E',
    fontSize: 17,
    fontWeight: 'bold'
  },
  logoutText:{
    color:'#949494',
    fontSize: 11,
    fontWeight: 'bold'
  },
  typeTitle: {
    marginTop:43.06,
    marginLeft:16.4,
    marginRight:16.6,
    width:342,
    height:70,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:12,
    backgroundColor: '#2A2A2A'
  },
  bubbleTitle:{
    width: 0,
    height: 0,
    borderLeftWidth: 6,
    borderRightWidth: 6,
    borderTopWidth: 12,
    borderStyle: 'solid',
    backgroundColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: '#2A2A2A',
    marginLeft:'45%',
    marginBottom:47.56,
  },
  typeText:{
    color: 'white',
    fontSize:18,
    fontWeight: 'bold',
    //fontFamily:'Pretendard-Regular'
  },
  content:{
    flexDirection:'row',
    marginLeft:11.87,
    marginRight:16.87,
    width:341.27,
    height:390,
    //alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor: '#d6ca1a',
  },
  food:{
    width: 107.09,
    height: 70,
    marginBottom:10,
    marginLeft:10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EFEFEF',
    borderRadius:10,
  },
  foodText:{
    color:'#2A2A2A',
    fontSize:16,
  },
  none:{
    width: 107.09,
    height: 70,
    marginBottom:8,
    marginLeft:8,
    borderRadius:12,
    //backgroundColor: '#F5F5F5',
  },
});

export default FirstScreen;