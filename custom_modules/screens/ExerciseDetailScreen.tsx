import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableHighlight,
  View,
} from 'react-native';
import TextTitle from '../components/TextTitle';
import Button from '../components/Button';
import {RouteProp, useNavigation} from '@react-navigation/native';
import {StackParamList} from '../../Navigation/StackNavigation/stackNavigation';
import useSelectedExerciseStore from '../store/SelectedExerciseStore';

type ExerciseDetailScreenRouteProps = RouteProp<
  StackParamList,
  'ExerciseDetailScreen'
>;

const ExerciseDetailScreen = ({
  route,
}: {
  route: ExerciseDetailScreenRouteProps;
}) => {
  const {exercise} = route.params;

  const navigate = useNavigation();
  const {selectedExercises:selectedExercisesList,increment,decrement}=useSelectedExerciseStore();

  const isExercisePresent=selectedExercisesList.some(exe=>exe.id === exercise.id)

  const addToWorkout=()=>{
    if(isExercisePresent){
      decrement(exercise.id)
    }else{
      increment(exercise)
    }
  }

  return (
    <View style={styles.conatiner}>
      <View style={styles.header}>
        <TouchableHighlight
          style={styles.iconContainer}
          onPress={() => navigate.goBack()}>
          <Image
            source={require('../icons/back_arrow.png')}
            style={{width: '100%', height: '100%'}}
          />
        </TouchableHighlight>
        <TextTitle
          fontWeight="600"
          fontSize={20}
          fontColor="#fff"
          title={exercise.name}
        />
      </View>

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: 20,
        }}>
        <View style={styles.imageContainer}>
          <Image
            source={{uri: exercise.gifUrl}}
            style={{width: '100%', height: '100%', borderRadius: 20}}
          />
        </View>
      </View>

      <View style={{marginTop: 20}}>
        <TextTitle
          fontWeight="600"
          fontSize={20}
          fontColor="#fff"
          title="Step-by-Step Guide"
        />
      </View>

      {exercise ? (
        <ScrollView
          style={styles.exercisedetailScroll}
          contentContainerStyle={styles.exerciseCardContainer}>
          <View
            style={{
              marginTop: 20,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'center',
              gap: 10,
            }}>
            {exercise.instructions.map((instruction, index) => (
              <TextTitle
                key={index}
                fontWeight="200"
                fontSize={16}
                fontColor="#fff"
                title={instruction}
              />
            ))}
          </View>
        </ScrollView>
      ) : null}

      <View>
        <Button
          buttonText={isExercisePresent?"Delete From Workout":"Add To Workout"}
          buttonTextColor="#fff"
          backgroundColr={isExercisePresent?"red":"#3BF819"}
          onClickButton={addToWorkout}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    backgroundColor: '#242525',
    height: '100%',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 20,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#fff',
  },
  imageContainer: {
    width: 290,
    height: 250,
    resizeMode: 'contain',
  },
  exercisedetailScroll: {
    height: 250, // Set a fixed height for the scrollable area
    marginTop: 10,
    marginBottom: 30,
  },
  exerciseCardContainer: {
    paddingBottom: 20, // Optional: Add space at the bottom
  },
});
export default ExerciseDetailScreen;
