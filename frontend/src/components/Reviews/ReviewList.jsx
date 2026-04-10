import React from 'react';

function ReviewList({ reviews }) {
    return (<div><h3>Customer Reviews</h3><ul>
        {reviews.map(review => (<li key={review.id}>
            <p>{review.review}</p>
            <p>Rating: {review.rating}/5</p>
        </li>))}
    </ul></div>);
}

export default ReviewList;
