import styles from "@styles/navbar.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@node_modules/@fortawesome/react-fontawesome";
import { faBars } from "@node_modules/@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <>
      <nav className={styles.navbar}>
        <Link href={"/"} className="navbar__logo">
          <h2>Masjid Raden Patah</h2>
        </Link>

        <div className={styles.navbar__list} id="navbarCollapse">
          <Link href={"/"} className="navbar__link">
            Profil
          </Link>
          <Link href={"/program"} className="navbar__link">
            Program
          </Link>
          <Link href={"/unit"} className="navbar__link">
            Unit
          </Link>
          <Link href={"/layanan"} className={`navbar__link`}>
            Layanan
          </Link>
        </div>
      </nav>

      {/* Unavailable right now*/}
      {/*<div className="mobile-nav">*/}
      {/*    <ul className="mobile-nav__list">*/}
      {/*        <li className="mobile-nav__item">*/}
      {/*            <Link href={"/"}*/}
      {/*                  className="mobile-nav__link">Profil</Link>*/}
      {/*        </li>*/}
      {/*        <li className="mobile-nav__item">*/}
      {/*            <Link href={"/program"}*/}
      {/*                  className="mobile-nav__link">Program</Link>*/}
      {/*        </li>*/}
      {/*        <li className="mobile-nav__item">*/}
      {/*            <Link href={"/unit"}*/}
      {/*                  className="mobile-nav__link">Unit</Link>*/}
      {/*        </li>*/}
      {/*        <li className="mobile-nav__item">*/}
      {/*            <Link href={"/layanan"}*/}
      {/*                  className="mobile-nav__link">Layanan</Link>*/}
      {/*        </li>*/}
      {/*    </ul>*/}
      {/*</div>*/}
      {/*<FontAwesomeIcon icon={faBars} className={styles.navbar__bars} />*/}
    </>
  );
}
