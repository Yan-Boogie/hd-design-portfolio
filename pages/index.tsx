import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

import IconButton from '@/common/components/buttons/iconButton';
import { CarouselRight } from '@/common/components/icons';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <IconButton aria-label="example" onClick={() => console.log('clicked')}>
      <CarouselRight motionType="full" />
  </IconButton>      
  )
}

