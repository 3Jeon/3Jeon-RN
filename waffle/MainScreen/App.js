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

const DeviceWidth=Dimensions.get('window').width

const App: () => Node =() =>{
    return (
      <SafeAreaView>
        <View style={styles.titlecontainer}>
          <Text style ={styles.titleText}>BBQ 강북스타 삼양점</Text>
        </View>

        <View>
          <View style={styles.priceTitle}>
            <Text style ={styles.priceText}>음식값: 40,000원</Text></View>
          <View style={styles.distanceTitle}>
            <Text style={styles.distanceText}>내 위치와의 거리: 12.5km</Text></View>
        </View>

        <View>
          <View style={styles.content1}>
            <View style={styles.delivery}>
              <Text style={styles.deliveryText}>배달</Text></View>
            <View style={styles.totalprice}>
              <Text style={styles.totalpriceText}>총 금액: 13,000원</Text></View>
            <View style={styles.app}>
            <TouchableOpacity>
              <Image style={{width:45, height: 45}}
              source={require('./img/yogiyo.png')}/>
            </TouchableOpacity>
            <View style={styles.icon}></View>
            <TouchableOpacity>
              <Image style={{width:45, height: 45}}
              source={require('./img/baemin.png')}/>
            </TouchableOpacity>
            </View>
          </View>

          <View style={styles.timecontent1}>
            <Text style={styles.timeText}>소요시간: 10분</Text>
          </View>
        </View>


        <View>
          <View style={styles.content2}>
            <View style={styles.wrap}>
              <Text style={styles.wrapText}>포장</Text></View>
            <View style={styles.totalprice2}>
              <Text style={styles.totalpriceText}>총 금액: 12,000원</Text></View>
          </View>

          <View style={styles.timecontent2}>
            <Text style={styles.timeText}>소요시간: 20분</Text>
          </View>

          <View style={styles.app2}>
          <TouchableOpacity>
            <Image style={{width:45, height: 45}}
            source={require('./img/drive.png')}/>
          </TouchableOpacity>
          <View style={styles.icon}></View>
          <TouchableOpacity>
            <Image style={{width:45, height: 45}}
            source={require('./img/trans.png')}/>
          </TouchableOpacity>
          <View style={styles.icon}></View>
          <TouchableOpacity>
            <Image style={{width:45, height: 45}}
            source={require('./img/walk.png')}/>
          </TouchableOpacity>
          </View>
        </View>


        <View>
          <View style={styles.content3}>
            <View style={styles.eatout}>
              <Text style={styles.eatoutText}>외식</Text></View>
            <View style={styles.totalprice3}>
              <Text style={styles.totalpriceText}>총 금액: 10,000원</Text></View>
          </View>

          <View style={styles.timecontent3}>
            <Text style={styles.timeText}>소요시간: 30분</Text>
          </View>

          <View style={styles.app3}>
          <TouchableOpacity>
            <Image style={{width:45, height: 45}}
            source={require('./img/drive.png')}/>
          </TouchableOpacity>
          <View style={styles.icon}></View>
          <TouchableOpacity>
            <Image style={{width:45, height: 45}}
            source={require('./img/trans.png')}/>
          </TouchableOpacity>
          <View style={styles.icon}></View>
          <TouchableOpacity>
            <Image style={{width:45, height: 45}}
            source={require('./img/walk.png')}/>
          </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  };

const styles = StyleSheet.create({
  titlecontainer: {
    alignItems:'center',
    marginTop: 25
  },
  titleText:{
    color:'black',
    fontSize: 20,
    fontWeight: 'bold'
  },
  priceTitle: {
    flexDirection:'row',
    marginTop:10,
    marginLeft:10,
  },
  priceText:{
    color: 'black',
    fontSize:13
  },
  distanceTitle: {
    flexDirection:'row',
    marginTop:8,
    marginLeft:10,
  },
  distanceText:{
    color: 'black',
    fontSize:13
  },


  content1:{
    marginTop:60,
    //backgroundColor:"#7cb48f",
    flexDirection:'row',
    marginLeft:10,
    height:60
  },
  delivery:{
    //backgroundColor:"pink",
    width: DeviceWidth*0.15,
    marginRight:30,
    height:40,
    justifyContent:'center',
  },
  totalprice:{
    //backgroundColor: "#E2E2E2", 
    height: 30,
    //alignItems:'center',
    justifyContent: 'center'
  },
  app:{
    //backgroundColor: "yellow",
    flexDirection:'row',
    width:125,
    height:30,
    marginRight:30,
    alignItems:'center',
    justifyContent: 'center',
  },
  timecontent1:{
    //backgroundColor:'green',
    marginLeft:100,
    height:80
  },
  icon:{
    width:15
  },

  content2:{
    //backgroundColor:"#ffa500",
    flexDirection:'row',
    marginLeft:10,
    height:60
  },
  wrap:{
    //backgroundColor:"pink",
    width: DeviceWidth*0.15,
    marginRight:30,
    height:40,
    justifyContent:'center',
  },
  totalprice2:{
    //backgroundColor: "#E2E2E2",
    height: 30,
    //alignItems:'center',
    justifyContent: 'center'
  },
  timecontent2:{
    //backgroundColor:'green',
    marginLeft:100,
    height:40
  },
  app2:{
    //backgroundColor:'#e2e2e2',
    flexDirection:'row',
    marginLeft:200,
    height:60
  },

  content3:{
    //backgroundColor:"#ffa500",
    flexDirection:'row',
    marginLeft:10,
    height:60
  },
  eatout:{
    //backgroundColor:"pink",
    width: DeviceWidth*0.15,
    marginRight:30,
    height:40,
    justifyContent:'center',
  },
  totalprice3:{
    //backgroundColor: "#E2E2E2",
    height: 30,
    //alignItems:'center',
    justifyContent: 'center'
  },
  timecontent3:{
    //backgroundColor:'green',
    marginLeft:100,
    height:40
  },
  app3:{
    //backgroundColor:'#FFA500',
    flexDirection:'row',
    marginLeft:200,
    height:40
  },

  deliveryText:{
    color:'black',
    fontSize:30,
    fontWeight: 'bold'
  },
  totalpriceText:{
    color:'black',
    fontSize:20
  },
  timeText:{
    color:'black',
    fontSize:20
  },
  wrapText:{
    color:'black',
    fontSize:30,
    fontWeight: 'bold'
  },
  eatoutText:{
    color:'black',
    fontSize:30,
    fontWeight: 'bold'
  }
});

export default App;