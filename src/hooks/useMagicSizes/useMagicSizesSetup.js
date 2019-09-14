import { useRef, useState, useEffect } from "react"
import useWindowSize from "./useWindowSize"

const useMagicSizesSetup = () => {
  const outerRef = useRef()
  const startRef = useRef()
  const endRef = useRef()
  const [dimensions, setDimensions] = useState()
  const windowSize = useWindowSize()

  useEffect(() => {
    setDimensions({
      outer: outerRef.current.getBoundingClientRect().toJSON(),
      start: startRef.current.getBoundingClientRect().toJSON(),
      end: endRef.current.getBoundingClientRect().toJSON(),
    })
  }, [windowSize])
  return { dimensions, outerRef, startRef, endRef }
}

export default useMagicSizesSetup
