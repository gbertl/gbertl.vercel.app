import Link from 'next/link';
import Container from './Container';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const links = [
  {
    url: '#about',
    title: 'About',
  },
  {
    url: '#work',
    title: 'Work',
  },
  {
    url: '#contact',
    title: 'Contact',
  },
];

const Navbar = () => {
  const oldValueRef = useRef(0);
  const navbarRef = useRef<HTMLElement>(null);
  const [userScrolled, setUserScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const menuInteracted = useRef(false);

  useEffect(() => {
    const hideNavOnScroll = () => {
      if (menuInteracted.current) return;

      const newValue = window.pageYOffset;

      if (oldValueRef.current - newValue < 0 && newValue !== 0) {
        // up
        (navbarRef.current as HTMLElement).style.transform =
          'translateY(-100%)';
      } else if (oldValueRef.current - newValue > 0 && newValue > 0) {
        // down
        (navbarRef.current as HTMLElement).style.transform = 'translateY(0)';
      } else {
        (navbarRef.current as HTMLElement).style.transform = 'translateY(0)';
      }

      oldValueRef.current = newValue;
    };

    window.addEventListener('scroll', hideNavOnScroll);

    return () => window.removeEventListener('scroll', hideNavOnScroll);
  }, []);

  useEffect(() => {
    const toggleUserScrolled = () => {
      if (menuInteracted.current) return;

      if (window.scrollY > 10) {
        setUserScrolled(true);
      } else {
        setUserScrolled(false);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', toggleUserScrolled);
    }

    return () => window.removeEventListener('scroll', toggleUserScrolled);
  }, []);

  useEffect(() => {
    const setScrollYVar = () =>
      document.documentElement.style.setProperty(
        '--scroll-y',
        `${window.scrollY}px`
      );

    window.addEventListener('scroll', setScrollYVar);

    if (typeof window !== 'undefined') {
      if (expanded) {
        const scrollY =
          document.documentElement.style.getPropertyValue('--scroll-y');
        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollY}`;

        menuInteracted.current = true;
      } else {
        const scrollY = document.body.style.top;
        document.body.style.position = '';
        document.body.style.top = '';

        const scrollToOptions = {
          top: parseInt(scrollY || '0') * -1,
          behavior: 'instant',
        };

        window.scrollTo(scrollToOptions as unknown as ScrollToOptions);

        menuInteracted.current = false;
      }
    }

    return () => window.removeEventListener('scroll', setScrollYVar);
  }, [expanded]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    setExpanded(false);

    const hash = `#${e.currentTarget.href.split('#')[1]}`;

    setTimeout(() => {
      document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
      window.location.hash = hash;
    }, 300);
  };

  return (
    <nav
      className={`flex items-center fixed top-0 left-0 w-full z-[9999] transition duration-[var(--duration-normal)] nav-gradient ${
        userScrolled ? '' : 'before:opacity-0'
      }`}
      ref={navbarRef}
    >
      <Container className="flex gap-7 items-center justify-between py-9 md:flex-row md:h-28 md:py-0 md:gap-0">
        <Link
          href="/"
          className="transition duration-[var(--duration-normal)] hover:opacity-50"
        >
          <Image src="/logo.png" alt="" width="39" height="39" />
        </Link>

        <div className="relative w-7 flex flex-col gap-2 z-50 md:hidden">
          <button
            onClick={() => setExpanded((prev) => !prev)}
            className={`nav-toggle ${expanded ? 'active' : ''}`}
          >
            <span></span>
          </button>
        </div>

        <div
          className={`mobile-nav fixed top-0 right-0 w-full h-screen backdrop-blur-sm z-40 md:hidden ${
            expanded
              ? 'active pointer-events-auto'
              : 'not-active pointer-events-none'
          }`}
        >
          <div className="ml-auto w-3/4 h-full bg-valentino grid place-items-center">
            <ul className="flex flex-col text-xl gap-8 text-center">
              {links.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.url}
                    className="px-8 transition duration-[var(--duration-normal)] hover:text-primary"
                    onClick={handleNavClick}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <ul className="hidden md:flex">
          {links.map((link, idx) => (
            <li key={idx}>
              <Link
                href={link.url}
                scroll={false}
                className="px-8 transition duration-[var(--duration-normal)] hover:text-primary"
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </nav>
  );
};

export default Navbar;
