import React from 'react';
import {Text, Button, View} from "react-native";

function WelcomeScreen({navigation}) {
    return (
        <View>
        <Text>WelcomeScreen</Text>
            <Button
                title={'Go to Login'}
                onPress={() => {
                    navigation.navigate('Login')
                }}
            />
        </View>
    );
}

export default WelcomeScreen;
