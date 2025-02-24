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
    <div className={`w-[${width}px] h-[${height}px] relative`}>
      <Image
        src={src}
        fill
        alt={alt}
        unoptimized
        objectFit="cover"
        className={className}
        {...rest}
      />
    </div>
  );
};

export default ImageComponent;
