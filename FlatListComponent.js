// FlatListComponent.js

import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';

export default class FlatListComponent extends Component{
constructor() {
   super();
  this.state = {
     name: 'Craig'
  }
}
render(){
  return(
    <View>
      <Text>{this.props.message}</Text>
      <Text>{this.state.name}</Text>
    </View>
  );
}
}

AppRegistry.registerComponent('Example of FlatList', () => FlatListComponent);
