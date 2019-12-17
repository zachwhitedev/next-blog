import React from 'react';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/PostPreview.scss';

export default function PostPreview(props) {
  return (
    <div className='post-preview'>
      <p>{props.name}</p>
    </div>
  );
}
