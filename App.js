/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);


import ApplicationManifest from './app/view/ApplicationManifest.js'

export default class App extends Component {
  render() {
    return (
        <ApplicationManifest />
    );
  }
}