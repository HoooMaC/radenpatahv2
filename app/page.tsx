import styles from "@styles/app.module.css";

import Carousel from "@components/Carousel";
import Image from "@node_modules/next/image";

import image from '@public/images/15.png'
export default function Home() {
  return (
      <>
        <Carousel></Carousel>

        <section className={styles.homepage}>Hello Next Js</section>


        <div className="container-xxl py-5">
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s" style={{minHeight: "400px"}}>
                <div className="position-relative h-100">
                  {/*<img className="img-fluid position-absolute w-100 h-100" src="{{ asset('img/about 1.png') }}"*/}
                  {/*     alt="" style="object-fit: cover;"/>*/}
                </div>
              </div>
              <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                <h6 className="mrp-section-title--start ">Tentang Masjid Raden Patah</h6>
                <h1 className="mb-4">Welcome to Masjid Raden Patah</h1>
                <p className="mb-4">Masjid Raden Patah merupakan masjid kampus terbesar yang ada di lingkungan civitas
                  akademika Universitas Brawijaya. Masjid Raden Patah berdiri sejak tahun 1975 dan hanya menampung
                  sebanyak 200 jamaah. Masjid ini mengalami pemugaran, dengan meratakan bangunan lama dan memulai
                  pembangunan masjid yang baru dengan arsitektur bergaya Majapahit. Masjid Raden Patah diresmikan
                  kembali pada tahun 2018 dan kini dapat menampung sekitar 7.000 jamaah.</p>
                <p>
                  Sebagai bagian dari Universitas Brawijaya, visi dan misi Masjid Raden Patah mencerminkan
                  penerjemahan
                  dari Tri Dharma Perguruan Tinggi dalam kacamata dakwah. Secara umum kegiatan yang dijalankan
                  mencakup bidang pendidikan dan pengkaderan, peribadatan dan pelayanan, pengembangan usaha dan
                  pemberdayaan ekonomi umat. Selanjutnya, insan akademis sebagai ciri khas kampus telah
                  menginspirasi Masjid Raden Patah untuk
                  mewujudkan ulul abab atau sosok cendekiawan muslim masa depan yang dapat memajukan peradaban.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-xxl py-5">
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-6 wow fadeInUp  order-lg-last" data-wow-delay="0.1s" style={{minHeight: '400px'}}>
                <div className="position-relative h-100">
                  {/*<img className="img-fluid position-absolute w-100 h-100" src="{{ asset('img/about 1.png') }}"*/}
                  {/*     alt="" style={{objectFit: 'cover'}}/>*/}
                </div>
              </div>
              <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                <h1 className="mb-4">Visi Masjid Raden Patah</h1>
                <p>Visi Masjid Raden Patah Universitas Brawijaya adalah “menjadi masjid kampus yang memajukan
                  peradaban
                  dengan berbasis pada pengembangan insan dan masyarakat serta intelektualitas Islami”</p>


                <div className="row gy-2 gx-4 mb-4">
                  <h1 className="mb-4">Misi Masjid Raden Patah</h1>
                  <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Menjadikan masjid sebagai
                    pusat
                    kegiatan kemahasiswaan dan kemasyarakatan </p>
                  <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Menjadikan masjid sebagai
                    tempat rekreasi rohani jamaah.</p>
                  <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Menjadikan masjid sebagai
                    tempat merujuk berbagai persoalan keumatan.</p>
                  <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Menjadikan masjid sebagai
                    pusat
                    studi bagi mahasiswa dan masyarakat.</p>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="container-xxl py-5">
          <div className="container">
            <div className="row wow fadeInUp">
              <h1 className="mrp-section-article-title bg-white text-center text-primary p-3">ARTIKEL</h1>

              <div className="mrp-article-box mt-3">
                <img className="mrp-article-image" src={image} alt="mesjid mrp"/>
                <div className="mrp-article-content">
                  <div>
                    <h2 className="mrp-article-content__title">Menelusuri Sejarah dan Kekuatan Simbolis Masjid Raden
                      Patah</h2>
                    <div className="mrp-article-content__body mt-2">Masjid telah menjadi bagian penting dari kehidupan
                      masyarakat, tidak hanya sebagai tempat ibadah, tetapi juga sebagai ikon keagamaan dan
                      kebudayaan, serta menjadi titik fokus dalam mengeksplorasi sejarah dan seni bangsa....
                    </div>
                  </div>
                  <a href="/article" className="mrp-article-content__link">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
  );
}
