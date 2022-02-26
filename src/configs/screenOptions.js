import React from "react";
import styled from "styled-components/native";
import { LocalizationContext } from "../../App";
import {Pressable} from "react-native";

// const { t, locale, setLocale } = React.useContext(LocalizationContext);

export const getWelcomeScreenOptions = () => ({
  headerShown: false,
  headerStyle: {
    backgroundColor: "#f4511e",
  },
});

export const getLoginScreenOptions = (navigation, title, route) => {
  const StyledHeaderTitle = styled.Text`
    font-size: 16px;
    margin-right: 10px;
    color: #dcbf8f;
  `;

  return {
    headerRight: () => (
      <Pressable onPress={()=> {
        navigation.navigate(route)
      }}>
        <StyledHeaderTitle>{title}</StyledHeaderTitle>
      </Pressable>
    ),
    headerTransparent: true,
    headerTitle: "",
    headerTintColor: "#dcbf8f",
    headerStyle: {
      borderBottomWidth: 0,
    },
    headerBackTitleVisible: false,
  };
};

export const getNameWizardScreenOptions = () => ({
  headerBackVisible: true,
  headerTitleAlign: "left",
});

export const getBirthdateWizardScreenOptions = () => ({
  headerBackVisible: true,
});

export const getConfirmWizardScreenOptions = () => ({
  headerBackVisible: true,
});

export const getHomeScreenOptions = () => ({
  headerBackVisible: true,
});
