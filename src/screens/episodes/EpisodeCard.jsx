import {View, Text, StyleSheet, FlatList} from 'react-native';
import React from 'react';
import Colors from '../../theme/colors';
import CharacterItem from './CharacterItem';

const EpisodeCard = ({item}) => {
  const renderCharacter = ({item}) => {
    return <CharacterItem url={item} />;
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.info}>Air Date: {item.air_date}</Text>
        <Text style={styles.info}>Episode: {item.episode}</Text>
      </View>
      <Text style={styles.subtitle}>Characters:</Text>
      <FlatList
        data={item.characters}
        renderItem={renderCharacter}
        keyExtractor={item => item}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.characterList}
        ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
      />
    </View>
  );
};

export default EpisodeCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: Colors.BACKGROUNDCOLOR,
  },
  header: {
    backgroundColor: '#e4dccf',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
  },
  info: {
    fontSize: 18,
    color: '#7f7558',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  characterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
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
    marginRight: 10,
  },
  characterName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
