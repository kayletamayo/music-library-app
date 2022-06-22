import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SongDetailScreen, SongListScreen } from '../screens/songs';
import { ROUTES } from './routes';

const Stack = createNativeStackNavigator();
const { Navigator } = Stack;

export const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator initialRouteName={ROUTES.SONG_LIST}>
        <Stack.Screen name={ROUTES.SONG_LIST} component={SongListScreen} />
        <Stack.Screen name={ROUTES.SONG_DETAIL} component={SongDetailScreen} />
      </Navigator>
    </NavigationContainer>
  );
}