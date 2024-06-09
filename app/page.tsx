import styles from "@styles/app.module.css";

import Carousel from "@components/Carousel";
import Image from "@node_modules/next/image";

import {FontAwesomeIcon} from "@node_modules/@fortawesome/react-fontawesome";
import {faArrowRight} from "@node_modules/@fortawesome/free-solid-svg-icons";
import {BentoGrid, BentoGridItem} from "@components/ui/Grid";
import {articles, layoutedData} from "@data/dummy-article";

import image from '@public/images/2.png'

const regex = new RegExp('^(.{0,150}(?=\s)(?<!\w))$');

export default function Home() {
  return (
      <>
        {/*<Carousel></Carousel>*/}

        <section className={styles.homepage}>Carousel</section>

        <section id={'about'} className={styles.homepage}>
          <div className="2xl:container mx-auto flex items-center justify-center gap-4">
            <div className='basis-1/2 relative'>
              <Image src={image} sizes={'100%'} objectFit={'contain'} alt='masjid raden patah'></Image>
            </div>
            <div className='basis-1/2 p-2'>
              <h6 className={'font-nunito font-bold text-[20px] text-primary'}>Tentang Masjid Raden Patah</h6>
              <h1 className={'font-nunito font-extrabold text-[40px]'}>Welcome to Masjid Raden Patah</h1>
              <p className={'text-justify mb-2'}>&nbsp;&nbsp;&nbsp;&nbsp;Masjid Raden Patah merupakan masjid kampus
                terbesar yang ada di lingkungan civitas
                akademika Universitas Brawijaya. Masjid Raden Patah berdiri sejak tahun 1975 dan hanya menampung
                sebanyak 200 jamaah. Masjid ini mengalami pemugaran, dengan meratakan bangunan lama dan memulai
                pembangunan masjid yang baru dengan arsitektur bergaya Majapahit. Masjid Raden Patah diresmikan
                kembali pada tahun 2018 dan kini dapat menampung sekitar 7.000 jamaah.</p>
              <p className={'text-justify mb-2'}>
                &nbsp;&nbsp;&nbsp;&nbsp;Sebagai bagian dari Universitas Brawijaya, visi dan misi Masjid Raden Patah
                mencerminkan
                penerjemahan
                dari Tri Dharma Perguruan Tinggi dalam kacamata dakwah. Secara umum kegiatan yang dijalankan
                mencakup bidang pendidikan dan pengkaderan, peribadatan dan pelayanan, pengembangan usaha dan
                pemberdayaan ekonomi umat. Selanjutnya, insan akademis sebagai ciri khas kampus telah
                menginspirasi Masjid Raden Patah untuk
                mewujudkan ulul abab atau sosok cendekiawan muslim masa depan yang dapat memajukan peradaban.
              </p>
            </div>
          </div>
          <div className="2xl:container mx-auto flex items-center justify-center gap-4">
            <div className='basis-1/2 relative lg:order-last'>
              <Image src={image} sizes={'100%'} objectFit={'contain'} alt='masjid raden patah'></Image>
            </div>
            <div className='basis-1/2 p-2'>
              <h1 className={'font-nunito font-extrabold text-[40px]'}>Visi</h1>
              <p>Visi Masjid Raden Patah Universitas Brawijaya adalah “menjadi masjid kampus yang memajukan
                peradaban
                dengan berbasis pada pengembangan insan dan masyarakat serta intelektualitas Islami”</p>
              <div>
                <h1 className={'font-nunito font-extrabold text-[40px]'}>Misi</h1>
                <p><FontAwesomeIcon icon={faArrowRight} className={'text-sm max-w-4 inline me-2 text-primary'}/>Menjadikan
                  masjid sebagai
                  pusat
                  kegiatan kemahasiswaan dan kemasyarakatan </p>
                <p><FontAwesomeIcon icon={faArrowRight} className={'text-sm max-w-4 inline me-2 text-primary'}/>Menjadikan
                  masjid sebagai
                  tempat rekreasi rohani jamaah.</p>
                <p><FontAwesomeIcon icon={faArrowRight} className={'text-sm max-w-4 inline me-2 text-primary'}/>Menjadikan
                  masjid sebagai
                  tempat merujuk berbagai persoalan keumatan.</p>
                <p><FontAwesomeIcon icon={faArrowRight} className={'text-sm max-w-4 inline me-2 text-primary'}/>Menjadikan
                  masjid sebagai pusat studi bagi mahasiswa dan masyarakat.</p>
              </div>
            </div>
          </div>
        </section>


        <section className={styles.homepage}>
          <div className="2xl:container">

            <BentoGrid>
              {
                //   -----------------------

                layoutedData(0,14).map((item, index) =>
                    (
                        <BentoGridItem
                            key={item.id}
                            title={item.title}
                            description={item.description.slice(0,200) + '...'} // Use the truncated version or entire
                            icon={<Image src={item.icon} alt={item.title} className='object-contain w-full object-left-bottom' width={1000} height={100} style={{width:'4fr'}}/>}
                            className={`min-h-10 pb-4 ${index === 0?'col-span-3':''} ${item.className}`}
                        />
                    ))

                //   -----------------------
              }
            </BentoGrid>
          </div>

        </section>

      </>
  )

}
