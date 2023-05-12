import './globals.css'
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import 'primeicons/primeicons.css';
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import SessContextProvider from "@/context/contextProvider/SessContextProvider";
import axios from "axios";

export const metadata = {
  title: 'اتحادیه تولید کنندگان و فروشندگان لوستر شهرستان تهران',
  description: 'اتحادیه لوستر سازان تهران',
}
export default function RootLayout({ children }) {
    axios.defaults.url = process.env.api_default_url;
    axios.defaults.headers.post['Content-Type'] =process.env.api_content_type;
    //axios.defaults.headers.common['Authorization'] = process.env.api_ordinary_user_token;
  return (
    <html lang="fa" dir='rtl'>
      <head>
          <meta charSet="UTF-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <link rel="apple-touch-icon" sizes="76x76" href="/image/6.jpg"/>
          <link rel="icon" type="image/png" href="/image/6.jpg"/>
          <title>اتحادیه تولید کنندگان و فروشندگان لوستر شهرستان تهران</title>
          <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet"/>
          <script src="https://kit.fontawesome.com/42d5adcbca.js" crossOrigin="anonymous" async></script>
          <link href="/assets/css/nucleo-icons.css" rel="stylesheet"/>
          <link href="/assets/css/nucleo-svg.css" rel="stylesheet"/>
          <link href="/assets/css/soft-ui-dashboard-tailwind.css?v=1.0.4" rel="stylesheet"/>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" />
      </head>
      <body
          className="m-0 font-sans antialiased font-normal bg-white text-start text-base leading-default text-slate-500">
      <SessContextProvider>
      <Header/>
        <main className="ease-soft-in-out relative h-auto max-h-fit	 rounded-xl transition-all duration-200">
            <div className="w-full  pt-10 mx-auto">
        {children}
       <Footer/>
            </div>
        </main>
      </SessContextProvider>
        </body>
    </html>
  )
}
