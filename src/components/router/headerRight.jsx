//import liraries
import {FilterSearch, SearchNormal} from 'iconsax-react-native';
import React, {Component} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import Colors from '../../theme/colors';
import {useNavigation} from '@react-navigation/native';
import {FILTER_CHARACTERS,} from '../../utils/routes';

// create a component
const HeaderRight = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => navigation.navigate(FILTER_CHARACTERS)}
        style={styles.button}>
        <FilterSearch size={27} color={Colors.BLACK} />
      </Pressable>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  button: {
    marginHorizontal: 15,
  },
});

//make this component available to the app
export default HeaderRight;
