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

const ExerciseDetailScreen = () => {
  return (
    <View style={styles.conatiner}>
      <View style={styles.header}>
        <TouchableHighlight style={styles.iconContainer}>
          <Image
            source={require('../icons/back_arrow.png')}
            style={{width: '100%', height: '100%'}}
          />
        </TouchableHighlight>
        <TextTitle
          fontWeight="600"
          fontSize={20}
          fontColor="#fff"
          title="Bench Press"
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
            source={{uri: 'https://v2.exercisedb.io/image/Y2Lu-2Bemqo-YZ'}}
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
          <TextTitle
            fontWeight="200"
            fontSize={16}
            fontColor="#fff"
            title="Lie flat on your back with your knees bent and feet flat on the ground."
          />

          <TextTitle
            fontWeight="200"
            fontSize={16}
            fontColor="#fff"
            title="Place your hands behind your head with your elbows pointing outwards."
          />

          <TextTitle
            fontWeight="200"
            fontSize={16}
            fontColor="#fff"
            title="Engaging your abs, slowly lift your upper body off the ground, curling forward until your torso is at a 45-degree angle."
          />

          <TextTitle
            fontWeight="200"
            fontSize={16}
            fontColor="#fff"
            title="Pause for a moment at the top, then slowly lower your upper body back down to the starting position."
          />

          <TextTitle
            fontWeight="200"
            fontSize={16}
            fontColor="#fff"
            title="Repeat for the desired number of repetitions."
          />

          <TextTitle
            fontWeight="200"
            fontSize={16}
            fontColor="#fff"
            title="Pause for a moment at the top, then slowly lower your upper body back down to the starting position."
          />

          <TextTitle
            fontWeight="200"
            fontSize={16}
            fontColor="#fff"
            title="Pause for a moment at the top, then slowly lower your upper body back down to the starting position."
          />

          <TextTitle
            fontWeight="200"
            fontSize={16}
            fontColor="#fff"
            title="Pause for a moment at the top, then slowly lower your upper body back down to the starting position."
          />
        </View>
      </ScrollView>

      <View>
        <Button buttonText='Add To Workout' buttonTextColor='#fff' onClickButton={()=>console.log("hello")}/>
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
    display: 'flex',
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
