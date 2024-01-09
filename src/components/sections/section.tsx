import React, { ReactNode } from "react";

interface SectionProps {
  id: string;
  children: ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, children }) => {
  return <section id={id}>{children}</section>;
};

export default Section;
