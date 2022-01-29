import React from "react";
import styled from "styled-components/native";

function PrimaryButton({ text = "welcome" }) {
  return (
    <StyledPressable>
      <StyledText>{text}</StyledText>
    </StyledPressable>
  );
}

export default PrimaryButton;

const StyledPressable = styled.Pressable`
  width: 100%;
  padding-top: 11px;
  padding-bottom: 11px;
  margin-right: auto;
  margin-left: auto;

  font-size: 16px;
  line-height: 19.5px;
  font-weight: 500;

  background-color: #dcbf8f;
  color: #272728;
`;

const StyledText = styled.Text`
  align-self: center;
  text-transform: uppercase;
`;
