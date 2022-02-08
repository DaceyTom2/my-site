import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Link from 'next/link'

export default function Splash() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <h1 className="text-3xl font-bold underline">Test</h1>
      <h1>Test</h1>
      <Link className="bg-black" href="/home">English</Link>
      <Link href="/fr/home">francais</Link>
    </Layout>
  )
}