import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function DealerDetail() {
    const { id } = useParams();
    const [dealer, setDealer] = useState(null);
    const [reviews, setReviews] = useState([]);
    
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/dealer/${id}/`)
            .then(response => setDealer(response.data));
        axios.get(`http://127.0.0.1:8000/api/dealer/${id}/reviews/`)
            .then(response => setReviews(response.data));
    }, [id]);
    
    if (!dealer) return <div>Loading...</div>;
    
    return (<div><h1>{dealer.name}</h1><p>{dealer.address}</p><h2>Reviews</h2><ul>
        {reviews.map(review => (<li key={review.id}>{review.review} - Rating: {review.rating}/5</li>))}
    </ul></div>);
}

export default DealerDetail;
