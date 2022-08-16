import React from "react";
import {View, Text, Image, StyleSheet,TouchableOpacity} from "react-native";

const PickMenuNext = ({navigation}) => {
    return(
      <View style={styles.container}>
          <View style={styles.navView}>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent : "space-between", alignItems:'center', margin: 30 }}>
              <View>
                <TouchableOpacity
                    onPress={()=>navigation.goBack()}>
                <Image style={styles.leftarrow} source={require('../../images/left-arrow.png')}/>
                </TouchableOpacity>
              </View>
              <View>
                <Text style={styles.location}>장바구니</Text>
              </View>
              <View>
                <TouchableOpacity onPress={()=>navigation.navigate('SEARCH')}>
                  <Image style={styles.manifier} source={require('../../images/magnifier.png')}/>
                </TouchableOpacity>
              </View>
          </View>
      </View>

      <View style = {styles.storeView}>
        <Text style = {{fontSize : 15, margin : 5, fontWeight: "bold"}}>
          푸라닭 강북스타삼양점
        </Text>
      </View>

      <View style={styles.mainView}>
        <View style={styles.container_box}>
          <View style = {styles.shopping_list}>
            <View>
              <Image style={styles.food_pic} source={require('../../images/toowoomba.jpg')}></Image>
            </View>
            <View style={styles.text_box}>
              <View>
                <Text style = {styles.food_name}>투움바 치킨</Text>
                <Text style = {styles.food_price}>10,000원</Text>
              </View>
              <View style ={{flexDirection : "row-reverse", }}>
                <TouchableOpacity>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style = {styles.shopping_list}>
            <View>
              <Image style={styles.food_pic} source={require('../../images/toowoomba.jpg')}></Image>
            </View>
            <View style={styles.text_box}>
              <View>
                <Text style = {styles.food_name}>투움바 치킨</Text>
                <Text style = {styles.food_price}>10,000원</Text>
              </View>
              <View style ={{flexDirection : "row-reverse", }}>
                <TouchableOpacity>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>

      <View style = {styles.show_price}>
        <Text>
          총 금액 : 20,000원
        </Text>
      </View>

      <View style={styles.buttonView}>
          <TouchableOpacity 
            style={styles.sendButton}
            onPress = {() => navigation.navigate('MAIN')}>
            <Text>
              결과 보기
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
    height : 15.56
    , 
    resizeMode: 'contain',
  },
  location : {
    fontSize: 17,
    fontWeight: "bold",
  },
  manifier : {
    width : 17.05, 
    height : 17.06, 
    resizeMode: 'contain',
  },
  storeView : {
    flex : 1,
    // backgroundColor : "skyblue",
  },
  mainView : {
    flex : 12,
    // backgroundColor : 'green',
    flexDirection : "column",
  },
  container_box : {
    flex: 1, 
    flexDirection: "column", 
    justifyContent : "flex-start", 
    alignItems:'center', 
    margin : 3,
    borderTopWidth : 1,
    borderTopColor :  "gray",
    // backgroundColor : 'orange',
  },
  shopping_list : {
    width : 350,
    height : 90,
    padding : 10,
    margin : 5,
    borderBottomWidth : 1,
    borderBottomColor :  "gray",
    // backgroundColor : "hotpink",
    flexDirection : "row",
    alignItems : "center",
  },
  text_box : {
    flex : 1,
    flexDirection: "column", 
    marginLeft : 20,
    // backgroundColor : 'pink',
  },
  food_pic : {
    width : 90,
    height : 90,
    resizeMode : "contain",
  },
  food_name : {
    fontSize: 20,
  },
  food_price : {
    fontSize: 18,
  },
  show_price : {
    flex : 1,
    // backgroundColor : "#F5F5DC",
    justifyContent : "center",
    alignItems : "center",
    fontSize: 20,
  },
  buttonView : {
    flex : 2,
    justifyContent : "center",
    alignItems : "center",
    // backgroundColor : 'blue',
  },
  sendButton : {
    fontSize: 18,
    backgroundColor : "#D1FF17",
    height : 56,
    width : 350,
    borderRadius : 5,
    padding : 5,
    justifyContent : "center",
    alignItems : "center",
  },
});

export default PickMenuNext