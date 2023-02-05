import './SearchPage.css';
import SearchBar from './SearchBar';
import React from 'react';

import SettingsIcon from './SettingsIcon';


import 'katex/dist/katex.min.css'
import Latex from 'react-latex-next'
import TopQuestions from './TopQuestions';



function SearchPage() {

    return (
      <div>
        <div className="brainstormdb-title">
          <header className="brainstormdb-title-header">
            <p>BrainStormDB</p>
          </header>
          <header className="brainstormdb-subtitle-header">
            <p>the free Databank of Questions </p>
            </header>



        </div>
        <div
        className="separator-line">
        </div>

        <div className="settings-icon">
          <SettingsIcon />
        </div>

        <div className="search-bar">
                <SearchBar/>         
        </div>

        <div className="example-searches">
        <Latex>
        {String.raw`$\sin^2\theta + \cos^2\theta = 1$`}
       
      </Latex>
      </div>
      <div>
        <TopQuestions/>
      </div>
      </div>
    );
  }
  

export default SearchPage;

