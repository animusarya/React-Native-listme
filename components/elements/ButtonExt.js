import React from 'react';
import PropTypes from 'prop-types';
import Button from 'apsl-react-native-button';

import { StyleSheet } from 'react-native';

import MainStyles from '../styles';

const styles = StyleSheet.create({
  primary: {
    backgroundColor: MainStyles.colors.white,
    borderColor: MainStyles.colors.white,
    borderRadius: 22,
    marginLeft: 85,
    marginRight: 85,
  },
  secondary: {
    backgroundColor: MainStyles.colors.codGrayLite,
    borderColor: MainStyles.colors.mineShaft,
    borderWidth: 1,
    borderRadius: 22,
    marginLeft: 85,
    marginRight: 85,
  },
  primaryText: {
    color: MainStyles.variables.primaryColor,
    fontSize: 16,
  },
  secondaryText: {
    color: MainStyles.variables.primaryColor,
    fontSize: 16,
  },
  form: {
    backgroundColor: MainStyles.colors.white,
    borderColor: MainStyles.colors.white,
    borderRadius: 22,
    marginLeft: 40,
    marginRight: 40,
  },
});

const ButtonExt = ({
  style,
  fontStyle,
  buttonText,
  onPress,
  type,
  isDisabled,
}) => {
  let buttonStyle;
  let textStyle;
  if (type === 'primary') {
    buttonStyle = styles.primary;
    textStyle = styles.primaryText;
  } else if (type === 'secondary') {
    buttonStyle = styles.secondary;
    textStyle = styles.secondaryText;
  } else if (type === 'form') {
    buttonStyle = styles.form;
    textStyle = styles.primaryText;
  }

  return (
    <Button
      style={[buttonStyle, style]}
      textStyle={[textStyle, fontStyle]}
      isDisabled={isDisabled}
      onPress={onPress}
    >
      {buttonText}
    </Button>
  );
};
ButtonExt.defaultProps = {
  style: {},
  fontStyle: {},
  type: 'primary', // types: primary, secondary, form
  isDisabled: false,
};
ButtonExt.propTypes = {
  style: PropTypes.object,
  fontStyle: PropTypes.object,
  buttonText: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  type: PropTypes.string,
  isDisabled: PropTypes.bool,
};

export default ButtonExt;
