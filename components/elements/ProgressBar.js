import React from 'react';

import { StyleSheet, View, Animated, Easing } from 'react-native';

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#bbbbbb',
    height: 15,
    overflow: 'hidden',
  },
  fill: {
    backgroundColor: '#3b5998',
    height: 15,
  },
});

class ProgressBar extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      progress: new Animated.Value(props.initialProgress || 0),
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.progress >= 0 && this.props.progress != prevProps.progress) {
      this.update();
    }
  }

  update() {
    Animated.timing(this.state.progress, {
      easing: this.props.easing,
      duration: this.props.easingDuration,
      toValue: this.props.progress,
    }).start();
  }

  render() {
    const fillWidth = this.state.progress.interpolate({
      inputRange: [0, 1],
      outputRange: [0 * this.props.style.width, 1 * this.props.style.width],
    });

    return (
      <View
        style={[
          styles.background,
          this.props.backgroundStyle,
          this.props.style,
        ]}
      >
        <Animated.View
          style={[styles.fill, this.props.fillStyle, { width: fillWidth }]}
        />
      </View>
    );
  }
}

ProgressBar.proptypes = {
  style: styles,
  easing: Easing.inOut(Easing.ease),
  easingDuration: 500,
};

module.exports = ProgressBar;
