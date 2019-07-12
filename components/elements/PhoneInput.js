import React, { Component } from 'react';
import PhoneInput from 'react-native-phone-input';
import styled from 'styled-components';

import colors from '../styles/colors';

const Container = styled.View`
  padding-horizontal: 20;
  padding-vertical: 15;
`;
const Wrapper = styled.View`
  flex-direction: row;
`;
const Label = styled.Text`
  color: ${colors.pictonBlue};
  font-size: 13;
  font-weight: bold;
  padding-vertical: 15;
`;
const PhoneInputWrapper = styled.View``;
const TextInputwrapper = styled.View`
  border-bottom-color: ${colors.catskillWhite};
  border-bottom-width: 1;
`;

const ErrorText = styled.Text`
  font-size: 12;
  color: #a94442;
  margin-top: 15;
`;

class MyPhoneInput extends Component {
  onChange = () => {
    const { onHandlePhoneNumber } = this.props;
  };

  render() {
    const { error } = this.props;
    return (
      <Container>
        <Label>{'phone Number'.toUpperCase()}</Label>
        <Wrapper>
          <PhoneInput
            style={{ width: 300 }}
            textStyle={[{ color: '#000', fontSize: 16 }]}
          />
        </Wrapper>
        {error && <ErrorText>Must have valid phone number</ErrorText>}
      </Container>
    );
  }
}

export default MyPhoneInput;
