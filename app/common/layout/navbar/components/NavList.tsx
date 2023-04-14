import { URIs } from "@/app/common/constants/navigation"
import Link from "next/link"

export const NavList = () => {
  return (
    <ul className="items-stretch hidden space-x-3 md:flex text-primary-variant">
      {URIs.map((uri) => (
        <li className="flex" key={uri.name}>
          <Link
            href={uri.path}
            className="flex items-center px-4 -mb-1 border-b-2 text-primary dark:border-transparent"
          >
            <span className="link link-underline link-underline-black">
              {uri.name}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  )
}
