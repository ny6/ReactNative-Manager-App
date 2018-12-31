import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { initializeApp } from 'firebase';
import thunk from 'redux-thunk';
import reducers from './reducers';
import firebaseConfig from './constants/firebase';
import LoginForm from './components/LoginForm';
import { Header } from './components/common';

class App extends Component {
  componentDidMount() {
    initializeApp(firebaseConfig);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(thunk));

    return (
      <Provider store={store}>
        <View>
          <Header headerText="Manager" />
          <LoginForm />
        </View>
      </Provider>
    );
  }
}

export default App;
