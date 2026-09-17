import React from 'react';
import BooksCard from '../components/BooksCard';

const getBooks = async () => {
    const data = await fetch('http://localhost:3001/books')
    return data.json()
}

const BooksPage = async () => {
    const books = await getBooks()
    return (
        <div>
            <h2>Books : {books.length}</h2>
            <div className='grid grid-cols-3 gap-4'>
                {
                    books.map(book => (
                        <BooksCard
                            key={book.id}
                            book={book}
                        />
                    ))}
            </div>
        </div>
    );
};

export default BooksPage;