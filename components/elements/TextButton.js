import React from 'react';
import PropTypes from 'prop-types';

import { StyleSheet, TouchableOpacity, Text } from 'react-native';

const styles = StyleSheet.create({
  text: {
    color: '#fff',
    fontSize: 12,
  },
});

const TextButton = ({ style, onPress, children }) => (
  <TouchableOpacity onPress={onPress}>
    <Text style={[styles.text, style]}>{children}</Text>
  </TouchableOpacity>
);

TextButton.defaultProps = {
  style: {},
};

TextButton.propTypes = {
  style: PropTypes.object,
  onPress: PropTypes.func,
  children: PropTypes.element,
};

export default TextButton;
