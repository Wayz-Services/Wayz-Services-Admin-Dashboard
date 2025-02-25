import Image from "next/image";

interface ImageComponentProps {
  src: string;
  width: number;
  height: number;
  className: string;
  alt?: string;
}

const ImageComponent: React.FC<ImageComponentProps> = ({
  src,
  width,
  height,
  alt = "this is an image",
  className,
  ...rest
}) => {
  return (
    <div className={`relative`} style={{ width: width, height: height }}>
      <Image
        src={src}
        alt={alt}
        fill
        unoptimized
        objectFit="cover"
        className={`${className}`}
        {...rest}
      />
    </div>
  );
};

export default ImageComponent;
