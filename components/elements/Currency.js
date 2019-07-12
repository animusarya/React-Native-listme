import React from 'react';
import PropTypes from 'prop-types';
import { numberFormat } from 'underscore.string';

import { Text } from 'react-native';

const Currency = ({ style, currency, amount }) => (
  <Text style={style}>
    {currency}
    {numberFormat(parseFloat(amount), 2)}
  </Text>
);

Currency.propTypes = {
  currency: '£',
  style: {},
};

Currency.propTypes = {
  amount: PropTypes.any.isRequired,
  currency: PropTypes.string,
  style: PropTypes.number,
};

export default Currency;
