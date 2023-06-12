import { useRef, useState, useEffect } from 'react'

const useDrag = () => {
  const parentRef = useRef(null) // Step 1: useRef on parent which has all tab elements
  const [isMouseDown, setIsMouseDown] = useState(false) // Step 2: create state (boolean) for mousedown on child element

  useEffect(() => {
    const parentElement = parentRef.current

    // Step 3: Attach mousedown event handler to children on mount of parent element
    const handleMouseDown = () => {
      setIsMouseDown(true)
    }

    if (parentElement) {
      const children = parentElement.children
      Array.from(children).forEach((child) => {
        child.addEventListener('mousedown', handleMouseDown)
      })
    }

    // Clean up event listeners
    return () => {
      if (parentElement) {
        Array.from(children).forEach((child) => {
          child.removeEventListener('mousedown', handleMouseDown)
        })
      }
    }
  }, []) // Empty dependency array to run the effect only once on mount

  // Step 4: Add event handler on parent for mousemove
  const handleMouseMove = (event) => {
    if (isMouseDown) {
      // Perform drag logic here
      directionRef.current = getDirection(event) // Step 5: Helper function to determine direction
    }
  }

  // Step 6: Add onmouseup event handler to child elements
  const handleMouseUp = () => {
    //based on directionref.current change the elements css back to original

    setIsMouseDown(false)
  }

  // Step 7: Add useEffect to listen to changes in isMouseDown
  useEffect(() => {
    if (!isMouseDown) {
    }
  }, [isMouseDown])

  return { parentRef, handleMouseMove, handleMouseUp }
}

export default useDrag
