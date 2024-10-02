import React from "react";

interface SectionContainerProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export default function SectionContainer({
  id,
  title,
  children,
  className,
}: SectionContainerProps) {
  return (
    <div id={id} className={`container m-md-5 my-sm-5 ${className}`}>
      <h2 className="accent-color-1 py-4">{title}</h2>
      <div>{children}</div>
    </div>
  );
}
