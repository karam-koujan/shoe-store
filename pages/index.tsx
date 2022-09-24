import type { NextPage } from 'next';
import Head from 'next/head';
import About from '../components/about';
import BestSellers from '../components/products/bestSellers';
import Category from '../components/category';
import Hero from '../components/hero';
import Sponsors from '../components/sponsors';
import NewArrivals from '../components/products/newArrivals';
import Feedback from '../components/feedback';
const Home: NextPage = () => {
  return (
    <>
    <Head>
      <title>Home - Shoe store</title>
    </Head>
    <Hero/>
    <Sponsors/>
    <About/>
    <BestSellers/>
    <Category/>
    <NewArrivals/>
    <Feedback/>
    </>
  )
}

export default Home
