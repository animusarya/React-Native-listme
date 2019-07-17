import React from "react";
import styled from "styled-components";
import { View, Text } from "react-native";

const MainContainer = styled.View`
  flex: 1;
  width: auto;
  height: 200;
  align-items: flex-start;
  flex-direction: row;
  justify-content: space-between;
  align-content: space-between;
`;

const FirstColumn = styled.View`
  flex: 1;
  width: 100;
  height: 50;
  padding-vertical: 10;
  padding-horizontal: 40;
  background-color: red;
`;

const SecondColumn = styled.View`
  flex: 1;
  width: 100;
  height: 50;
  padding-vertical: 10;
  padding-horizontal: 40;
  background-color: green;
`;

const ThirdColumn = styled.View`
  flex: 1;
  width: 100;
  height: 50;
  padding-vertical: 10;
  padding-horizontal: 40;
  background-color: black;
`;

const RulesCard = () => (
  <MainContainer>
    <FirstColumn>
      <Text>onebox</Text>
    </FirstColumn>
    <SecondColumn>
      <Text>Twobox</Text>
    </SecondColumn>
    <ThirdColumn>
      <Text>thirdbox</Text>
    </ThirdColumn>
  </MainContainer>
);

export default RulesCard;
