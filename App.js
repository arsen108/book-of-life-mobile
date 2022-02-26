import React from "react";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider as AuthProvider } from "./src/context/AuthContext";
import * as Localization from "expo-localization";
import i18n from "i18n-js";
import ru from "./src/localization/ru";
import en from "./src/localization/en";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import {
  getBirthdateWizardScreenOptions,
  getConfirmWizardScreenOptions, getHomeScreenOptions,
  getLoginScreenOptions,
  getNameWizardScreenOptions,
  getWelcomeScreenOptions,
} from "./src/configs/screenOptions";
import LoginScreen from "./src/screens/LoginScreen";
import NameWizardScreen from "./src/screens/NameWizardScreen";
import BirthdateWizardScreen from "./src/screens/BirthdateWizardScreen";
import ConfirmWizardScreen from "./src/screens/ConfirmWizardScreen";
import HomeScreen from "./src/screens/HomeScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import { ActivityIndicator } from "react-native";
import { colors } from "./src/global-styles";

i18n.translations = { en, ru };
i18n.fallbacks = true;

export const LocalizationContext = React.createContext();

const BookOfLifeTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    text: "#fff",
  },
};

export default function App() {
  const [locale, setLocale] = React.useState(Localization.locale);
  const localizationContext = React.useMemo(
    () => ({
      t: (scope, options) => i18n.t(scope, { locale, ...options }),
      locale,
      setLocale,
    }),
    [locale]
  );

  const Stack = createNativeStackNavigator();

  return (
    <LocalizationContext.Provider value={localizationContext}>
      <AuthProvider>
        <NavigationContainer theme={BookOfLifeTheme}>
          <Stack.Navigator initialRouteName="Welcome">
            {/*<ActivityIndicator size='large' color={colors.primary}/>*/}
            <Stack.Screen
              name="Welcome"
              component={WelcomeScreen}
              options={getWelcomeScreenOptions()}
            />
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={({ navigation }) => {
                return getLoginScreenOptions(navigation, 'Sign Up', "Register");
              }}
            />
            <Stack.Screen
                name="Register"
                component={RegisterScreen}
                options={({ navigation }) => {
                  return getLoginScreenOptions(navigation, 'Login', 'Login');
                }}
            />
            <Stack.Screen
              name="NameWizard"
              component={NameWizardScreen}
              options={getNameWizardScreenOptions()}
            />
            <Stack.Screen
              name="BirthdateWizard"
              component={BirthdateWizardScreen}
              options={getBirthdateWizardScreenOptions()}
            />
            <Stack.Screen
              name="ConfirmWizard"
              component={ConfirmWizardScreen}
              options={getConfirmWizardScreenOptions()}
            />
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={getHomeScreenOptions()}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </AuthProvider>
    </LocalizationContext.Provider>
  );
}
