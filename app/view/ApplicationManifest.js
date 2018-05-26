import React from 'react';
import {createStackNavigator} from 'react-navigation';
import getSlideFromRightTransition from 'react-navigation-slide-from-right-transition';

import Main from './main/Main.js';
import Button from './button/Button.js';


export default ApplicationManifest = createStackNavigator({
        Main: {
            screen: Main
        },
        Button: {
            screen: Button
        }
    }, {
        transitionConfig: getSlideFromRightTransition
    }
);
