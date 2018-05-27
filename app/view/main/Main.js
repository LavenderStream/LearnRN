/**
 * ScrollView demo
 * @tiny
 */

import React, {Component} from 'react';
import {StyleSheet, ScrollView} from 'react-native';

import Button from 'react-native-button';
import Constants from '../../utils/Constans';

const {width} = require('Dimensions').get('window');

export default class Main extends Component {

    static navigationOptions = () => ({
        headerTitle: 'Components',
        headerTitleStyle: styles.titleBar
    });

    render() {
        return (
            <ScrollView style={styles.container}>
                {this.renderItem()}
            </ScrollView>
        );
    }

    renderItem() {
        let itemAry = [];
        for (let i = 0; i < Constants.length; i++) {
            itemAry.push(
                <Button key={i}
                        style={[styles.item, {backgroundColor: Constants[i].color}]}
                        activeOpacity={1}
                        onPress={e => this.onClick(Constants[i].name)}>
                    {Constants[i].name}
                </Button>
            );
        }
        return itemAry;
    }

    onClick = (e) => {
        this.props.navigation.navigate(e);
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
