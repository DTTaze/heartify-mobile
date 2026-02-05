import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

interface ArrowCircleLeftIconProps {
  size?: number;
  color?: string;
}

export default function ArrowCircleLeftIcon({
  size = 24,
  color = '#000',
}: ArrowCircleLeftIconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15 12H9M9 12L12 9M9 12L12 15"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
