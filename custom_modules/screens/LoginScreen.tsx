import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import TextTitle from '../components/TextTitle';
import z from 'zod';
import {Controller, useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import Button from '../components/Button';
import TextButton from '../components/TextButton';


const loginSchema = z.object({
  userName: z.string().min(1, {message: 'Password cannot be emplty'}),
  password: z.string().min(1, {message: 'password cannot be empty'}),
});

type LoginFormData = z.infer<typeof loginSchema>;

const LoginScreen = () => {
  const {
    control,
    formState: {errors},
    handleSubmit,
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormData) => {
    console.log(data);
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <TextTitle
          fontSize={26}
          fontWeight="bold"
          title="Welcome Back"
          fontColor="#fff"
        />
        <TextTitle
          fontSize={16}
          fontWeight="400"
          title="Log into your account"
          fontColor="#fff"
        />
      </View>
      <View style={styles.formContainer}>
        <View style={styles.inputFeildContainer}>
          <Controller
            control={control}
            name="userName"
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                style={styles.inputBox}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Enter your name"
              />
            )}
          />
          {errors.userName && (
            <Text style={styles.errorText}>{errors.userName.message}</Text>
          )}
        </View>

        <View style={styles.inputFeildContainer}>
          <Controller
            control={control}
            name="password"
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                style={styles.inputBox}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Enter your password"
                secureTextEntry={true}
              />
            )}
          />
          {errors.userName && (
            <Text style={styles.errorText}>{errors.userName.message}</Text>
          )}
        </View>
        </View>
        <View style={{marginTop:100,margin: 20,}}>
          <Button
            buttonText="SIGN IN"
            buttonTextColor="#fff"
            onClickButton={handleSubmit(onSubmit)}
          />
          <TextButton titleText="Don't have an account?" buttonText='REGISTER'/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242525',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  titleContainer: {
    marginTop:100,
    margin: 20,
  },
  formContainer: {
    marginTop:100,
    margin: 20,
  },
  inputBox: {
    width: 346,
    height: 43,
    borderRadius: 20,
    borderWidth: 1,
    backgroundColor: '#fff',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
  },
  inputError: {
    borderColor: 'red',
  },
  inputFeildContainer: {
    marginTop: 20,
  },
});

export default LoginScreen;
