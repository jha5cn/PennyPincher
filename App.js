import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { createStore } from 'redux';
import rootReducer from './reducers';
import { Provider } from 'react-redux';
import { bgStatusBar, bgHeader } from './styles';
import ReduxNavigation from './navigation/ReduxNavigation'

const store = createStore(rootReducer)

const App = () => (
  <Provider store={store}>
    <View style={styles.container}>
      <StatusBar
      translucent
      backgroundColor={bgStatusBar}
      animated
      />
      <ReduxNavigation />
    </View>
  </Provider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
