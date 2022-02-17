import React from "react";
import { View as RootView } from "react-native";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider as AuthProvider } from "./src/context/AuthContext";
import * as Localization from "expo-localization";
import i18n from "i18n-js";
import ru from "./src/localization/ru";
import en from "./src/localization/en";
import { rootContainer } from "./src/global-styles";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import {
  getBirthdateWizardScreenOptions,
  getConfirmWizardScreenOptions,
  getLoginScreenOptions,
  getNameWizardScreenOptions,
  getWelcomeScreenOptions,
} from "./src/configs/screenOptions";
import LoginScreen from "./src/screens/LoginScreen";
import NameWizardScreen from "./src/screens/NameWizardScreen";
import BirthdateWizardScreen from "./src/screens/BirthdateWizardScreen";
import ConfirmWizardScreen from "./src/screens/ConfirmWizardScreen";

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
        <NavigationContainer>
          <RootView style={rootContainer}>
            <Stack.Navigator initialRouteName="Welcome">
              <Stack.Screen
                name="Welcome"
                component={WelcomeScreen}
                options={getWelcomeScreenOptions()}
              />
              <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={({ navigation }) => {
                  return getLoginScreenOptions(navigation);
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
            </Stack.Navigator>
          </RootView>
        </NavigationContainer>
      </AuthProvider>
    </LocalizationContext.Provider>
  );
}
