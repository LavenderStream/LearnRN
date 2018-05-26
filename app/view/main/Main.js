/**
 * ScrollView demo
 * @tiny
 */

import React, {Component} from 'react';
import {StyleSheet, View, ScrollView, Text, TouchableOpacity} from 'react-native';

import Button from 'react-native-button';
import Constants from '../../utils/Constans';

const {width, height, scale} = require('Dimensions').get('window');

export default class Main extends Component {

    static navigationOptions = ({navigation, screenProps}) => ({
        headerTitle: 'Components',
        headerTitleStyle: styles.titleBar
    });

    render() {
        return (
            <ScrollView style={styles.container}>
                {this.renderItem()}
                <Text>
                    add
                </Text>
            </ScrollView>
        );
    }

    renderItem() {
        let itemAry = [];
        let colorAry = ['gray', 'green', 'blue', 'yellow', 'black', 'orange', "red", "pink"];
        for (let i = 0; i < colorAry.length; i++) {
            let content = Constants[i] ? Constants[i] : colorAry[i];
            itemAry.push(
                <Button key={i}
                        style={[styles.item, {backgroundColor: colorAry[i]}]}
                        activeOpacity={1}
                        onPress={e => this.onClick(i)}>
                    {content}
                </Button>
            );
        }
        return itemAry;
    }

    onClick = (e) => {
        console.log("haha: " + e);
        this.props.navigation.navigate('Button');
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff'
    },
    item: {
        width: width,
        height: 100,
        color: 'black',
        fontSize: 13,
        alignSelf: 'center',
        textAlignVertical: 'center'
    },
    titleBar: {
        color: 'black',
        fontSize: 16,
        flex: 1,
        textAlign: 'center'
    }
});
