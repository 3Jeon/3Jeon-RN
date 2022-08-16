import React from 'react';

import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image
} from 'react-native';


const LoginScreen = () => {
    return(
        <SafeAreaView>
            <View style = {styles.mainImage}>
                <Image 
                    style = {{width:241, height:208}}
                    source = {require('../../images/main.png')}
                />
            </View>

            <View style = {styles.mainText}>
                <Text style = {styles.textStyle}>배달/포장/외식 비교</Text>
            </View>

            <View style = {styles.buttonContainer}>
                <TouchableOpacity>
                    <Image 
                        style = {styles.button}
                        source = {require('../../images/kakao.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image 
                        style = {styles.button}
                        source = {require('../../images/apple.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image 
                        style = {styles.button}
                        source = {require('../../images/google.png')}
                    />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    
    mainImage : {
        alignItems : 'center',
        marginTop : '45%'
    },
  
    mainText : {
        marginTop : '8%',
        alignItems : 'center'
    },

    textStyle : {
        fontSize : 18,
        color : '#FF834E'
    },

    buttonContainer : {
        marginTop : '35%',
        alignItems : 'center'
    },

    button : {
        marginTop : 8,
        width : 343,
        height : 44
    }
  });
  
  export default LoginScreen;