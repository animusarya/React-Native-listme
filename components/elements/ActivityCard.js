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

const Descriptions = styled.Text`
  font-size: 12;
  margin-top: 20;
  color: black;
  font-weight: 300;
`;

const Time = styled.Text`
  font-size: 12;
  color: grey;
  font-weight: 300;
`;

const Amount = styled.Text`
  font-size: 16;
  color: green;
  font-weight: 300;
  margin-vertical: 20;
  margin-horizontal: 10;
`;

const Icon = styled(SimpleLineIcons)`
  color: black;
  margin-vertical: 20;
  margin-horizontal: 20;
`;

const ActivityCard = ({ descriptions, time, iconName, amount }) => (
  <MainContainer>
    <FirstColumn>
      <Icon name={iconName} size={32} />
    </FirstColumn>
    <SecondColumn>
      <Descriptions>{descriptions}</Descriptions>
      <Time>{time}h ago</Time>
    </SecondColumn>
    <ThirdColumn>
      <Amount>{amount}€</Amount>
    </ThirdColumn>
  </MainContainer>
);

export default ActivityCard;
