import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

import IconButton from '@/common/components/buttons/iconButton';
import { CarouselRight } from '@/common/components/icons';
import ShowreelWallpaperButton from '@/common/components/buttons/showreelWallpaperButton';
import dynamic from 'next/dynamic'

const ReactPlayer = dynamic(() => import('react-player/vimeo'), { ssr: false });

const inter = Inter({ subsets: ['latin'] })

const link = 'https://vimeo.com/714795278';

export default function Home() {
  return (
    <div>
      <ReactPlayer url={link} />
    </div>
  )
}

