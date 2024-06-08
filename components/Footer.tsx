import Link from "next/link";
import {FontAwesomeIcon} from "@node_modules/@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram, faLine,
  faTelegram, faTiktok,
  faWhatsapp,
  faYoutube
} from "@node_modules/@fortawesome/free-brands-svg-icons";

import styles from '@styles/footer.module.css'

export default function Footer() {
  return (
      <footer className='bg-secondary min-h-[200px]'>
        <div className="container mx-auto grid place-content-center" style={{minHeight:"200px"}}>
        <div className={'flex gap-4'}>
        <div className={styles.itemGroup}>
          <FontAwesomeIcon icon={faWhatsapp} className={styles.iconsz} color={'white'}/>
          <p className={styles.groupName}>0899 3117 777</p>

        </div>

        <div className={styles.itemGroup}>
          <FontAwesomeIcon icon={faYoutube} className={styles.iconsz} color={'white'}/>
          <FontAwesomeIcon icon={faLine} className={styles.iconsz} color={'white'}/>
          <p className={styles.groupName}>mrpmedia</p>

        </div>

        <div className={styles.itemGroup}>
          <FontAwesomeIcon icon={faTelegram} className={styles.iconsz} color={'white'}/>
          <FontAwesomeIcon icon={faInstagram} className={styles.iconsz} color={'white'}/>
          <FontAwesomeIcon icon={faTiktok} className={styles.iconsz} color={'white'}/>
          <FontAwesomeIcon icon={faFacebookF} className={styles.iconsz} color={'white'}/>
          <p className={styles.groupName}>masjidradenpatah.ub</p>
        </div>
        </div>
        <div className={'border-b-[1px] my-4 border-white/20 w-11/12 mx-auto'}/>
        <h6 className={'text-white text-center'}><b>Copyright ©2024</b>, Designed by Digital Creative MRP UB</h6>
        </div>
      </footer>
  );
}
