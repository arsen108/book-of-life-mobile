import React, { useState } from "react";
import { View, Text, Platform, Pressable } from "react-native";
import PrimaryButton from "../components/Buttons/PrimaryButton";
import PrimaryInput from "../components/Inputs/PrimaryInput";
import { LocalizationContext } from "../../App";
import styled from "styled-components/native";

function BirthdateWizardScreen({ navigation }) {
  const { t } = React.useContext(LocalizationContext);
  const [date, setDate] = useState(new Date());
  // const [show, setShow] = useState(false);
  // const isAndroid = Platform.OS === "android";

  return (
    <View>
      <PrimaryButton
        text={t("birthdateWizardScreen.nextButton")}
        onPress={() => {
          navigation.push("ConfirmWizard");
        }}
      />
    </View>
  );
}

export default BirthdateWizardScreen;

const StyledText = styled.Text`
  color: #fff;
`;
