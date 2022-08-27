import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddSongPage from './add-song';
import SongListPage from './song-list';
import {Link} from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <ul>
                <li><Link to="/">MTagHome</Link></li>
                <li><Link to="/">Songs</Link></li>
                <li><Link to="/add">Add Song</Link></li>
            </ul>
            <Routes>
                <Route path='/' element={<SongListPage />}/>
                <Route path='/add' element={<AddSongPage />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;