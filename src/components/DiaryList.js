import React from 'react';
import DiaryEntry from './DiaryEntry';
import './DiaryList.css';

const DiaryList = ({ entries }) => {
  return (
    <div className="diary-list">
      <h2>Entries</h2>
      {entries.map((entry, index) => (
        <DiaryEntry key={index} entry={entry} />
      ))}
    </div>
  );
};

export default DiaryList;
