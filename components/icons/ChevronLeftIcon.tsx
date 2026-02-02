import Svg, { Path } from 'react-native-svg';

type IconProps = {
  size?: number;
  color?: string;
};

export default function ChevronLeftIcon({
  size = 11,
  color = '#FFFFFF',
}: IconProps) {
  return (
    <Svg width={(7 / 11) * size} height={size} viewBox="0 0 7 11" fill="none">
      <Path
        d="M5.16666 9.33333L0.99999 5.16667L5.16666 1"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
