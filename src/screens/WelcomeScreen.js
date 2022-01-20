import React from "react";
import {Text, View} from "react-native";
import {LocalizationContext} from "../../App";
import Button from "../components/Button/Button";
import {appView, rootContainer} from "../global-styles";

function WelcomeScreen({navigation}) {
    const {t, locale, setLocale} = React.useContext(LocalizationContext);
    return (
        <View style={appView}>
            sdfsd
            <Button text={t("get_diagnostics")}/>
        </View>
    );
}

export default WelcomeScreen;
