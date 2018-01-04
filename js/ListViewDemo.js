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
    ToastAndroid
} from 'react-native';


export default class ListViewDemo extends Component<{}> {
    componentDidMount() {

    }
    async _asyGetData(url){
        try{
            let  response = await fetch(url)
            let json=await response.json()
            return json.result
        }catch (e){
            console.log("网络请求失败"+e)
        }
    }
    async _combineData(){
        try{
            var  searchData={}
            let service_data=await  this._asyGetData("")
            searchData.service = service_data.service_list
        }catch (e){
            console.log("合并数据失败"+e)
        }
    }
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
        return(
            // 实例化Item
            <View onPress={()=>this.setConsoleLog(rowData)}>
                <Text style={{backgroundColor:'red', height:44}}>内容{rowData},在第{sectionID}组第{rowID}行</Text>
            </View>
        )
    }
    setConsoleLog(content){
        ToastAndroid.show(content,RCTToastAndroid.SHORT);
    }

    render() {
        return (
            <View style={styles.container}>
                <ListView style={{backgroundColor:'yellow'}}
                          dataSource={this.state.dataSource.cloneWithRowsAndSections(this.state.data)}
                          renderRow={this.renderRow }/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});
