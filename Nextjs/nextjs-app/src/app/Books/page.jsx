import React, { cache } from 'react';
import BooksCard from '../components/BooksCard';

const getBooks = async () => {
    const data = await fetch('http://localhost:3001/books',
        {next: {revalidate: 20}})

        /*next: {revalidate: 10} means that the data will be revalidated every 10 seconds. 
        This is useful for data that changes frequently, such as stock prices or news articles.*/

    // const data = await fetch('http://localhost:3001/books' , {cache :'force-cache'})
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