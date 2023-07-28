import React, { useState } from 'react';
import './DiaryForm.css';

const DiaryForm = ({ addEntry }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && content) {
      addEntry({ title, content, date: new Date().toISOString() });
      setTitle('');
      setContent('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>New Entry</h2>
      <label htmlFor="title">Title:</label>
      <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <label htmlFor="content">Content:</label>
      <textarea id="content" value={content} onChange={(e) => setContent(e.target.value)} />
      <button type="submit">Add Entry</button>
    </form>
  );
};

export default DiaryForm;
