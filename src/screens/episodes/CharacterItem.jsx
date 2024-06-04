import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  Image,
  StyleSheet,
  Pressable,
} from 'react-native';
import axios from 'axios';
import Colors from '../../theme/colors';
import {useNavigation} from '@react-navigation/native';
import { CHARACTER_DETAIL } from '../../utils/routes';

const CharacterItem = ({url}) => {
  const [character, setCharacter] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await axios.get(url);
        setCharacter(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCharacter();
  }, [url]);

  if (!character) {
    return <ActivityIndicator size="small" color="#0000ff" />;
  }

  return (
    <Pressable
      onPress={() =>
        navigation.navigate(CHARACTER_DETAIL, {characterID: character.id})
      }>
      <View style={styles.characterContainer}>
        <Image source={{uri: character.image}} style={styles.characterImage} />
        <Text numberOfLines={2} style={styles.characterName}>
          {character.name}
        </Text>
      </View>
    </Pressable>
  );
};
export default CharacterItem;

const styles = StyleSheet.create({
  characterContainer: {
    alignItems: 'center',
    width: 100,
    height: 100,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  characterImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  characterName: {
    marginTop: 3,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
