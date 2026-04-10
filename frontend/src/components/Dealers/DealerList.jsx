import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function DealerList() {
    const [dealers, setDealers] = useState([]);
    
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/dealers/')
            .then(response => setDealers(response.data))
            .catch(error => console.error(error));
    }, []);
    
    return (<div><h1>Dealerships</h1><ul>
        {dealers.map(dealer => (<li key={dealer.id}>
            <Link to={`/dealer/${dealer.id}`}>{dealer.name}</Link> - {dealer.city}, {dealer.state}
        </li>))}
    </ul></div>);
}

export default DealerList;
