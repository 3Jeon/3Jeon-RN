import React from "react";
import {View, Text, Image, StyleSheet,TouchableOpacity,TextInput} from "react-native";
import Input from '../../input';

const Search = ({navigation}) => {
    return(
        <View style={styles.navView}>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent : "space-between", margin: 30 }}>
          <View>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
              <Image style={styles.leftarrow} source={require('../../images/left-arrow.png')}/>
            </TouchableOpacity>
          </View>
          <View style = {styles.input}>
            <TextInput
                style = {styles.blank}
                placeholder = "검색어를 입력해주세요."
            />
        </View>
      </View>
    </View>
    
      )
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
      height : 40, 
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
    input : {
        marginLeft : 5
      },
    
    blank : { 
        width : 320,
        height : 40,
        borderRadius: 10,
        backgroundColor : '#EEEEEE',
        

    },
})

export default Search