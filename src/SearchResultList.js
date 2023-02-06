import React from 'react';
import SearchResult from './SearchResult';
import './SearchResultsList.css';

function SearchResultsList({ results }) {
  return (
    <div className="search-results-list">
      {results.map((result) => (
        <SearchResult
          key={result.equation}
          equation={result.equation}
          tags={result.tags}
          rating={result.rating}
          verified={result.verified}
        />
      ))}
    </div>
  );
}

export default SearchResultsList;
