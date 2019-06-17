import React from 'react';
import styled from 'styled-components';
import { Ionicons } from '@expo/vector-icons';

import bgimg from '../../assets/images/red.jpg';

const MainContainer = styled.View`
    background-color: #F1F1F4;
`;

const CardContainer = styled.View`
    width: 140;
    height: 165;
    background-color: #fdfdff;
    border-radius: 12px;
    margin-vertical: 25;
    margin-left: 5%;
    margin-bottom: 5%;
    shadow-color: #000000;
    elevation: 1;
    z-index: -1;
`;
const ImageContainer = styled.View`
    width: 250;
    height: 250;
    position: absolute;
    margin-vertical: -10;
    margin-horizontal: -7;
`;

const CardImageWrapper = styled.Image`
    width: 120;
    height: 120;
    border-radius: 12;
`;


const CardWrapper = styled.View`
    justify-content: space-evenly;
    flex-direction: row;
    margin-vertical: 115;
`;

const CradWrapperText = styled.Text`
    margin-vertical: 5;
`;

const CardImage = () => (
    <MainContainer>
        <CardImageWrapper source={bgimg} />

        <CardWrapper>
            <Ionicons name="md-checkmark-circle" size={32} color="green" />
            <CradWrapperText>Demo Text</CradWrapperText>
        </CardWrapper>
    </MainContainer>
);

export default CardImage;
