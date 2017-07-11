// FlatListComponent.js

import React, {Component} from 'react';
import {AppRegistry, Text, View, FlatList} from 'react-native';
import {List, ListItem} from "react-native-elements";

export default class FlatListComponent extends Component{
  constructor(props) {
    super(props);
    this.state = {
       loading: false,
       data: [],
       page: 1,
       seed: 1,
       error: null,
       refreshing: false
    };
  }

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    const { page, seed } = this.state;
    const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&result=20`;
    this.setState({ loading: true });
    fetch(url)
      .then(res => res.json())
      .then(res => {
        // data to store in state to be used to drive the FlatList
        this.setState({
          data: page === 1 ? res.results : [...this.state.data, ...res.results],
          error: res.error || null,
          loading: false,
          refreshing: false
        });
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  }

  render(){
    return(
      <List>
        <FlatList
          data = { this.state.data }
          renderItem={({ item }) => (
            <ListItem
              roundAvatar
              title={`${item.name.first} ${item.name.last}`}
              subtitle={item.email}
              avatar={{ uri: item.picture.thumbnail}}
            />
          )}
          keyExtractor={item => item.email}
        />
      </List>
    );
  }
}

AppRegistry.registerComponent('Example of FlatList', () => FlatListComponent);
