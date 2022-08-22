import React from 'react';
import {Node} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image
} from 'react-native';
import { RotateInDownLeft } from 'react-native-reanimated';

const DeviceWidth=Dimensions.get('window').width

const App: () => Node =() =>{
    return (
      <SafeAreaView>
        <View style = {styles.title}>
        <TouchableOpacity>
          <Image style = {styles.backStyle} source = {require('./img/back.png')} />
        </TouchableOpacity>
        <View style = {styles.name}>
          <Text style = {styles.nameText}>비교하기</Text>
        </View>
      </View>

      <View style = {styles.line}>
        <Image source = {require('./img/line.png')} />
      </View>

        <View style ={styles.contain}>
          <View style={styles.priceTitle}>
            <Text style ={styles.priceText}>배달팁</Text></View>
          <View style={styles.taketimeTitle}>
            <Text style={styles.taketimeText}>예상 소요시간</Text></View>
        </View>

        <View>
          <View style={styles.content1}>
            <View style={styles.app}>
            <TouchableOpacity>
              <Image style={{width:50, height: 50, borderWidth:1, borderColor:'#EFEFEF', borderRadius:5}}
              source={require('./img/baemin.png')}/>
            </TouchableOpacity>
            </View>
            <View style={styles.tip1}>
              <Text style={styles.tipText}>3,000원</Text></View>
            <View style={styles.time1}>
              <Text style={styles.timeText}>약 60 분</Text></View>
          </View>
        </View>


        <View>
          <View style={styles.content2}>
            <View style={styles.app2}>
            <TouchableOpacity>
              <Image style={{width:50, height: 50, borderWidth:1, borderColor:'#EFEFEF', borderRadius:5}}
              source={require('./img/coupangeats.png')}/>
            </TouchableOpacity>
            </View>
            <View style={styles.star}>
            <TouchableOpacity>
              <Image style={{width:28.07, height: 28.07}} source={require('./img/star.png')}/>
            </TouchableOpacity>
            </View>
            <View style={styles.tip2}>
              <Text style={{color:'#FF834E', fontSize:16, fontWeight:'300'}}>2,500원</Text></View>
            <View style={styles.time2}>
              <Text style={{color:'#FF834E', fontSize:16, fontWeight:'300'}}>약 30 분</Text></View>
          </View>
        </View>

        <View>
          <View style={styles.content3}>
            <View style={styles.app3}>
            <TouchableOpacity>
              <Image style={{width:50, height: 50, borderWidth:1, borderColor:'#EFEFEF', borderRadius:5}}
              source={require('./img/yogiyo.png')}/>
            </TouchableOpacity>
            </View>
            <View style={styles.tip3}>
              <Text style={styles.tipText}>3,000원</Text></View>
            <View style={styles.time3}>
              <Text style={styles.timeText}>약 60 분</Text></View>
          </View>
        </View>

        <View>
          <View style={styles.content4}>
            <View style={styles.app4}>
            <TouchableOpacity>
              <Image style={{width:50, height: 50}}
              source={require('./img/wrap.png')}/>
            </TouchableOpacity>
            </View>
            <View style={styles.tip4}>
              <Text style={styles.tipText}>0 원</Text></View>
            <View style={styles.time4}>
              <Text style={styles.timeText}>편도 약 20 분</Text></View>
          </View>
        </View>

        <View>
        <View style={styles.content5}>
          <View style={styles.bubbleTitle}></View>
          <View style={styles.CO2}>
            <Text style={styles.CO2Text}>약 369g 이산화탄소 절감!</Text></View>
        </View>
        </View>

      </SafeAreaView>
    );
  };

