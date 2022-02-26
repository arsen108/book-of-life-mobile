import React, { useContext } from "react";
import { View } from "react-native";
import { useForm } from "react-hook-form";
import PrimaryInput from "../components/Inputs/PrimaryInput";
import { LocalizationContext } from "../../App";
import PrimaryButton from "../components/Buttons/PrimaryButton";
import { Context as AuthContext } from "../context/AuthContext";

function NameWizardScreen({route, navigation}) {
    const { withEmailInput } = route.params;
    const {t} = useContext(LocalizationContext);
    const {registerWithEmail} = useContext(AuthContext)
    const {
        control,
        handleSubmit,
        formState: {errors},
    } = useForm({
        defaultValues: {
            firstName: "",
            lastName: "",
            fatherName: "",
            email: ""
        },
    });

    const onSubmit = (data) => {
        if (withEmailInput) {
            registerWithEmail(data)
        }
    };

    return (
        <View>
            <PrimaryInput
                control={control}
                label={t("nameWizardScreen.firstNameLabel")}
                name={"firstName"}
                errors={errors}
                errorMessage={"Field is Required"}
            />
            <PrimaryInput
                control={control}
                label={t("nameWizardScreen.lastNameLabel")}
                name={"lastName"}
                errors={errors}
                errorMessage={"Field is Required"}
                marginTop={"29px"}
            />
            <PrimaryInput
                control={control}
                label={t("nameWizardScreen.fatherNameLabel")}
                name={"fatherName"}
                errors={errors}
                errorMessage={"Field is Required"}
                marginTop={"29px"}
            />
            {withEmailInput &&
            <PrimaryInput
                control={control}
                label={t("nameWizardScreen.emailLabel")}
                name={"email"}
                errors={errors}
                errorMessage={"Field is Required"}
                marginTop={"29px"}
            />}
            <PrimaryButton
                marginTop={"41px"}
                text={t("nameWizardScreen.nextButton")}
                onPress={handleSubmit(onSubmit)}
            />
        </View>
    );
}

export default NameWizardScreen;
