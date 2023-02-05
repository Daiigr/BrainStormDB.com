import './BrainStormTitle.css';
import './OptionsPill.css';
import SearchBar from './SearchBar';
import React from 'react';
import LatexRenderer from './LatexRenderer';
import Tags from './Tags';


function SearchPage() {
 
  
    return (
      <div>
        <div className="brainstormdb-title">
          <header className="brainstormdb-title-header">
            <p>BrainStormDB</p>
          </header>
        </div>
        <div className="options-pill">
          <header className="options-pill-header">
            <p>Options</p>
          </header>
        </div>
        <div className="search-bar">
                <SearchBar/>         
        </div>

        <div className="example-searches">
            <header className="example-searches-header">
                <LatexRenderer/>
                <Tags/>
            </header>
            </div>
      </div>
    );
  }
  

export default SearchPage;

