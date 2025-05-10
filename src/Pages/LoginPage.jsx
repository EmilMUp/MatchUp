import React from 'react'
import Users from '../components/Users'
import Upcoming from '../components/Upcoming';

function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-gray-100">
    {/* Vänsterpanel */}
    <div className="w-full lg:w-1/6 p-6 border-r border-gray-300 bg-white mt-4 mb-4 ml-4 rounded-md">
      <Users />
      </div>
    {/* Högersida / huvudinnehåll */}
    <div className="w-full lg:w-2/3 p-6 flex flex-col items-center justify-center gap-6">
      <Upcoming />
    </div>
  </div>
);

}

export default LoginPage
