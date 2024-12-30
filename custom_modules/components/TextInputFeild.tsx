import React from 'react'
import { StyleSheet, Text, TextInput, View, } from 'react-native'
import {UseFormRegister,FieldError,Path, Controller, UseControllerProps, FieldValues} from 'react-hook-form'

interface TextInputFeildProps<T extends FieldValues> extends UseControllerProps<T>{
  placeHolder:string,
  errors?:FieldError;
}

const TextInputFeild =<T extends FieldValues> ({placeHolder,name,control,errors}:TextInputFeildProps<T>) => {
  return (
    <View style={{marginTop:10}}>
      <Controller
      name={name}
      control={control}
      render={({ field: { onChange, onBlur, value } }) => (
        <TextInput
          style={[
            styles.inputBox,
            errors ? styles.inputError : null,
          ]}
          placeholder={placeHolder}
          value={value}
          onChangeText={onChange}
          onBlur={onBlur}
        />
      )}
    />
    {errors && <Text style={styles.errorText}>{errors.message}</Text>}
    </View>
  )

}

const styles=StyleSheet.create({
  inputBox:{
    width:346,
    height:43,
    borderRadius: 20,
    borderWidth: 1,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
  },
  inputError: {
    borderColor: 'red',
  },

})

export default TextInputFeild