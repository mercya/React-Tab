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
    ListView,
    ToastAndroid,
    TouchableOpacity,
    Image
} from 'react-native';
var THUMB_URLS=[
    require('../images/icon1.png'),
    require('../images/icon2.png'),
    require('../images/icon3.png'),
    require('../images/icon4.png'),
];


export default class ListViewDemo extends Component<{}> {
    constructor(props){
        super(props)
        var ds=new ListView.DataSource({
            rowHasChanged:(r1,r2)=>r1!=r2,
            sectionHeaderHasChanged:(s1,s2)=>s1!==s2,
        })
        this.state={
            // dataSource:ds.cloneWithRows(['内容1','内容2','内容3','内容4','内容5','内容6','内容7',])
            dataSource:ds,
            data:{a:['内容1','1'],b:['内容2','2'],c:['内容3','3'],d:['内容4','4'],e:['内容5','5']},
        }
    }
//     getInitialState: function() {
//     var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
//     return {
//     dataSource: ds.cloneWithRows(this._genRows({})),
// };
    // 返回一个Item
    renderRow(rowData,sectionID,rowID){
        var imgSource=THUMB_URLS[rowID];
        return(
            // 实例化Item
        <TouchableOpacity>
            <View style={styles.row}>
                <Image style={styles.thumb} source={imgSource}></Image>
                <Text style={{}}>内容{rowData},在第{sectionID}组第{rowID}行</Text>
            </View>
        </TouchableOpacity>

        )
    }
    setConsoleLog(content){
        ToastAndroid.show(content,RCTToastAndroid.SHORT);
    }

    render() {
        return (
            <View>
                <ListView style={{backgroundColor:'yellow'}}
                          initialListSize={this.state.data.size}
                          dataSource={this.state.dataSource.cloneWithRowsAndSections(this.state.data)}
                          renderRow={this.renderRow }/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#F6F6F6',
    },
    thumb: {
        width: 50,
        height: 50,
    },
});
