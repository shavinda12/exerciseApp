import React from 'react'
import { Text } from 'react-native'

interface TextProps{
    title:string
    fontSize:number
    fontWeight:"normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900",
    fontColor:string
}

const TextTitle = ({title,fontSize,fontWeight,fontColor}:TextProps) => {
  return (
    <Text style={{fontSize:fontSize,fontWeight:fontWeight,color:fontColor}}>
        {title}
    </Text>
  )
}

export default TextTitle