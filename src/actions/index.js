import { USER_OPENED_APP } from './types';

export const userOpenedApp = () => {
  return (dispatch) => {
    fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {
        //dispatch({ type: USER_OPENED_APP, payload: responseJson });
dispatch({ type: 'ram', payload: responseJson });




  })
  .catch((error) => {
       console.error(error);
       console.log(error);
     });
};
};
