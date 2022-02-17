import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

const FacebookIcon = (props) => (
    <Svg
        width={40}
        height={40}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Circle cx={20} cy={20} r={20} fill="#fff" />
        <Path
            d="M31.745 20.27c0-.79-.07-1.54-.19-2.27h-11.3v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82Z"
            fill="#4285F4"
        />
        <Path
            d="M20.255 32c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96h-3.98v3.09c1.97 3.92 6.02 6.62 10.71 6.62Z"
            fill="#34A853"
        />
        <Path
            d="M13.525 22.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29v-3.09h-3.98a11.86 11.86 0 0 0 0 10.76l3.98-3.09Z"
            fill="#FBBC05"
        />
        <Path
            d="M20.255 12.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C26.205 9.19 23.495 8 20.255 8c-4.69 0-8.74 2.7-10.71 6.62l3.98 3.09c.95-2.85 3.6-4.96 6.73-4.96Z"
            fill="#EA4335"
        />
    </Svg>
)

export default FacebookIcon
