import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { StyleSheet, View } from 'react-native';

import ButtonExt from './ButtonExt';

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
});

class ShareBtn extends Component {
  handleShare = () => {
    const { title, description, permalink } = this.props;
    // Share.open({
    //   message: description,
    //   url: permalink,
    //   title,
    //   subject: title,
    // });
  };

  render() {
    return (
      <View style={styles.container}>
        <ButtonExt
          buttonText="Share"
          type="secondary"
          onPress={this.handleShare}
        />
      </View>
    );
  }
}

ShareBtn.defaultProps = {
  description: '',
};

ShareBtn.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  permalink: PropTypes.string.isRequired,
};

export default ShareBtn;
