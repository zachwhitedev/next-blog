import React from 'react';
import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <p className='hello'>about</p>
    </Layout>
    
  )
}