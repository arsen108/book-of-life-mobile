import * as React from "react";
import Svg, { Path, G, Defs, ClipPath } from "react-native-svg";

const EllipsisWithStar = (props) => (
  <Svg
    width={200}
    height={105}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M192.494 24.564c.965 3.251-.597 7.165-4.407 11.498-3.8 4.32-9.784 8.995-17.508 13.739-15.444 9.486-37.794 19.222-63.387 26.951-25.594 7.73-49.569 11.986-67.638 12.62-9.037.319-16.581-.27-22.109-1.773-5.542-1.508-8.978-3.913-9.942-7.163-.964-3.251.598-7.165 4.408-11.498 3.8-4.32 9.784-8.995 17.508-13.739 15.444-9.486 37.793-19.222 63.387-26.951 25.594-7.73 49.568-11.986 67.638-12.62 9.036-.319 16.581.27 22.108 1.773 5.543 1.508 8.978 3.913 9.942 7.163Z"
      stroke="#DCBF8F"
      strokeOpacity={0.3}
      strokeWidth={0.5}
    />
    <G clipPath="url(#a)">
      <Path
        d="M151.108 21.871c-.105.01-.197-.066-.228-.169l-1.099-4.413-4.544-.243c-.107-.01-.199-.087-.209-.192-.01-.105.066-.197.169-.228l4.416-1.103.247-4.541c.011-.108.087-.2.192-.21.105-.01.197.066.228.17l1.099 4.412 4.544.243c.107.01.199.087.209.192.01.105-.066.197-.169.228l-4.416 1.103-.247 4.542c-.011.107-.108.2-.192.209Z"
        fill="#DCBF8F"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path
          fill="#fff"
          transform="rotate(-5.482 190.339 -1503.657) skewX(-.046)"
          d="M0 0h11.156v11.149H0z"
        />
      </ClipPath>
    </Defs>
  </Svg>
);

export default EllipsisWithStar;