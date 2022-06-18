import React, { useState, useContext } from 'react';
import searchVideos from '../actions/searchVideos';
import { VideosContext } from '../contexts/VideosContext';

function SearchForm() {
  const [query, setQuery] = useState('');
  const { dispatch } = useContext(VideosContext);

  const onFormSubmit = async (e) => {
    e.preventDefault();
    if (query.length === 0) return;

    const data = await searchVideos(query);

    dispatch({ type: 'SET_VIDEOS', payload: data.items });
    dispatch({ type: 'SET_QUERY', payload: query });
    dispatch({ type: 'SET_NEXTPAGE', payload: data.nextPageToken });
  };

  return (
    <form onSubmit={onFormSubmit}>
      <div className="relative md:mr-4">
        <input
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          className="pl-2 w-48 md:w-auto pr-8 py-1 border-b placeholder:text-gray-400 focus:outline focus:outline-gray-200"
          placeholder="Search"
          value={query}
        />
        <button type="submit" className="absolute top-1 right-1 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-black hover:scale-125 hover:text-red-500 transition-all duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
