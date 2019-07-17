import React from "react";
import styled from "styled-components";
import { View, Text } from "react-native";

import { SimpleLineIcons } from "@expo/vector-icons";

const MainContainer = styled.View`
  flex: 1;
  width: auto;
  height: 130;
  align-items: flex-start;
  flex-direction: row;
  justify-content: space-between;
  align-content: space-between;
  padding-vertical: 20;
  padding-horizontal: 20;
`;

const FirstColumn = styled.View`
  flex: 1;
  width: 50;
  height: 100;
  background-color: #fffafa;
  padding-vertical: 5;
  padding-horizontal: 4;
`;

const SecondColumn = styled.View`
  flex: 2;
  width: 300;
  height: 100;
  background-color: #fffafa;
`;

const ThirdColumn = styled.View`
  flex: 1;
  width: 50;
  height: 100;
  background-color: #fffafa;
  padding-vertical: 10;
  padding-horizontal: 10;
`;

const Title = styled.Text`
  font-size: 15;
  font-weight: 600;
  color: black;
  margin-left: 6px;
  margin-top: 2px;
`;

const SubTitle = styled.Text`
  font-size: 12;
  color: black;
  font-weight: 500;
  margin-left: 6px;
  margin-top: 3px;
`;

const Icon = styled(SimpleLineIcons)`
  color: black;
`;

const RulesCard = ({ title, subtitle, IconName }) => (
  <MainContainer>
    <FirstColumn>
      <Text>
        <Icon name={IconName} size={32} />
      </Text>
    </FirstColumn>
    <SecondColumn>
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
    </SecondColumn>
    <ThirdColumn>
      <Text>fnhjshf</Text>
    </ThirdColumn>
  </MainContainer>
);

export default RulesCard;
