import {FontAwesomeIcon} from "@node_modules/@fortawesome/react-fontawesome";
import {faPen} from "@node_modules/@fortawesome/free-solid-svg-icons/faPen";

const images = ['/images/articles/ (1).jpg',
  '/images/articles/ (2).jpg',
  '/images/articles/ (3).jpg',
  '/images/articles/ (4).jpg',
  '/images/articles/ (5).jpg',
  '/images/articles/ (6).jpg',
  '/images/articles/ (7).jpg',
  '/images/articles/ (8).jpg',
  '/images/articles/ (9).jpg',
  '/images/articles/ (10).jpg',
  '/images/articles/ (11).jpg',
  '/images/articles/ (12).jpg',
  '/images/articles/ (13).jpg',
  '/images/articles/ (14).jpg',]


interface Article {
  id: number,
  title: string,
  className?: string,
  description: string,
  icon?: React.ReactNode | any,
  header?: React.ReactNode;
}

export const articles: Article[] = [
  {
    id: 1,
    title: 'Menelusuri Sejarah dan Kekuatan Simbolis Masjid Raden Patah',
    icon: '/images/articles/ (1).jpg',
    description: "Masjid telah menjadi bagian penting dari kehidupan masyarakat, tidak hanya sebagai tempat ibadah, tetapi juga sebagai ikon keagamaan dan kebudayaan, serta menjadi titik fokus dalam mengeksplorasi sejarah dan seni bangsa. Salah satu contoh menakjubkan adalah Masjid Raden Patah di kampus Universitas Brawijaya, yang menampilkan gaya arsitektur yang merujuk pada Kerajaan Majapahit.\n" +
        "\tNama Raden Patah sendiri diambil dari raja islam pertama yang ada di tanah jawa yang merupakan keturunan dari Raja Kertabumi (Prabu Brawijaya V), sang raja dari Kerajaan Majapahit. Raden Patah merupakan raja dari Kerajaan Demak yang merupakan salah satu kerajaan pertama terbesar di nusantara. Kerajaan besar islam ini memiliki peran fundamental dalam pendakwahan ajaran islam di Indonesia khususnya di Pulau Jawa. Raden Patah sendiri berhasil menyatukan berbagai kerajaan kecil di Jawa Tengah dan membentuk Kerajaan Demak sebagai pusat kekuasaan yang baru.  \n" +
        "\tMasjid Raden Patah mempesona dengan keunikan arsitekturnya yang mencerminkan pengaruh dari budaya Jawa dan gaya arsitektur kerajaan Majapahit. Gaya arsitektur ini menampilkan ciri khas yang berbeda dari arsitektur masjid pada umumnya, salah satu yang mencolok dari Masjid Raden Patah adalah penggunaan bangunan dengan kubah berbentuk limas yang memberikan kesan kekokohan dan keanggunan pada strukturnya. Detail ornamen dinding bata seta kolom-kolom yang kokoh memberikan sentuhan artistik yang khas dari gaya arsitektur Majapahit.\n" +
        "\tNama Raden Patah menurut Takmir Masjid Raden Patah juga merupakan salah satu bentuk penghormatan terhadap Raden Patah atas jasanya dalam mensyiarkan ajaran agama islam. Masjid ini awal mula didirikan di atas lahan yang kecil pada tahun 1975 dengan kemampuan menampung  jamaah yang kurang lebih hanya 200 jamaah. Pembangunan masjid ini dimulai pada tahun 2010 yang berada di zaman Rektor Universitas Brawijaya era Prof. Harsono, Prof. Yogi Sugito, hingga Prof. M. Bisri. Setelah mengalami pembangunan, kini Masjid Raden Patah dapat digunakan untuk beribadah dengan kapasitas 5000-7000 jamaah dan dapat digunakan juga sebagai tempat istirahat para jamaah. \n" +
        "\tMasjid Raden Patah memiliki visi misi yang selaras dengan nilai yang terkandung pada Tri Dharma perguruan tinggi yang disampaikan melalui dakwah islam. Aktivitas yang ada pada Masjid Raden Patah secara umum berkaitan dengan bidang pendidikan, peribadatan, dan upaya dalam pemberdayaan ekonomi umat. Visi yang bertuliskan “menjadi masjid kampus yang memajukan peradaban dengan berbasis pada pengembangan insan dan masyarakat serta intelektualitas islami” tentu tergambarkan dari segi fasilitas dan pelayanan yang diberikan serta misi-misi yang dijalankan oleh seluruh pengurus Masjid Raden Patah.\n"
  },
  {id: 2, title: 'title', icon:  images[0], description: "Description"},
  {id: 3, title: 'title', icon:  images[1], description: "Description"},
  {id: 4, title: 'title', icon:  images[2], description: "Description"},
  {id: 5, title: 'title', icon:  images[3], description: "Description"},
  {id: 6, title: 'title', icon:  images[4], description: "Description"},
  {id: 7, title: 'title', icon:  images[5], description: "Description"},
  {id: 8, title: 'title', icon:  images[6], description: "Description"},
  {id: 9, title: 'title', icon:  images[7], description: "Description"},
  {id: 10, title: 'title', icon: images[8], description: "Description"},
  {id: 11, title: 'title', icon: images[9], description: "Description"},
  {id: 12, title: 'title', icon: images[10], description: "Description"},
  {id: 13, title: 'title', icon: images[11], description: "Description"},
  {id: 14, title: 'title', icon: images[12], description: "Description"},
  {id: 15, title: 'title', icon: images[13], description: "Description"},
  {id: 16, title: 'title', icon: images[14], description: "Description"},
  {id: 17, title: 'title', icon: images[15], description: "Description"},
];

export const colWidth: string[] = [
  'col-span-4 row-span-2',
  ' row-span-2',
  ' row-span-2',
  '',
  '',
  '',
  '',
  'col-span-2',
  '',
  '',
  '',
];

export function layoutedData(begin: number, end: number): Article[] {
  if (begin < 0 || end > articles.length || begin >= end) {
    throw new Error('Invalid input parameters for layoutedData');
  }

  const slicedArticles = articles.slice(begin, end);

  return slicedArticles.map((item, index) => {
    const existingClassName = item.className || '';

    const combinedClassName = existingClassName
        ? `${existingClassName} ${colWidth[index]}`
        : colWidth[index];

    return {...item, className: combinedClassName};
  });
}
