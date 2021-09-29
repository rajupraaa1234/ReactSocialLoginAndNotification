/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import PushNotification from "react-native-push-notification";
import * as RootNavigation from './component/RootNavigation'

PushNotification.configure({
    onNotification: function (notification) {
       
        console.log("NOTIFICATION:", notification.onClickLocalNotification);
        RootNavigation.navigate('DashBoardScreen',userName={'email' : "rajupraaa1234@gmail.com"});
    },
    requestPermissions: Platform.OS === 'ios'
});

AppRegistry.registerComponent(appName, () => App);
