import React from 'react';
import { ScrollView, } from 'react-native';
import Card from '../components/elements/Card';

import bgimg from '../assets/images/secondgril.jpg';



export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Home"
  };
  render() {
    return (
      <ScrollView>
        <Card title="London trip" subtitle="130£ to 150£" backgroundImg={bgimg} />
        <Card title="London trip" subtitle="130£ to 150£" backgroundImg={bgimg} />
      </ScrollView>
    );
  }
}