import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import Card from '../components/elements/Card';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <Card />
      <ExpoLinksView />
    </ScrollView>
  );
}

HomeScreen.navigationOptions = {
  title: 'Home',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
