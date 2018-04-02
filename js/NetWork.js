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
    ActivityIndicator,
    Alert
} from 'react-native';
import ToastExample from '../js/ToastExample';
ToastExample.show("Awesome",ToastExample.SHORT);


export default class NetWork extends Component<{}> {
    constructor(props){
        super(props);
        this.state={
            isLoading:false,
            resultJson:null
        };
    }
    ssss() {
        if (this.state.isLoading == true) {
            return;
        }
        this.setState({
            resultJson: null,
            isLoading: true
        });
        fetch('http://192.168.131.34:8080/student', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        }).then((response) => response.json()).then((responseDate) => {
            let data = responseDate;
            this.setState({
                resultJson:data==null?null:JSON.stringify(data),
                isLoading:false
            })
        }).catch((error) => {
            ToastExample.show("Awesome",ToastExample.SHORT);
            this.setState({
                isLoading:false
            });
        })
    };
    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator animating={this.state.isLoading}/>
                <Text style={styles.welcome} onPress={()=>this.ssss()}>
                    点我测试网络
                </Text>
                <Text style={styles.instructions} >
                    {this.state.resultJson}
                </Text>
            </View>
        );
    }
}
const styles =StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },

})