import React from 'react';
import "../styles/index.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/Layout';
import PostPreviews from '../components/PostPreviews';

const Index = () => {
  return (
    <Layout>
      <PostPreviews />
      
    </Layout>
  )
}

export default Index;