import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import './App.css';

function App() {
  const [search, setSearch] = useState('');

  useEffect(() => {
    console.log(search);
  });

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <Router basename="/UsrDirTSX">
      <div className="App">
        <Header input={search} changeHandler={handleSearchInputChange} />
        <Route exact path="/" component={Home} />
      </div>
    </Router>
  );
}

export default App;
