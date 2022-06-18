import React from 'react';
import SearchForm from '../SearchForm';

function Welcome() {
  return (
    <div className="bg-white md:rounded-md shadow-md flex flex-col-reverse md:space-x-10 md:flex-row overflow-hidden">
      {/* text and form */}
      <div
        className="flex flex-col space-y-6 mt-5
       p-10 items-center justify-center"
      >
        <h1 className="text-center text-2xl  font-bold">
          Start
          <span className="text-red-500 "> Watching </span>
        </h1>
        <SearchForm />
      </div>
      {/* Image */}
      <img
        className="md:w-96"
        src="https://media2.giphy.com/media/bsNVJthYEr506gGcka/giphy.gif?cid=790b76114b093f78125a4793f03a599d4537020169958de5&rid=giphy.gif&ct=g"
        alt="tvs"
      />
    </div>
  );
}

export default Welcome;
