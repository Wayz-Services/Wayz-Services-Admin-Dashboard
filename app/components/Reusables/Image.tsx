import Image from "next/image";

interface ImageComponentProps {
  src: string;
  width: number | string;
  height: number | string;
  objectFit?: "fill" | "contain" | "cover" | "none" | "scale-down"; // Restrict the values
  className?: string;
  alt?: string;
  priority?: boolean;
}

const ImageComponent: React.FC<ImageComponentProps> = ({
  src,
  width,
  height,
  alt = "this is an image",
  className,
  objectFit = "cover",
  priority = false,
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
        priority={priority}
        sizes="(max-width: 768px) 500px, (max-width: 1200px) 50vw, 300px"
        {...rest}
      />
    </div>
  );
};

export default ImageComponent;
