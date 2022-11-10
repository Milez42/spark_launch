import React from 'react';
import '../App.css';
import Banner from '../components/Banner/Banner';
import Cards from '../components/Cards/Cards';
import Footer from '../components/Footer/footer';
import { HomeComponents } from '../components/Cards/Cards';
import { NavigationBar } from '../components/Navbar/Navigationbar';

function Home() {
  return (
    <>
        <NavigationBar/>
        <Banner/>
        <Cards/>
        <HomeComponents/>
        <Footer />
    </>
  );
}

export default Home;