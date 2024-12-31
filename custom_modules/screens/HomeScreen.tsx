import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import TextTitle from '../components/TextTitle';
import {ScrollView} from 'react-native';
import useGetExerciseList from '../hooks/useGetExerciseList';
import ExerciseCard from '../components/ExerciseCard';

const HomeScreen = () => {

   const {data:exerciseList,error,isLoading}=useGetExerciseList()


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
          title="Nethupama Shavinda"
          fontWeight="400"
        />
      </View>

      <View style={styles.statuContainer}>
        <TextTitle
          fontSize={20}
          fontColor="#000"
          title="Total Likes"
          fontWeight="bold"
        />
        <TextTitle
          fontSize={20}
          fontColor="#000"
          title="24"
          fontWeight="bold"
        />
      </View>

      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/homeBackgroundImage.png')}
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
      {!isLoading?(
      <ScrollView
        style={styles.exerciseCardScroll}
        contentContainerStyle={styles.exerciseCardContainer}>
          {exerciseList && exerciseList.map((exercise)=>(
            <ExerciseCard exercise={exercise} key={exercise.id}/>
          ))} 
      </ScrollView>):null}
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
    height: 210,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    marginTop: 10,
  },
  statuContainer: {
    marginTop: 10,
    backgroundColor: '#3BF819',
    height: 50,
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
