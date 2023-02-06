import React from 'react';
import Latex from 'react-latex-next';
import './SearchResult.css';

function SearchResult({ equation, tags, rating, verified }) {
  return (
    <div className="search-result">
      <div className="equation">
        <Latex>{equation}</Latex>
      </div>
      <div className="info">
        <div className="tags">
          {tags.map((tag) => (
            <div className="tag" key={tag}>
              {tag}
            </div>
          ))}
        </div>
        <div className="rating">
          <span className="rating-value">{rating}</span>
        </div>
        <div className="verified">
          {verified ? 'Verified' : 'Not verified'}
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
