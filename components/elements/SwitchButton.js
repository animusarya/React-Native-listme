import React, { Component } from "react";
import { View, Switch } from "react-native";
import styled from "styled-components";

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #fff;
`;

export default class SwitchButton extends Component {
  state = {
    switchValue: true
  };

  _handleToggleSwitch = () =>
    this.setState(state => ({
      switchValue: !state.switchValue
    }));

  render() {
    return (
      <Container>
        <Switch
          onValueChange={this._handleToggleSwitch}
          value={this.state.switchValue}
        />
      </Container>
    );
  }
}
