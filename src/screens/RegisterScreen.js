import React, { useContext } from 'react';
import LoginContainer from "../conatiners/LoginContainer/LoginContainer";
import PrimaryInput from "../components/Inputs/PrimaryInput";
import PrimaryButton from "../components/Buttons/PrimaryButton";
import { LocalizationContext } from "../../App";
import { Context as AuthContext } from "../context/AuthContext";
import { useForm } from "react-hook-form";

function RegisterScreen(props) {
    const {t} = React.useContext(LocalizationContext);
    const {register} = useContext(AuthContext);
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
        register(data);
        // navigation.push("NameWizard");
    };

    return (
        <LoginContainer title={t("registerScreen.title")}>
            <PrimaryInput
                control={control}
                label={t("registerScreen.emailLabel")}
                name={"email"}
                errors={errors}
                errorMessage={"Field is Required"}
            />
            <PrimaryInput
                control={control}
                label={t("registerScreen.passwordLabel")}
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

export default RegisterScreen;