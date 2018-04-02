/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    ScrollView,
    RefreshControl,
    Text,
    View,
    ToolbarAndroid
} from 'react-native';
import Row from '../js/Row';


export default class ListViewDemo2 extends Component<{}> {


    constructor(props) {
        super(props);
        this.state = {
            isRefreshing: false,
            loaded: 0,
            rowData: Array.from(new Array(20)).map(
                (val, i) => ({text: '初始行' + i}),
            ),
        };
    }

    render() {
        const rows = this.state.rowData.map((row, ii) => {
            return <Row key={ii} data={row}/>
        })

        return (
            <ScrollView
                style={styles.scrollview}
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.isRefreshing}
                        onRefresh={this._onRefresh.bind(this)}
                        colors={['#ff0000', '#00ff00', '#0000ff', '#3ad564']}
                        progressBackgroundColor="#ffffff"
                    />
                }>
                {rows}
            </ScrollView>
        );
    }
    _onRefresh() {
        this.setState({isRefreshing:true});
        setTimeout(() => {
            // 准备下拉刷新的5条数据
            const rowData = Array.from(new Array(5))
                .map((val, i) => ({
                    text: '刷新行 ' + (+this.state.loaded + i)
                }))
                .concat(this.state.rowData);

            this.setState({
                loaded: this.state.loaded + 5,
                isRefreshing: false,
                rowData: rowData,
            });
        }, 5000);
    }
}

const styles =StyleSheet.create({
    row:{
        borderWidth:5,
        padding:20,
        backgroundColor:'#3a5795',
        margin:5,
        borderRadius:10,
    },
    text:{
        alignSelf:'center',
        color:'#fff',
    },
    scrollview:{
        flex:1,
    },
});