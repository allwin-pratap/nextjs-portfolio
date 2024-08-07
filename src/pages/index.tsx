import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center p-24 ${inter.className}`}
    >
          <p className={`m-0 max-w-[30ch] text-lg opacity-80`}>
            Allwin Pratap Portfolio
          </p>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            In Progress
          </p>
    </main>
  )
}
