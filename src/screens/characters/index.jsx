//import liraries
import React, {useEffect, useMemo} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {screensStyle} from '../../styles/screensStyle';
import {useDispatch, useSelector} from 'react-redux';
import {
  changeParams,
  getCharacterList,
  loadMoreCharacters,
} from '../../store/actions/charactersActions';
import Spinner from '../../components/uı/spinner';
import CharacterCard from '../../components/characters/characterCard';

// create a component
const Characters = () => {
  const {characterList, pending, params} = useSelector(
    state => state.characters,
  );
  const memoizedData = useMemo(() => characterList, [characterList]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCharacterList(params));
  }, [params]);
  
  const handleLoadMore = () => {
    let page = params.page + 1;
    dispatch(changeParams({page: page}));
    dispatch(loadMoreCharacters(params));
  };
  return (
    <View style={screensStyle.container}>
      {pending ? (
        <Spinner />
      ) : (
        <FlatList
          data={memoizedData}
          renderItem={({item}) => <CharacterCard item={item} />}
          // onEndReachedThreshold={0.5}
          // onEndReached={handleLoadMore}
          // ListFooterComponent={<Spinner />}
        />
      )}
    </View>
  );
};

export default Characters;
