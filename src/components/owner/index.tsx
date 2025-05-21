import React from 'react';

const Owner = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-6">
      {/* Left Side - Images */}
      <div className="flex flex-col gap-4 md:w-1/4">
        <img
          src="/images/team/prabhat.jpg" // or use `import image4 from './path/to/image4.jpg'` and replace with `src={image4}`
          alt="Image 4"
          className="w-full rounded-xl shadow-md"
        />

        <h2>Prabhat</h2>
        
      </div>

      {/* Right Side - Text */}
      <div className="md:w-3/4 text-center md:text-left space-y-4">
        <h2 className="text-3xl font-bold text-gray-800">Owner Section</h2>
        <p className="text-gray-600">
          Welcome to the Owner section. This is where you can include descriptive text about the images, your business, or any relevant information you'd like to present alongside the visuals.
        </p>
        <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Owner;

