import React, { useContext } from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import PrimaryButton from "../components/Buttons/PrimaryButton";
import { LocalizationContext } from "../../App";
import UserInfo from "../components/Common/UserInfo";

function ConfirmWizardScreen({ navigation }) {
  const { t } = useContext(LocalizationContext);

  return (
    <View>
      <StyledText>{t("confirmWizardScreen.title")}</StyledText>
      <UserInfo />
      <PrimaryButton
        text={t("confirmWizardScreen.submitButton")}
        onPress={() => {
          navigation.push("Home");
        }}
      />
    </View>
  );
}

export default ConfirmWizardScreen;

const StyledText = styled.Text`
  color: #fff;
`;
