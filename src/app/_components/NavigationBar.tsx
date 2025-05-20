import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import Link from "next/link";
import Image from "next/image";

const NavigationBar: React.FC = () => {
  return (
    <Navbar fluid rounded>
      <NavbarBrand as={Link} href="/">
        <Image
          alt="Logo"
          src="/images/logo-no-bg.png"
          width={130}
          height={120}
        />
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink as={Link} href="/" active>
          Home
        </NavbarLink>
        <NavbarLink as={Link} href="/tours">
          Tours
        </NavbarLink>
        <NavbarLink as={Link} href="/faq">
          FAQ
        </NavbarLink>
        <NavbarLink as={Link} href="/contact">
          Contact
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
};

export default NavigationBar;
