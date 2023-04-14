"use client"

import "./styles.css"

import { useNav } from "./hooks"
import { MenuButton, MenuDropdown, NavList } from "./components"
import { Logo } from "../../components/static"
import { Title } from "../../components/texts"
import { Login, SignUp } from "../../components/buttons"



const NavBar = () => {
  const { openNav, toggleNav } = useNav()

  return (
    <div className="dark:bg-white-800 dark:text-dark-100 font-semibold z-40">
      <div className="flex justify-between items-center flex-wrap h-16">
        <div className="flex text-primary items-center flex-shrink-0 mr-6 p-2">
          <Logo/>
          <Title/>
        </div>
        <NavList />
        <div className="items-center flex-shrink-0 hidden md:flex gap-1">
          <Login/>
          <SignUp/>
        </div>
        <MenuButton toggleMenu={toggleNav} />
      </div>
      {openNav && <MenuDropdown toggleMenu={toggleNav} />}
    </div>
  )
}

export default NavBar
