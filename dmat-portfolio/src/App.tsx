import React from 'react';
import TopPage from './pages/TopPage/TopPage';
import Layout from './pages/Layout/Layout';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import SkillPage from './pages/SkillPage/SkillPage';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<TopPage />} />
          <Route path='/skills' element={<SkillPage />} />
          <Route path='*' element={<Navigate to="/" />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
