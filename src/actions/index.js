export const userOpenedApp = () => {
  return (dispatch) => {
    fetch('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=6aa497f7a8e64cbcb78cb6b181ff3cec')
      .then((response) => response.json())
      .then((responseJson) => {
        dispatch({ type: 'user_opened_app', payload: responseJson });
      })
  .catch((error) => {
        console.error(error);
     });
};
};
