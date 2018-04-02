/**
 * Created by eCRF on 2018/3/28.
 */
import React, { Component } from 'react';
import {Button,Alert} from 'react-native';

export default class Bu extends Component{
    render() {
        return (
           <Button title="Press Me" onPress={()=>{
                   Alert.alert("you tapped the button")
           }}/>
        );
    }

}
