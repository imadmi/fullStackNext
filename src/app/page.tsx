import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <div className="bg-gray-700 min-h-screen flex items-center justify-center">
      <div className="p-8 rounded-lg shadow-md text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Next.js App</h1>
        <p className="text-lg">
          This is a simple and beautiful homepage using Next.js and Tailwind
          CSS.
        </p>
      </div>
    </div>
  );
};

export default Home;
