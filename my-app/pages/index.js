import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavigationBar from '../components/Navbar/Navigationbar'
import Footer from '../components/Footer/footer'
import Banner from '../components/Banner/Banner' 
import Launched from '../components/Launched_projects/launched'
import PopNew from '../components/Popular&new_projects/pop&new'


export default function Home() {
  return (
    <div>
      <Head>
        <title>SparkLaunch</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href=" " /> 
       
      </Head>
      <NavigationBar/>

      <main className=' h-[50rem] pt-4'>
        {/* <Banner/> */}
        {/* <Launched/> */}
        <PopNew/>
      </main>

      <footer className="">
      {/* <Footer/> */}
      
      </footer>
    </div>
  )
}
