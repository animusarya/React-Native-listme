import React from "react";
import styled from "styled-components";

import { SimpleLineIcons } from "@expo/vector-icons";

import { ImageBackground, Text } from "react-native";

const CardImageBackground = styled(ImageBackground)`
  width: 300;
  height: 350;
  align-self: center;
  margin-top: 10;
  border-radius: 40;
`;

const Icon = styled(SimpleLineIcons)`
  color: white;
  margin-left: 260;
  margin-top: 20;
`;

const Title = styled.Text`
  font-size: 21;
  margin-left: 10;
  margin-top: 230;
  font-weight: 600;
  color: white;
`;

const SubTitle = styled.Text`
  font-size: 19;
  margin-left: 10;
  color: white;
  font-weight: 600;
`;

const CardImage = ({ title, subtitle, backgroundImg }) => (
  <CardImageBackground source={backgroundImg}>
    <Icon name="options-vertical" size={32} />
    <Title>{title}</Title>
    <SubTitle>{subtitle}</SubTitle>
  </CardImageBackground>
);

export default CardImage;
