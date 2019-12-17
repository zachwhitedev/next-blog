import React from 'react';
import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/about.scss';
import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <p className='about-section'>A website of interviews with American prisoners.</p>
    </Layout>
    
  )
}