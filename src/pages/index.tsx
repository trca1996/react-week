import Head from 'next/head'

import HomePage from 'app/home/HomePage'

import PrimaryLayout from 'components/layouts/PrimaryLayout'

import { NextPageWithLayout } from './page'

const Home: NextPageWithLayout = () => (
    <>
        <Head>
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <HomePage />
    </>
)

Home.getLayout = (page) => {
    return <PrimaryLayout>{page}</PrimaryLayout>
}

export default Home