import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Your project title</title>
        <meta name="description" content="Your project description" />
        <link rel="icon" href="/" /> {/* favicon link here */}
      </Head>

      <main>
        <h1 style={{ fontSize: '1rem' }}>Your next project starter</h1>
      </main>
    </div>
  );
}
