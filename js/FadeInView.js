/**
 * Created by eCRF on 2018/3/29.
 */
import React,{Component} from 'react';
import { Animated, Text, View } from 'react-native';

 export  default  class FadeInView extends Component {
   state = {
        // fadeAnim: new Animated.Value(0),  // Initial value for opacity: 0
        xPosition:new Animated.Value(0),

    }

    componentDidMount() {
        Animated.timing(                  // Animate over time
            this.state.xPosition,            // The animated value to drive
            {
                toValue: 100, // Animate to opacity: 1 (opaque)
                easing: Easing.back(),
                duration: 2000,              // Make it take a while
            }
        ).start();                        // Starts the animation
    }

    render() {
        let {     fadeAnim } = this.state;

        return (
            <Animated.View                 // Special animatable View
                style={{
                    ...this.props.style,
                    opacity: fadeAnim,         // Bind opacity to animated value
                }}>
                {this.props.children}
            </Animated.View>
        );
    }
}

// You can then use your `FadeInView` in place of a `View` in your components:
export default class App extends Component {
    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <FadeInView style={{width: 250, height: 50, backgroundColor: 'powderblue'}}>
                    <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>
                </FadeInView>
            </View>
        )
    }
}
