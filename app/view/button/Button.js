/**
 * ScrollView demo
 * @tiny
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

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
                <Text>
                    I'm button
                </Text>
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
        color: 'black',
        fontSize: 16,
        alignItems: 'center',
        flex: 1,
        textAlign: 'center'
    }
});
