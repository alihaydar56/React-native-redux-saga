import React from 'react';
import { LogBox } from 'react-native';

import {SafeAreaView} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import RootStack from './src/router/rootStack';

LogBox.ignoreLogs(['Warnings...'])

LogBox.ignoreAllLogs();

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={{flex: 1}}>
        <RootStack></RootStack>
      </SafeAreaView>
    </Provider>
  );
};

export default App;
