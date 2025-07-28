import React from 'react';

export default function Contact() {
  return (
    <div style={{
      minHeight: '60vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundImage: 'url(https://picsum.photos/1200/200?text=Contact)',
      backgroundSize: 'cover',
      color: '#333',
      padding: '2rem',
    }}>
      <h1>Contact</h1>
      <p>Email: info@psiclinic.com</p>
      <p>Phone: +1 234 567 890</p>
      <p>Address: 123 Main St, City, Country</p>
    </div>
  );
} 