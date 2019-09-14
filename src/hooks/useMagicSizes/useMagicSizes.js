import { useViewportScroll, useTransform } from "framer-motion"

const useMagicSizes = ({ dimensions: { outer, start, end }, distance }) => {
  const distanceStart = outer.y
  const { scrollY } = useViewportScroll()
  const width = useTransform(
    scrollY,
    [distanceStart, distanceStart + distance],
    [start.width, end.width]
  )
  const height = useTransform(
    scrollY,
    [distanceStart, distanceStart + distance],
    [start.height, end.height]
  )
  const left = useTransform(
    scrollY,
    [distanceStart, distanceStart + distance],
    [start.x, end.x]
  )
  const top = useTransform(
    scrollY,
    [distanceStart, distanceStart + distance],
    [start.y, end.y]
  )
  return { width, height, left, top }
}

export default useMagicSizes
