import React from 'react';
import SearchBar from './SearchBar';
import SettingsIcon from './SettingsIcon';
import SearchResult from './SearchResult';
import './SearchPage.css';

function SearchPage() {
  const searchResultsList = [
    {
      equation: String.raw`$\sin^2\theta + \cos^2\theta = 1$`,
      tags: ['trigonometry', 'identity'],
      rating: 4.5,
      verified: true
    },
    {
      equation: String.raw`$e^{i\pi} + 1 = 0$`,
      tags: ['complex numbers', 'identity'],
      rating: 4.8,
      verified: false
    },
    {
      equation: String.raw`$\frac{1}{n}\sum_{k=1}^n a_k = \bar{a}$`,
      tags: ['statistics', 'mean'],
      rating: 4.2,
      verified: true
    },
  ];

  return (
    <div>
      <div className="brainstormdb-title">
        <header className="brainstormdb-title-header">
          <p>BrainStormDB</p>
        </header>
        <header className="brainstormdb-subtitle-header">
          <p>the free Databank</p>
        </header>
      </div>
      <div className="separator-line" />
      <div className="settings-icon">
        <SettingsIcon />
      </div>
      <div className="search-bar">
        <SearchBar />
      </div>
      <div className="example-searches">
        {searchResultsList.map((searchResult, index) => (
          <SearchResult
            key={index}
            equation={searchResult.equation}
            tags={searchResult.tags}
            rating={searchResult.rating}
            verified={searchResult.verified}
          />
        ))}
      </div>
      
    </div>
  );
}

export default SearchPage;
