/**
 * ScrollView demo
 * @tiny
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default class Splash extends Component {
    static navigationOptions = () => ({
        header: null
    });

    componentDidMount(){
        this.timer = setTimeout(() => {
            this.props.navigation.replace('Main');
        }, 2000)
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.tip}>
                    Splash
                </Text>
            </View>
        );
    }

    componentWillUnmount(){
        this.timer && clearTimeout(this.timer);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    tip: {
        color: '#000',
        fontSize:16
    }
});
