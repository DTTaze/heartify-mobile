import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

interface ArrowCircleRightIconProps {
  size?: number;
  color?: string;
}

export default function ArrowCircleRightIcon({
  size = 24,
  color = '#000',
}: ArrowCircleRightIconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9 12H15M15 12L12 9M15 12L12 15"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
