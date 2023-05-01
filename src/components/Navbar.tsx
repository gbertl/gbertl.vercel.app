import Link from 'next/link';
import Container from './Container';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const Navbar = () => {
  const oldValueRef = useRef(0);
  const navbarRef = useRef<HTMLElement>(null);
  const [userScrolled, setUserScrolled] = useState(false);

  useEffect(() => {
    const hideNavOnScroll = () => {
      const newValue = window.pageYOffset;

      if (oldValueRef.current - newValue < 0) {
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

  return (
    <nav
      className={`flex items-center md:fixed top-0 left-0 w-full z-[9999] transition duration-[var(--duration-normal)] nav-gradient ${
        userScrolled ? '' : 'md:before:opacity-0'
      }`}
      ref={navbarRef}
    >
      <Container className="flex flex-col gap-7 items-center justify-between py-9 md:flex-row md:h-28 md:py-0 md:gap-0">
        <Link
          href="/"
          className="transition duration-[var(--duration-normal)] hover:opacity-50"
        >
          <Image src="/logo.png" alt="" width="39" height="39" />
        </Link>
        <ul className="flex">
          <li>
            <Link
              href="/#about"
              scroll={false}
              className="px-8 transition duration-[var(--duration-normal)] hover:text-primary"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/#work"
              scroll={false}
              className="px-8 transition duration-[var(--duration-normal)] hover:text-primary"
            >
              Work
            </Link>
          </li>
          <li>
            <Link
              href="/#contact"
              scroll={false}
              className="px-8 transition duration-[var(--duration-normal)] hover:text-primary"
            >
              Contact
            </Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
};

export default Navbar;
