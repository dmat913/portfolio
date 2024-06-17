import React from 'react';
import TopPage from './pages/TopPage/TopPage';
import Layout from './pages/Layout/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './pages/header/Header';
import SkillPage from './pages/SkillPage/SkillPage';

function App() {
  return (
    <div className="App">
      <Layout>
        {/* <TopPage /> */}
        <SkillPage />
      </Layout>
    </div>
  );
}

export default App;
