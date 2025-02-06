import React from "react";

import {
  WEBSITE_NAME,
  WEBSITE_DESCRIPTION,
  IMAGE_URL,
  BUTTON1,
  BUTTON2,
} from "./Config";

function App() {
  return (
    <div className="bg-gradient-to-r from-pink-100 to-purple-100 min-h-screen flex flex-col">
      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="bg-white rounded-3xl shadow-lg p-8 max-w-2xl mx-auto flex-grow relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/path/to/candy-swirl.svg')] opacity-20 bg-repeat bg-center/32"></div>
          <div className="relative z-10">
            <div className="mb-6 text-center">
              <h1 className="text-4xl font-bold text-yellow-500 drop-shadow-lg tracking-wide inline-block">
                {WEBSITE_NAME}
              </h1>
            </div>
            <p className="text-base text-gray-800 mb-6 text-center leading-relaxed">
              {WEBSITE_DESCRIPTION}
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <div className="md:w-1/2">
                <img
                  src={IMAGE_URL}
                  alt="Honey & Spice"
                  style={{ maxHeight: "350px" }}
                />
              </div>
              <div className="md:w-1/2 flex justify-center space-x-4 md:justify-start">
                <button className="px-6 py-3 bg-yellow-500 text-white font-medium rounded-2xl hover:bg-yellow-600 transition duration-300 shadow-md">
                  {" "}
                
                  {BUTTON1}
                </button>
                <button className="px-6 py-3 bg-yellow-500 text-white font-medium rounded-2xl hover:bg-yellow-600 transition duration-300 shadow-md">
                  {" "}
                 
                  {BUTTON2}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
