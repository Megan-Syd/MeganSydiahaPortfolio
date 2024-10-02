interface SubHeaderProps {
  title: string;
  className?: string;
}

export default function SubHeader({ title, className }: SubHeaderProps) {
  return <h4 className={`accent-color-1 ${className}`}>{title}</h4>;
}
