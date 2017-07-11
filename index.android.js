 import React, {Component} from 'react';
 import {AppRegistry, Text, View} from 'react-native';
 import FlatListComponent from './FlatListComponent';

 export default class myapp2 extends Component{
   render(){
     return(
       <View>
         <FlatListComponent />
       </View>
     );
   }
 }

 AppRegistry.registerComponent('myapp2', () => myapp2);
