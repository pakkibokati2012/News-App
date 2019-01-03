import React from 'react';
import { FlatList, ActivityIndicator, View, Image, Dimensions, TouchableOpacity, Alert } from 'react-native';
import { Content, Card, CardItem, Text, Body } from 'native-base';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { userOpenedApp } from './actions';

class NewsList extends React.Component {


  componentDidMount() {
    this.props.userOpenedApp();
  }

  openDetail(detail) {
    if (detail) {
      Actions.Detail({ detail });
    } else {
      Alert.alert('No detail available for this news!');
    }
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
        <FlatList
          data={this.props.data.articles}
          renderItem={({ item }) =>
          <TouchableOpacity onPress={() => {
            console.log('item', item.content);
            this.openDetail(item.content);
          }
          }
          >
            <Content>
              <Card>
                <CardItem>
                    <Body>
                      <Text>{item.title}</Text>
                      <Text note>{item.publishedAt}</Text>
                    <Image source={{ uri: item.urlToImage }} style={{ height: 200, width: Dimensions.get('window').width - 40, flex: 1 }} />
                    <Text>
                      {item.description}
                    </Text>
                  </Body>
                </CardItem>
              </Card>
            </Content>
          </TouchableOpacity>
        }
        keyExtractor={(item, index) => index}
        />
    );
  }
}

const mapStateToProps = state => {
  return { data: state.data.data, isLoading: state.data.isLoading };
};

export default connect(mapStateToProps, { userOpenedApp })(NewsList);
