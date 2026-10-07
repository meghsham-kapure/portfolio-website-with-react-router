export default function Contact() {
  return (
    <div className="flex items-top justify-center relative min-h-175 bg-gray-950 sm:items-center sm:pt-0">
      <div className="mx-auto max-w-6xl lg:px-8 sm:px-6">
        <div className="overflow-hidden mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="mr-2 p-6 bg-gray-900 border border-gray-800 sm:rounded-lg">
              <h1 className="font-extrabold text-3xl text-gray-100 tracking-tight sm:text-4xl">
                Get in touch:
              </h1>
              <p className="mt-2 font-medium text-gray-400 text-lg text-normal sm:text-xl">
                Fill in the form to start a conversation
              </p>

              <div className="flex items-center mt-8 text-gray-400">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  className="h-8 w-8 text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <div className="ml-4 w-40 font-semibold text-md tracking-wide">
                  Acme Inc, Street, State, Postal Code
                </div>
              </div>

              <div className="flex items-center mt-4 text-gray-400">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  className="h-8 w-8 text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <div className="ml-4 w-40 font-semibold text-md tracking-wide">
                  +44 1234567890
                </div>
              </div>

              <div className="flex items-center mt-2 text-gray-400">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  className="h-8 w-8 text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <div className="ml-4 w-40 font-semibold text-md tracking-wide">
                  info@acme.org
                </div>
              </div>
            </div>

            <form className="flex flex-col justify-center p-6">
              <div className="flex flex-col">
                <label htmlFor="name" className="hidden">
                  Full Name
                </label>
                <input
                  type="name"
                  name="name"
                  id="name"
                  placeholder="Full Name"
                  className="mt-2 px-3 py-3 w-100 font-semibold text-gray-100 bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none rounded-lg"
                />
              </div>

              <div className="flex flex-col mt-2">
                <label htmlFor="email" className="hidden">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="mt-2 px-3 py-3 w-100 font-semibold text-gray-100 bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none rounded-lg"
                />
              </div>

              <div className="flex flex-col mt-2">
                <label htmlFor="tel" className="hidden">
                  Number
                </label>
                <input
                  type="tel"
                  name="tel"
                  id="tel"
                  placeholder="Telephone Number"
                  className="mt-2 px-3 py-3 w-100 font-semibold text-gray-100 bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none rounded-lg"
                />
              </div>

              <button
                type="submit"
                className="mt-3 px-6 py-3 font-bold text-white bg-blue-600 duration-300 ease-in-out transition hover:bg-blue-700 md:w-32 rounded-lg"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
