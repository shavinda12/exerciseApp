import React, { useEffect } from 'react';
import {ActivityIndicator, Image, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import TextTitle from '../components/TextTitle';
import {ScrollView} from 'react-native';
import useGetExerciseList from '../hooks/useGetExerciseList';
import ExerciseCard from '../components/ExerciseCard';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackParamList} from '../../Navigation/StackNavigation/stackNavigation';
import {useNavigation} from '@react-navigation/native';
import {Exercise} from '../types/Exercise';
import useSelectedExerciseStore from '../store/SelectedExerciseStore';
import useUserNameStore from '../store/UserNameStore';

type HomeScreenNavigationProp = NativeStackNavigationProp<
  StackParamList,
  'HomeScreen'
>;


const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const {data: exerciseList, error, isLoading} = useGetExerciseList();

  const {selectedExercises} = useSelectedExerciseStore();

  const{loggedUserName}=useUserNameStore()

  const onExerciseCardPress = (exercise: Exercise) => {
    navigation.navigate('ExerciseDetailScreen', {exercise});
  };

  useEffect(()=>{
    
  },[])

  

  return (
    <View style={styles.container}>
      <View>
        <TextTitle
          fontSize={14}
          fontColor="#fff"
          title="Welcome Back"
          fontWeight="normal"
        />
        <TextTitle
          fontSize={22}
          fontColor="#fff"
          title={loggedUserName}
          fontWeight="400"
        />
      </View>

      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/exerciseWorkout.jpeg')}
          resizeMode="cover"
          style={{width: '100%', height: '100%'}}
        />
      </View>

      <View style={{marginTop: 10}}>
        <TextTitle
          fontSize={22}
          fontColor="#fff"
          title="Exercises"
          fontWeight="400"
        />
      </View>
      {!isLoading ? (
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
      ) : (
        <View style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
          <ActivityIndicator size="large" color="#3BF819"/>
        </View>
        
      )}

      <TouchableHighlight
        style={styles.statuContainer}
        onPress={() => navigation.navigate('WorkoutScreen')}>
        <View style={{display:"flex",flexDirection:"row",gap:100}}> 
          <TextTitle
            fontSize={18}
            fontColor="#000"
            title="See Your Workout"
            fontWeight="400"
          />
          <TextTitle
            fontSize={18}
            fontColor="#000"
            title={selectedExercises.length.toString()}
            fontWeight="300"
          />
        </View>
      </TouchableHighlight>
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
    padding: 20,
  },
  imageContainer: {
    width: 350,
    height: 200,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
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
});

export default HomeScreen;
