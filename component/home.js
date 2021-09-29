//import liraries
import React, {useEffect } from 'react';
import { GoogleSignin,statusCodes} from '@react-native-google-signin/google-signin'
import PushNotification from "react-native-push-notification";
import {View,Button, ToastAndroid} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import BackgroundTimer from 'react-native-background-timer';

import { createNativeStackNavigator } from '@react-navigation/native-stack';


// create a component
const home = () => {
    
    useEffect(()=>{
        GoogleSignin.configure();
        createChannels();
      },[]);
    
     const StartBackgroundTask = () =>{
        BackgroundTimer.runBackgroundTimer(() => { 
           console.log("Timer start..."); 
        }, 1000);
     } 

     const CloseTimer = () =>{
        BackgroundTimer.stopBackgroundTimer(); 
     }
     const createChannels = () =>{
       PushNotification.createChannel(
          {
              channelId:"test-channel",
              channelName:"Test Channel"
          }
       )
     } 
     const onClickLocalNotification =()=>{
         ToastAndroid.show("Notification is going...",ToastAndroid.SHORT);
         PushNotification.localNotification({
              channelId:"test-channel",
              title:"your Notification",
              message:"Hey Raju! How r u ?",
              bigText:"YOu can add big text...",
              color:"red",
              onClickLocalNotification:"navigation.navigate('NoteBookScreen1');"
             // id:"2",   // You can also add id for every notification
         });
     const onClickNoti = ()=>{
       console.log("Cliked on Notification");
     }
   
         //https://www.youtube.com/watch?v=RgN1TEnULVQ&t=735s&ab_channel=ProgrammingwithMash
         //This is for shedule for every 20 sec
         PushNotification.localNotificationSchedule({
           channelId:"test-channel",
           title:"your Notification",
           message:"Hey Raju! How r u ?",
           date:new Date(Date.now( + 20*1000)),
           allowWhileIdle:true,
         });
   
       
     }
     const signIn = async () => {
        try {
          await GoogleSignin.hasPlayServices();
          const userInfo = await GoogleSignin.signIn();
         // this.setState({ userInfo });
          console.log(userInfo);
        } catch (error) {
          console.log("error");
          if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            // user cancelled the login flow
            console.log(error);
          } else if (error.code === statusCodes.IN_PROGRESS) {
            console.log("In progress");
            // operation (f.e. sign in) is in progress already
          } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            console.log("PLAY_SERVICES_NOT_AVAILABLE");
            // play services not available or outdated
          } else {
            console.log(`Something ${error.toString()} `);
          //  console(`something error ${error}`);
            // some other error happened
          }
        }
      };
    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
         
           <Button title = "Google SignIn" onPress={signIn}/>
           <View style={{marginTop:10}}>
               <Button title = "start Back ground Task" onPress={StartBackgroundTask}/>
           </View>
           
           <View style={{marginTop:10}}>
              <Button title = "Close Back ground Task" onPress={CloseTimer}/>
           </View>
          

           <View style={{marginTop:10}}>
               <Button title = "Local Notification" onPress={onClickLocalNotification}/>
           </View>
          
           {/* <MapView style={StyleSheet.absoluteFill}
               initialRegion={pickupCords}
            >
              <MapViewDirections
                   origin={pickupCords}
                   destination={droplocationCords}
                   apikey={GOOGLE_MAPS_APIKEY}
                   strokeWidth={4}
                   strokeColor="hotpink"
              />
           </MapView> */}
      </View>
    );
};


//make this component available to the app
export default home;
