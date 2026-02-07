import Svg, { Path } from 'react-native-svg';

type PlusIconProps = {
  size?: number;
  color?: string;
  strokeWidth?: number;
};

export default function PlusIcon({
  size = 20,
  color = 'white',
  strokeWidth = 2,
}: PlusIconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <Path
        d="M4.16675 9.99996H10.0001M10.0001 9.99996H15.8334M10.0001 9.99996V4.16663M10.0001 9.99996V15.8333"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
