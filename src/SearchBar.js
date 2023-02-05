import React, { useState, useEffect } from 'react';

export default function SearchBar() {
  const [inputValue, setInputValue] = useState('');
  const [placeholder, setPlaceholder] = useState('Search...');
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const placeholders  = [    
    "Implicit Differentiation Problems",    
    "AP Calculus Practice Questions",    
    "IB AA SL Exam Practice Problems",   
     "Differentiation Techniques and Rules",   
      "Riemann Sums and Definite Integrals",    
      "L'Hopital's Rule and Indeterminate Forms",   
       "Optimization Problems in Calculus",   
        "Applications of Derivatives in Real Life",    
        "Motion Along a Curve and Related Rates",    
        "Fundamental Theorem of Calculus Practice Problems"]

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      setPlaceholder(placeholders[placeholderIndex].substring(0, i) + '|');
      i++;
      if (i > placeholders[placeholderIndex].length) {
        clearInterval(typing);
        setPlaceholderIndex((placeholderIndex + 1) % placeholders.length);
        setPlaceholder(placeholders[placeholderIndex]);
      }
    }, 100);

    return () => clearInterval(typing);
  }, [placeholderIndex]);

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder={placeholder}
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        style={{ width: "1000px" }}
      />
      <i className="fa fa-search"></i>
    </div>
  );
}
