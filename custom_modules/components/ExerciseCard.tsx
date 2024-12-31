import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import ExerciseDetails from './ExerciseDetails';
import { ExerciseCardProps } from '../types/ExerciseCardProps';

const ExerciseCard = ({bodyPart, target, name, gifUrl}: ExerciseCardProps) => {
  return (
    <View style={styles.conatiner}>
      <View style={styles.imageContainer}>
        <Image style={{width: '100%', height: '100%'}} source={{uri:gifUrl}} resizeMode='contain'/>
      </View>
      <View style={styles.textContainer}>
        <ExerciseDetails topic='Name' value={name}/>
        <ExerciseDetails topic='Target' value={target}/>
        <ExerciseDetails topic='Body Part' value={bodyPart}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    width: 350,
    height: 150,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 15,
    backgroundColor: '#D9D9D9',
    borderRadius:10,
    marginTop:10
  },
  imageContainer: {
    width: 100,
    height: 120,
    marginRight:10
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
});

export default ExerciseCard;
