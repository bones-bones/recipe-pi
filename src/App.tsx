import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Recipe } from './recipe';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/display" element={<Recipe />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
