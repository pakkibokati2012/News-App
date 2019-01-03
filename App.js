import React from 'react';
import { Provider } from 'react-redux';
import Scenes from './src/Scenes';
import { store } from './store';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Scenes />
      </Provider>
    );
  }
}

export default App;
