import Container from '@/components/Container';
import Arrow from '@/icons/Arrow';
import Head from 'next/head';
import Image from 'next/image';
import { FiGithub, FiExternalLink, FiSend, FiLinkedin } from 'react-icons/fi';
import { SiUpwork } from 'react-icons/si';
import { isEven } from '@/utils';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase';

const logos = [
  { name: 'NextJS', path: '/logos/next.png' },
  { name: 'React', path: '/logos/react.png' },
  { name: 'Node', path: '/logos/node.png' },
  { name: 'Django', path: '/logos/django.svg' },
  { name: 'Python', path: '/logos/python.svg' },
  { name: 'Tailwind', path: '/logos/tailwind.png' },
  { name: 'Bootstrap', path: '/logos/bootstrap.svg' },
  { name: 'Material UI', path: '/logos/mui.png' },
  { name: 'Typescript', path: '/logos/ts.png' },
  { name: 'SASS', path: '/logos/sass.png' },
  { name: 'HTML5', path: '/logos/html5.svg' },
  { name: 'CSS3', path: '/logos/css3.png' },
];

interface Work {
  id: string;
  thumbnailUrl: string;
  title: string;
  text: string;
  category: string;
  source: string;
  liveUrl: string;
  type: string;
  priorityOrder: number;
  published: boolean;
}

interface Props {
  works: Work[];
}

