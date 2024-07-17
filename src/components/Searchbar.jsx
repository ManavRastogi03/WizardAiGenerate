import React, { useState } from 'react';

function Searchbar({ setQuestion, generateAI }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setQuestion(inputValue);
    generateAI();
  };

  return (
    <form className="flex items-center max-w-full mx-auto" onSubmit={handleSubmit}>   
      <label htmlFor="simple-search" className="sr-only">Search</label>
      <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg">
            <circle id="yellowcircle" cx="50" cy="50" r="50" fill="yellow"/>
            <circle id="blackcircle" cx="30" cy="30" r="10" fill="black"/>
            <circle id="blackcircle" cx="70" cy="30" r="10" fill="black"/>
            <ellipse id="blackellipse" cx="50" cy="75" rx="20" ry="8" fill="black"/>
            <ellipse id="yellowellipse" cx="50" cy="73" rx="20" ry="8" fill="yellow"/>
            <g transform='translate(15,65)'>
              <path d="M0,0 A40,40 10 0,0 65,0" fill="none" stroke="black" strokeWidth="5" />  
            </g>
          </svg>
        </div>
        <input 
          type="text" 
          id="simple-search" 
          className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
          placeholder="Search branch name..." 
          required
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      <button 
        type="submit" 
        className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
        <span className="sr-only">Search</span>
      </button>
    </form>
  );
}

export default Searchbar;
