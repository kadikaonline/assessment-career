
import { Question } from './types';

export const QUESTIONS: Question[] = [
  {
    id: 1,
    text: "Kalau kamu disuruh nulis, kamu lebih suka ngerjain yang mana nih?",
    options: [
      { id: 'A', text: "Artikel panjang yang detail dan edukatif buat pembaca.", score: { role: 'content', level: 'specialist' } },
      { id: 'B', text: "Headline singkat yang bikin orang langsung pengen nge-klik.", score: { role: 'copy', level: 'specialist' } },
      { id: 'C', text: "Ngerancang pilar konten buat sebulan ke depan biar brand makin dikenal.", score: { role: 'content', level: 'strategist' } },
      { id: 'D', text: "Ngerancang funnel iklan yang bisa bikin jualan auto-laku.", score: { role: 'copy', level: 'strategist' } }
    ]
  },
  {
    id: 2,
    text: "Apa hal yang paling bikin kamu ngerasa 'puas' setelah tulisanmu publish?",
    options: [
      { id: 'A', text: "Tulisan rapi banget, gak ada typo, dan enak dibaca.", score: { role: 'content', level: 'specialist' } },
      { id: 'B', text: "Dapet konversi tinggi atau banyak yang langsung beli.", score: { role: 'copy', level: 'specialist' } },
      { id: 'C', text: "Orang-orang jadi makin paham topik yang aku bahas secara mendalam.", score: { role: 'content', level: 'strategist' } },
      { id: 'D', text: "Melihat pola audience yang berubah sesuai strategi yang aku buat.", score: { role: 'copy', level: 'strategist' } }
    ]
  },
  {
    id: 3,
    text: "Gimana cara kamu riset sebelum mulai nulis?",
    options: [
      { id: 'A', text: "Cari referensi data, buku, atau jurnal biar isinya akurat.", score: { role: 'content', level: 'specialist' } },
      { id: 'B', text: "Cari tau 'pain point' audience biar bisa nyentuh emosi mereka.", score: { role: 'copy', level: 'specialist' } },
      { id: 'C', text: "Analisis trend kompetitor dan keyword SEO biar traffic naik.", score: { role: 'content', level: 'strategist' } },
      { id: 'D', text: "Riset psikologi pembeli dan journey mereka di website.", score: { role: 'copy', level: 'strategist' } }
    ]
  },
  {
    id: 4,
    text: "Seandainya kamu lagi scroll sosmed, postingan mana yang paling narik perhatianmu?",
    options: [
      { id: 'A', text: "Carousel tips & trick yang isinya daging semua.", score: { role: 'content', level: 'specialist' } },
      { id: 'B', text: "Iklan yang kalimat pertamanya bikin aku berenti scroll.", score: { role: 'copy', level: 'specialist' } },
      { id: 'C', text: "Brand yang punya tone of voice konsisten di semua platform.", score: { role: 'content', level: 'strategist' } },
      { id: 'D', text: "Kampanye diskon yang pinter banget teknik promosinya.", score: { role: 'copy', level: 'strategist' } }
    ]
  },
  {
    id: 5,
    text: "Kalau kamu punya waktu luang, kamu lebih suka belajar tentang...",
    options: [
      { id: 'A', text: "Teknik storytelling dan vocabulary biar makin jago nulis.", score: { role: 'content', level: 'specialist' } },
      { id: 'B', text: "Psikologi persuasi dan cara jualan tanpa kelihatan jualan.", score: { role: 'copy', level: 'specialist' } },
      { id: 'C', text: "Content marketing funnel dan ekosistem digital media.", score: { role: 'content', level: 'strategist' } },
      { id: 'D', text: "Market research, data analytics, dan sales conversion.", score: { role: 'copy', level: 'strategist' } }
    ]
  }
];

export const DIAGNOSIS_DATA = {
  'Content Writer-Specialist': {
    description: "Kamu adalah 'Si Master Edukasi'! Kamu punya ketelitian tinggi dan kemampuan riset yang luar biasa. Kamu paling jago bikin pembaca betah berlama-lama baca tulisanmu karena isinya berbobot dan enak diikuti.",
    advice: "Fokuslah pada portofolio artikel panjang, SEO writing, dan ebook. Skill-mu sangat dibutuhkan oleh tech company dan media.",
    productName: "Certified Impactful Writer",
    productLink: "https://certifiedimpactfulwriter.com",
    productDesc: "Program sertifikasi buat kamu yang mau jadi writer profesional dengan standar industri global."
  },
  'Content Writer-Strategist': {
    description: "Kamu adalah 'Arsitek Konten'! Kamu nggak cuma jago nulis, tapi kamu tau persis gimana ngebangun image brand lewat konten berkelanjutan. Kamu paham cara narik traffic organik tanpa paksaan.",
    advice: "Kamu cocok jadi Content Lead atau Planner. Fokuslah belajar Content Ecosystem dan Branding Strategy.",
    productName: "Content Writer Jumpstart",
    productLink: "https://academy.impactfulwriting.com/cwj",
    productDesc: "Loncatan karir buat kamu yang mau switch karir atau mulai jadi strategist konten dari nol sampai cuan!"
  },
  'Copywriter-Specialist': {
    description: "Kamu adalah 'Si Penulis Persuasif'! Kamu tau banget kata-kata mana yang bikin orang langsung 'Gatel' pengen klik tombol beli. Tulisanmu tajam, singkat, dan sangat 'to the point'.",
    advice: "Kuasai teknik-teknik copywriting seperti PAS, AIDA, dan storytelling pendek. Fokus pada landing page dan ads copy.",
    productName: "The Profitable Copywriter",
    productLink: "#",
    productDesc: "Bongkar rahasia nulis copy yang konversinya tinggi dan disukai klien kakap."
  },
  'Copywriter-Strategist': {
    description: "Kamu adalah 'Otak di Balik Penjualan'! Kamu melihat copywriting sebagai bagian dari mesin uang (sales funnel). Kamu lebih suka mikirin 'kenapa' orang beli daripada cuma sekadar nulis headline.",
    advice: "Lanjutkan belajar Sales Funnel, Email Marketing, dan Conversion Rate Optimization (CRO). Skill-mu harganya mahal banget!",
    productName: "Sales Funnel Mastery",
    productLink: "#",
    productDesc: "Belajar ngerancang strategi penjualan end-to-end yang bikin bisnis auto-scale."
  }
};
