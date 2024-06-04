//import liraries
import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {screensStyle} from '../../styles/screensStyle';
import SearchCharacters from '../../components/searchs/SearchCharacters';
import SearchEpisodes from '../../components/searchs/SearchEpisodes';
import Toggle from '../../components/uı/Toggle';

// create a component
const Search = () => {
  const [section, setSection] = useState(true);

  return (
    <View style={screensStyle.container}>
      <Toggle section={section} setSection={setSection}/>
      {section ? <SearchCharacters /> : <SearchEpisodes />}
    </View>
  );
};

export default Search;
