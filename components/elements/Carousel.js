import React from 'react';

import { StyleSheet, Text, ScrollView, View, Platform } from 'react-native';

const Carousel = React.createClass({
  propTypes: {
    children: React.PropTypes.node.isRequired,
    style: View.propTypes.style,
    pageStyle: View.propTypes.style,
    contentContainerStyle: View.propTypes.style,
    pageInfo: React.PropTypes.bool,
    pageInfoBackgroundColor: React.PropTypes.string,
    pageInfoTextStyle: Text.propTypes.style,
    pageInfoTextSeparator: React.PropTypes.string,
    onAnimateNextPage: React.PropTypes.func,
  },
  getDefaultProps() {
    return {
      pageInfo: false,
      pageInfoBackgroundColor: 'rgba(0, 0, 0, 0.25)',
      pageInfoTextSeparator: ' / ',
    };
  },
  getInitialState() {
    if (this.props.children) {
      const childrenCount = this.props.children.length;
      return {
        platform: Platform.OS,
        contentOffset: { x: 0, y: 0 },
        currentPage: childrenCount > 1 ? 1 : 0,
        hasChildren: true,
        size: { width: 0, height: 0 },
        scrollEnabled: true,
      };
    }
    return {
      platform: Platform.OS,
      hasChildren: false,
      size: { width: 0, height: 0 },
    };
  },
  _onScrollBegin(event) {
    // console.log('scrolling...');
  },
  _onScrollEnd(event) {
    const offset = Object.assign({}, event.nativeEvent.contentOffset);

    const childrenCount = this.props.children.length;
    const { size } = this.state;
    if (offset.x === 0) {
      offset.x = childrenCount * size.width;
    } else if (offset.x == (childrenCount + 1) * size.width) {
      offset.x = size.width;
    }
    // offset.x = childrenCount * size.width;

    this._calculateCurrentPage(offset.x);
    this.setState({ contentOffset: offset });
  },
  _onLayout() {
    const self = this;
    this.refs.container.measure((x, y, w, h, px, py) => {
      // console.log('w', w);
      self.setState({
        // contentOffset: { x: w },
        contentOffset: { x: w },
        size: { width: w, height: h },
      });
    });
  },
  goToNextPage() {
    let k = this.state.currentPage;
    const { size } = this.state;
    k++;

    this.setState({ currentPage: k });
    this.refs.scrollView.scrollTo({ y: 0, x: (k - 1) * size.width });
  },
  _calculateCurrentPage(offset) {
    const { size } = this.state;
    const totalSize = size.width * this.props.children.length;
    offset = offset >= totalSize ? 0 : offset; // bug fix
    if (this.state.platform === 'ios') {
      var page = Math.floor((offset - size.width / 2) / size.width) + 2;
    } else {
      var page = Math.floor((offset - size.width / 2) / size.width) + 1;
    }

    this.setState({ currentPage: page }, () => {
      if (this.props.onAnimateNextPage) {
        this.props.onAnimateNextPage(this.state.currentPage);
      }
    });
  },
  _renderPageInfo(pageLength) {
    return (
      <View style={styles.pageInfoBottomContainer} pointerEvents="none">
        <View style={styles.pageInfoContainer}>
          <View
            style={[
              styles.pageInfoPill,
              { backgroundColor: this.props.pageInfoBackgroundColor },
            ]}
          >
            <Text
              style={[styles.pageInfoText, this.props.pageInfoTextStyle]}
            >{`${this.state.currentPage}${
              this.props.pageInfoTextSeparator
            }${pageLength}`}</Text>
          </View>
        </View>
      </View>
    );
  },
  render() {
    let pages = [];
    let contents;
    let containerProps;

    const { size } = this.state;

    containerProps = {
      ref: 'container',
      onLayout: this._onLayout,
      style: [this.props.style],
    };

    const { children } = this.props;

    pages = children.map((page, i) => (
      <View
        style={[
          { width: size.width, height: size.height },
          this.props.pageStyle,
        ]}
        key={`page${i}`}
      >
        {page}
      </View>
    ));

    contents = (
      <ScrollView
        ref="scrollView"
        onScrollBeginDrag={this._onScrollBegin}
        onMomentumScrollEnd={this._onScrollEnd}
        alwaysBounceHorizontal={false}
        alwaysBounceVertical={false}
        contentInset={{ top: 0 }}
        automaticallyAdjustContentInsets={false}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        pagingEnabled={true}
        bounces={false}
        scrollEnabled={this.state.scrollEnabled}
        // contentOffset={this.state.contentOffset}
        // contentOffset={0}
        contentContainerStyle={[
          styles.horizontalScroll,
          this.props.contentContainerStyle,
          {
            // width: size.width*(this.props.children.length+(this.props.children.length>1?2:0)),
            width: size.width * this.props.children.length,
            height: size.height,
          },
        ]}
      >
        {pages}
      </ScrollView>
    );
    return (
      <View {...containerProps}>
        {contents}
        {this.props.pageInfo && this._renderPageInfo(children.length)}
      </View>
    );
  },
});

var styles = StyleSheet.create({
  horizontalScroll: {
    position: 'absolute',
  },
  pageInfoBottomContainer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
  },
  pageInfoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  pageInfoPill: {
    width: 80,
    height: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pageInfoText: {
    textAlign: 'center',
  },
});

module.exports = Carousel;
