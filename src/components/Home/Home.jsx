import { Link, useNavigate } from "react-router";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center bg-gray-800">
      <div className="flex flex-col items-center justify-center mx-auto w-full">
        {/* Hero section */}
        <aside className="overflow-hidden relative mb-0 mt-15 mx-50 w-1/2 text-gray-100 bg-gray-100 border border-gray-800 rounded-xl">
          <div className="z-10 relative mx-auto max-w-7xl lg:px-8 sm:px-6 sm:py-24">
            <div className="mt-80 space-y-8 max-w-xl text-center sm:ml-auto sm:mt-1 sm:text-right">
              <h2 className="font-bold text-4xl text-gray-900 sm:text-5xl">
                Download Now
                <span className="hidden text-4xl sm:block">Lorem Ipsum</span>
              </h2>

              <Link
                className="inline-flex items-center px-6 py-3 font-medium text-white bg-blue-600 transition hover:bg-blue-700 rounded-lg"
                to="/"
              >
                <svg
                  fill="white"
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="evenodd"
                  clipRule="evenodd"
                >
                  <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                </svg>
                &nbsp; Download now
              </Link>
            </div>
          </div>

          <div className="absolute inset-0 pt-12 h-full w-full sm:my-20 sm:pt-1">
            <img className="w-96" src="/assets/team.avif" alt="image1" />
          </div>
        </aside>

        {/*  */}
        <div className="grid place-items-center border-b-2 border-white sm:mt-15">
          <img
            className="w-48 sm:w-xl"
            src="/assets/individual.avif"
            alt="image2"
          />
        </div>

        <h1 className="py-10 font-medium text-2xl text-center text-gray-100 sm:text-5xl">
          Hey, find your finds here!
        </h1>

        <div className="flex items-center justify-center my-5">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const id = Number(document.querySelector("#user-id-input").value);
              if (id) navigate(`/user/${id}`);
            }}
            className="flex gap-2 max-w-2xl w-full"
          >
            <input
              type="number"
              id="user-id-input"
              placeholder="Enter user ID..."
              className="flex-1 px-6 py-3 text-gray-100 bg-gray-900 border border-gray-700 [&::-webkit-inner-spin-button]:hidden [&::-webkit-outer-spin-button]:hidden focus:border-blue-500 focus:outline-none rounded-full"
            />

            <button
              type="submit"
              className="px-8 py-3 font-medium text-white bg-blue-600 transition hover:bg-blue-700 rounded-full"
            >
              Find
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
