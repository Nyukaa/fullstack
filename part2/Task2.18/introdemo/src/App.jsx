import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css';
import CountryDetail from "./components/CountryDetail.jsx"
import CountryList from "./components/CountryList.jsx"

const App = () => {
  const [query, setQuery] = useState('');
  const [countries, setCountries] = useState([]);
  const [filtered, setFiltered] = useState([]);
  
  useEffect(() => {
      axios.get(
        `https://studies.cs.helsinki.fi/restcountries/api/all`
      ).then(response => {
        setCountries(response.data);        
      });
  }, []);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setQuery(newValue);
    setFiltered(countries.filter(c => c.name.common.toLowerCase().indexOf(newValue.toLowerCase()) >= 0));
  }
  

  let content;
  if (filtered.length > 10) {
    content = <p>Too many matches, please be more specific.</p>;
  } else if (filtered.length > 1) {
    content = <CountryList countries={filtered} />;
  } else if (filtered.length == 1) {
    content = <CountryDetail country={filtered[0]} />;
  }
  return (
    <div>
      <h1>Country Information</h1>
      <input type="text" value={query} onChange={handleChange} />
      {content}
    </div>
  );
};

export default App;
