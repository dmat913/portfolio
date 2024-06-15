import React from 'react';
import TopPage from './pages/TopPage/TopPage';
import Layout from './pages/Layout/Layout';

function App() {
  return (
    <div className="App">
      <Layout>
        <TopPage />
      </Layout>
    </div>
  );
}

export default App;
