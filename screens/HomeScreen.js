import React from "react";
import { ScrollView, View } from "react-native";
import Card from "../components/elements/Card";

import bgimg from "../assets/images/secondgril.jpg";

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Goals"
  };
  render() {
    return (
      <ScrollView>
        <View>
          <Card
            title="London trip"
            subtitle="130£ to 150£"
            backgroundImg={bgimg}
          />
        </View>
        <View>
          <Card
            title="London trip"
            subtitle="130£ to 150£"
            backgroundImg={bgimg}
          />
        </View>
      </ScrollView>
    );
  }
}
