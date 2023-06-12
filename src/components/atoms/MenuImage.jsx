import Image from "next/image";

export default function MenuImage({
  src,
  width,
  height,
  alt,
  hoverEffect,
  onClick,
}) {
  return (
    <Image
      src={src}
      width={width}
      height={height}
      className={`${
        hoverEffect && "transform hover:scale-125 transition duration-200"
      }`}
      alt={alt}
      onClick={onClick}
    />
  );
}
