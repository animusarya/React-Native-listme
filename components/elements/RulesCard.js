import React from "react";
import styled from "styled-components";
import { View, Text } from "react-native";

const MainContainer = styled.View`
  flex: 1;
  width: auto;
  height: 130;
  align-items: flex-start;
  flex-direction: row;
  justify-content: space-between;
  align-content: space-between;
  padding-vertical: 15;
  padding-horizontal: 4;
  background-color: yellow;
`;

const FirstColumn = styled.View`
  flex: 1;
  width: 50;
  height: 100;
  background-color: red;
  padding-vertical: 5;
  padding-horizontal: 4;
`;

const SecondColumn = styled.View`
  flex: 2;
  width: 300;
  height: 100;
  background-color: green;
`;

const ThirdColumn = styled.View`
  flex: 1;
  width: 50;
  height: 100;
  background-color: black;
  padding-vertical: 10;
  padding-horizontal: 10;
`;

const Title = styled.Text`
  font-size: 15;
  font-weight: 600;
  color: white;
`;

const SubTitle = styled.Text`
  font-size: 12;
  color: white;
  font-weight: 500;
`;

const RulesCard = () => (
  <MainContainer>
    <FirstColumn>
      <Text>onebox</Text>
    </FirstColumn>
    <SecondColumn>
      <Title>Lorem Ipsum</Title>
      <SubTitle>web page editors now use Lorem</SubTitle>
    </SecondColumn>
    <ThirdColumn>
      <Text>thirdbox</Text>
    </ThirdColumn>
  </MainContainer>
);

export default RulesCard;
