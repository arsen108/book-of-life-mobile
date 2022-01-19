import React from "react";
import { Text, Button, View } from "react-native";
import { LocalizationContext } from "../../App";

function WelcomeScreen({ navigation }) {
  const { t, locale, setLocale } = React.useContext(LocalizationContext);
  return (
    <View>
      <Text>{t("diagnostics_intro")}</Text>
      <Button
        title={"to russian"}
        onPress={() => {
          setLocale("ru");
        }}
      />
      <Button
        title={"Go to Login"}
        onPress={() => {
          navigation.navigate("Login");
        }}
      />
    </View>
  );
}

export default WelcomeScreen;
