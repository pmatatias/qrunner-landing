// src/components/Icon.tsx
import React from 'react';

interface IconProps {
  src: string;
  alt: string;
  width?: string;
  height?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Icon: React.FC<IconProps> = ({ src, alt, width, height, className, style }) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`${className || ''}`}
      style={style}
    />
  );
};

export default Icon;
