import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface TextButtonProps {
  titleText: string;
  buttonText: string;
  onTextButtonPress:()=>void
}

const TextButton = ({buttonText,titleText,onTextButtonPress}: TextButtonProps) => {
  return (
    
      <View style={styles.textButtonContainer}>
        <Text style={styles.textStyle}>{titleText}</Text>
        <TouchableOpacity onPress={onTextButtonPress}>
        <Text style={styles.textButton}>{buttonText}</Text>
        </TouchableOpacity>
      </View>
    
  );
};

const styles = StyleSheet.create({
  textButton: {
    color: '#fff',
    fontSize: 14,
  },
  textButtonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  textStyle: {
    color: '#fff',
    marginRight: 5,
  },
});

export default TextButton;
