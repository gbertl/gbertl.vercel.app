import Container from '@/components/Container';
import Arrow from '@/icons/Arrow';
import Head from 'next/head';
import Image from 'next/image';
import axios from 'axios';
import { FiGithub, FiExternalLink, FiSend, FiLinkedin } from 'react-icons/fi';
import { SiUpwork } from 'react-icons/si';
import { isEven } from '@/utils';
import ReactCardFlip from 'react-card-flip';
import { useState } from 'react';

const logos = [
  { name: 'Typescript', path: '/logos/ts.png' },
  { name: 'Python', path: '/logos/python.svg' },
  { name: 'React', path: '/logos/react.png' },
  { name: 'NodeJS', path: '/logos/nodejs.svg' },
  { name: 'Django', path: '/logos/django.svg' },
  { name: 'Material UI', path: '/logos/mui.png' },
  { name: 'TailwindCSS', path: '/logos/tailwind.png' },
  { name: 'Bootstrap', path: '/logos/bootstrap.svg' },
  { name: 'CSS3', path: '/logos/css3.png' },
];

interface Work {
  _id: string;
  thumbnailUrl: string;
  title: string;
  text: string;
  category: string;
  source: string;
  liveUrl: string;
  priorityOrder: number;
}

interface Props {
  works: Work[];
}

