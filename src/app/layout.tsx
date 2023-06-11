import './globals.css'
import { Inter } from 'next/font/google'

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
        <div className=" min-h-screen px-16 flex flex-column justify-between bg-black text-white">
          {children}
        </div>
      </body>
    </html>
  )
}

// add navbar and footer here
