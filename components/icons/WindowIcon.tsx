import Svg, { Path } from 'react-native-svg';

type IconProps = {
  size?: number;
  color?: string;
};

export function WindowIcon({ size = 20, color = 'white' }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <Path d="M15.8334 4.1665H4.16669V11.6665H15.8334V4.1665Z" fill={color} />
      <Path
        d="M4.16669 16.6666V11.6666M4.16669 11.6666H15.8334V4.16659H4.16669M4.16669 11.6666V4.16659M4.16669 4.16659V3.33325"
        stroke={color}
        strokeWidth={1.66667}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
