import React, { Component, PropTypes } from 'react';
import _ from 'underscore';

import {
  StyleSheet,
  View,
  TouchableHighlight,
  Text,
  Alert,
} from 'react-native';
import Styles from './Styles.js';

import AppMethods from '../Actions/AppMethods';
import UserActions from '../Actions/UserActions';

const BackendFactory = require('../Lib/BackendFactory').default;
const AppAuthToken = require('../Lib/AppAuthToken').default;

class ImageManage extends Component {
  static propTypes = {
    close: PropTypes.func,
    updateImages: PropTypes.func,
    image: PropTypes.object,
    allImages: PropTypes.array,
  };

  updateImage = type => {
    const { image } = this.props;
    image.type = type;

    this.getSessionToken().then(result => {
      if (!_.isNull(result) && !_.isUndefined(result.sessionToken)) {
        const backend = new BackendFactory(result);
        backend
          .updateImageType(image)
          .then(json => {
            this.reLoadImage();
            const myTimeout = setTimeout(() => {
              clearTimeout(myTimeout);
              Alert.alert('Success', 'Image updated successfully.');
            }, 5);
          })
          .catch(error => {
            console.log('error login', error);
          });
      }
    });

    this.props.close();
  };

  handleDelete = () => {
    this.getSessionToken().then(result => {
      if (!_.isNull(result) && !_.isUndefined(result.sessionToken)) {
        const backend = new BackendFactory(result);
        backend
          .deleteImage(this.props.image)
          .then(json => {
            Alert.alert('Success', 'Image deleted successfully.');
            this.reLoadImage();
          })
          .catch(error => {
            console.log('error login', error);
          });
      }
    });

    // delete from local array too
    const images = this.props.allImages;
    const index = _.findLastIndex(images, this.props.image);
    images.splice(index, 1);
    this.props.updateImages(images);

    this.props.close();
  };

  reLoadImage() {
    AppMethods.loadUserImage(images => {
      UserActions.setCurrentUserImages(images);
    });
  }

  getSessionToken() {
    return new AppAuthToken().getSessionToken();
  }

  render() {
    return (
      <View style={{ height: Styles.variables.windowHeight }}>
        <View style={styles.topBar}>
          <TouchableHighlight onPress={this.props.close}>
            <Text style={{ color: '#fff', paddingTop: 5, paddingBottom: 5 }}>
              Back
            </Text>
          </TouchableHighlight>
        </View>
        <View style={styles.container}>
          <TouchableHighlight onPress={this.updateImage.bind(this, 'featured')}>
            <View style={styles.section}>
              <Text style={{ color: '#fff' }}>Set as featured image</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={this.updateImage.bind(this, 'banner')}>
            <View style={styles.section}>
              <Text style={{ color: '#fff' }}>Set as banner image</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={this.handleDelete}>
            <View style={styles.section}>
              <Text style={{ color: '#fff' }}>Delete Image</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    paddingTop: 25,
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
  topBar: {
    backgroundColor: '#989799',
    height: 60,
    paddingTop: 25,
    paddingLeft: 10,
  },
  section: {
    alignSelf: 'stretch',
    backgroundColor: '#39383a',
    marginTop: 5,
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 40,
  },
});

export default ImageManage;
