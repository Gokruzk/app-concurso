import Link from "next/link"

export const SignUp = ({ fullWidth = false }: { fullWidth?: boolean }) => {
  return (
    <Link href="/signup">
      <button
        className={`h-button ${
          fullWidth ? "w-full" : "w-button"
        } text-white self-center rounded bg-primary hover:shadow-lg transition duration-200`}
      >
        Sign up
      </button>
    </Link>
  )
}
