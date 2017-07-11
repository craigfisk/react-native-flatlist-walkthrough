// FlatListComponent.js

import React, {Component} from 'react';
import {AppRegistry, Text, View, FlatList} from 'react-native';

export default class FlatListComponent extends Component{
constructor(props) {
  super(props);
  this.state = {
     name: 'Craig'
  }
}
render(){
  var flowers = [
    {name: "Lily"},
    {name: "Holly"},
    {name: "Jasmine"},
    {name: "Daisyy"},
    {name: "Alyssum"},
    {name: "Poppy"},
    {name: "Violet"},
    {name: "Ivy"}
  ];
  return(
    <View>
      <FlatList
        data = {flowers}
        renderItem={
          ({item}) => <Text>{item.name}</Text>
        }
      />
    </View>
  );
}
}

AppRegistry.registerComponent('Example of FlatList', () => FlatListComponent);
