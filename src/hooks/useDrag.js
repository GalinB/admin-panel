import { useRef, useEffect } from 'react'

const useDrag = ({ dependency } = { dependency: false }) => {
  const parentRef = useRef(null)

  useEffect(() => {
    const parentElement = parentRef.current

    if (!parentElement) return

    const setDraggedElPosition = (el, event) => {
      el.style = `position: fixed; top: ${event.clientY - document.draggingElOffset.y}px; left: ${
        event.clientX - document.draggingElOffset.x
      }px; width: ${
        document.draggingEl.getBoundingClientRect().width
      }px; z-index: 100; pointer-events: none;`
    }
    const handleMouseDown = (e) => {
      document.isMouseDown = true

      const el = e.currentTarget

      el.style.opacity = '0'

      document.draggingEl = el
      document.draggingElOffset = { x: e.offsetX, y: e.offsetY }

      const tmp = el.cloneNode(true)
      setDraggedElPosition(tmp, e)
      tmp.addEventListener('mouseup', handleMouseUp)
      parentElement.append(tmp)

      document.draggingElTmp = tmp
    }

    const handleMouseUp = () => {
      document.isMouseDown = false

      if (document.draggingEl) {
        document.draggingEl.style.opacity = '1'
        document.draggingEl = null
      }

      if (document.draggingElTmp) document.draggingElTmp.remove()
      if (document.draggingElOffset) document.draggingElOffset = null
    }

    const handleMouseMove = (event) => {
      if (
        !document.isMouseDown ||
        !document.draggingEl ||
        !document.draggingElTmp ||
        !document.draggingElOffset
      )
        return

      const tmp = document.draggingElTmp
      setDraggedElPosition(tmp, event)

      if (document.draggedOver) {
        const prevOrder = document.draggingEl.style.order
        document.draggingEl.style.order = document.draggedOver.style.order
        document.draggedOver.style.order = prevOrder
      }
    }

    const handleMouseOver = (event) => {
      if (
        !document.isMouseDown ||
        !document.draggingEl ||
        !document.draggingElTmp ||
        !document.draggingElOffset
      )
        return

      document.draggedOver = event.currentTarget
    }

    parentElement.addEventListener('mousemove', handleMouseMove)
    parentElement.addEventListener('mouseleave', handleMouseUp)

    const children = parentElement.children

    Array.from(children).forEach((child, idx) => {
      child.addEventListener('mousedown', handleMouseDown)
      child.addEventListener('mouseup', handleMouseUp)
      child.addEventListener('mouseover', handleMouseOver)
      child.style = `user-select: none; order: ${idx}`
    })

    return () => {
      if (parentElement) {
        parentElement.removeEventListener('mousemove', handleMouseMove)
        parentElement.removeEventListener('mouseleave', handleMouseUp)

        Array.from(children).forEach((child) => {
          child.removeEventListener('mousedown', handleMouseDown)
          child.removeEventListener('mouseup', handleMouseUp)
          child.removeEventListener('mouseover', handleMouseOver)
        })
      }
    }
  }, [dependency])

  return { parentRef }
}

export default useDrag
