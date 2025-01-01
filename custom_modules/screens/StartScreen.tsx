import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import Button from '../components/Button';
import TextButton from '../components/TextButton';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamList } from '../../Navigation/StackNavigation/stackNavigation';


type StackNavigationType = NativeStackNavigationProp<StackParamList,"StartScreen">

const StartScreen = () => {
  const navigation=useNavigation<StackNavigationType>()

  const navigationToLoginScreen=()=>{
    navigation.navigate('LoginScreen')
  }

  return (
    <ImageBackground
    style={styles.backGround}
      source={require('../assets/startBackground.png')}
      resizeMode="cover">
        <View style={styles.overlay}>
            <Button backgroundColr='#12F62C' buttonText='START YOUR FITNESS ADVENTURE' buttonTextColor='#000' onClickButton={navigationToLoginScreen}/>
            <TextButton titleText="Don't have an account?" buttonText="REGISTER" onTextButtonPress={()=>navigation.navigate("RegistrationScreen")}/>
        </View>
      </ImageBackground>
  );
};

const styles=StyleSheet.create({
    backGround:{
        flex:1,
        justifyContent:"flex-end",
    },
    overlay:{
        margin:"10%",
        justifyContent:"flex-end",
        marginBottom:"20%"
    },
    
})

export default StartScreen;
