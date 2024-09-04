import React from "react";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <div className="mb-6">
          <h1 className="text-6xl font-bold text-gray-800">404</h1>
          <p className="text-xl font-semibold text-gray-600">Page Not Found</p>
        </div>
        <p className="text-gray-500 mb-4">
          Sorry, the page you're looking for does not exist or has been moved.
        </p>
        <a
          href="/"
          className="px-6 py-3 bg-myGreen text-white font-semibold rounded-lg shadow-md hover:bg-myGreenDarker transition duration-300"
        >
          Go to Homepage
        </a>
      </div>
    </div>
  );
};

export default NotFound;
