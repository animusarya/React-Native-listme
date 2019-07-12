import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Modal,
} from 'react-native';

import MainStyles from '../styles';
import FormButton from './ButtonExt';

const t = require('tcomb-form-native');

const styles = StyleSheet.create({
  container: {
    flex: 4,
    justifyContent: 'center',
    padding: 5,
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
    color: '#fff',
  },
  value: {
    flex: 1,
    fontSize: 16,
    textAlign: 'right',
    alignSelf: 'center',
    color: '#fff',
  },
  header: {
    // flex: 1,
    height: 44,
    backgroundColor: '#1db0e7',
    borderRadius: 4,
  },
});

class AccordionDatePicker extends t.form.DatePicker {
  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false,
    };
  }

  setModalVisible = modalVisible => {
    this.setState({ modalVisible });
    this.forceUpdate();
  };

  renderHeader(locals) {
    const curSelectedDate = moment(locals.value).format('MM-DD-YYYY');

    let controlLabelStyle = locals.stylesheet.controlLabel.normal;
    if (locals.hasError) {
      controlLabelStyle = locals.stylesheet.controlLabel.error;
    }

    return (
      <View style={[styles.header, styles.textContainer]}>
        <Text style={styles.label}>{locals.label}</Text>
        <Text style={[styles.value]}>{curSelectedDate}</Text>
      </View>
    );
  }

  renderModal(locals) {
    return (
      <Modal
        animationType="slide"
        ref="modal"
        transparent
        visible={this.state.modalVisible}
        onRequestClose={() => this.setState({ modalVisible: false })}
      >
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
            <View style={{ marginLeft: -20, backgroundColor: '#1db0e7' }}>
              {t.form.Form.templates.datepicker({
                ...locals,
                label: '',
                value: locals.value || new Date(),
              })}
            </View>
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
      </Modal>
    );
  }

  getTemplate() {
    const self = this;
    return function(locals) {
      if (Platform.OS === 'android') {
        return t.form.Form.templates.datepicker({
          ...locals,
          label: locals.label,
          value: locals.value || new Date(),
        });
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

export default AccordionDatePicker;
