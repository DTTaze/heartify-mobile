import {
  Svg,
  G,
  Path,
  Defs,
  Filter,
  FeFlood,
  FeColorMatrix,
  FeOffset,
  FeGaussianBlur,
  FeComposite,
  FeBlend,
  Mask,
  Rect,
} from 'react-native-svg';

type Props = {
  width?: number;
  height?: number;
};

export default function LocationHeartMarkerIcon({
  width = 46,
  height = 59,
}: Props) {
  return (
    <Svg width={width} height={height} viewBox="0 0 46 59" fill="none">
      <G filter="url(#filter0_d)">
        <Mask
          id="mask0"
          maskUnits="userSpaceOnUse"
          x={8}
          y={6}
          width={30}
          height={43}
        >
          <Rect x={8} y={6} width={30} height={43} fill="white" />
          <Path
            d="M23 7C30.732 7 37 13.268 37 21C37 23.9992 36.056 26.7774 34.4502 29.0557C34.5 29 23.5042 47.9927 23 48C22.5126 48 12.8084 30.9173 12.3076 30.0352C10.2449 27.5966 9 24.4441 9 21C9 13.268 15.268 7 23 7Z"
            fill="black"
          />
        </Mask>

        <Path
          d="M23 7C30.732 7 37 13.268 37 21C37 23.9992 36.056 26.7774 34.4502 29.0557C34.5 29 23.5042 47.9927 23 48C22.5126 48 12.8084 30.9173 12.3076 30.0352C10.2449 27.5966 9 24.4441 9 21C9 13.268 15.268 7 23 7Z"
          fill="#0E1D2A"
        />

        <Path
          d="M36 21C36 28.1797 30.1797 34 23 34C15.8203 34 10 28.1797 10 21C10 13.8203 15.8203 8 23 8C30.1797 8 36 13.8203 36 21Z"
          fill="white"
        />

        <Path
          d="M27.1667 14.3334C24.5 14.3334 23 16.5559 23 17.6667C23 16.5559 21.5 14.3334 18.8333 14.3334C16.1667 14.3334 15.5 16.5559 15.5 17.6667C15.5 23.5 23 27.6667 23 27.6667C23 27.6667 30.5 23.5 30.5 17.6667C30.5 16.5559 29.8333 14.3334 27.1667 14.3334Z"
          fill="#4892D3"
        />
      </G>

      <Defs>
        <Filter
          id="filter0_d"
          x="0"
          y="0"
          width="46"
          height="59"
          filterUnits="userSpaceOnUse"
        >
          <FeFlood floodOpacity={0} result="BackgroundImageFix" />
          <FeColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <FeOffset dy={2} />
          <FeGaussianBlur stdDeviation={4} />
          <FeComposite operator="out" />
          <FeColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
          />
          <FeBlend in="SourceGraphic" />
        </Filter>
      </Defs>
    </Svg>
  );
}
