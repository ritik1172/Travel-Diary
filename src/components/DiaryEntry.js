import React from 'react';
import './DiaryEntry.css';

const DiaryEntry = ({ entry }) => {
  return (
    <div className="entry">
      <h3>{entry.title}</h3>
      <p>{entry.content}</p>
      <p>Date: {new Date(entry.date).toLocaleDateString()}</p>
    </div>
  );
};

export default DiaryEntry;
