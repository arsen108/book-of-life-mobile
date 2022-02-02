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
  align-items: center;
  margin-top: 36px;
`;

const StyledText = styled.Text`
  margin-left: 18.4px;

  color: #dbbd8d;

  font-size: 16px;
  font-weight: 400;
  text-transform: capitalize;
  line-height: 19.5px;
`;
