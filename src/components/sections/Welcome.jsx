import React from 'react';
import SearchForm from '../SearchForm';

function Welcome() {
  return (
    <div className="bg-white rounded-md shadow-md flex flex-col-reverse md:space-x-10 md:flex-row overflow-hidden">
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
        className="md:w-72"
        src="https://media0.giphy.com/media/3o85xx8dDpwLQu6B20/giphy.gif?cid=ecf05e47rzoa919tqjd6u4uxgwqeo5gn9ojxmp7sdrll7efn&rid=giphy.gif&ct=g"
        alt="tvs"
      />
    </div>
  );
}

export default Welcome;

// tv1
// src="https://media3.giphy.com/media/HhgKxrRAsFqVi/giphy.gif?cid=ecf05e47mbkpy24zszqi1mzulkxmtktoiw8kl03f379sanun&rid=giphy.gif&ct=g"
//         alt="tvs"
