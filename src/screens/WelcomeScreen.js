import React from "react";
import { Text, View } from "react-native";
import { LocalizationContext } from "../../App";
import PrimaryButton from "../components/Buttons/PrimaryButton";
import styled from "styled-components/native";
import SecondaryButton from "../components/Buttons/SecondaryButton";
import ArrowRight from "../icons/ArrowRight";

function WelcomeScreen({ navigation }) {
  const { t, locale, setLocale } = React.useContext(LocalizationContext);
  return (
    <>
      <StyledImageBackground
        source={require("../../assets/Fortuna.jpg")}
        resizeMode="cover"
      >
        <StyledWelcomeView>
          <StyledWelcomeWrapper>
            <SecondaryButton
              text={"Login"}
              icon={<ArrowRight />}
              onPress={() => {
                navigation.navigate("Login");
              }}
            />
            <SecondaryButton text={"Register"} icon={<ArrowRight />} />
            <StyledWelcomeText>
              {t("welcomeScreen.welcomeText")}
            </StyledWelcomeText>
            <PrimaryButton text={t("getDiagnostics")} />
          </StyledWelcomeWrapper>
        </StyledWelcomeView>
      </StyledImageBackground>
    </>
  );
}

export default WelcomeScreen;

const StyledWelcomeText = styled.Text`
  color: white;
`;

const StyledWelcomeView = styled.View`
  height: 100%;
  width: 100%;
  padding: 16px;
`;

const StyledWelcomeWrapper = styled.View`
  margin-top: auto;
`;

const StyledImageBackground = styled.ImageBackground`
  position: relative;
  width: 100%;
  height: 100%;
`;
const StyledBackground = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height: 100%;
  width: 100%;
`;
