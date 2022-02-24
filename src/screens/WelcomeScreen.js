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
          <StyledTopMargin>
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
          </StyledTopMargin>
        </StyledWelcomeView>
      </StyledImageBackground>
    </>
  );
}

export default WelcomeScreen;

const StyledWelcomeView = styled.View`
  height: 100%;
  width: 100%;
  padding: 16px;
`;

const StyledTopMargin = styled.View`
  margin-top: auto;
`;

const StyledImageBackground = styled.ImageBackground`
  position: relative;
  width: 100%;
  height: 100%;
`;

const StyledWelcomeText = styled.Text`
  width: 100%;
  margin-top: 65px;
  margin-bottom: 24px;

  color: #ffffff;

  font-size: 100%;
  line-height: 34.13px;
  text-align: center;
  font-weight: 400;
`;
