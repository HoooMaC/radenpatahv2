"use client";

import Image from "next/image";
import {motion} from "framer-motion";

import styles from "@styles/carousel.module.css";
import carousel1 from "@public/images/MRP.png";
import carousel2 from "@public/images/2.png";

const carousel = [carousel1, carousel2, '', ''];
import {FontAwesomeIcon} from "@node_modules/@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@node_modules/@fortawesome/free-solid-svg-icons";
import {useRef, useState} from "react";
import {log} from "node:util";

export default function Carousel() {
  const [current, setCurrent] = useState<number>(0)
  const carouselRef = useRef<HTMLDivElement>(null);

  const bodyWidth = document.body.offsetWidth;

  function onPrevClick() {
    if (current >= 1) {
      setCurrent(current - 1);
    }
  }

  function onNextClick() {
    if (current < carousel.length - 1) {
      setCurrent(current + 1);
      // carouselRef.current.style.translate = `x -calc(${current} * 100%) !important`;
    }
  }

  return (
      <>
        {/*<div className={styles.carousel}>*/}
        {/*  <div className={styles.carousel__item}>*/}
        {/*    <Image*/}
        {/*        className={styles.carousel__image}*/}
        {/*        src={carousel1}*/}
        {/*        quality={100}*/}
        {/*        fill*/}
        {/*        sizes={"100dvh"}*/}
        {/*        alt={"mesjid mrp"}*/}
        {/*    />*/}
        {/*    <div className={styles.carousel__item_desc}>*/}
        {/*      <h6 className={styles.carousel__item_subtitle}>Selamat Datang di </h6>*/}
        {/*      <h5 className={styles.carousel__item_title}>Masjid Raden Patah</h5>*/}
        {/*      <h5 className={styles.carousel__item_title}>Universitas Brawijaya</h5>*/}
        {/*    </div>*/}
        {/*  </div>*/}

        {/*  <div className={styles.carousel__item}>*/}
        {/*    <Image*/}
        {/*        className={styles.carousel__image}*/}
        {/*        src={carousel1}*/}
        {/*        quality={100}*/}
        {/*        fill*/}
        {/*        sizes={"100dvh"}*/}
        {/*        alt={"mesjid mrp"}*/}
        {/*    />*/}
        {/*    <div className={styles.carousel__item_desc}>*/}
        {/*      <h6 className={styles.carousel__item_subtitle}>Selamat Datang di </h6>*/}
        {/*      <h5 className={styles.carousel__item_title}>Masjid Raden Patah</h5>*/}
        {/*      <h5 className={styles.carousel__item_title}>Universitas Brawijaya</h5>*/}
        {/*    </div>*/}
        {/*  </div>*/}

        {/*  <div className={styles.carousel_controller}>*/}
        {/*  <span className="controller__next">*/}
        {/*    <FontAwesomeIcon className={styles.carousel_controller__icon} icon={faChevronRight}/>*/}
        {/*  </span>*/}
        {/*    <span className="controller__prev">*/}
        {/*    <FontAwesomeIcon className={styles.carousel_controller__icon} icon={faChevronLeft}/>*/}
        {/*  </span>*/}
        {/*  </div>*/}
        {/*</div>*/}


        <main className="flex flex—col items—center justify—between min-h-screen p-24 bg-amber-200">
          <div className=" relative w-full max-w-[1500px] flex items—center">
            {/*  Buttons Here*/}
            <div className="absolute w-4/5 h-full flex justify-between items-center p-4 z-10">
              <button onClick={onPrevClick}>
                <FontAwesomeIcon className={styles.carousel_controller__icon}
                                 icon={faChevronLeft}/>
              </button>
              <button onClick={onNextClick}>
                <FontAwesomeIcon color={'black'} className={styles.carousel_controller__icon}
                                 icon={faChevronRight}/>
              </button>
            </div>
            {/*  Images Here */}
            <motion.div
                ref={carouselRef}
                className="relative flex gap-4 flex-nowrap"
                animate={{opacity: 1, x: `calc(-${current} * ${bodyWidth}px`}}
            >
              {[...carousel].map((image, index: number) => (
                  <div
                      key={index.toString()}
                      className={'min-h-full w-screen bg-black'}
                  >
                    <Image
                        src={image}
                        alt={'mesjid'}
                        fill
                        sizes={'100%'}
                        className={`w-full object-cover object-center aspect-[16/9]`}
                    />
                  </div>

              ))}
            </motion.div>
          </div>




        </main>
      </>
  );
}
