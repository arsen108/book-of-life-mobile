import React from "react";
import { Pressable, Text } from "react-native";
import { commonBtn, commonBtnText } from "./style";

function Button({
  text = "welcome",
  buttonStyle,
  textStyle,
  icon,
  iconRight = false,
}) {
  return (
    <Pressable style={buttonStyle}>
      {!iconRight && icon}
      <Text style={textStyle}>{text}</Text>
      {iconRight && icon}
    </Pressable>
  );
}

export default Button;
