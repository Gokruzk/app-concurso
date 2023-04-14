import Link from "next/link"

export const Login = ({ fullWidth = false }: { fullWidth?: boolean }) => {
  return (
    <Link href="/login">
      <button
        className={`h-button ${
          fullWidth ? "w-full" : "w-button"
        } self-center rounded text-primary hover:bg-neutral-50 hover:shadow-lg hover:border transition duration-200`}
      >
        Login
      </button>
    </Link>
  )
}
