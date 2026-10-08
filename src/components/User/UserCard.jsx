export default function UserCard({
  id,
  username,
  city,
  contactNumber,
  emailAddress,
  designation,
}) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-950">
      <div className="p-8 max-w-md bg-gray-900 border border-gray-800 shadow-lg rounded-lg">
        <div className="flex justify-center mb-6">
          <div className="flex items-center justify-center h-24 w-24 bg-linear-to-br from-blue-500 to-blue-600 rounded-full">
            <span className="font-bold text-3xl text-white">
              {username.charAt(0).toUpperCase()}
            </span>
          </div>
        </div>

        <div className="mb-6 text-center">
          <p className="font-bold text-2xl text-gray-100">{username}</p>
          <p className="mt-1 font-medium text-blue-400">{designation}</p>
        </div>

        <div className="pt-4 space-y-4 border-gray-800 border-t">
          <div>
            <p className="mb-1 text-gray-400 text-sm">City</p>
            <p className="text-gray-100">{city}</p>
          </div>

          <div>
            <p className="mb-1 text-gray-400 text-sm">Contact Number</p>
            <p className="text-gray-100">{contactNumber}</p>
          </div>

          <div>
            <p className="mb-1 text-gray-400 text-sm">Email Address</p>
            <p className="break-all text-gray-100">{emailAddress}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
