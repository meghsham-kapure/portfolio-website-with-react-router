import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { users } from "../../data/data.js";

export default function User() {
  const { userId } = useParams();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const user = users.find((u) => u.id === Number(userId));
    setUserData(user);
  }, [userId]);

  if (!userData)
    return (
      <div className="flex items-center justify-center min-h-screen text-gray-100 bg-gray-950">
        User not found...
      </div>
    );

  return (
    <div className="flex items-center justify-center p-4 min-h-screen bg-gray-950">
      <div className="overflow-hidden max-w-2xl w-full bg-gray-900 border border-gray-800 shadow-lg rounded-lg">
        <div className="flex flex-col md:flex-row">
          {/* Image Section */}
          <div className="flex items-center justify-center p-8 bg-gray-800 md:w-2/5">
            <div className="overflow-hidden flex items-center justify-center h-56 w-56 border-4 border-blue-500 rounded-full">
              <img
                src={`/users/user-${userData.id}.png`}
                alt={userData.username}
                className="object-cover h-full w-full"
              />
            </div>
          </div>

          {/* Details Section */}
          <div className="p-8 space-y-6 md:w-3/5">
            <div>
              <p className="font-bold text-3xl text-gray-100">
                {userData.name}
              </p>
              <p className="mt-2 font-medium text-blue-400 text-lg">
                {userData.designation}
              </p>
            </div>

            <div className="pt-6 space-y-5 border-gray-800 border-t">
              <div>
                <p className="mb-2 text-gray-400 text-sm">User ID</p>
                <p className="text-gray-100 text-lg">{userData.id}</p>
              </div>

              <div>
                <p className="mb-2 text-gray-400 text-sm">Username</p>
                <p className="text-gray-100 text-lg">{userData.username}</p>
              </div>

              <div>
                <p className="mb-2 text-gray-400 text-sm">City</p>
                <p className="text-gray-100 text-lg">{userData.city}</p>
              </div>

              <div>
                <p className="mb-2 text-gray-400 text-sm">Contact Number</p>
                <p className="text-gray-100 text-lg">
                  {userData.contactNumber}
                </p>
              </div>

              <div>
                <p className="mb-2 text-gray-400 text-sm">Email Address</p>
                <p className="break-all text-gray-100 text-lg">
                  {userData.emailAddress}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
