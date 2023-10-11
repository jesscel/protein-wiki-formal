import { useState } from 'react'
import './App.css'

import { SearchBar } from './components/SearchBar'
import { SearchResultsList } from './components/SearchResultsList'

function App() {

  const [results, setResults] = useState([]);

  return (
    <div className="App">
      <div class="navbar">
        <a class="active" href="#">Home</a> 
        <a href="#">View All</a> 
        <a href="#">Search</a>
        <a href="#">About Us</a> 
        <a href="#">Login</a>
      </div>
      <div className="entry-page-title">Welcome to Protein Wiki</div>
      <div className="search-bar-container">
        <SearchBar setResults={setResults}></SearchBar>
        <SearchResultsList results={results}></SearchResultsList>
      </div>
    </div>
  );
}

export default App
