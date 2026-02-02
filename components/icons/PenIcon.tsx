import Svg, { Path } from 'react-native-svg';

type IconProps = {
  size?: number;
  color?: string;
};

export default function EditIcon({ size = 20, color = '#1E293B' }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <Path
        d="M11.6666 5.00004L13.5775 3.0892C13.7338 2.93298 13.9457 2.84521 14.1666 2.84521C14.3876 2.84521 14.5995 2.93298 14.7558 3.0892L16.9108 5.2442C17.067 5.40048 17.1548 5.6124 17.1548 5.83337C17.1548 6.05434 17.067 6.26626 16.9108 6.42254L15 8.33337M11.6666 5.00004L3.57748 13.0892C3.42119 13.2454 3.33336 13.4574 3.33331 13.6784V15.8334C3.33331 16.0544 3.42111 16.2663 3.57739 16.4226C3.73367 16.5789 3.94563 16.6667 4.16665 16.6667H6.32165C6.54264 16.6667 6.75457 16.5788 6.91081 16.4225L15 8.33337M11.6666 5.00004L15 8.33337"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
