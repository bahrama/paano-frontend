import { Inter } from 'next/font/google'
import Main from "@/app/Home/Main";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
  <Main/>
  )
}
