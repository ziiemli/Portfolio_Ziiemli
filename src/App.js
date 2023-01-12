import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Start from './pages/Start';
import Home from './pages/Home';
import WebDevDesign from './pages/WebDevDesign';
import Error from './pages/Error';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='/*' element={<Home />} />
        <Route path='/Web_Development_and_Design' element={<WebDevDesign />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;