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
      <head>
          <meta charSet="UTF-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <link rel="apple-touch-icon" sizes="76x76" href="/assets/img/apple-icon.png"/>
          <link rel="icon" type="image/png" href="/assets/img/favicon.png"/>
          <title>Soft UI Dashboard Tailwind</title>
          <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet"/>
          <script src="https://kit.fontawesome.com/42d5adcbca.js" crossOrigin="anonymous" async></script>
          <link href="/assets/css/nucleo-icons.css" rel="stylesheet"/>
          <link href="/assets/css/nucleo-svg.css" rel="stylesheet"/>
          <link href="/assets/css/soft-ui-dashboard-tailwind.css?v=1.0.4" rel="stylesheet"/>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" />
      </head>
      <body
          className="m-0 font-sans antialiased font-normal bg-white text-start text-base leading-default text-slate-500">
        <Header/>
        <main className="ease-soft-in-out relative h-full max-h-screen rounded-xl transition-all duration-200">
            <div className="w-full">
        {children}
       <Footer/>
            </div>
        </main>
        </body>
    </html>
  )
}
