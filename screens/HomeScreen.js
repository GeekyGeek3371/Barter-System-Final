import React, { useState, useEffect } from 'react'
import { Alert, StyleSheet, Text, View } from 'react-native'
import Parse from 'parse/react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FormButton from '../components/FormButton'

const HomeScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');

    useEffect(() => {
        async function getCurrentUser() {

            if (username === '') {
                const currentUser = await Parse.User.currentAsync();
                if (currentUser !== null) {
                    setUsername(currentUser.get('fname'));
                }
            }
        }
        getCurrentUser();
    }, [username])

    const logout = async () => {
        return await Parse.User.logOut()
            .then(async () => {
                const currentUser = await Parse.User.currentAsync()
                if (currentUser === null) {
                    Alert.alert('Logged out!')
                }
                navigation.dispatch(StackActions.popToTop())
            })
            .catch((err) => {
                Alert.alert('Error!', err.message)
                return false
            })
    }

    return (
        <View style={styles.container}>
            {username !== '' && <Text>{`Hello ${username}!`}</Text>}
            <FormButton
                title="Logout"
                onPress={() => logout()} //check out
            />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        paddingTop: 120
    },
})
