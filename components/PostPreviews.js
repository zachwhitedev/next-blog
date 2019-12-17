import React from 'react';
import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/about.scss';
import PostPreview from './PostPreview';

export default function PostPreviews() {

  const previews = [
    {
      name: 'Arthur Fleck',
      prison: 'San Quentin',
      crime: 'Armed Robbery'
    },
    {
      name: 'Tupac Shakur',
      prison: 'San Quentin',
      crime: 'Armed Robbery'
    }
  ]
    
  return (
    <div>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {previews.map(preview => 
        <PostPreview name={preview.name}/>
        )}
    </div>
    
  )
}