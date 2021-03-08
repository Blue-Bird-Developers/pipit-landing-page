import Head from 'next/head';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';
import MainPage from './MainPage';

export default function Home() {
  return (
    <>
    <div>
      <Head>
        <title>Pipit Landing Page</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
    </div>
          <MainPage />
    </>
  );
}
