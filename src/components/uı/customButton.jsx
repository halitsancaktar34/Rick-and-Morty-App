//import liraries
import React, {Component} from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

// create a component
const CustomButton = ({ onPress, backColor, title }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.buttonContainer, { backgroundColor: backColor }]}
    >
      <Text style={styles.buttonTitle}>{title}</Text>
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  buttonContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTitle: {
    color: '#FFFFFF', // Default title color
    fontSize: 16,
    fontWeight: 'bold',
  },
});

//make this component available to the app
export default CustomButton;
