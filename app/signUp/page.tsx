import "../globals.css"
import { LogInForm } from "./components"

export default function LoginPage() {
  let login = "Sign in"

  return (
    <>
      <header>
        <title>{login}</title>
      </header>
      <LogInForm />
    </>
  )
}
