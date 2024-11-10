import React from 'react';
import './home.css';
import Header from '../components/Header.js';
import BookList from '../components/BookList';

export default function HomePage() {
  return (
    <div className='homepage'>
      <Header />
      <div className="Content">
        <BookList />        
        
      </div>
    </div>
  );
}
