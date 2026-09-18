import React from 'react';

const BookDetailsPage = async({params}) => {

    const {BookId} = await params
    const res = await fetch(`http://localhost:3001/books/${BookId}`)
    const book = await res.json()
    return (
        <div>
            <h2>Book Details</h2>
            <p>price : {book.price}</p>
            <p>author : {book.author}</p>
        </div>
    );
};

export default BookDetailsPage;