import React from "react";
import styled from "styled-components/native";
import { colors } from "../../global-styles";
import EllipsisWithStar from "../../icons/EllipsisWithStar";

function UserInfo() {
  return (
    <StyledContainer>
      <StyledEllipsisWithStar />
      <StyledNameText>{"Name Surname Father's"}</StyledNameText>
      <StyledBirthDateText>{"11 Jun 1992"}</StyledBirthDateText>
    </StyledContainer>
  );
}

export default UserInfo;

const StyledContainer = styled.View`
  align-self: center;
  margin: 30px 30px;
  position: relative;
`;

const StyledNameText = styled.Text`
  color: ${colors.white};
  font-size: 16px;
  font-weight: bolder;
`;

const StyledBirthDateText = styled.Text`
  color: ${colors.primary};
  margin-top: 5px;
  align-self: center;
`;

const StyledEllipsisWithStar = styled(EllipsisWithStar)`
  position: absolute;
  top: -27px;
  left: -17px;
`;
