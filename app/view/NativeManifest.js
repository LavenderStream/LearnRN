import React from 'react';
import {createStackNavigator} from 'react-navigation';
import getSlideFromRightTransition from 'react-navigation-slide-from-right-transition';

import Main from './main/Main';
import Button from './button/Button';
import Toast from "./toast/Toast";
import Camera from './camera/Camera';
import Splash from './splash/Splash'


export default ApplicationManifest = createStackNavigator({
        Splash: {screen: Splash},
        Main: {screen: Main},
        Button: {screen: Button},
        Toast: {screen: Toast},
        Camera: {screen: Camera}

    }, {
        transitionConfig: getSlideFromRightTransition
    }
);
