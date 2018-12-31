import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { initializeApp } from 'firebase';
import reducers from './reducers';
import firebaseConfig from './constants/firebase';
import LoginForm from './components/LoginForm';
import { Header } from './components/common';

class App extends Component {
  componentDidMount() {
    initializeApp(firebaseConfig);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Header headerText="Manager" />
          <LoginForm />
        </View>
      </Provider>
    );
  }
}

export default App;
