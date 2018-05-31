import React from 'react';
import { Provider } from 'react-redux';
import MovieList from './src/MovieList';
import { store, persistor } from './store';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MovieList />
      </Provider>
    );
  }
}

export default App;
