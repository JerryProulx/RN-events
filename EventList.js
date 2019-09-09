import React, { Component } from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';
import EventCard from './EventCard';
import ActionButton from 'react-native-action-button';

const events = require('./db.json').events.map(e => ({
  ...e,
  date: new Date(e.date)
}));

const style = StyleSheet.create({
  list: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#F3F3F3'
  }
})

class EventList extends Component {
  state = {
    events: []
  }

  constructor(props){
    super(props);
  }

  componentDidMount(){
    setInterval(() => {
      this.setState({
        events: this.state.events.map(evt => ({
          ...evt,
          timer: Date.now()
        }))
      })
    }, 1000);

    this.setState({events});
  }

  handleAddEvent = () => {
    this.props.navigation.navigate('form')
  }

  render(){
    return (
      <React.Fragment>
        <FlatList
          style={style.list}
          data={this.state.events}
          renderItem={({ item }) => <EventCard event={item}/>}
          keyExtractor={item => item.id}
        />
      <ActionButton buttonColor="rgba(231,76,60,1)" onPress={this.handleAddEvent}></ActionButton>
      </React.Fragment>
    )
  }
}

export default EventList;
