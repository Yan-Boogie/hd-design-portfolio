import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

import IconButton from '@/common/components/buttons/iconButton';
import { CarouselRight } from '@/common/components/icons';
import ShowreelWallpaperButton from '@/common/components/buttons/showreelWallpaperButton';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <ShowreelWallpaperButton src="/butt-animation.gif" alt="Main Page Wallpaper" />
  )
}

