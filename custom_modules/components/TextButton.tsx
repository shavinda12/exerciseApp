import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

interface TextButtonProps{
    text:string
}


const TextButton = ({text}:TextButtonProps) => {
  return (
    <TouchableOpacity>
        <View>
        <Text style={styles.textButton}>{text}</Text>
        </View>
    </TouchableOpacity>
  )
}

const styles=StyleSheet.create({
    textButton:{
        color:"#fff",
        fontSize:14
    }
})

export default TextButton