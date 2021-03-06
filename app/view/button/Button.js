/**
 * ScrollView demo
 * @tiny
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text, ToastAndroid, TouchableHighlight} from 'react-native';

import TestButton from 'react-native-button';

const {width, height, scale} = require('Dimensions').get('window');


export default class Button extends Component {
    static navigationOptions = ({navigation, screenProps}) => ({
        headerTitle: 'Button',
        headerRight: <View/>,
        gesturesEnabled: true,
        headerTitleStyle: styles.titleBar
    });

    render() {
        return (
            <View style={styles.container}>
                <TestButton
                    style={styles.btn1}
                    activeOpacity={1}
                    onPress={this._handleBtn1}>
                    red text, blue bg
                </TestButton>

                <TouchableHighlight
                    style={styles.btn2}
                    onLongPress={this._handleBtn2LongClick}
                    onPressIn={this._handleBtn2PressIn}
                    onPressOut={this._handleBtn2PressOut}
                    underlayColor='red'>
                    <View>
                        <Text>
                            Touchable
                        </Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }

    _handleBtn1 = () => {
        ToastAndroid.show("你过来啊", ToastAndroid.SHORT);
    };

    _handleBtn2LongClick = () => {
        ToastAndroid.show("长按", ToastAndroid.SHORT);
    };

    _handleBtn2PressIn = () => {
        ToastAndroid.show("in", ToastAndroid.SHORT);
    };

    _handleBtn2PressOut = () => {
        ToastAndroid.show("out", ToastAndroid.SHORT);
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff'
    },
    titleBar: {
        flex: 1,
        color: 'black',
        fontSize: 16,
        alignItems: 'center',
        textAlign: 'center'
    },
    btn1: {
        width: 200,
        height: 50,
        fontSize: 13,
        backgroundColor: 'blue',
        color: 'red',
        textAlignVertical: 'center'
    },
    btn2: {
        width: 200,
        height: 50,
        fontSize: 13,
        backgroundColor: 'blue',
        color: 'red',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#7FFF00',
        textAlignVertical: 'center'
    }
});
