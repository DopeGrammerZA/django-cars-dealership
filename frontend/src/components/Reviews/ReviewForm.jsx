import React, { useState } from 'react';
import axios from 'axios';

function ReviewForm({ dealerId }) {
    const [review, setReview] = useState('');
    const [rating, setRating] = useState(5);
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post(`http://127.0.0.1:8000/api/dealer/${dealerId}/reviews/`, { review, rating });
        alert('Review posted!');
    };
    
    return (<form onSubmit={handleSubmit}>
        <textarea value={review} onChange={(e) => setReview(e.target.value)} placeholder="Your review" />
        <select value={rating} onChange={(e) => setRating(e.target.value)}>
            {[1,2,3,4,5].map(r => (<option key={r} value={r}>{r} stars</option>))}
        </select>
        <button type="submit">Post Review</button>
    </form>);
}

export default ReviewForm;
