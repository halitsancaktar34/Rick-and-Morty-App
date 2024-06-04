//import liraries
import React, {useEffect} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {screensStyle} from '../../styles/screensStyle';
import {useDispatch, useSelector} from 'react-redux';
import {
  getSingleCharacter,
  resetData,
} from '../../store/actions/charactersActions';
import Spinner from '../../components/uı/spinner';
import {characterDetailStyle} from '../../styles/charactersStyle';
import {statusTypes} from '../../utils/constans';

// create a component
const CharacterDetail = ({route}) => {
  const {characterID} = route?.params;
  const {pendingSingleCharacter, singleCharacter} = useSelector(
    state => state.characters,
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSingleCharacter(characterID));
    return () => {
      dispatch(resetData());
    };
  }, []);

  return (
    <View style={screensStyle.container}>
      {pendingSingleCharacter ? (
        <Spinner />
      ) : (
        <ScrollView>
          <View style={characterDetailStyle.imageContainer}>
            <Image
              style={[
                characterDetailStyle.image,
                singleCharacter.status == statusTypes.ALIVE
                  ? characterDetailStyle.statusAliveContainer
                  : characterDetailStyle.statusDeadContainer,
              ]}
              source={{
                uri: singleCharacter.image,
              }}
            />
            <View
              style={
                singleCharacter.status == statusTypes.ALIVE
                  ? characterDetailStyle.aliveStatusContainer
                  : characterDetailStyle.deadStatusContainer
              }>
              <Text style={characterDetailStyle.status}>
                {singleCharacter.status}
              </Text>
            </View>
          </View>
          <View style={characterDetailStyle.nameContainer}>
            <Text style={characterDetailStyle.name}>
              {singleCharacter.name}
            </Text>
          </View>
          <View style={characterDetailStyle.sectionContainer}>
            <Text style={characterDetailStyle.sectionTitle}>PROPERTIES</Text>
            <View style={characterDetailStyle.rowContainer}>
              <View style={characterDetailStyle.infoContainer}>
                <Text>Gender</Text>
              </View>
              <View style={characterDetailStyle.infoBox}>
                <Text>{singleCharacter.gender}</Text>
              </View>
            </View>
            <View style={characterDetailStyle.rowContainer}>
              <View style={characterDetailStyle.infoContainer}>
                <Text>Species</Text>
              </View>
              <View style={characterDetailStyle.infoBox}>
                <Text>{singleCharacter.species}</Text>
              </View>
            </View>
            <View style={characterDetailStyle.rowContainer}>
              <View style={characterDetailStyle.infoContainer}>
                <Text>Status</Text>
              </View>
              <View style={characterDetailStyle.infoBox}>
                <Text>{singleCharacter.status}</Text>
              </View>
            </View>
          </View>
          <View style={characterDetailStyle.sectionContainer}>
            <Text style={characterDetailStyle.sectionTitle}>WHEREABOUTS</Text>
          </View>
          <View style={characterDetailStyle.rowContainer}>
            <View style={characterDetailStyle.infoContainer}>
              <Text>Origin</Text>
            </View>
            <View style={characterDetailStyle.infoBox}>
              <Text>{singleCharacter?.origin?.name}</Text>
            </View>
          </View>
          <View style={characterDetailStyle.rowContainer}>
            <View style={characterDetailStyle.infoContainer}>
              <Text>Location</Text>
            </View>
            <View style={characterDetailStyle.infoBox}>
              <Text>{singleCharacter?.location?.name}</Text>
            </View>
          </View>
          <View style={characterDetailStyle.sectionContainer}>
            <Text style={characterDetailStyle.sectionTitle}>
              FEATURE CHAPTERS
            </Text>
          </View>
          <View style={characterDetailStyle.rowContainer}>
            <View style={characterDetailStyle.infoContainer}>
              <Text>Created</Text>
            </View>
            <View style={characterDetailStyle.infoBox}>
              <Text>{singleCharacter.created}</Text>
            </View>
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default CharacterDetail;
