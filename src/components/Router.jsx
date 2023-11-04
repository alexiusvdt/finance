import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Counter from './counter';
import Layout from './Layout';
import Contact from './Contact';
import NoPage from './NoPage';
import Home from './Home';


const Router = () => {
  return (
    <div className='router'>
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
    </div>
  )
}

export default Router
