type EyebrowProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Eyebrow({ children, className = "" }: EyebrowProps) {
  return <div className={`eyebrow mb-[18px] ${className}`}>{children}</div>;
}
