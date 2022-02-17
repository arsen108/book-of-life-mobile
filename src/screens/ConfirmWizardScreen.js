import React from 'react';
import {View} from "react-native";
import styled from "styled-components/native";

function ConfirmWizardScreen(props) {
    return (
        <View>
            <StyledText>Be sure that your data is correct</StyledText>
        </View>
    );
}

export default ConfirmWizardScreen;

const StyledText = styled.Text`
  color: #fff;
`;


