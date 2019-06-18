import React from 'react';
import styled from 'styled-components';

// import { Ionicons } from '@expo/vector-icons';

import { ImageBackground, Text } from 'react-native';

const CardImageBackground = styled(ImageBackground)`
  width : 300;
  height: 300;
  align-self: center;
`;

const Title = styled.Text`
    font-size : 21; 
    margin-top: 80%;
    font-weight : 600;
    color: white;
`;

const SubTitle = styled.Text`
    font-size : 19;  
    color: white;
    font-weight : 600;
`;

const CardImage = ({ title, subtitle, backgroundImg }) => (
    <CardImageBackground source={backgroundImg}>
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
    </CardImageBackground>
);

export default CardImage;
