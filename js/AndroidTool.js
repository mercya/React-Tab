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


export default class AndroidTool extends Component<{}> {
    render() {
        return (
                <ToolbarAndroid
                    style={styles.toolbar}
                    title={"只存在标题"}>
                </ToolbarAndroid>

        );
    }
}
const styles =StyleSheet.create({
    toolbar: {
        backgroundColor: '#e9eaed',
        height: 56,
    },
});