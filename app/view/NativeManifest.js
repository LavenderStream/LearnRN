import React from 'react';
import {createStackNavigator} from 'react-navigation';
import getSlideFromRightTransition from 'react-navigation-slide-from-right-transition';

import Main from './main/Main';
import Button from './button/Button';
import Toast from "./toast/Toast";


export default ApplicationManifest = createStackNavigator({
        Main: {
            screen: Main
        },
        Button: {
            screen: Button
        },
        Toast: {
            screen: Toast
        }

    }, {
        transitionConfig: getSlideFromRightTransition
    }
);
