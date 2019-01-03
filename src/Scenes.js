import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import MovieList from './MovieList';
import Detail from './Detail';


class Scenes extends Component {

  render() {
    return (
      <Router>
        <Scene key='root'>

        <Scene
          component={MovieList}
          key='MovieList'
          title='News App'
          initial
        />

        <Scene
          component={Detail}
          key='Detail'
          title='Detail'
          back
        />

        </Scene>
      </Router>
    );
  }
}

export default Scenes;
