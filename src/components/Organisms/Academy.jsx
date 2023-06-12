import React, { useState, useRef, useEffect } from 'react'
import MenuImage from '@/components/atoms/MenuImage.jsx'
import Button from '@/components/atoms/Button'
import Library from './Library.jsx'
import useLibraryTabs from '@/store/useLibraryTabs'

export default function Academy() {
  const [isLibraryOpen, setIsLibraryOpen] = useState(false)
  const libraryRef = useRef(null)
  const { tabs, toggleTab } = useLibraryTabs()

  const handleLibraryButtonClick = () => {
    setIsLibraryOpen(true)
  }

  const closeLibrary = () => {
    setIsLibraryOpen(false)
  }

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (libraryRef.current && !libraryRef.current.contains(event.target)) {
        setIsLibraryOpen(false)
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [])

  if (isLibraryOpen) {
    return (
      <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50 bg-opacity-50 bg-gray-500">
        <div
          ref={libraryRef}
          className="flex flex-col bg-white border border-solid border-gray-300 shadow-md rounded-md p-3 gap-3 md:w-1/3 w-4/5"
        >
          <div className="text-gray-400">
            <Library onClose={closeLibrary} tabs={tabs} toggleTab={toggleTab} />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col bg-opacity-10 border border-solid border-gray-300 shadow-sm rounded-md p-3 gap-3 mb-4">
      <div className="flex justify-between items-center">
        <div className="flex flex-row gap-3">
          <MenuImage src="/academyi.svg" width={24} height={24} alt="Up" />
          <div className="text-black font-bold">Academy</div>
        </div>
        <MenuImage src="/button1.svg" width={36} height={36} alt="Button1" hoverEffect />
      </div>
      <div className="text-gray-400">
        Here are some of the perks from the library you have not used yet
      </div>
      <div className="text-gray-400 font-bold mb-2">
        <div>● Watch Livestreams</div>
        <div>● Become a member of the creator Properchat group</div>
        <div>● Download attached files</div>
      </div>
      <div className="flex justify-center">
        <Button label="Library" onClick={handleLibraryButtonClick} />
      </div>
    </div>
  )
}
