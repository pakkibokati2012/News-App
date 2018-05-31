// import React from 'react';
// import ReduxThunk from 'redux-thunk';
// import { createStore, applyMiddleware } from 'redux';
// import { Provider } from 'react-redux';
// import reducers from './src/reducers';
// import MovieList from './src/MovieList';
//
// class App extends React.Component {
//   render() {
//     return (
//       <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
//         <MovieList />
//       </Provider>
//     );
//   }
// }
//
//  export default App;

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
