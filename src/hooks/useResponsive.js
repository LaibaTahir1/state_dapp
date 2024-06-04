import { useMediaQuery } from "usehooks-ts";

export default function useResponsive () {
  const sm = useMediaQuery('(min-width: 640px)')
  const md = useMediaQuery('(min-width: 868px)')
  const lg = useMediaQuery('(min-width: 1024px)')
  const xl = useMediaQuery('(min-width: 1280px)')

  return {
    sm,
    md,
    lg,
    xl,
  }

}