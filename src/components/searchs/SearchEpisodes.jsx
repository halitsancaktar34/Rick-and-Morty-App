//import liraries
import {useDispatch, useSelector} from 'react-redux';
import Colors from '../../theme/colors';
import {useEffect, useMemo, useState} from 'react';
import {changeParams} from '../../store/actions/charactersActions';
import {FlatList, TextInput, View} from 'react-native';
import CustomButton from '../uı/customButton';
import SearchItem from '../characters/SearchItem';
import {screensStyle} from '../../styles/screensStyle';
import {getEpisodesList} from '../../store/actions/episodesActions';

// create a component
const SearchEpisodes = () => {
  const {episodesList, pending, params} = useSelector(state => state.episodes);
  const memoizedData = useMemo(() => episodesList, [episodesList]);
  const [searchText, setSearchText] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEpisodesList(params));
  }, [params]);

  const handleSubmit = () => {
    dispatch(changeParams({name: searchText}));
  };

  return (
    <View style={screensStyle.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 10,
          marginBottom: 10,
        }}>
        <TextInput
          value={searchText}
          returnKeyType="search"
          placeholder="Search Episodes"
          style={{
            width: '70%',
            height: 40,
            backgroundColor: Colors.BACKTITLECOLOR,
            borderWidth: 0.5,
            borderRadius: 100,
            borderColor: Colors.BROWN,
            padding: 10,
          }}
          onChangeText={text => setSearchText(text)}
        />
        <CustomButton
          onPress={() => handleSubmit()}
          title="Search"
          backColor="#FFA500"
        />
      </View>
      <FlatList
        data={memoizedData}
        renderItem={({item}) => <SearchItem item={item} />}
      />
    </View>
  );
};

export default SearchEpisodes;
