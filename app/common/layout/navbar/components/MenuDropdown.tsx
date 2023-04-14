import Link from "next/link"

import { Login, SignUp } from "@/app/common/components/buttons"
import { URIs } from "@/app/common/constants/navigation"

export const MenuDropdown = ({ toggleMenu }: { toggleMenu: Function }) => {
  return (
    <div className="w-[100%] text-[100%] right-0 left-0 mx-auto absolute z-40 inline-block font-bold font-sans flex-grow py-2 md:hidden transition-opacity bg-white">
      <div className="w-full grid gap-y-[16px] text-center justify-center lg:flex-grow mr-2">
        {URIs.map((uri) => (
          <Link
            key={uri.name}
            href={uri.path}
            className="block lg:inline-block lg:mt-0 text-primary"
            onClick={() => toggleMenu()}
          >
            <span>{uri.name}</span>
          </Link>
        ))}
      </div>
      <div className="mx-2 my-2 grid gap-y-2">
        <div className="w-full">
          <Login fullWidth/>
        </div>
        <div className="w-full">
          <SignUp fullWidth/>
        </div>
      </div>
    </div>
  )
}
