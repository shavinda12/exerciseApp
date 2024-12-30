import React from 'react'
import { StyleSheet, Text, TouchableOpacity} from 'react-native'


interface ButtonProps{
    buttonText:string,
    buttonTextColor:string
    onClickButton:()=>void
}

const Button = ({buttonText,buttonTextColor,onClickButton}:ButtonProps) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onClickButton}>
        <Text style={[styles.buttonText,{color:buttonTextColor}]}>{buttonText}</Text>
    </TouchableOpacity>
  )
}

const styles=StyleSheet.create({
    buttonContainer:{
        width:338,
        height:45,
        backgroundColor:"#4DFF00",
        borderRadius:20,
        justifyContent:"center",
        alignItems:"center"
    },
    buttonText:{
        fontWeight:"bold"
    }
})

export default Button