const styles = StyleSheet.create({
  title : {
    flexDirection : 'row',
    marginTop : '5%',
    marginLeft : '1%'
  },
  backStyle : {
    resizeMode : 'contain',
    width : 24,
    height : 23,
  },
  name : {
    position:'absolute',
    left:159,
  },
  nameText : {
    fontSize : 16,
    color : 'black',
    fontWeight:'bold'
  },
  line : {
    marginTop : '3%',
  },

  contain:{
    //backgroundColor:"#7cb48f",
    flexDirection:'row',
    height:41.52,
    width:375,
    justifyContent:'center',
    alignItems:'center'
  },
  priceTitle: {
    position:'absolute',
    left:137.54,
    top:11.09,
    bottom:8.43,
    //backgroundColor:'pink'
  },
  priceText:{
    color: '#949494',
    fontSize:14,
    fontWeight:'500',
  },
  taketimeTitle: {
    //backgroundColor:'pink',
    position:'absolute',
    left:256.5,
    top:11.09,
    bottom:8.43,
  },
  taketimeText:{
    color: '#949494',
    fontSize:14,
    fontWeight:'500',
  },


  content1:{
    backgroundColor:"#F5F5F5",
    flexDirection:'row',
    alignItems:'center',
    height:80,
    width:375
  },
  app:{
    //backgroundColor: "yellow",
    marginLeft:10.33,
    marginRight:68.2
  },
  tip1:{
    //backgroundColor:"pink",
    justifyContent:'center',
    position:'absolute',
    left:128.54,
  },
  time1:{
    //backgroundColor: "#E2E2E2",
    justifyContent: 'center',
    position:'absolute',
    left:267.5,
  },

  content2:{
    //backgroundColor:"#F5F5F5",
    flexDirection:'row',
    alignItems:'center',
    height:80,
    width:375
  },
  app2:{
    //backgroundColor: "yellow",
    marginLeft:10.33,
    marginRight:67.7,
  },
  star:{
    position:"absolute",
    bottom:50.96,
    left:55.03,
    right:50.96
  },
  tip2:{
    //backgroundColor:"pink",
    justifyContent:'center',
    position:'absolute',
    left:128.04,
  },
  time2:{
    //backgroundColor: "#E2E2E2",
    position:'absolute',
    left:267.5,
    justifyContent: 'center'
  },

  content3:{
    backgroundColor:"#F5F5F5",
    flexDirection:'row',
    alignItems:'center',
    height:80,
    width:375
  },
  app3:{
    //backgroundColor: "yellow",
    marginLeft:10.33,
    marginRight:68.54
  },
  tip3:{
    //backgroundColor:"pink",
    position:'absolute',
    left:128.87,
    justifyContent:'center',
  },
  time3:{
    //backgroundColor: "#E2E2E2",
    justifyContent: 'center',
    position:'absolute',
    left:267.5,
  },

  content4:{
    //backgroundColor:"#F5F5F5",
    flexDirection:'row',
    alignItems:'center',
    height:80,
    width:375
  },
  app4:{
    //backgroundColor: "yellow",
    marginLeft:10.33,
    marginRight:85
  },
  tip4:{
    //backgroundColor:"pink",
    position:'absolute',
    left:142.04,
    justifyContent:'center',
  },
  time4:{
    //backgroundColor: "#E2E2E2",
    justifyContent: 'center',
    position:'absolute',
    left:252
  },

  tipText:{
    color:'#111111',
    fontSize:16,
    fontWeight:'300',
  },
  timeText:{
    color:'#111111',
    fontSize:16,
    fontWeight:'300',
  },

  bubbleTitle:{
    width: 0,
    height: 0,
    borderLeftWidth: 3,
    borderRightWidth: 3,
    borderBottomWidth: 6,
    borderStyle: 'solid',
    backgroundColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#FF834E',
    marginLeft:31.78,
  },
  CO2:{
    width:171,
    height:44,
    backgroundColor:'#FF834E',
    borderRadius:6,
    marginLeft:21,
    alignItems:'center',
    justifyContent:'center',
  },
  CO2Text:{
    color:'white',
    fontSize:14,
    fontWeight:'300',
  }
});

export default App;
