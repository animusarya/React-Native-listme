import React from "react";
import { ScrollView, ImageBackground } from "react-native";
import styled from "styled-components";

import backgroundImg from "../assets/images/secondgril.jpg";

import { Entypo } from "@expo/vector-icons";

const CardImageBackground = styled(ImageBackground)`
  height: 350;
  margin-top: 20;
  border-radius: 40;
`;

const Icon = styled(Entypo)`
  color: white;
  margin-top: 20;
  margin-left: 290;
`;

const Title = styled.Text`
  font-size: 21;
  margin-left: 10;
  margin-top: 230;
  font-weight: 700;
  color: white;
`;

const SubTitle = styled.Text`
  font-size: 19;
  margin-left: 10;
  color: white;
  font-weight: 600;
`;

export default function LinksScreen() {
  return (
    <ScrollView>
      <CardImageBackground source={backgroundImg}>
        <Icon name="circle-with-cross" size={32} />
        <Title>London trip</Title>
        <SubTitle>130£ to 150£</SubTitle>
      </CardImageBackground>
    </ScrollView>
  );
}

LinksScreen.navigationOptions = {
  title: "Links"
};
