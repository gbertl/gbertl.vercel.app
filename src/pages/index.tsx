import Container from '@/components/Container';
import Arrow from '@/icons/Arrow';
import Head from 'next/head';
import Image from 'next/image';

const Home = () => {
  return (
    <>
      <Head>
        <title>Gilbert&apos;s Portfolio</title>
      </Head>

      <section className="mt-48 mb-36">
        <Container>
          <div className="flex flex-col md:flex-row gap-5 max-w-3xl">
            <div className="relative shrink-0 w-64 h-64 self-center md:self-start">
              <div
                className="w-[150%] h-[150%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-20"
                style={{
                  background:
                    'radial-gradient(50% 50% at 50% 50%, #763CAC 0%, rgba(50, 15, 133, 0) 100%)',
                  filter: 'blur(20px)',
                }}
              />
              <div
                className="w-4/5 h-4/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10"
                style={{
                  background:
                    'radial-gradient(50% 50% at 50% 50%, #FFFFFF 17.71%, rgba(67, 67, 67, 0) 100%)',
                  filter: 'blur(20px)',
                }}
              />
              <Image
                src="/me.png"
                alt=""
                width={165}
                height={223}
                className="mx-auto"
              />
            </div>

            <div className="flex flex-col gap-4 self-center text-center md:text-left">
              <h2 className="relative">
                <span className="text-lg capitalize block md:absolute md:top-0 md:left-0 md:-translate-y-[400%] md:-translate-x-1/4">
                  <Arrow className="hidden md:block absolute top-0 left-0 -translate-x-[90%] -translate-y-[15%]" />
                  Hello! I am <span className="text-primary">Gilbert</span>
                </span>
                A Web Developer
              </h2>

              <p className="font-heading text-5xl">
                I like to code things from{' '}
                <span className="text-primary">scratch</span>...
              </p>
              <small className="font-heading row-start-3 col-start-2">
                Bringing ideas to life in the browser is what I enjoys the most.
              </small>
            </div>
          </div>
        </Container>
      </section>

      <section className="mb-56">
        <Container>
          <h1 className="text-5xl mb-3">I&apos;m a Full-Stack Developer.</h1>
          <p className="text-xl font-heading mb-20">
            Currently, I&apos;m focused on building accessible, human-centered
            products at{' '}
            <a
              href="https://www.upwork.com/freelancers/~0110dcf905a3a19183"
              className="text-primary relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-primary after:scale-0 after:origin-left after:transition-transform after:ease-linear after:duration-[var(--duration-normal)] hover:after:scale-100"
            >
              Upwork
            </a>
            .
          </p>

          <p className="text-xl font-heading">
            A Philippine based web developer who is passionate about creating
            beautiful and joyful digital experiences. Besides coding, I love
            music, games and travelling.
          </p>
        </Container>
      </section>
    </>
  );
};

export default Home;
