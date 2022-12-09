import Head from 'next/head'
import { ReactNode } from 'react'

export interface IPrimaryLayout {
    children: ReactNode
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children }) => (
    <>
        <Head>
            <title>Primary Layout Example</title>
        </Head>
        <header></header>
        <main>{children}</main>
        <footer></footer>
    </>
)

export default PrimaryLayout
