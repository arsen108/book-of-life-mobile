import React from "react";
import {StyleSheet, Text, View as RootView} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import LoginScreen from "./src/screens/LoginScreen";
import {Provider as AuthProvider} from "./src/context/AuthContext";
import * as Localization from "expo-localization";
import i18n from "i18n-js";
import ru from "./src/localization/ru";
import en from "./src/localization/en";
import {rootContainer} from "./src/global-styles";

i18n.translations = {en, ru};
i18n.fallbacks = true;

const Stack = createNativeStackNavigator();
export const LocalizationContext = React.createContext();

export default function App() {
    const [locale, setLocale] = React.useState(Localization.locale);
    const localizationContext = React.useMemo(
        () => ({
            t: (scope, options) => i18n.t(scope, {locale, ...options}),
            locale,
            setLocale,
        }),
        [locale]
    );

    return (
        <LocalizationContext.Provider value={localizationContext}>
            <AuthProvider>
                <NavigationContainer style={rootContainer}>
                    <RootView style={rootContainer}>
                        <Stack.Navigator style={{backgroundColor: 'transparent'}} initialRouteName="Welcome">
                            <Stack.Screen name="Welcome" component={WelcomeScreen}/>
                            <Stack.Screen name="Login" component={LoginScreen}/>
                        </Stack.Navigator>
                    </RootView>
                </NavigationContainer>
            </AuthProvider>
        </LocalizationContext.Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
