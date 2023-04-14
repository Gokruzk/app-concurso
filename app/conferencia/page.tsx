import "../globals.css"
import { Conferencia } from "./components"

export default function LoginPage() {
  let login = "Sign in"

  return (
    <>
      <header>
        <title>{login}</title>
      </header>
      <Conferencia />
    </>
  )
}
