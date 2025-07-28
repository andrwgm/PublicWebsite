import React from 'react';

export default function About() {
  return (
    <div style={{
      minHeight: '60vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundImage: 'url(https://picsum.photos/1200/200?text=About+Us)',
      backgroundSize: 'cover',
      color: '#333',
      padding: '2rem',
    }}>
      <h1>About Us</h1>
      <p>We are a team of dedicated professionals committed to your mental health and personal growth.</p>
    </div>
  );
} 