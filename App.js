import React from 'react';
import { View, StyleSheet, Platform, Text } from 'react-native';
import EventList from './EventList';
import EventForm from './EventForm';
import { StackNavigator } from 'react-navigation';

export default StackNavigator({
  list: {
    screen: EventList,
    navigationOptions: () => ({
      title: 'YOUR EVENTS'
    })
  },
  form: {
    screen: EventForm,
    navigationOptions: () => ({
      title: 'ADD NEW EVENT'
    })
  }
})
