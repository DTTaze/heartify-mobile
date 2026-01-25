import Svg, { Path } from 'react-native-svg';

type IconProps = {
  size?: number;
  color?: string;
};

const ScanIcon = ({ size = 24, color = '#485D81' }: IconProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M3.91827 7.51029V5.71438C3.91827 5.23807 4.10749 4.78127 4.44429 4.44447C4.78109 4.10767 5.23789 3.91846 5.71419 3.91846H7.51011M16.4897 3.91846H18.2856C18.7619 3.91846 19.2187 4.10767 19.5555 4.44447C19.8923 4.78127 20.0815 5.23807 20.0815 5.71438V7.51029M20.0815 16.4899V18.2858C20.0815 18.7621 19.8923 19.2189 19.5555 19.5557C19.2187 19.8925 18.7619 20.0817 18.2856 20.0817H16.4897M7.51011 20.0817H5.71419C5.23789 20.0817 4.78109 19.8925 4.44429 19.5557C4.10749 19.2189 3.91827 18.7621 3.91827 18.2858V16.4899M7.51011 12.0001H16.4897"
        stroke={color}
        strokeWidth={1.79592}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default ScanIcon;
