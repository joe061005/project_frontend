import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Stock price prediction',
  description: 'Predict the stock price movement of the top 10 US tech stocks ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <link rel='icon' href='logo.jpg'/>
      </head>
      <body className={inter.className} suppressHydrationWarning={true}>
        {/* bg-black text-white */}
        <div className="min-h-screen px-16 mx-auto flex flex-col justify-between">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}

// add navbar and footer here
