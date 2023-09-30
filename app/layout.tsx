import './globals.css'
import Navbar from './components/Navbar'
import MyProfilePic from './components/MyProfilePic'

export const metadata = {
  title: "x0n1L's Blog",  
  description: 'Created by x0n1L',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='h-14 bg-gradient-to-r from-violet-200 to-fuchsia-200'>
        <Navbar />
        <MyProfilePic />
        {children}
      </body>
    </html>
  )
}
