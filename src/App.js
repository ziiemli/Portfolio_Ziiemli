import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Start from './pages/Start';
import Error from './pages/Error';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='/*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;