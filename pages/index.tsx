import type { NextPage } from 'next';
import Head from 'next/head';
import Hero from '../components/hero';

const Home: NextPage = () => {
  return (
    <>
    <Head>
      <title>Home - Shoe store</title>
    </Head>
    <Hero/>
    </>
  )
}

export default Home
