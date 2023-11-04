import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Counter from './components/counter';
import Layout from './components/Layout';
import Contact from './components/Contact';
import NoPage from './components/NoPage';
import Home from './components/Home';
// import Transactions from 

import './App.css'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<Home />} />
        <Route path="counter" element={<Counter />} />
        {/* <Route path="transactions" element={<Transactions />} /> */}
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
