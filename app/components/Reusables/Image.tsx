// ImageComponent.tsx

import React from 'react';

interface ImageComponentProps {
  src: string;
  width: number;
  height: number;
  alt: string;
  className?: string;
  style?: React.CSSProperties; // Add the style prop here
}

const ImageComponent: React.FC<ImageComponentProps> = ({ src, width, height, alt, className, style }) => {
  return (
    <img
      src={src}
      width={width}
      height={height}
      alt={alt}
      className={className}
      style={style} // Apply the style prop here
    />
  );
};

export default ImageComponent;