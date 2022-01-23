import React from "react";
import { Text, View } from "react-native";
import { LocalizationContext } from "../../App";
import Button from "../components/Button/Button";
import { appView, rootContainer } from "../global-styles";
import ArrowRight from "../icons/ArrowRight";
import { commonButton, commonButtonText } from "../components/Button/style";

function WelcomeScreen({ navigation }) {
  const { t, locale, setLocale } = React.useContext(LocalizationContext);
  return (
    <View style={appView}>
      <Button text={t("login")} icon={<ArrowRight />} />
      <Button text={t("signup")} />
      <Text>{t("welcomeScreen.welcomeText")}</Text>
      <Button
        buttonStyle={commonButton}
        textStyle={commonButtonText}
        text={t("getDiagnostics")}
      />
    </View>
  );
}

export default WelcomeScreen;
