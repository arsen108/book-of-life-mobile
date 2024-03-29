import React, { useContext } from "react";
import { Platform, KeyboardAvoidingView } from "react-native";
import { useForm } from "react-hook-form";
import { Context as AuthContext } from "../context/AuthContext";
import PrimaryInput from "../components/Inputs/PrimaryInput";
import styled from "styled-components/native";
import PrimaryButton from "../components/Buttons/PrimaryButton";
import { LocalizationContext } from "../../App";
import GoogleIcon from "../icons/GoogleIcon";
import FacebookIcon from "../icons/FacebooIcon";
import LoginContainer from "../conatiners/LoginContainer/LoginContainer";

function LoginScreen({navigation}) {
    const {t} = React.useContext(LocalizationContext);
    const {login} = useContext(AuthContext);
    const {
        control,
        handleSubmit,
        formState: {errors},
    } = useForm({
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = (data) => {
        console.log('CHECK')
        login(data);
        // navigation.push("NameWizard");
    };

    return (
        <LoginContainer title={t("loginScreen.title")}>
            <PrimaryInput
                control={control}
                label={t("loginScreen.emailLabel")}
                name={"email"}
                errors={errors}
                errorMessage={"Field is Required"}
            />
            <PrimaryInput
                control={control}
                label={t("loginScreen.passwordLabel")}
                name={"password"}
                errors={errors}
                errorMessage={"Field is Required"}
                marginTop={"29px"}
            />
            <PrimaryButton
                marginTop={"41px"}
                text={t("login")}
                onPress={handleSubmit(onSubmit)}
            />
        </LoginContainer>
    );
}

export default LoginScreen;