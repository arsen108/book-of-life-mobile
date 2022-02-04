import React, {useContext} from "react";
import {View, Button} from "react-native";
import {useForm} from "react-hook-form";
import {Context as AuthContext} from "../context/AuthContext";
import PrimaryInput from "../components/Inputs/PrimaryInput";
import styled from "styled-components/native/dist/styled-components.native.esm";
import PrimaryButton from "../components/Buttons/PrimaryButton";

function LoginScreen() {
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
        login(data);
    };

    return (
        <StyledImageBackground
            source={require("../../assets/Fortuna.jpg")}
            resizeMode="cover"
        >
            <StyledLoginView>
                <StyledLoginWrapper>
                        <StyledLoginText>
                            Войти
                        </StyledLoginText>
                        <PrimaryInput
                            control={control}
                            label={"Email"}
                            name={"email"}
                            errors={errors}
                            errorMessage={"Field is Required"}
                        />
                        <PrimaryInput
                            control={control}
                            label={"Password"}
                            name={"password"}
                            errors={errors}
                            errorMessage={"Field is Required"}
                            marginTop={'29px'}
                        />
                        <PrimaryButton marginTop={'41px'} title="Submit"
                                       onPress={handleSubmit(onSubmit)}/>
                </StyledLoginWrapper>
            </StyledLoginView>
        </StyledImageBackground>
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
`

const StyledLoginWrapper = styled.View`
  margin-top: auto;
  padding: 16px;
`

const StyledLoginText = styled.Text`
  margin-bottom: 33px;
  margin-left: 16px;

  color: #ffffff;

  font-size: 28px;
  line-height: 34.13px;
`
