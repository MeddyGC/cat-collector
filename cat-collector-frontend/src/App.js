import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CatList from './components/CatList';
import FavoriteCatList from './components/FavoriteCatList';
import SearchPage from './components/SearchPage/SearchPage';
import Navbar from './components/NavBar/Navbar';


const App = () => {
    return (
        
        <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<CatList />} />
                <Route path="/cat-list" element={<CatList />} />
                <Route path="/favorite-cats" element={<FavoriteCatList />} />
                <Route path="/search" element={<SearchPage />} />
            </Routes>
        </Router>
            
     
    );
};

export default App;
