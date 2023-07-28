import React, { useState } from 'react';
import './App.css';
import DiaryForm from './components/DiaryForm';
import DiaryList from './components/DiaryList';

const App = () => {
  const [entries, setEntries] = useState([]);

  const addEntry = (entry) => {
    setEntries([...entries, entry]);
  };

  return (
    <div className="App">
      <h1>Travel Diary</h1>
      <DiaryForm addEntry={addEntry} />
      <DiaryList entries={entries} />
    </div>
  );
};

export default App;
