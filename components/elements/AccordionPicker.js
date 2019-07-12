import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';
import StandaloneModal from './StandaloneModal';

import MainStyles from './Styles.js';
import FormButton from './FormButton';

const t = require('tcomb-form-native');

class AccordionPicker extends t.form.Select {
  setModalVisible = visible => {
    this.refs.modal.setVisible(visible);
  };

  renderHeader(locals) {
    const valueText = locals.options.find(
      element => element.value === locals.value,
    );

    let controlLabelStyle = locals.stylesheet.controlLabel.normal;
    if (locals.hasError) {
      controlLabelStyle = locals.stylesheet.controlLabel.error;
    }

    return (
      <View style={[styles.header, styles.textContainer]}>
        <Text style={[styles.label, controlLabelStyle]}>{locals.label}</Text>
        <Text style={[locals.stylesheet.controlLabel.normal, styles.value]}>
          {valueText.text}
        </Text>
      </View>
    );
  }

  renderModal(locals) {
    return (
      <StandaloneModal ref="modal">
        <TouchableOpacity
          activeOpacity={1}
          onPress={this.setModalVisible.bind(this, false)}
          style={styles.emptyArea}
        >
          <View />
        </TouchableOpacity>
        <View style={styles.container}>
          <TouchableOpacity onPress={this.setModalVisible.bind(this, false)}>
            <View style={styles.topBar}>
              <Icon name="close" size={32} color="#ffffff" />
            </View>
          </TouchableOpacity>
          <View style={styles.innerContainer}>
            {t.form.Form.templates.select({ ...locals, label: null })}
            <FormButton
              onPress={this.setModalVisible.bind(this, false)}
              buttonText="Select"
            />
          </View>
        </View>
        <TouchableOpacity
          activeOpacity={1}
          onPress={this.setModalVisible.bind(this, false)}
          style={styles.emptyArea}
        >
          <View />
        </TouchableOpacity>
      </StandaloneModal>
    );
  }

  getTemplate() {
    const self = this;
    return function(locals) {
      if (Platform.OS === 'android') {
        return t.form.Form.templates.select({ ...locals, label: locals.label });
      }
      return (
        <View
          style={
            locals.hidden ? styles.hidden : locals.stylesheet.select.normal
          }
        >
          <TouchableOpacity onPress={self.setModalVisible.bind(self, true)}>
            <View>{self.renderHeader(locals)}</View>
          </TouchableOpacity>
          {self.renderModal(locals)}
        </View>
      );
    };
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 4,
    justifyContent: 'center',
    padding: 25,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  innerContainer: {
    borderRadius: 10,
    backgroundColor: '#fff',
    padding: 20,
  },
  topBar: {
    height: 35,
    width: MainStyles.variables.windowWidth - 50,
    alignItems: 'flex-end',
  },
  textContainer: {
    flexDirection: 'row',
    paddingLeft: 5,
    paddingRight: 5,
  },
  label: {
    fontSize: 16,
    alignSelf: 'center',
  },
  value: {
    flex: 1,
    fontSize: 16,
    textAlign: 'right',
    alignSelf: 'center',
    color: '#666',
  },
  header: {
    flex: 1,
    height: 44,
    backgroundColor: '#f9f9f9',
  },
  hidden: {
    opacity: 0,
    height: 0,
    width: 0,
    margin: 0,
    padding: 0,
  },
  emptyArea: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});

export default AccordionPicker;
