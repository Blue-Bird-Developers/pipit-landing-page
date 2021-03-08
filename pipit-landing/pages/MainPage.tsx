import React from 'react';
import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';
import Intro from './Intro';
import Notice from './Notice';
import Bookmark from './Bookmark';
import Footer from './Footer';

const Fullpage = () => (
  <ReactFullpage
    // fullpage options
    licenseKey="YOUR_KEY_HERE"
    scrollingSpeed={750} /* Options here */
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <section className="section">
            <Intro />
          </section>
          <section className="section">
            <Notice />
          </section>
          <section className="section">
            <Bookmark />
          </section>
          <section className="section">
            <Footer />
          </section>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default Fullpage;
