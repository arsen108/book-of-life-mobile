import React, { useContext } from "react";
import styled from "styled-components/native";
import UserInfo from "../components/Common/UserInfo";
import { FlatList, Text, TouchableHighlight } from "react-native";
import DoubleFacedGirl from "../icons/DoubleFacedGirl";
import ArrowRight from "../icons/ArrowRight";
import { colors } from "../global-styles";
import Adjna from "../icons/Adjna";
import MeditatingGirl from "../icons/MeditatingGirl";
import HandWithEye from "../icons/HandWithEye";
import Money from "../icons/Money";
import MagicalHat from "../icons/MagicalHat";
import ClimbingMan from "../icons/ClimbingMan";
import { LocalizationContext } from "../../App";

const menuData = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "homeScreen.items.hiddenQualities",
    icon: <DoubleFacedGirl />,
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "homeScreen.items.personalGift",
    icon: <Adjna />,
  },
  {
    id: "585t4a0f-3da1-471f-bd96-145571e29d72",
    title: "homeScreen.items.hiddenAbilities",
    icon: <MeditatingGirl />,
  },
  {
    id: "5869f50f-3da1-471f-bd96-145571e29d72",
    title: "homeScreen.items.destination",
    icon: <HandWithEye />,
  },
  {
    id: "58694a0f-3da1-4r1f-bd96-145571e29d72",
    title: "homeScreen.items.business",
    icon: <Money />,
  },
  {
    id: "58694a0f-3da1-471f-5t96-145571e29d72",
    title: "homeScreen.items.perspectives",
    icon: <MagicalHat />,
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e3dd72",
    title: "homeScreen.items.individualProgram",
    icon: <ClimbingMan />,
  },
];

const Item = ({ title, icon }) => (
  <TouchableHighlight>
    <StyledItemContainer>
      {icon}
      <StyledItemText>{title}</StyledItemText>
      <ArrowRight />
    </StyledItemContainer>
  </TouchableHighlight>
);

function HomeScreen() {
  const { t } = useContext(LocalizationContext);
  const renderItem = ({ item }) => (
    <Item title={t(item.title)} icon={item.icon} />
  );

  return (
    <StyledContainer>
      <UserInfo />
      <FlatList
        data={menuData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </StyledContainer>
  );
}

export default HomeScreen;

const StyledItemContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 8px 16px;
`;

const StyledItemText = styled.Text`
  color: ${colors.white};
`;

const StyledContainer = styled.View`
  flex: 1;
`;
