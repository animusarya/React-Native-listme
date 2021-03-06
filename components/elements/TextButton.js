import React from "react";
import PropTypes from "prop-types";

import { StyleSheet, TouchableOpacity, Text } from "react-native";

const styles = StyleSheet.create({
  text: {
    color: "#fff",
    fontSize: 12
  }
});

const TextButton = ({ style, onPress, title }) => (
  <TouchableOpacity onPress={onPress}>
    <Text style={[styles.text, style]}>{title}</Text>
  </TouchableOpacity>
);

TextButton.defaultProps = {
  styles: {}
};

TextButton.propTypes = {
  styles: PropTypes.object,
  onPress: PropTypes.func,
  children: PropTypes.element
};

export default TextButton;
