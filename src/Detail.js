import React from 'react';
import { Container, Content, Card, CardItem, Text, Body } from 'native-base';


class Detail extends React.Component {

  render() {
    return (
      <Container>
        <Content>
          <Card style={{ flex: 0 }}>
            <CardItem>
                <Body>
                  <Text note>{this.props.detail}</Text>
                </Body>
            </CardItem>

          </Card>
        </Content>
      </Container>
    );
  }
}

export default Detail;
