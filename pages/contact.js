import React from 'react';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/Layout';
import '../styles/contact.scss';

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>Prisoner Sentences - Contact</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <p className='contact-section'>Contact form coming soon.</p>
      <style jsx>{`
        .contact-section {
          display: block;
          margin: 0 auto;
          width: 315px;
          text-align: center;
          font-family: 'Baskerville', 'Baskerville Old Face', 'Hoefler Text',
            'Garamond', 'Times New Roman', 'serif';
        }
      `}</style>
    </Layout>
  );
}
