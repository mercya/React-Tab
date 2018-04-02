/**
 * Created by eCRF on 2018/1/11.
 */


import PropTypes from 'prop-types';
import {requireNativeComponent, View} from 'react-native';


var  VideoView={
    name:'VideoView',
    propTypes:{
        style:View.propTypes.style,
        source:PropTypes.shape({
            url:PropTypes.string,
            headers:PropTypes.object,
        }),
        ...View.propTypes,
    }
};
var RCTVideoView =requireNativeComponent('RCTVideoView',VideoView);
module.exports=RCTVideoView;
