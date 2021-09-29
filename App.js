/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import React, {useEffect } from 'react';
 import { GoogleSignin,statusCodes} from '@react-native-google-signin/google-signin'
 import PushNotification from "react-native-push-notification";
 import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';

 import {
   Button,
   StyleSheet,
   Text,
   View,
 } from 'react-native';

import homeScreen from './component/home'; 
import DashBoardScreen from './component/DashBoard';
import { navigationRef } from './component/RootNavigation';
 const Stack = createNativeStackNavigator();


 const App = () => {
  
  //  useEffect(()=>{
  //    GoogleSignin.configure();
  //    createChannels();
  //  },[]);
 
  // const createChannels = () =>{
  //   PushNotification.createChannel(
  //      {
  //          channelId:"test-channel",
  //          channelName:"Test Channel"
  //      }
  //   )
  // } 
  // const onClickLocalNotification =()=>{
  //     PushNotification.localNotification({
  //          channelId:"test-channel",
  //          title:"your Notification",
  //          message:"Hey Raju! How r u ?",
  //          bigText:"YOu can add big text...",
  //          color:"red",
  //          onClickLocalNotification:"raju"
  //         // id:"2",   // You can also add id for every notification
  //     });
  // const onClickNoti = ()=>{
  //   console.log("Cliked on Notification");
  // }

   

  //     //https://www.youtube.com/watch?v=RgN1TEnULVQ&t=735s&ab_channel=ProgrammingwithMash
  //     //This is for shedule for every 20 sec
  //     PushNotification.localNotificationSchedule({
  //       channelId:"test-channel",
  //       title:"your Notification",
  //       message:"Hey Raju! How r u ?",
  //       date:new Date(Date.now( + 20*1000)),
  //       allowWhileIdle:true,
  //     });

    
  // }
  // const signIn = async () => {
  //    try {
  //      await GoogleSignin.hasPlayServices();
  //      const userInfo = await GoogleSignin.signIn();
  //     // this.setState({ userInfo });
  //      console.log(userInfo);
  //    } catch (error) {
  //      console.log("error");
  //      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
  //        // user cancelled the login flow
  //        console.log(error);
  //      } else if (error.code === statusCodes.IN_PROGRESS) {
  //        console.log("In progress");
  //        // operation (f.e. sign in) is in progress already
  //      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
  //        console.log("PLAY_SERVICES_NOT_AVAILABLE");
  //        // play services not available or outdated
  //      } else {
  //        console.log(`Something ${error.toString()} `);
  //      //  console(`something error ${error}`);
  //        // some other error happened
  //      }
  //    }
  //  };
 
   return (  

    <NavigationContainer ref={navigationRef} >
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={homeScreen}
      />
      <Stack.Screen name="DashBoardScreen" component={DashBoardScreen}/>
    </Stack.Navigator>
  </NavigationContainer>
   );
 };
 
 
 export default App;
 