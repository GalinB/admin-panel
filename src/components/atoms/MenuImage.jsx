import Image from 'next/image'

export default function MenuImage({
  src,
  width,
  height,
  alt,
  hoverEffect,
  onClick,
  onClickCapture,
  priority = 'false',
}) {
  return (
    <Image
      src={src}
      style={{ width: 'auto', height: 'auto' }}
      width={width}
      height={height}
      className={`${
        hoverEffect && 'transform hover:scale-125 transition duration-200 object-contain  '
      }`}
      alt={alt}
      onClick={onClick}
      onClickCapture={onClickCapture}
      priority={priority}
    />
  )
}
