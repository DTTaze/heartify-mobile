import Svg, { Path } from 'react-native-svg';

type IconProps = {
  size?: number;
  color?: string;
};

export default function ShieldIcon({
  size = 23,
  color = '#485D81',
}: IconProps) {
  return (
    <Svg width={(20 / 23) * size} height={size} viewBox="0 0 20 23" fill="none">
      <Path
        d="M15.6667 13.1667C15.6667 16.5 9.83333 19 9.83333 19C9.83333 19 4 16.5 4 13.1667V5.66667C5.25 5.80583 8.16667 5.66667 9.83333 4C11.5 5.66667 14.4167 5.80583 15.6667 5.66667V13.1667Z"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
