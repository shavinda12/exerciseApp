import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import ExerciseDetails from './ExerciseDetails';
import {ExerciseCardProps} from '../types/ExerciseCardProps';

const ExerciseCard = ({exercise}: ExerciseCardProps) => {
  return (
    <View style={styles.conatiner}>
      <View style={styles.imageContainer}>
        <Image
          style={{width: '100%', height: '100%'}}
          source={{uri: exercise.gifUrl}}
          resizeMode="contain"
        />
      </View>
      <View style={styles.textContainer}>
        <ExerciseDetails topic="Name" value={exercise.name} />
        <ExerciseDetails topic="Target" value={exercise.target} />
        <ExerciseDetails topic="Body Part" value={exercise.bodyPart} />
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
    borderRadius: 20,
    marginTop: 10,
  },
  imageContainer: {
    width: 100,
    height: 120,
    marginRight: 10,
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginRight:5
  },
});

export default ExerciseCard;
