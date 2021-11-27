import React from 'react'
import { StyleSheet, Text, View, Image, Button } from 'react-native'
// import Onboarding from 'react-native-onboarding-swiper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './loginScreen'

const onboardingScreen = ({ navigation }) => {
    // const skip = ({ props }) => {
    //     <Button
    //         title="Skip"
    //         color="#000000"
    //         {...props}
    //     />
    // }
    // const next = ({ ...props }) => {
    //     <Button
    //         title="Next"
    //         color="#000000"
    //         {...props}
    //     />
    // }
    // const done = ({ ...props }) => {
    //     <Button
    //         title="Done"
    //         color="#000000"
    //         {...props}
    //     />
    // }
    return (
        <View>
            Hello
        </View>

    )
}

export default onboardingScreen

const styles = StyleSheet.create({})
