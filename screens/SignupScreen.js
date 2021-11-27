import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image, Alert } from 'react-native';
import FormButton from '../components/FormButton'
import FormInput from '../components/FormInput';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './loginScreen'
import Home from './HomeScreen'
import Parse from "parse/react-native";

export default function SignupScreen({ navigation }) {
    const [fname, setFname] = useState()
    const [lname, setLname] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleSignup = async () => {
        if (password !== confirmPassword) {
            Alert.alert('Confirm Passwprd not matching!')
            return false;
        }
        const attrs = {
            fname: fname,
            lname: lname,
        }
        return await Parse.User.signUp(email, password, attrs)
            .then((user) => {
                Alert.alert('Success!',
                    `User ${user.getUsername()} successfully created!`,
                );
                return true;
            })
            .catch((err) => {
                Alert.alert('Error!', err.message)
                return false
            })
    }
    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/ourLogo.jpg')}
                style={styles.logo}
            />
            <Text style={styles.text}>YourExchange</Text>

            <FormInput
                labelVal={fname}
                placeholder="First Name"
                keyboardType="default"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={(usrFname) => {
                    setFname(usrFname)
                }}
            />

            <FormInput
                labelVal={lname}
                placeholder="Last Name"
                keyboardType="default"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={(usrLname) => {
                    setLname(usrLname)
                }}
            />

            <FormInput
                labelVal={email}
                placeholder="Email"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={(usrEmail) => {
                    setEmail(usrEmail)
                }}
            />
            <FormInput
                labelVal={password}
                placeholder="Password"
                keyboardType="default"
                secureTextEntry={true}
                onChangeText={(usrPass) => {
                    setPassword(usrPass)
                }}
            />

            <FormInput
                labelVal={confirmPassword}
                placeholder="Confirm Password"
                keyboardType="default"
                secureTextEntry={true}
                onChangeText={(cpass) => {
                    setConfirmPassword(cpass)
                }}
            />

            <FormButton
                title="Create account"
                onPress={() => handleSignup()}
            />

            <View style={styles.textPrivate}>
                <Text style={styles.color_textPrivate}>
                    By registering, you confirm that you accept our{' '}
                </Text>
                <TouchableOpacity onPress={() => alert('Terms Clicked!')}>
                    <Text style={[styles.color_textPrivate, { color: '#e88832' }]}>
                        Terms of service
                    </Text>
                </TouchableOpacity>
                <Text style={styles.color_textPrivate}> and </Text>
                <Text style={[styles.color_textPrivate, { color: '#e88832' }]}>
                    Privacy Policy
                </Text>
            </View>


            <TouchableOpacity
                style={styles.forgotButton}
                onPress={() => navigation.navigate('Login')}>
                <Text style={styles.navButtonText}>
                    Already have an acount? Sign in here
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        paddingTop: 100
    },
    logo: {
        height: 150,
        width: 150,
        resizeMode: 'cover',
    },
    text: {
        fontFamily: '',
        fontSize: 28,
        marginBottom: 10,
        color: '#051d5f',
    },
    navButton: {
        marginTop: 15,
    },
    forgotButton: {
        marginVertical: 15,
    },
    navButtonText: {
        fontSize: 15,
        fontWeight: '500',
        color: '#2e64e5',
        fontFamily: 'sans-serif',
    },
});