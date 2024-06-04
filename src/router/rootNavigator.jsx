import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from './tabRouter';
import {CHARACTER_DETAIL, FILTER_CHARACTERS, TAB_NAVIGATOR} from '../utils/routes';
import CharacterDetail from '../screens/characters/characterDetail';
import Colors from '../theme/colors';
import FilterCharacters from '../screens/characters/filterCharacters';

const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.BACKGROUNDCOLOR,
        },
        headerBackTitle: 'Back',
      }}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name={TAB_NAVIGATOR}
        component={TabNavigator}
      />
      <Stack.Screen name={CHARACTER_DETAIL} component={CharacterDetail} />
      <Stack.Screen name={FILTER_CHARACTERS} component={FilterCharacters} />
    </Stack.Navigator>
  );
}

export default RootNavigator;
