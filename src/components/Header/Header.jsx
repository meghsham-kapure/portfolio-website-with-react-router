import { Link, NavLink } from "react-router";
export default function Header() {
  return (
    <header className="z-50 sticky top-0 shadow">
      <nav className="px-4 py-2.5 bg-gray-900 border-b border-gray-800 lg:px-6">
        <div className="flex flex-wrap items-center justify-between mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <span className="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              DevDotMaverick
            </span>
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
              <li className="relative">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `py-2 text-gray-300 duration-200 ${
                      isActive ? "text-blue-400" : "hover:text-blue-400"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      Home
                      {isActive && (
                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-400"></div>
                      )}
                    </>
                  )}
                </NavLink>
              </li>
              <li className="relative">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `py-2 text-gray-300 duration-200 ${
                      isActive ? "text-blue-400" : "hover:text-blue-400"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      About
                      {isActive && (
                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-400"></div>
                      )}
                    </>
                  )}
                </NavLink>
              </li>
              <li className="relative">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `py-2 text-gray-300 duration-200 ${
                      isActive ? "text-blue-400" : "hover:text-blue-400"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      Contact
                      {isActive && (
                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-400"></div>
                      )}
                    </>
                  )}
                </NavLink>
              </li>

              <li className="relative">
                <NavLink
                  to="/github"
                  className={({ isActive }) =>
                    `py-2 text-gray-300 duration-200 ${
                      isActive ? "text-blue-400" : "hover:text-blue-400"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      GitHub
                      {isActive && (
                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-400"></div>
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
