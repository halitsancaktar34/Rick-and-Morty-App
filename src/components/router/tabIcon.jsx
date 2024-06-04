//import liraries
import React, {Component} from 'react';
import {CHARACTERS, EPISODES, SEARCH, SETTINGS} from '../../utils/routes';
import {
  Book1,
  PresentionChart,
  Setting2,
  SearchNormal1,
} from 'iconsax-react-native';
// create a component
const TabIcon = ({screenName, color, focused, size}) => {
  if (screenName == CHARACTERS) {
    return (
      <Book1 size={size} color={color} variant={focused ? 'Bold' : 'Outline'} />
    );
  }
  if (screenName == EPISODES) {
    return (
      <PresentionChart
        size={size}
        color={color}
        variant={focused ? 'Bold' : 'Outline'}
      />
    );
  }
  if (screenName == SEARCH) {
    return (
      <SearchNormal1
        size={size}
        color={color}
        variant={focused ? 'Bold' : 'Outline'}
      />
    );
  }
  if (screenName == SETTINGS) {
    return (
      <Setting2
        size={size}
        color={color}
        variant={focused ? 'Bold' : 'Outline'}
      />
    );
  }
  s;
};
export default TabIcon;
