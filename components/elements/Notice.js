import React from 'react';
import PropTypes from 'prop-types';

import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  text: {
    color: '#141010',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
});

const Notice = ({ value }) => (
  <View style={styles.container}>
    <Text style={styles.text}>{value}</Text>
  </View>
);

Notice.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Notice;
