import * as React from "react";
import Svg, { Path } from "react-native-svg";

const ArrowRight = (props) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="m21.6 12-6.4-6.4m6.4 6.4-6.4 6.4m6.4-6.4h-20" stroke="#DCBF8F" />
  </Svg>
);

export default ArrowRight;
