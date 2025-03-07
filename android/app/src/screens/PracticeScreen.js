import React from 'react'
import {
    Button,
    StyleSheet,
    Text,
    View
} from 'react-native';

const PracticeScreen = () => {
    const onClickButton = () => {
        console.log('Hello world')
    }
    return (
        < View >
  <Text style={{
    fontSize: 50,
    color: "salmon",
    fontWeight: "bold"
  }}>
    The leaning tower of pisa
  </Text>

  <Text style={{
    color: "black",
    fontWeight: "normal"
  }}>
    is a mediavel structure in
  </Text>
  <Text style={{
    fontSize: 50,
    color: "salmon",
    fontWeight: "bold"
  }}>Pisa,Italy,
  </Text>
  <Text style={{
    color: "black",
    fontWeight: "normal"
  }}>That is famous for the settling of its foundations.
  </Text>

  {/*  <Text>PracticeScreen</Text>
        <Button Title='Click me'
        onPress={() => onClickButton()}
        />*/}
</View >
)}

export default PracticeScreen

const styles = StyleSheet.create({})