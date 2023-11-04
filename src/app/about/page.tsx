import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-600 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-4">About Page</h1>
      <p className="text-lg text-gray-800 mb-4">
        This is the about page of our app.
      </p>
      <Link href="/" className="text-blue-600 hover:underline">
        Go back home
      </Link>
    </div>
  );
};

export default About;
