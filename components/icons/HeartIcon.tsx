import Svg, { Path } from 'react-native-svg';

type Props = {
  size?: number;
  color?: string;
};

export function HeartIcon({ size = 16, color = '#4892D3' }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <Path
        d="M11.3333 2.66663C9.2 2.66663 8 4.44463 8 5.33329C8 4.44463 6.8 2.66663 4.66667 2.66663C2.53333 2.66663 2 4.44463 2 5.33329C2 9.99996 8 13.3333 8 13.3333C8 13.3333 14 9.99996 14 5.33329C14 4.44463 13.4667 2.66663 11.3333 2.66663Z"
        fill={color}
        stroke={color}
        strokeWidth={1.33333}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
