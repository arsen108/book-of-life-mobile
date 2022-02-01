import React from "react";
import styled from "styled-components/native/dist/styled-components.native.esm";

function SecondaryButton({ text, onPress, icon }) {
  return (
    <StyledPressable onPress={onPress}>
      {icon}
      <StyledText>{text}</StyledText>
    </StyledPressable>
  );
}

export default SecondaryButton;

const StyledPressable = styled.Pressable`
  display: flex;
  flex-direction: row;
`;

const StyledText = styled.Text`
  color: #dcbf8f;
`;
