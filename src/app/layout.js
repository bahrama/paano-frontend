import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import './globals.css'
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";

export const metadata = {
  title: 'اتحادیه لوستر سازان تهران',
  description: 'اتحادیه لوستر سازان تهران',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir='rtl'>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" />
      <body>
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
