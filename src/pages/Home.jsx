import React from 'react';

import './home.css';

import Footer from '../components/Footer';

import { Image } from 'primereact/image';
import { Button } from 'primereact/button';

export default function Home() {
  return (
    <div className="mainContent">
      <div className='bgContent'>
        <Image src="/images/bg-pic-1.jpg" />
      </div>
      <div className="topContent">
        <div className='titleAndButton'>
          <div className='titles'>
            <div className='bigTitle'>
              Skip the Wait
              <br />
              Feel Great
            </div>
            <div className='smallTitle'>
              <div className='smallTitleBold'>
                Book Today, Be Seen Right Away,
              </div>
              <div className='smallTitleRegular'>
                <br />
                Private ADHD & Autism Diagnosis UK
              </div>
            </div>
          </div>
          <div className='bookButton'>
            <Button>   
              <Image src="/images/bookButton.png" />
            </Button>              
          </div>
        </div>
        <div className='whiteBg'></div>
      </div>
      <Footer />
    </div>
  );
} 