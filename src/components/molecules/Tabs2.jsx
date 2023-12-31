import React, { useState } from 'react'
import MenuImage from '@/components/atoms/MenuImage.jsx'

export default function Tabs2({
  tabname,
  src1,
  src2,
  src3,
  textcolor = 'text-gray-400',
  size = 16,
  subscribed,
  onClick,
}) {
  const [toggleSrc, setToggleSrc] = useState(false)

  const handleToggleSrc = () => {
    setToggleSrc(!toggleSrc)
  }

  return (
    <div
      className="flex items-center flex-row gap-3 justify-between p-3 bg-gray-50 border border-opacity-4 shadow-sm rounded-lg transform hover:scale-105 transition duration-200"
      onClick={onClick}
    >
      <div className="flex flex-row gap-3 items-center">
        {src1 && <MenuImage src={src1} width={10} height={10} alt="Menu Icon" />}
        <div className={`font-medium mb-2 ${textcolor}`}>{tabname}</div>
      </div>
      {!subscribed &&
        (toggleSrc ? (
          <MenuImage
            src={src3}
            width={size}
            height={size}
            alt="Right Chevron Icon"
            onClick={handleToggleSrc}
          />
        ) : (
          <MenuImage
            src={src2}
            width={size}
            height={size}
            alt="Right Chevron Icon"
            onClick={handleToggleSrc}
          />
        ))}
      {!src2 && <div className="text-gray-400">{subscribed}</div>}
    </div>
  )
}