const Home = ({ works }: Props) => {
  const sendEmail = () => {
    const username = 'gilbertlcsndle';
    const domain = 'gmail.com';

    window.open(`mailto:${username}@${domain}`);
  };

  return (
    <>
      <Head>
        <title>Gilbert&apos;s Portfolio</title>
      </Head>

      <section className="mt-48 md:mt-80 mb-36">
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
                  Hello! I am <span className="text-secondary">Gilbert</span>
                </span>
                A Web Developer
              </h2>

              <p className="font-heading text-5xl">
                I like to code things from{' '}
                <span className="text-secondary">scratch</span>...
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
          <div className="flex flex-col gap-20 text-xl font-heading lg:w-3/4">
            <p>
              🇵🇭 Philippine-based with a passion for creating dynamic and
              user-friendly web applications 💻. With a strong foundation in
              both front-end and back-end technologies, I bring creativity and
              technical expertise to every project I undertake. My top-rated
              status on{' '}
              <a
                href="https://www.upwork.com/freelancers/~0110dcf905a3a19183"
                target="_blank"
                className="text-secondary relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-secondary after:scale-0 after:origin-left after:transition-transform after:ease-linear after:duration-[var(--duration-normal)] hover:after:scale-100"
              >
                Upwork
              </a>{' '}
              reflects my commitment to delivering top-notch web development
              services.
            </p>
          </div>
        </Container>
      </section>

      <section className="mb-56">
        <Container>
          <div className="text-center mb-8 w-3/4 mx-auto">
            <h3 className="text-2xl">
              I&apos;m actively seeking{' '}
              <span className="text-secondary">web gigs</span>. If you have any
              web development projects available, I&apos;d love to discuss how I
              can contribute!
            </h3>
          </div>

          <div className="flex justify-center items-center gap-x-4 gap-y-5 max-w-lg flex-wrap mx-auto">
            {logos.map((logo, idx) => (
              <div
                className="relative bg-bleachedCedar rounded-full w-11 h-11 grid place-items-center cursor-pointer hover:opacity-75 transition duration-[var(--duration-normal)]"
                key={idx}
                onClick={() => {
                  const matchedWork = works.find((work) =>
                    work.category
                      .split(',')
                      .map((c) => c.toLowerCase().trim())
                      .includes(logo.name.toLowerCase())
                  );

                  if (matchedWork) {
                    document
                      .getElementById(matchedWork.id)
                      ?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <Image src={logo.path} alt={logo.name} width={28} height={28} />
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="mb-40" id="work">
        <Container className="space-y-44">
          {works
            ?.filter((work) => work.published)
            ?.sort((a, b) => a.priorityOrder - b.priorityOrder)
            .map((work, idx) => (
              <div
                key={work.id}
                className={`relative flex flex-col gap-7 md:gap-0 ${
                  isEven(idx) ? 'md:flex-row-reverse' : ''
                }`}
                id={work.id}
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

                  <a
                    href={work.liveUrl || work.thumbnailUrl}
                    target="_blank"
                    className="block w-full min-h-[354px] md:bg-valentino relative rounded-xl overflow-hidden"
                  >
                    <Image
                      src={work.thumbnailUrl}
                      alt={work.title}
                      fill
                      className={`rounded-xl object-cover object-[top_left] md:!top-7 ${
                        isEven(idx)
                          ? 'md:!left-11 md:object-[top_left]'
                          : 'md:!-left-11 md:object-[top_right]'
                      }`}
                    />
                  </a>
                </div>
                <div
                  className={`w-full md:w-7/12 md:absolute top-1/2 md:-translate-y-1/2 ${
                    isEven(idx) ? 'left-0' : 'right-0'
                  }`}
                >
                  <h5
                    className={`font-semibold font-sans2 text-secondary capitalize ${
                      isEven(idx) ? '' : 'text-right'
                    }`}
                  >
                    {work.type} Project
                  </h5>
                  <h6
                    className={`mb-7 text-body2 text-3xl font-semibold font-sans2  ${
                      isEven(idx) ? '' : 'text-right'
                    }`}
                  >
                    {work.title}
                  </h6>
                  <p
                    className="font-sans2 mb-7 text-lg font-medium text-body2 py-6 px-8 bg-blend-[overlay,normal] backdrop-blur-2xl rounded-xl"
                    style={{
                      background:
                        'radial-gradient(90.16% 143.01% at 15.32% 21.04%, rgba(105, 59, 147, 0.2) 0%, rgba(110, 191, 244, 0.0447917) 77.08%, rgba(70, 144, 213, 0) 100%)',
                    }}
                  >
                    {work.text}
                  </p>
                  <div
                    className={`flex gap-3 flex-wrap whitespace-nowrap text-sm text-body-2 font-sans2 font-light ${
                      isEven(idx) ? '' : 'justify-end'
                    }`}
                  >
                    {work.category.split(',').map((c, idx) => (
                      <span
                        key={idx}
                        className="bg-[#42176E] text-[#B57AF0] bg-opacity-50 backdrop-blur-md py-2 px-3 rounded-full text-xs font-medium"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                  {(work.source || work.liveUrl) && (
                    <div
                      className={`flex gap-4 text-3xl mt-9 ${
                        isEven(idx) ? '' : 'justify-end'
                      }`}
                    >
                      {work.source && (
                        <a
                          href={work.source}
                          target="_blank"
                          className="transition duration-[var(--duration-normal)] hover:text-primary"
                        >
                          <FiGithub />
                        </a>
                      )}
                      {work.liveUrl && (
                        <a
                          href={work.liveUrl}
                          target="_blank"
                          className="transition duration-[var(--duration-normal)] hover:text-primary"
                        >
                          <FiExternalLink />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
        </Container>
      </section>

      <section className="mb-56" id="contact">
        <Container>
          <h2 className="text-2xl mb-8">Contact</h2>
          <div className="flex items-center gap-5">
            <button
              className="text-lg transition duration-[var(--duration-normal) bg-primary text-white py-2 px-3 rounded-lg flex items-center gap-2 hover:opacity-80"
              onClick={sendEmail}
            >
              <FiSend />
              <span className="text-xs">Let&apos;s chat</span>
            </button>
            <a
              href="https://www.upwork.com/freelancers/~0110dcf905a3a19183"
              target="_blank"
              className="text-lg transition duration-[var(--duration-normal) hover:text-primary"
            >
              <SiUpwork />
            </a>
            <a
              href="https://github.com/gbertl"
              target="_blank"
              className="text-lg transition duration-[var(--duration-normal) hover:text-primary"
            >
              <FiGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/gbertl"
              target="_blank"
              className="text-lg transition duration-[var(--duration-normal) hover:text-primary"
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
  const querySnapshot = await getDocs(collection(db, 'works'));
  const works = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return {
    props: {
      works,
    },
    revalidate: 3600,
  };
};
