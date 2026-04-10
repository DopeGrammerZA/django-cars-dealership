import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import DealerList from './components/Dealers/DealerList';
import DealerDetail from './components/Dealers/DealerDetail';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<DealerList />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dealer/:id" element={<DealerDetail />} />
            </Routes>
        </Router>
    );
}

export default App;
