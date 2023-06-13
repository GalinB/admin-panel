import { useEffect, useState } from 'react'
import MenuImage from './MenuImage'

const Toggle = ({ onToggle, size = 16 }) => {
  const [toggleSrc, setToggleSrc] = useState(null)

  const handleToggleSrc = () => {
    setToggleSrc(!toggleSrc)
  }

  useEffect(() => {
    // skip first render
    if (toggleSrc !== null) onToggle?.(toggleSrc)
  }, [toggleSrc])

  return toggleSrc ? (
    <MenuImage
      src="/btn_inactive.svg"
      width={size}
      height={size}
      alt="Right Chevron Icon"
      onClick={handleToggleSrc}
    />
  ) : (
    <MenuImage
      src="/btn_active.svg"
      width={size}
      height={size}
      alt="Right Chevron Icon"
      onClick={handleToggleSrc}
    />
  )
}

export default Toggle
