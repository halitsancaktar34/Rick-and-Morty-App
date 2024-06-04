//import liraries
import React, {Component, useEffect, useMemo} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {screensStyle} from '../../styles/screensStyle';
import {useDispatch, useSelector} from 'react-redux';
import {getEpisodesList, loadMoreEpisodes} from '../../store/actions/episodesActions';
import { changeParams } from '../../store/actions/charactersActions';
import Spinner from '../../components/uı/spinner';
import EpisodeCard from './EpisodeCard';

// create a component
const Episodes = () => {
  const {episodesList, pending, params} = useSelector(state => state.episodes);
  const dispatch = useDispatch();

  const memoizedData = useMemo(() => episodesList, [episodesList]);

  useEffect(() => {
    dispatch(getEpisodesList(params));
  }, [params]);

 const handleLoadMore = () => {
    let page = params.page + 1;
    dispatch(changeParams({page: page}));
    dispatch(loadMoreEpisodes(params));
  };
  return (
    <View style={screensStyle.container}>
      {pending ? (
        <Spinner />
      ) : (
        <FlatList
          data={memoizedData}
          renderItem={({item}) => <EpisodeCard item={item} />}
          // onEndReachedThreshold={0.5}
          // onEndReached={handleLoadMore}
          // ListFooterComponent={<Spinner />}
        />
      )}
    </View>
  );
};

export default Episodes;
