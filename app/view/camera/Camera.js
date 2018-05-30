/**
 * ScrollView demo
 * @tiny
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text, ToastAndroid, TouchableHighlight} from 'react-native';

import TestButton from 'react-native-button';

const {width, height, scale} = require('Dimensions').get('window');


export default class Camera extends Component {
    static navigationOptions = ({navigation, screenProps}) => ({
        headerTitle: 'Camera',
        headerRight: <View/>,
        gesturesEnabled: true,
        headerTitleStyle: styles.titleBar
    });

    render() {
        return (
            <View style={styles.container}>

            </View>
        );
    }

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
