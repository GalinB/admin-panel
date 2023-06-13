import React, { useState, useEffect, useRef } from 'react'
import Button from '@/components/atoms/Button.jsx'
import CreatePerk from './CreatePerk.jsx'
import Library from './Library.jsx'
import useLibraryTabs from '@/store/useLibraryTabs'
import useDrag from '@/hooks/useDrag.js'
import TabTemplate from '../Templates/Tab.template.jsx'
import MenuImage from '../atoms/MenuImage.jsx'

export default function Perks({ isChangesSaved, onSaveChanges }) {
  const [isCreatePerkOpen, setIsCreatePerkOpen] = useState(false)
  const [isLibraryOpen, setIsLibraryOpen] = useState(false)
  const libraryRef = useRef(null)
  const { tabs, toggleTab } = useLibraryTabs()
  const { parentRef } = useDrag({ dependency: tabs })

  const openCreatePerk = () => {
    setIsCreatePerkOpen(true)
  }

  const closeCreatePerk = () => {
    setIsCreatePerkOpen(false)
  }

  const openLibrary = () => {
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

  return (
    <div className="flex gap-2 flex-col border border-solid border-gray-200 shadow-sm rounded-lg p-3 mb-6">
      <div className="flex justify-center text-black font-bold mb-2">Perks</div>
      {isChangesSaved ? (
        tabs.map((t) =>
          t.isActive ? (
            <div
              key={t.tabId}
              className="flex justify-center mt-2 mb-2 bg-gray-50 border border-opacity-4 shadow-sm rounded-lg pointer-events-none"
            >
              <div className="text-gray-400 font-bold text-2xl mb-2 pulsate">{t.tabName}</div>
            </div>
          ) : null
        )
      ) : (
        <>
          <div ref={parentRef} className="flex gap-2 flex-col">
            {tabs.map((t) =>
              t.isActive ? (
                <TabTemplate
                  key={t.tabId}
                  label={t.tabName}
                  leftSide={
                    <MenuImage src="/drag_indicator.svg" width={10} height={10} alt="Menu Icon" />
                  }
                  rightSide={
                    <MenuImage
                      src="/close.svg"
                      width={16}
                      height={16}
                      alt="Menu Icon"
                      onClick={() => toggleTab(t.tabId)}
                    />
                  }
                />
              ) : null
            )}
          </div>

          <div className="flex display-row gap-2">
            <Button modifier="primary" label="Library" onClick={openLibrary} />
            <Button modifier="secondary" label="Create Perk" onClick={openCreatePerk} />
          </div>

          {isCreatePerkOpen && (
            <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50 bg-opacity-50 bg-gray-500">
              <CreatePerk onClose={closeCreatePerk} />
            </div>
          )}

          {isLibraryOpen && (
            <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50 bg-opacity-50 bg-gray-500">
              <div
                ref={libraryRef}
                className="flex flex-col bg-white border border-solid border-gray-300 shadow-md rounded-md p-3 gap-3 md:w-1/3 w-4/5"
              >
                <div className="text-gray-400">
                  <Library tabs={tabs} toggleTab={toggleTab} onClose={closeLibrary} />
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  )
}
