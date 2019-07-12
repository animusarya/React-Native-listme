import React from 'react';
import t from 'tcomb-form-native';
import _ from 'underscore';
import Icon from 'react-native-vector-icons/FontAwesome';
import Button from 'apsl-react-native-button';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import { humanize } from 'underscore.string';

import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import MainStyles from './Styles.js';
import StandaloneModal from './StandaloneModal';
import { CloseIcon } from './Icons';
import FormButton from '../Components/FormButton';

class AccordionMultiPicker extends t.form.Select {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      isLoaded: false,
    };
  }

  componentDidUpdate() {
    if (!this.state.isLoaded) {
      const locals = this.getLocals();
      const items = locals.value.split(',');

      if (locals.value.length > 0) {
        this.setState({ items, isLoaded: true });

        // send value back to form
        const myTimeout = setTimeout(() => {
          clearTimeout(myTimeout);
          locals.onChange(items);
        }, 20);
      } else {
        this.setState({ isLoaded: true });
      }
    }
  }

  setModalVisible = visible => {
    this.refs.modal.setVisible(visible);
  };

  setItems() {
    const locals = this.getLocals();

    // check if value is selected
    if (locals.value.length < 1) {
      return;
    }

    // close modal
    this.setModalVisible(false);

    // add to items
    const { items } = this.state;

    // check if value already in
    if (_.indexOf(items, locals.value) !== -1) {
      return;
    }

    items.push(locals.value);
    // this.props.value = this.state.items;
    // this.setState({items}, this.props.onChange('', this.props.ctx.path));

    // send value back to form
    locals.onChange(items);
  }

  handleDelete = index => {
    const locals = this.getLocals();

    const { items } = this.state;
    items.splice(index, 1);
    this.setState({ items }, this.props.onChange('', this.props.ctx.path));

    // send value back to form
    locals.onChange(items);
  };

  renderItemsList() {
    return (
      <View>
        {this.state.items.map((item, index) => (
          <Icon.Button
            key={index}
            name="times"
            size={12}
            color="#616161"
            backgroundColor="#ffffff"
            borderRadius={0}
            onPress={this.handleDelete.bind(this, index)}
          >
            <Text style={styles.item}>{humanize(item)}</Text>
          </Icon.Button>
        ))}
      </View>
    );
  }

  render() {
    const locals = this.getLocals();

    return (
      <View style={{ marginBottom: 10 }}>
        <StandaloneModal ref="modal">
          <View style={styles.container}>
            <View style={styles.topBar}>
              <TouchableOpacity
                onPress={this.setModalVisible.bind(this, false)}
              >
                <Icon name="close" size={32} color="#ffffff" />
              </TouchableOpacity>
            </View>
            <View style={styles.innerContainer}>
              {t.form.Form.templates.select({ ...locals, label: null })}
              <FormButton onPress={() => this.setItems()} buttonText="Select" />
            </View>
          </View>
        </StandaloneModal>
        {this.renderItemsList()}
        <View style={{ flex: 1, alignItems: 'center' }}>
          <View style={styles.buttonContainer}>
            <IconMaterial.Button
              name="add-circle"
              size={25}
              color="#616161"
              backgroundColor="#fff"
              borderRadius={0}
              onPress={this.setModalVisible.bind(this, true)}
            >
              <Text style={styles.buttonText}>
                {'Add Feature'.toUpperCase()}
              </Text>
            </IconMaterial.Button>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 25,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  innerContainer: {
    borderRadius: 10,
    backgroundColor: '#fff',
    padding: 20,
  },
  item: {
    color: '#616161',
    paddingLeft: 1,
  },
  buttonContainer: {
    width: 150,
    marginBottom: 15,
  },
  button: {
    borderRadius: 0,
    borderColor: '#fff',
  },
  buttonText: {
    color: '#616161',
    fontSize: 13,
    flex: 1,
  },
  topBar: {
    height: 35,
    width: MainStyles.variables.windowWidth - 50,
    alignItems: 'flex-end',
  },
});

export default AccordionMultiPicker;
