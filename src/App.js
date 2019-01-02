import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { initializeApp } from 'firebase';
import thunk from 'redux-thunk';
import reducers from './reducers';
import firebaseConfig from './constants/firebase';
import Router from './Router';

class App extends Component {
  componentDidMount() {
    initializeApp(firebaseConfig);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(thunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
