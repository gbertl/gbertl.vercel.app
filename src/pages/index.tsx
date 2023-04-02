import Container from '@/components/Container';
import Head from 'next/head';

const Home = () => {
  return (
    <>
      <Head>
        <title>Gilbert&apos;s Portfolio</title>
      </Head>

      <section>
        <Container>
          <h1 className="text-red-500 text-2xl">Hola munddo!</h1>
        </Container>
      </section>
    </>
  );
};

export default Home;
