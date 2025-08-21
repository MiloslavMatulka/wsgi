"use client";

import { useState, useEffect } from "react";


interface Book {
  id: number,
  author: string,
  rating: number,
  review: string,
  title: string,
}

export default function Home() {
  const [books, setBooks] = useState<Book[]>([]);
  
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}books/`)
      .then(response => response.json())
      .then(data => setBooks(data));
  }, []);
  
  return (
    <div>
      <h1>Book Reviews</h1>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <h2>{book.title} by {book.author}</h2>
            <p>{book.review}</p>
            <strong>Rating: {book.rating}/5</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}
