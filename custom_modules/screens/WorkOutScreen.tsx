import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableHighlight,
  View,
} from 'react-native';
import TextTitle from '../components/TextTitle';
import useSelectedExerciseStore from '../store/SelectedExerciseStore';
import ExerciseCard from '../components/ExerciseCard';
import {Exercise} from '../types/Exercise';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackParamList} from '../../Navigation/StackNavigation/stackNavigation';
import {useNavigation} from '@react-navigation/native';

type WorkoutScreenNavigationProp = NativeStackNavigationProp<
  StackParamList,
  'WorkoutScreen'
>;

const WorkOutScreen = () => {
  const navigation = useNavigation<WorkoutScreenNavigationProp>();

  const {selectedExercises: exerciseList} = useSelectedExerciseStore();

  const onExerciseCardPress = (exercise: Exercise) => {
    navigation.navigate('ExerciseDetailScreen', {exercise});
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableHighlight
          style={styles.iconContainer}
          onPress={() => navigation.goBack()}>
          <Image
            source={require('../icons/back_arrow.png')}
            style={{width: '100%', height: '100%'}}
          />
        </TouchableHighlight>
        <TextTitle
          fontWeight="600"
          fontSize={20}
          fontColor="#fff"
          title="See Your Workout Here"
        />
      </View>

      {exerciseList.length != 0 ? (
        <View>
          <View style={{marginTop: 30}}>
            <TextTitle
              fontSize={22}
              fontColor="#fff"
              title="Exercises"
              fontWeight="400"
            />
          </View>
          <ScrollView
            style={styles.exerciseCardScroll}
            contentContainerStyle={styles.exerciseCardContainer}>
            {exerciseList &&
              exerciseList.map(exercise => (
                <ExerciseCard
                  exercise={exercise}
                  key={exercise.id}
                  onCardPress={onExerciseCardPress}
                />
              ))}
          </ScrollView>
        </View>
      ) : (
        <View style={{marginTop:20}}> 
        <TextTitle
          fontSize={20}
          fontColor="red"
          title="Your Workout is empty"
          fontWeight="400"
        />
        <TextTitle
          fontSize={20}
          fontColor="red"
          title="Hurry Up Make Your Workout"
          fontWeight="400"
        />
        </View>
      )}
    </View>
  );
};

export default WorkOutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242525',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 20,
  },
  imageContainer: {
    width: 350,
    height: 200,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    marginTop: 10,
  },
  statuContainer: {
    marginTop: 10,
    backgroundColor: '#3BF819',
    height: 40,
    width: 350,
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  exerciseCardScroll: {
    height: 300, // Set a fixed height for the scrollable area
    marginTop: 10,
  },
  exerciseCardContainer: {
    paddingBottom: 20, // Optional: Add space at the bottom
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 40,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#fff',
  },
});
