// BookList.js
import React from 'react';
import './BookList.css';
import book1 from './cmjd-pic-1.png';
import book2 from './cmjd-pic-2.png';
import book3 from './cmjd-pic-3.png';


function BookList() {
  const books = [
    { 
      title: "The Catcher in the Rye", 
      author: "J.D. Salinger", 
      description: "A novel by J.D. Salinger, published in 1951. The novel tells the story of a young Holden Caulfield.",
      image: book1
      
    },
    { 
      title: "How Innovation Works", 
      author: "Matt Ridley", 
      description: "A book by Matt Ridley, published in 2017. The book is about the evolution of innovation in the 21st century.",
      image: book2
    },
    {
      title: "The Great Gatsby", 
      author: "F. Scott Fitzgerald", 
      description: "A novel by F. Scott Fitzgerald, published in 1925. The novel tells the story of a young millionaire and his family.",
      image: book3
    },
    // Add more books here
  ];

  return (
    <div>
    
    
    <div className="book-list-container">
      <h2 className="topic-heading">Recommended Books</h2> {/* Topic heading */}
      <div className="book-list">
        {books.map((book, index) => (
          <div key={index} className="book-box">
            <li key={index} style={{ marginBottom: "20px" }}>
            <img 
              src={book.image} 
              alt={`Cover of ${book.title}`} 
              style={{ width: "150px", height: "200px", objectFit: "cover" }} 
            />
            </li>
            
            <h3>{book.title}</h3>
            <p><strong>Author:</strong> {book.author}</p>
            <p>{book.description}</p>
          </div>
        ))}
      </div>
    </div>
    <div className='book-caterogory-container'>
        <h1 className='book-category-heading'>Categories</h1>
        <div className='book-category-list'>
          <div className='book-category-box'>
            <h2>Fiction</h2>
          </div>
          <div className='book-category-box'>
            <h2>Non-fiction</h2>
          </div>
          <div className='book-category-box'>
            <h2>Children's books</h2>
          </div>
        </div>
    </div>
    </div>
  );
}

export default BookList;
