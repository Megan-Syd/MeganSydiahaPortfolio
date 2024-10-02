interface SectionDividerProps {
  className?: string;
}

export default function SectionDivider({ className }: SectionDividerProps) {
  return <hr className={`accent-color-1 mx-4 ${className}`} />;
}
