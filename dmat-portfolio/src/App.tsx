import React from 'react';
import TopPage from './pages/TopPage/TopPage';
import Layout from './pages/Layout/Layout';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import SkillPage from './pages/SkillPage/SkillPage';
import WorksPage from './pages/WorksPage/WorksPage';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/portfolio' element={<TopPage />} />
          <Route path='/portfolio/skills' element={<SkillPage />} />
          <Route path='/portfolio/works' element={<WorksPage />} />
          <Route path='*' element={<Navigate to="/portfolio" />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
