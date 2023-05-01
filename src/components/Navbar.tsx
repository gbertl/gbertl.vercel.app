import Link from 'next/link';
import Container from './Container';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav>
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
              href="#"
              className="px-8 transition duration-[var(--duration-normal)] hover:text-primary"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#work"
              className="px-8 transition duration-[var(--duration-normal)] hover:text-primary"
            >
              Work
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
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
