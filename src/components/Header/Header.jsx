import { Link, NavLink } from "react-router";

export default function Header() {
  return (
    <header className="z-50 sticky top-0 shadow">
      <nav className="px-4 py-2.5 bg-gray-900 border-b border-gray-800 lg:px-6">
        <div className="flex flex-wrap items-center justify-between mx-auto max-w-7xl">
          <Link to="/" className="flex items-center">
            <img
              src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
              className="mr-3 h-12"
              alt="Logo"
            />
          </Link>
          <div className="flex gap-2 items-center lg:order-2">
            <Link
              to="#"
              className="px-4 py-2 font-medium text-gray-300 text-sm transition focus:outline-none hover:text-gray-100 lg:px-5 lg:py-2.5 rounded-lg"
            >
              Log in
            </Link>
            <Link
              to="#"
              className="px-4 py-2 font-medium text-sm text-white bg-blue-600 transition focus:outline-none hover:bg-blue-700 lg:px-5 lg:py-2.5 rounded-lg"
            >
              Get started
            </Link>
          </div>
          <div
            className="hidden items-center justify-between w-full lg:flex lg:order-1 lg:w-auto"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:mt-0 lg:space-x-8">
              <li>
                <NavLink
                  className={() =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-700 hover:bg-gray-800 lg:hover:bg-transparent lg:border-0 hover:text-blue-400 lg:p-0 text-gray-300`
                  }
                >
                  Home
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
