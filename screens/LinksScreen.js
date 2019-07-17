import React from "react";
import { ScrollView, ImageBackground, View, Text, Button } from "react-native";
import styled from "styled-components";

import backgroundImg from "../assets/images/secondgril.jpg";
import TextButton from "../components/elements/TextButton";

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

const MainContainer = styled.View`
  flex: 1;
  width: auto;
  height: 200;
  align-items: flex-start;
  flex-direction: row;
  justify-content: space-between;
  align-content: space-between;
`;

const LeftContainer = styled.View`
  flex: 1;
  width: 200;
  height: 50;
  padding-vertical: 10;
  padding-horizontal: 40;
`;

const RightContainer = styled.View`
  flex: 1;
  width: 200;
  height: 50;
  padding-vertical: 10;
  padding-horizontal: 40;
`;

const SmallButton = styled(TextButton)`
  font-size: 19;
  background-color: transparent;
  font-weight: 600;
  color: #000;
  &:hover {
    border-bottom: 1px solid blue;
  }
`;

export default function LinksScreen() {
  return (
    <ScrollView>
      <CardImageBackground source={backgroundImg}>
        <Icon name="circle-with-cross" size={32} />
        <Title>London trip</Title>
        <SubTitle>130£ to 150£</SubTitle>
      </CardImageBackground>
      <MainContainer>
        <LeftContainer>
          <SmallButton>RULES</SmallButton>
        </LeftContainer>
        <RightContainer>
          <SmallButton>ACTIVITY</SmallButton>
        </RightContainer>
      </MainContainer>
    </ScrollView>
  );
}

LinksScreen.navigationOptions = {
  title: "Links"
};
