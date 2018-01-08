/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ToolbarAndroid
} from 'react-native';


export default class Row extends Component<{}> {
    render() {
        return (
          <View style={styles.row}>
              <Text style={styles.text}>
                  {this.props.data.text}
              </Text>
          </View>
        );
    }
}
const styles =StyleSheet.create({
    row:{
        borderColor:'red',
        borderWidth:5,
        padding:20,
        backgroundColor:'#3a5795',
        margin:5,
    },
    text:{
        alignSelf:'center',
        color:'#fff',
    },
});