import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage, CardPage } from '../pages'
import Header from '../header';
import './app.css'

const App = () => {
    return(
        <main role="main" className='container'>
        <Header numItems={5} total={2100}/>
        <Routes>
            <Route path="/" element={<HomePage />}/> 
            <Route path="/cart" element={<CardPage />} />
        </Routes>
        </main>
    )
}

export default App;