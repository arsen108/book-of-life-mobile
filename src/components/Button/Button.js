import React from 'react';
import {Pressable, Text} from "react-native";
import {commonBtn, commonBtnText} from "./style";


function Button({text = 'welcome'}) {
    return (
        <Pressable style={commonBtn}>
            <Text style={commonBtnText}>{text}</Text>
        </Pressable>
    );
}

export default Button;