import React, { useContext } from "react";
import { View, Button, KeyboardAvoidingView } from "react-native";
import { useForm } from "react-hook-form";
import { Context as AuthContext } from "../context/AuthContext";
import PrimaryInput from "../components/Inputs/PrimaryInput";
import styled from "styled-components/native/dist/styled-components.native.esm";
import PrimaryButton from "../components/Buttons/PrimaryButton";
import { LocalizationContext } from "../../App";
import GoogleIcon from "../icons/GoogleIcon";
import FacebookIcon from "../icons/FacebooIcon";

function LoginScreen({navigation}) {
  const { t } = React.useContext(LocalizationContext);
  const { login } = useContext(AuthContext);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    // login(data);
    navigation.push('NameWizard')
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "position" : "position"}
    >
      <StyledImageBackground
        source={require("../../assets/Fortuna.jpg")}
        resizeMode="cover"
      >
        <StyledLoginView>
          <StyledLoginWrapper>
            <StyledLoginText>{t("loginScreen.title")}</StyledLoginText>
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
          </StyledLoginWrapper>
          <StyledSocialWrapper>
            <GoogleIcon />
            <StyledSpace />
            <FacebookIcon />
          </StyledSocialWrapper>
        </StyledLoginView>
      </StyledImageBackground>
    </KeyboardAvoidingView>
  );
}

export default LoginScreen;

const StyledImageBackground = styled.ImageBackground`
  position: relative;
  width: 100%;
  height: 100%;
`;

const StyledLoginView = styled.View`
  height: 100%;
  width: 100%;
`;

const StyledLoginWrapper = styled.View`
  margin-top: auto;
  padding: 16px;
`;

const StyledLoginText = styled.Text`
  margin-bottom: 33px;
  margin-left: 16px;

  color: #ffffff;

  font-size: 28px;
  line-height: 34.13px;
`;

const StyledSocialWrapper = styled.View`
  display: flex;
  justify-content: center;
  flex-direction: row;
  padding: 16px;
`;

const StyledSpace = styled.View`
  width: 40px;
`;
