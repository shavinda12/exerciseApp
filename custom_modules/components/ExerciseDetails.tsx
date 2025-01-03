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
        padding:5
      }}>
      <View style={{width:"30%"}}>
        <TextTitle
          fontSize={14}
          fontColor="#000"
          title={topic}
          fontWeight="normal"
        />
      </View>
      <View style={{width:"60%",justifyContent:"flex-start"}}>
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
