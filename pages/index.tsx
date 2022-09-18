import type { NextPage } from 'next';
import Head from 'next/head';
import About from '../components/about';
import Hero from '../components/hero';
import Sponsors from '../components/sponsors';
const Home: NextPage = () => {
  return (
    <>
    <Head>
      <title>Home - Shoe store</title>
    </Head>
    <Hero/>
    <Sponsors/>
    <About/>
    </>
  )
}

export default Home
