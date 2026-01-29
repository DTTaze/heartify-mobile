type Props = {
  icon: React.FC<any>;
  className?: string;
  size?: number;
};

export function Icon({ icon: IconComp, className, size = 24 }: Props) {
  return <IconComp width={size} height={size} className={className} />;
}
