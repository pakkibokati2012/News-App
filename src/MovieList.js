import React from 'react';
import { FlatList, ActivityIndicator, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { userOpenedApp } from './actions';

class MovieList extends React.Component {


  componentDidMount() {
    this.props.userOpenedApp();
  }


  render() {
    if (this.props.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={{ flex: 1, paddingTop: 20 }}>
        <FlatList
          data={this.props.data.movies}
          renderItem={({ item }) => <Text>{item.title}, {item.releaseYear}</Text>}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return { data: state.data.data, isLoading: state.data.isLoading };
};

export default connect(mapStateToProps, { userOpenedApp })(MovieList);
