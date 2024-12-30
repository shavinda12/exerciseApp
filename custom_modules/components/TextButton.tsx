import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface TextButtonProps {
  titleText: string;
  buttonText: string;
}

const TextButton = ({buttonText,titleText}: TextButtonProps) => {
  return (
    <TouchableOpacity>
      <View style={styles.textButtonContainer}>
        <Text style={styles.textStyle}>{titleText}</Text>
        <Text style={styles.textButton}>{buttonText}</Text>
      </View>
    </TouchableOpacity>
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
