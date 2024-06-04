//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ArrowRight2} from 'iconsax-react-native';
import Colors from '../../theme/colors';
import {CHARACTER_DETAIL} from '../../utils/routes';

// create a component
const SearchItem = ({item}) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() =>
        navigation.navigate(CHARACTER_DETAIL, {characterID: item.id})
      }
      style={styles.container}>
      <Text style={styles.name}>{item.name}</Text>
      <ArrowRight2 size="25" color={Colors.BLACK} />
    </Pressable>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderColor: Colors.BROWN,
  },
  name: {
    fontSize: 18,
  },
});

//make this component available to the app
export default SearchItem;
