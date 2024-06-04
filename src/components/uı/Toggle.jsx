import { View, Text } from 'react-native'
import React from 'react'
import DuoToggleSwitch from 'react-native-duo-toggle-switch';
const Toggle = ({section, setSection}) => {
  return (
    <View style={{alignItems: 'center'}}>
        <DuoToggleSwitch
          primaryText="Characters"
          secondaryText="Episodes"
          onPrimaryPress={() => {
            setSection(true);
          }}
          onSecondaryPress={() => {
            setSection(false);
          }}
          primaryTextStyle={{ width: 80, }}
          secondaryButtonStyle={{}}
          style={{width: 300, height: 50 , padding: 20}}
        />
      </View>
  )
}

export default Toggle