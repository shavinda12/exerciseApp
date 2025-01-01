import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import TextTitle from '../components/TextTitle';
import {Controller, useForm} from 'react-hook-form';
import Button from '../components/Button';
import TextButton from '../components/TextButton';
import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserDetails } from '../types/UserDetails';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamList } from '../../Navigation/StackNavigation/stackNavigation';
import { useNavigation } from '@react-navigation/native';

const registrationSchema = z.object({
  firstName: z.string().min(1, {message: 'Name cannot be emplty'}),
  lastName: z.string().min(1, {message: 'Name cannot be emplty'}),
  password: z
    .string()
    .min(8, {message: 'password must have at least 08 characters'})
    .regex(/[A-Z]/, {
      message: 'Password must contain at least one uppercase letter',
    })
    .regex(/[a-z]/, {
      message: 'Password must contain at least one lowercase letter',
    })
    .regex(/[\W_]/, {
      message: 'Password must contain at least one special character',
    }) // Includes non-alphanumeric characters
    .regex(/^\S*$/, {message: 'Password must not contain spaces'}),
  confirmPassword: z.string().min(1, {message: 'password cannot be empty'}),
  mobile: z
    .string()
    .min(9, {message: 'mobile must have 10 charcters'})
    .max(10, {message: 'mobile must have 10 charcters'}),
});

type RegistrationFormData = z.infer<typeof registrationSchema>;



type StackNavigationType = NativeStackNavigationProp<
  StackParamList,
  'LoginScreen'
>;

const RegistrationScreen = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationSchema),
  });

  const navigation=useNavigation<StackNavigationType>()

  const onSubmit = async ({
    firstName,
    lastName,
    password,
    confirmPassword,
    mobile,
  }: RegistrationFormData) => {
    try {
      if (password != confirmPassword) {
        console.log('password mistmatch');
      }
      const newUser = {
        firstName:firstName,
        lastName:lastName,
        mobile: mobile,
        password: password,
      };
      const storedUsers = await AsyncStorage.getItem('@users');
      const users: (UserDetails)[] = storedUsers
        ? JSON.parse(storedUsers)
        : [];

      const userExist = users.some(user => user.firstName == firstName);
      if (userExist) {
        console.log('user exsit');
        return false;
      }
      users.push(newUser);
      await AsyncStorage.setItem('@users', JSON.stringify(users));
    } catch (e) {
      console.log(e);
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
            name="firstName"
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
          {errors.firstName && (
            <Text style={styles.errorText}>{errors.firstName.message}</Text>
          )}
        </View>

        <View style={styles.inputFeildContainer}>
          <Controller
            control={control}
            name="mobile"
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                style={styles.inputBox}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Enter your mobile number"
                keyboardType="numeric"
              />
            )}
          />
          {errors.mobile && (
            <Text style={styles.errorText}>{errors.mobile.message}</Text>
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
                //keyboardType="visible-password"
              />
            )}
          />
          {errors.password && (
            <Text style={styles.errorText}>{errors.password.message}</Text>
          )}
        </View>

        <View style={styles.inputFeildContainer}>
          <Controller
            control={control}
            name="confirmPassword"
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                style={styles.inputBox}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Confirm your password"
                secureTextEntry={true}
                //keyboardType="visible-password"
              />
            )}
          />
          {errors.confirmPassword && (
            <Text style={styles.errorText}>
              {errors.confirmPassword.message}
            </Text>
          )}
        </View>
      </View>
      <View style={{marginTop: 100, margin: 20}}>
        <Button
          buttonText="SIGN IN"
          buttonTextColor="#fff"
          onClickButton={handleSubmit(onSubmit)}
          backgroundColr='#12F62C'
        />
        <TextButton titleText="Don't have an account?" buttonText="Login" onTextButtonPress={()=>navigation.navigate("LoginScreen")}/>
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
    marginTop: 50,
    margin: 20,
  },
  formContainer: {
    marginTop: 50,
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

export default RegistrationScreen;