const Home = ({ works }: Props) => {
  const [activeFlipped, setActiveFlipped] = useState<string[]>([]);

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

      <section className="mb-56" id="about">
        <Container>
          <h1 className="text-5xl mb-3">I&apos;m a Full-Stack Developer.</h1>
          <p className="text-xl font-heading mb-20">
            Currently, I&apos;m focused on building accessible, human-centered
            products at{' '}
            <a
              href="https://www.upwork.com/freelancers/~0110dcf905a3a19183"
              target="_blank"
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

      <section className="mb-56">
        <Container>
          <div className="text-center mb-8">
            <h3 className="text-2xl">
              I&apos;m currently looking to join a{' '}
              <span className="text-lightViolet">cross-functional</span> team
            </h3>
            <span className="font-heading text-lg">
              that values improving peoples lives through accessible design
            </span>
          </div>

          <div className="flex justify-center items-center gap-x-4 gap-y-5 max-w-sm flex-wrap mx-auto">
            {logos.map((logo, idx) => (
              <ReactCardFlip
                key={logo.name}
                isFlipped={activeFlipped.includes(logo.name)}
              >
                <div
                  className="relative bg-bleachedCedar rounded-full w-14 h-14 grid place-items-center cursor-pointer"
                  onClick={() =>
                    setActiveFlipped((prev) => [...prev, logo.name])
                  }
                >
                  <Image
                    src={logo.path}
                    alt={logo.name}
                    width={38}
                    height={38}
                  />
                </div>

                <div
                  className="relative bg-bleachedCedar rounded-full w-14 h-14 grid place-items-center cursor-pointer text-xs text-center"
                  onClick={() =>
                    setActiveFlipped((prev) =>
                      prev.filter((flippedName) => flippedName !== logo.name)
                    )
                  }
                >
                  {logo.name}
                </div>
              </ReactCardFlip>
            ))}
          </div>
        </Container>
      </section>

      <section className="mb-40" id="work">
        <Container className="space-y-44">
          {works.map((work, idx) => (
            <div
              key={work._id}
              className={`relative flex flex-col gap-7 md:gap-0 ${
                isEven(idx) ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="relative w-full md:w-1/2 max-w-[568px] min-h-[354px]">
                <div
                  className={`w-[642px] h-[720px] blur-2xl absolute top-1/2 -translate-y-1/2 -z-10 ${
                    isEven(idx)
                      ? 'left-0 -translate-x-1/4'
                      : 'right-0 translate-x-1/4'
                  }`}
                  style={{
                    background:
                      'radial-gradient(50% 50% at 50% 50%, #763CAC 0%, rgba(50, 15, 133, 0) 100%)',
                  }}
                />
                <div
                  className={`w-[625px] h-[700px] blur-2xl absolute top-1/2 -translate-y-1/2 -z-10 ${
                    isEven(idx)
                      ? 'left-0 translate-x-[5%]'
                      : 'right-0 -translate-x-[5%]'
                  }`}
                  style={{
                    background:
                      'radial-gradient(50% 50% at 50% 50%, #763CAC 0%, rgba(50, 15, 133, 0) 100%)',
                  }}
                />

                <div className="w-full min-h-[354px] md:bg-valentino relative rounded-xl overflow-hidden">
                  <Image
                    src={work.thumbnailUrl}
                    alt={work.title}
                    fill
                    className={`rounded-xl object-cover md:!top-7 ${
                      isEven(idx)
                        ? 'md:!left-11 md:object-[top_left]'
                        : 'md:!-left-11 md:object-[top_right]'
                    }`}
                  />
                </div>
              </div>
              <div
                className={`w-full md:w-7/12 md:absolute top-1/2 md:-translate-y-1/2 ${
                  isEven(idx) ? 'left-0' : 'right-0'
                }`}
              >
                <h5
                  className={`font-semibold font-sans2 text-secondary ${
                    isEven(idx) ? '' : 'text-right'
                  }`}
                >
                  Featured Project
                </h5>
                <h6
                  className={`mb-7 text-body2 text-3xl font-semibold font-sans2  ${
                    isEven(idx) ? '' : 'text-right'
                  }`}
                >
                  {work.title}
                </h6>
                <p
                  className="font-sans2 mb-7 text-lg font-medium text-body2 py-7 px-12 bg-blend-[overlay,normal] backdrop-blur-2xl rounded-xl"
                  style={{
                    background:
                      'radial-gradient(90.16% 143.01% at 15.32% 21.04%, rgba(105, 59, 147, 0.2) 0%, rgba(110, 191, 244, 0.0447917) 77.08%, rgba(70, 144, 213, 0) 100%)',
                  }}
                >
                  {work.text}
                </p>
                <div
                  className={`flex gap-3 flex-wrap whitespace-nowrap text-sm text-body-2 font-sans2 mb-9 font-light ${
                    isEven(idx) ? '' : 'justify-end'
                  }`}
                >
                  {work.category.split(',').map((c, idx) => (
                    <span key={idx}>{c}</span>
                  ))}
                </div>
                <div
                  className={`flex gap-4 text-3xl ${
                    isEven(idx) ? '' : 'justify-end'
                  }`}
                >
                  <a
                    href={work.source}
                    target="_blank"
                    className="transition duration-[var(--duration-normal)] hover:text-primary"
                  >
                    <FiGithub />
                  </a>
                  <a
                    href={work.liveUrl}
                    target="_blank"
                    className="transition duration-[var(--duration-normal)] hover:text-primary"
                  >
                    <FiExternalLink />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Container>
      </section>

      <section className="mb-56" id="contact">
        <Container>
          <h2 className="text-2xl mb-16">Contact</h2>
          <p className="font-heading mb-8 md:w-3/5 text-sm">
            I&apos;m currently looking to join a cross-functional team that
            values improving people&apos;s lives through accessible design. or
            have a project in mind? Let&apos;s connect.
          </p>

          <div className="flex">
            <a
              href="mailto:gilbertlctest@gmail.com"
              className="text-lg transition duration-[var(--duration-normal) hover:text-primary pr-7"
            >
              <FiSend />
            </a>
            <a
              href="https://www.upwork.com/freelancers/~0110dcf905a3a19183"
              target="_blank"
              className="text-lg transition duration-[var(--duration-normal) hover:text-primary pr-7"
            >
              <SiUpwork />
            </a>
            <a
              href="https://github.com/gbertl"
              target="_blank"
              className="text-lg transition duration-[var(--duration-normal) hover:text-primary pr-7"
            >
              <FiGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/gilbertlcsndle/"
              target="_blank"
              className="text-lg transition duration-[var(--duration-normal) hover:text-primary pr-7"
            >
              <FiLinkedin />
            </a>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  const { data: works } = await axios.get('https://api.gbertl.dev/api/works');

  return {
    props: {
      works,
    },
    revalidate: 3600,
  };
};
