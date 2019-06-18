import React from 'react';
import styled from 'styled-components';

// import { Ionicons } from '@expo/vector-icons';

import bgimg from '../../assets/images/red.jpg';
import { ImageBackground, Text } from 'react-native';

const MainContainer = styled.View`
`;




const CardWrapper = styled.View`
`;

const Title = styled.Text`
    font-size : 35; 
   
`;
const SubTitle = styled.Text`
   
`;

const CardImage = () => (
    // <MainContainer>
    //     <CardImageWrapper source={bgimg} />
    //     <CardWrapper>
    //         {/* <Ionicons name="md-more-vertical" size={32} color="green" /> */}
    //         <Title>London Text</Title>
    //         <SubTitle>Demo Text</SubTitle>
    //     </CardWrapper>
    // </MainContainer>
    <ImageBackground source={bgimg} style={{ width: '200%', height: '300%' }}>
        <Title>Lodon trip</Title>
        <SubTitle>130 of 220</SubTitle>
    </ImageBackground>
);

export default CardImage;
