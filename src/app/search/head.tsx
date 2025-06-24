import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Download SoundCloud Track | DownSC',
  description:
    'Baixe músicas do SoundCloud facilmente. Ferramenta gratuita para baixar qualquer track do SoundCloud em MP3. Simples, rápido e seguro.',
  keywords: [
    // Português
    'download soundcloud',
    'baixar soundcloud',
    'soundcloud mp3',
    'baixar música soundcloud',
    'download soundcloud track',
    'baixar track soundcloud',
    'soundcloud downloader',
    'downsc',
    'soundcloud to mp3',
    'baixar música grátis',
    'download música online',
    // Espanhol
    'descargar soundcloud',
    'descargar música soundcloud',
    'descargar soundcloud mp3',
    'descargar track soundcloud',
    'descargar música gratis',
    'descargar música online',
    // Francês
    'télécharger soundcloud',
    'télécharger musique soundcloud',
    'télécharger soundcloud mp3',
    'télécharger piste soundcloud',
    'télécharger musique gratuite',
    'télécharger musique en ligne',
    // Alemão
    'soundcloud musik herunterladen',
    'soundcloud mp3 herunterladen',
    'musik kostenlos herunterladen',
    'musik online herunterladen',
    // Russo
    'скачать soundcloud',
    'скачать музыку soundcloud',
    'скачать soundcloud mp3',
    'скачать трек soundcloud',
    'скачать музыку бесплатно',
    'скачать музыку онлайн',
    // Italiano
    'scaricare soundcloud',
    'scaricare musica soundcloud',
    'soundcloud mp3 scaricare',
    'scaricare traccia soundcloud',
    'scaricare musica gratis',
    'scaricare musica online',
    // Turco
    'soundcloud indir',
    'soundcloud mp3 indir',
    'soundcloud şarkı indir',
    'ücretsiz müzik indir',
    'çevrimiçi müzik indir',
    // Árabe
    'تحميل soundcloud',
    'تحميل اغاني soundcloud',
    'تحميل soundcloud mp3',
    'تحميل اغنية soundcloud',
    'تحميل موسيقى مجانا',
    'تحميل موسيقى اونلاين',
    // Japonês
    'サウンドクラウド ダウンロード',
    'サウンドクラウド mp3 ダウンロード',
    'サウンドクラウド 曲 ダウンロード',
    '無料 音楽 ダウンロード',
    'オンライン 音楽 ダウンロード',
    // Chinês simplificado
    'soundcloud 下载',
    'soundcloud 音乐下载',
    'soundcloud mp3 下载',
    '免费下载音乐',
    '在线音乐下载',
  ],
  openGraph: {
    title: 'Download SoundCloud Track | DownSC',
    description:
      'Baixe músicas do SoundCloud facilmente. Ferramenta gratuita para baixar qualquer track do SoundCloud em MP3.',
    // !FIXME: Update the URL to your actual domain
    url: 'https://down-sc-tracks.vercel.app/search',
    siteName: 'DownSC',
    type: 'website',
    images: [
      {
        url: '/default-artwork.png',
        width: 800,
        height: 600,
        alt: 'DownSC - Download SoundCloud Track',
      },
    ],
    locale: 'pt_BR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Download SoundCloud Track | DownSC',
    description:
      'Baixe músicas do SoundCloud facilmente. Ferramenta gratuita para baixar qualquer track do SoundCloud em MP3.',
    images: ['/default-artwork.png'],
    site: '@downsc',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

export default function Head() {
  return null;
}
