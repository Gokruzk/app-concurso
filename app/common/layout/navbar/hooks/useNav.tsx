"use client"

import { useState } from "react"

export const useNav = () => {
  const [openNav, setOpenNav] = useState(false)

  const toggleNav = () => setOpenNav((prev) => !prev)

  return {
    openNav,
    toggleNav,
  }
}
