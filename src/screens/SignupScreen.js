import React, { Component, Fragment, useState } from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Picker,
  Alert,
  Modal,
  Pressable,
  StatusBar

} from 'react-native';

import {useForm, Controller} from 'react-hook-form';

// class addressModal extends Component {
//   state = {
//     modalVisible: false
//   };

//   setModalVisible = (visible) => {
//     this.setState({ modalVisible: visible });
//   }

//   render() {
//     const { modalVisible } = this.state;
//     return (
//       <View style={styles.centeredView}>
//         <Modal
//           animationType="slide"
//           transparent={true}
//           visible={modalVisible}
//           onRequestClose={() => {
//             Alert.alert("Modal has been closed.");
//             this.setModalVisible(!modalVisible);
//           }}
//         >
//           <Fragment>
// 			<StatusBar barStyle="dark-content"/>
// 			<SafeAreaView>

// 				<View style={{ width: "100%", height: "100%" }}>

// 					<Postcode
// 						style={{ flex: 1 }}
// 						jsOptions={{ animation: true }}
// 						onSelected={(data) => alert(JSON.stringify(data))}
// 					/>
// 				</View>
// 			</SafeAreaView>
// 		</Fragment>

//     </Modal>
          // <Pressable
          //   style={[styles.button2, styles.buttonOpen]}
          //   onPress={() => this.setModalVisible(true)}
//           >
// <Text style={styles.textStyle}>Show Modal</Text>
// </Pressable>
//       </View>
//     );
//   }
// };

// type Props = NativeStackScreenProps<AuthStackParamList, 'SignupScreen'>;

// const SignupScreen = ({navigation,route} : Props) => {
//   const [signupData, setSignupData] = useState<SignupInterface>(route.params.signupData);

const SignupScreen = ({navigation}) => {    
  return(
        <SafeAreaView>
            <View style = {styles.mainText}>
              <Image
                source = {require('../../images/Nyam-Nyam.png')}
              />
            </View>

            <View style = {styles.name}>
              <Text style = {styles.nameStyle}>닉네임</Text>
              <TextInput 
                style = {styles.inputStyle}
                placeholder = "닉네임 입력"
              />
              <Text style = {styles.introStyle}>아이디를 찾는 경우에 활용하는 이메일입니다!</Text>
              <Text style = {styles.introStyle}>오타가 있는지 확인해주세요!</Text>
            </View>

            <View style = {styles.name}>
              <Text style = {styles.nameStyle}>기본 위치를 설정해주세요.</Text>

              <TextInput 
                style = {styles.inputStyle}
                placeholder = "주소 입력"
              />

              <TextInput 
                style = {styles.inputStyle}
                placeholder = "상세주소 입력"
              />
              <Text style = {styles.introStyle}>추후 설정에서 변경 가능합니다!</Text>
            </View>

            <View>
              <TouchableOpacity
                style = {styles.button}
                onPress = {() => navigation.navigate('SignupEnd')}
              >
                <Image 
                  style = {styles.buttonStyle}
                  source = {require('../../images/signup.png')}
                />
              </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}



const styles = StyleSheet.create({
    
    mainText : {
      alignItems : 'center',
      marginTop : '25%',
    },
  
    name : {
      marginTop : '15%',
      marginLeft : '5%'
    },

    nameStyle : {
      fontSize : 18,
      color : 'black',
      fontWeight : 'bold'
    },

    inputStyle : {
      marginTop : '1%',
      resizeMode : 'contain',
      width : 343,
      height : 47,
      alignItems : 'center',
      backgroundColor : '#F5F5F5'
    },

    introStyle : {
      marginTop : '1%',
      marginLeft : '2%',
      fontSize : 12,
      color : '#949494'
    },

    button : {
      alignItems : 'center',
      marginTop : '60%'
    },

    buttonStyle : {
      resizeMode : 'contain',
      width : 342,
      height : 56
    },

    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button2: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }
});
  
export default SignupScreen;