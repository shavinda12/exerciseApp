import React from 'react'
import { StyleSheet, Text, TouchableOpacity} from 'react-native'


interface ButtonProps{
    buttonText:string,
    buttonTextColor:string,
    backgroundColr?:string,
    onClickButton:()=>void
}

const Button = ({buttonText,buttonTextColor,onClickButton,backgroundColr}:ButtonProps) => {
  return (
    <TouchableOpacity style={[styles.buttonContainer,{backgroundColor:backgroundColr}]} onPress={onClickButton}>
        <Text style={[styles.buttonText,{color:buttonTextColor}]}>{buttonText}</Text>
    </TouchableOpacity>
  )
}

const styles=StyleSheet.create({
    buttonContainer:{
        width:338,
        height:45,
        borderRadius:20,
        justifyContent:"center",
        alignItems:"center"
    },
    buttonText:{
        fontWeight:"bold"
    }
})

export default Button