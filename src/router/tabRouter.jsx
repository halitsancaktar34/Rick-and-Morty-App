import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Episodes from '../screens/episodes';
import Search from '../screens/search';
import Settings from '../screens/settings';
import {tabBarStyle} from '../styles/tabBarStyle';
import {
  CHARACTERS,
  EPISODES,
  SEARCH,
  SETTINGS,
} from '../utils/routes';
import Colors from '../theme/colors';
import TabIcon from '../components/router/tabIcon';
import HeaderRight from '../components/router/headerRight';
import Characters from '../screens/characters';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => (
          <TabIcon
            screenName={route.name}
            size={size}
            color={color}
            focused={focused}
          />
        ),
        headerStyle: tabBarStyle.headerStyle,
        tabBarStyle: { backgroundColor: Colors.BACKGROUNDCOLOR},
        tabBarActiveTintColor: '#FBA928',
        tabBarLabelStyle:{color:'black'}
      })}>
      <Tab.Screen
        name={CHARACTERS}
        component={Characters}
        options={{headerRight: props => <HeaderRight />}}
      />
      <Tab.Screen name={EPISODES} component={Episodes} />
      <Tab.Screen name={SEARCH} component={Search} />
      <Tab.Screen name={SETTINGS} component={Settings} />
    </Tab.Navigator>
  );
}
