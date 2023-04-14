export const MenuButton = ({ toggleMenu }: { toggleMenu: Function }) => {
  return (
    <div className="md:hidden hover:shadow-lg">
      <button
        onClick={() => toggleMenu()}
        className="flex items-center px-3 py-2 border rounded"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6 dark:text-gray-900"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>
  )
}
