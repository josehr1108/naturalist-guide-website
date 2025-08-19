"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import Link from "next/link";
import Image from "next/image";
import styles from "./NavigationBar.module.css";

const NavigationBar: React.FC = () => {
  return (
    <Navbar fluid className={styles.navBarBg}>
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
        <NavbarLink as={Link} href="/" active className={styles.navLink}>
          Home
        </NavbarLink>
        <NavbarLink as={Link} href="/tours" className={styles.navLink}>
          Tours
        </NavbarLink>
        <NavbarLink as={Link} href="/contact" className={styles.navLink}>
          Contact
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
};

export default NavigationBar;
