import React from 'react';
import {Image, StyleSheet, TouchableHighlight, TouchableOpacity, View} from 'react-native';
import ExerciseDetails from './ExerciseDetails';
import { ExerciseCardProps } from '../types/ExerciseCardProps';



const ExerciseCard = ({exercise,onCardPress}: ExerciseCardProps) => {
  return (
    <TouchableOpacity onPress={()=>onCardPress(exercise)}>
      <View style={styles.conatiner}>
      <View style={styles.imageContainer}>
        <Image
          style={{width: '100%', height: '100%',borderRadius:20}}
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
    </TouchableOpacity>
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
    backgroundColor: '#8F918F',
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
    marginRight:5,
    width:220
  },
});

export default ExerciseCard;
