import "../globals.css"
import { Taller } from "./components"

export default function LoginPage() {
  let login = "Sign in"

  return (
    <>
      <header>
        <title>{login}</title>
      </header>
      <Taller />
    </>
  )
}
