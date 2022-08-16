import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

class Input extends Component {
  state = {
    myTextInput: '',
  };

  constructor(props){
    super(props);
  }
//변경된 텍스트로 state를 변경하는 함수 
  onChangeInput = event => {
    this.setState({
      myTextInput: event,
    });
  };
  
  render(){
    return (
      <View style={styles.mainVeiw}>
        <TextInput
          value={this.state.myTextInput}
          style={styles.input}
          onChangeText={this.onChangeInput}
          placeholder = {this.props.placeholder}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    width: '100%',
    backgroundColor: '#cecece',
    marginTop: 10,
    fontSize: 18,
    padding: 10,
  },
  mainVeiw: {
    width: '100%',
  },
});

export default Input;