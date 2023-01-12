import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/homeScreen/HomeScreen';
import PostDetailScreen from '../screens/postDetail/PostDetailScreen';

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="PostDetailScreen" component={PostDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;