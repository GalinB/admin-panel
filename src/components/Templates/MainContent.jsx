import React, { useState, useRef } from 'react'
import MenuImage from '@/components/atoms/MenuImage'
import Advanced from '@/components/Organisms/Advanced'
import General from '@/components/Organisms/General'
import Perks from '@/components/Organisms/Perks'
import LeftContainer from './LeftContainer'
import RightContainer from './RightContainer'

export default function MainContent() {
  const [showCenteredDiv, setShowCenteredDiv] = useState(false)
  const [showCenteredDivAcademy, setShowCenteredDivAcademy] = useState(false)
  const overlayRef = useRef(null)

  const [isChangesSaved, setIsChangesSaved] = useState(false)
  const handleSaveChanges = () => {
    setIsChangesSaved(true)
  }

  const handleMenuClick = (event) => {
    if (event.target === overlayRef.current) {
      setShowCenteredDiv(false)
      setShowCenteredDivAcademy(false)
    }
  }

  const handleMenuToggle = () => {
    setShowCenteredDiv(!showCenteredDiv)
  }

  const handleAcademyClick = () => {
    setShowCenteredDivAcademy(!showCenteredDivAcademy)
  }

  const handleAdvancedButtonClick = () => {
    setIsChangesSaved(true)
  }

  return (
    <div className="w-[600px] relative">
      {showCenteredDiv && (
        <div
          ref={overlayRef}
          className="fixed inset-0 flex items-center justify-start bg-black bg-opacity-50 z-50"
          onClick={handleMenuClick}
        >
          <div className="bg-white p-4 rounded-lg">
            <LeftContainer />
          </div>
        </div>
      )}

      {showCenteredDivAcademy && (
        <div
          ref={overlayRef}
          className="fixed inset-0 flex items-center justify-end bg-black bg-opacity-50 z-50"
          onClick={handleMenuClick}
        >
          <div className="bg-white p-4 rounded-lg">
            <RightContainer />
          </div>
        </div>
      )}

      <div className="flex md:justify-center justify-between mb-6 text-gray-400">
        <div className="block md:hidden" onClick={handleMenuToggle}>
          <MenuImage src="/menu.svg" width={50} height={50} alt="Menu" />
        </div>
        <div className="mb-3 mt-3">Editing Tier</div>
        <div className="block md:hidden" onClick={handleAcademyClick}>
          <MenuImage src="/academyi.svg" width={50} height={50} alt="Menu" />
        </div>
      </div>

      <General />
      <Perks isChangesSaved={isChangesSaved} onSaveChanges={handleSaveChanges} />
      <Advanced onButtonClick={handleAdvancedButtonClick} />
    </div>
  )
}
