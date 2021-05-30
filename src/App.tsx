import React from 'react';
import Layout from '@src/components/Layout';
import Header from '@src/components/Header';
import Router from '@src/components/Router';

const App: React.FC = () => {
  return (
    <Layout>
      <Header />
      <Router />
    </Layout>
  );
};

export default App;
