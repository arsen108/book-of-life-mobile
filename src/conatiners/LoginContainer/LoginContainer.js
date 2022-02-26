import React from 'react';
import { KeyboardAvoidingView, Platform } from "react-native";
import GoogleIcon from "../../icons/GoogleIcon";
import FacebookIcon from "../../icons/FacebooIcon";
import styled from "styled-components/native/dist/styled-components.native.esm";

function LoginContainer({children, title}) {
    return (
        <StyledImageBackground
            source={require("../../../assets/Fortuna.jpg")}
            resizeMode="cover"
        >
            <StyledLoginView>
                <StyledLoginWrapper>
                    <KeyboardAvoidingView
                        behavior={Platform.OS === "ios" ? "padding" : "height"}
                    >
                        <StyledLoginText>{title}</StyledLoginText>
                    </KeyboardAvoidingView>
                    {children}
                </StyledLoginWrapper>
                <StyledSocialWrapper>
                    <GoogleIcon/>
                    <StyledSpace/>
                    <FacebookIcon/>
                </StyledSocialWrapper>
            </StyledLoginView>
        </StyledImageBackground>
    );
}

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


export default LoginContainer;