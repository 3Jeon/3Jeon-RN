import React from "react";
import {View, Text, Image, StyleSheet,TouchableOpacity} from "react-native";

const MainView = ({navigation}) => {
    return(
        <View style={styles.mainView}>
        <View style={styles.container_box}>
          <View>
            <Image style={styles.food_pic} source={require('../../images/puradak.jpg')}></Image>
          </View>
          <View style={styles.text_box}>
            <View>
              <Text style = {styles.food_name}>투움바 치킨</Text>
              <Text style = {styles.food_price}>10,000원</Text>
            </View>
            <View style ={{flexDirection : "row-reverse", }}>
              <TouchableOpacity 
                onPress = {() => navigation.navigate('PickStore')}>
                <Text style={styles.shopping_basket}>장바구니에 추가</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    )
}

const PickMenu = ({navigation}) => {
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
                      <Text style={styles.location}>푸라닭치킨 강북스타삼양점</Text>
                    </View>
                    <View>
                      <TouchableOpacity onPress={()=>navigation.navigate('SEARCH')}>
                        <Image style={styles.manifier} source={require('../../images/magnifier.png')}/>
                      </TouchableOpacity>
                    </View>
                </View>
            </View>
      
            <MainView></MainView>

            <View style={styles.buttonView}>
              <TouchableOpacity 
                style={styles.sendButton}
                onPress = {() => navigation.navigate('PickMenuNext')}>
                <Text style={{color: "white"}}>
                  장바구니
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
          width: 30, 
          height : 30, 
          resizeMode: 'contain',
        },
        location : {
          fontSize: 20,
        },
        manifier : {
          width : 25, 
          height : 25, 
          resizeMode: 'contain',
        },
        mainView : {
          flex : 12,
          // backgroundColor : 'green',
          flexDirection : "column",
        },
        container_box : {
          flex: 1, 
          flexDirection: 'row', 
          justifyContent : "space-evenly", 
          alignItems:'center', 
          margin : 3,
          padding : 30,
          borderTopWidth : 1,
          borderTopColor :  "gray",
          // backgroundColor : 'orange',
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
          fontSize: 25,
        },
        food_price : {
          fontSize: 20,
        },
        shopping_basket : {
          fontSize: 15,
          color : "gray",
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

export default PickMenu