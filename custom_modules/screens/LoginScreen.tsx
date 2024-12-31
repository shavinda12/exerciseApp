import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import TextTitle from '../components/TextTitle';
import z from 'zod';
import {Controller, useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import Button from '../components/Button';
import TextButton from '../components/TextButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {UserDetails} from '../types/UserDetails';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackParamList} from '../../Navigation/StackNavigation/stackNavigation';
import {useNavigation} from '@react-navigation/native';

const loginSchema = z.object({
  userName: z.string().min(1, {message: 'Password cannot be emplty'}),
  password: z.string().min(1, {message: 'password cannot be empty'}),
});

type LoginFormData = z.infer<typeof loginSchema>;

type StackNavigationType = NativeStackNavigationProp<
  StackParamList,
  'LoginScreen'
>;

const LoginScreen = () => {
  const navigation = useNavigation<StackNavigationType>();
  const {
    control,
    formState: {errors},
    handleSubmit,
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    const storedUsers = await AsyncStorage.getItem('@users');
    const users: UserDetails[] = storedUsers ? JSON.parse(storedUsers) : [];
    const auth = users.find(user => user.firstName == data.userName);
    if (auth) {
      if (auth.password == data.password) {
        await AsyncStorage.setItem(
          'LoggedUser',
          auth.firstName + ' ' + auth.lastName,
        );
        navigation.navigate('HomeScreen');
      } else {
        console.log('Invalid credential');
        return false;
      }
    } else {
      console.log('Invalid credential');
      return false;
    }
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
      <View style={{marginTop: 100, margin: 20}}>
        <Button
          buttonText="SIGN IN"
          buttonTextColor="#fff"
          onClickButton={handleSubmit(onSubmit)}
        />
        <TextButton titleText="Don't have an account?" buttonText="REGISTER" />
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
    marginTop: 100,
    margin: 20,
  },
  formContainer: {
    marginTop: 100,
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
