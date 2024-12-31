import React from 'react';
import {View} from 'react-native';
import TextTitle from './TextTitle';

interface ExerciseDetailsProp {
  topic: string;
  value: string;
}

const ExerciseDetails = ({topic, value}: ExerciseDetailsProp) => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop:10,
      }}>
      <View style={{width:"30%"}}>
        <TextTitle
          fontSize={14}
          fontColor="#000"
          title={topic}
          fontWeight="bold"
        />
      </View>
      <View style={{width:"80%",justifyContent:"flex-start"}}>
        <TextTitle
          fontSize={14}
          fontColor="#000"
          title={value}
          fontWeight="normal"
        />
      </View>
    </View>
  );
};

export default ExerciseDetails;
