import CountContainer from '@containers/Count';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>howdy-mj</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CountContainer />
      <div>Hello World!</div>
    </div>
  );
}
