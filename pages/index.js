import Image from 'next/image'
import { Inter } from 'next/font/google'
import { dbConnect } from '@/config/db'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
 dbConnect();
  return (
    <div> Hello</div>
  )
}
