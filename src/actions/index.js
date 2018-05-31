export const userOpenedApp = () => {
  return (dispatch) => {
    fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {
        dispatch({ type: 'user_opened_app', payload: responseJson });
      })
  .catch((error) => {
       console.error(error);
       console.log(error);
     });
};
};
