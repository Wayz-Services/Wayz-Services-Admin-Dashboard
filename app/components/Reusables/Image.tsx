import Image from "next/image";

interface ImageComponentProps {
  src: string;
  width: number;
  height: number;
  objectFit?: "fill" | "contain" | "cover" | "none" | "scale-down"; // Restrict the values
  className?: string;
  alt?: string;
}

const ImageComponent: React.FC<ImageComponentProps> = ({
  src,
  width,
  height,
  alt = "this is an image",
  className,
  objectFit = "cover",
  ...rest
}) => {
  return (
    <div className={`relative`} style={{ width: width, height: height }}>
      <Image
        src={src}
        alt={alt}
        fill
        unoptimized
        className={`${className}`}
        style={{ objectFit: objectFit }}
        {...rest}
      />
    </div>
  );
};

export default ImageComponent;
