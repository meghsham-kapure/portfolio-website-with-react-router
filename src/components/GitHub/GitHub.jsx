import { useLoaderData } from "react-router";

function GitHub() {
  const githubData = useLoaderData();

  return (
    <div className="flex items-center justify-center p-4 min-h-screen bg-gray-950">
      <div className="overflow-hidden max-w-2xl w-full bg-gray-900 border border-gray-800 shadow-lg rounded-lg">
        <div className="flex flex-col md:flex-row">
          {/* Avatar Section */}
          <div className="flex items-center justify-center p-8 bg-gray-800 md:w-2/5">
            <div className="overflow-hidden flex items-center justify-center h-56 w-56 border-4 border-blue-500 rounded-full">
              <img
                src={githubData["avatarUrl"]}
                alt={githubData["login"]}
                className="object-cover h-full w-full"
              />
            </div>
          </div>

          {/* Details Section */}
          <div className="p-8 space-y-4 md:w-3/5">
            <div>
              <p className="font-bold text-3xl text-gray-100">
                {githubData["name"]}
              </p>
              <p className="mt-1 font-medium text-blue-400 text-lg">
                @{githubData["login"]}
              </p>
            </div>

            <div className="pt-6 space-y-3 border-gray-800 border-t">
              {githubData["bio"] && (
                <div>
                  <p className="mb-1 text-gray-400 text-sm">Bio</p>
                  <p className="text-gray-100">{githubData["bio"]}</p>
                </div>
              )}

              {githubData["location"] && (
                <div>
                  <p className="mb-1 text-gray-400 text-sm">Location</p>
                  <p className="text-gray-100">{githubData["location"]}</p>
                </div>
              )}

              {githubData["company"] && (
                <div>
                  <p className="mb-1 text-gray-400 text-sm">Company</p>
                  <p className="text-gray-100">{githubData["company"]}</p>
                </div>
              )}

              {githubData["email"] && (
                <div>
                  <p className="mb-1 text-gray-400 text-sm">Email</p>
                  <p className="break-all text-gray-100">
                    {githubData["email"]}
                  </p>
                </div>
              )}

              {githubData["blog"] && (
                <div>
                  <p className="mb-1 text-gray-400 text-sm">Blog</p>
                  <a
                    href={githubData["blog"]}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-400 hover:text-blue-300"
                  >
                    {githubData["blog"]}
                  </a>
                </div>
              )}

              {githubData["twitterUsername"] && (
                <div>
                  <p className="mb-1 text-gray-400 text-sm">Twitter</p>
                  <p className="text-gray-100">
                    @{githubData["twitterUsername"]}
                  </p>
                </div>
              )}

              <div>
                <p className="mb-1 text-gray-400 text-sm">Hireable</p>
                <p className="text-gray-100">
                  {githubData["hireable"] ? "Yes" : "No"}
                </p>
              </div>

              <div className="pt-4">
                <a
                  href={githubData["htmlUrl"]}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block px-6 py-2 font-medium text-white bg-blue-600 transition hover:bg-blue-700 rounded-lg"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GitHub;
