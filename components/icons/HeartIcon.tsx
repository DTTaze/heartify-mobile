import Svg, { Path } from 'react-native-svg';

type IconProps = {
  size?: number;
  color?: string;
};
const HeartIcon = ({ size = 24, color = '#485D81' }: IconProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <Path
        d="M15.5833 3.66699C12.65 3.66699 11 6.11174 11 7.33366C11 6.11174 9.35 3.66699 6.41667 3.66699C3.48333 3.66699 2.75 6.11174 2.75 7.33366C2.75 13.7503 11 18.3337 11 18.3337C11 18.3337 19.25 13.7503 19.25 7.33366C19.25 6.11174 18.5167 3.66699 15.5833 3.66699Z"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default HeartIcon;
