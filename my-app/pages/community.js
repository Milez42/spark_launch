import React from 'react';
import Footer from '../components/Footer/footer';
import { NavigationBar } from '../components/Navbar/Navigationbar';

function Community() {
  return (
    <>
        <NavigationBar/>
        <div
          style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '90vh'
          }}
        >
        <h1>Community</h1>
        </div>
        <Footer />
    </>
  );
}

export default Community;