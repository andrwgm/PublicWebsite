import React from 'react';
import './navbar.css';

import { Menubar } from 'primereact/menubar';
import { Image } from 'primereact/image';
import { Button } from 'primereact/button';

const items = [
  { label: 'Families', url: '/hola'},
  { label: 'Assesments'},
  { label: 'About us'},
  { label: 'Resources'},
  { label: 'Nova careers'},
  // { label: 'Nova careers', icon: 'pi pi-envelope' },
];

export default function Navbar({ activeIndex, onTabChange }) {
  return (
    <div className="topbar">
      <Menubar 
        model={items} 
        start={
          <a href="/">
            <Image src="/images/topbar_logo.png" />
          </a>
        } 
        end={<Button label="Get in contact" icon="pi pi-send" iconPos="right" />} 
      />
    </div>
  );
}  