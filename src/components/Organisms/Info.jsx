import React, { useState } from 'react'
import MenuImage from '@/components/atoms/MenuImage.jsx'
import Button from '@/components/atoms/Button'

export default function Info() {
  const [isVisible, setIsVisible] = useState(true)

  const handleCloseClick = () => {
    setIsVisible(false)
  }

  if (!isVisible) {
    return null
  }

  return (
    <div>
      <div className="flex flex-col bg-gray-50 border border-solid border-gray-300 shadow-sm rounded-md p-3 gap-3">
        <div className="flex justify-between items-center">
          <div className="flex flex-row gap-2">
            <MenuImage src="/info.svg" width={24} height={24} alt="Button2" hoverEffect />
            <div className="text-gray-400 font-bold">Info</div>
          </div>
          <MenuImage src="/button1.svg" width={36} height={36} alt="Button2" hoverEffect />
        </div>
        <div className="text-gray-400">You can have up to 3 tiers of subscriptions</div>
        <div className="flex justify-center">
          <Button modifier="secondary" label="Close" onClick={handleCloseClick} />
        </div>
      </div>
      <div className="flex items-center justify-center mt-3 md:mt-[400px]">
        <Button label="Edit Panel" modifier="primary" />
      </div>
    </div>
  )
}
