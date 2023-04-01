"use client"
import Link from "next/link";
import {useState} from "react";

const Header = () =>{
    const [productMenuExpand,setProductMenuExpand] = useState(false);
    const handleProductMenuExpand = () =>{
        setProductMenuExpand(!productMenuExpand);
    }
    return (
         <header className="shadow-lg mb-10">
           <div className='container mx-auto py-2 px-10'>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center'>
                      <div>
                      <Link className="py-2 px-4 rounded-full bg-slate-300 hover:bg-slate-700 hover:text-blue-100 transition duration-300 ease-in-out" href={"/admin/home"}>پنل ادمین</Link>
                      <button className="py-2 px-4 mr-4 text-white rounded-full bg-indigo-700">عضویت</button>
                      </div>
                      <div className="mr-7">
                        <ul className="flex gap-7 font-vazir">
                          <li className="nav-item-active"><Link href={"/"}>صفحه اصلی</Link></li>
                          <li classNa me="nav-item"><Link onClick={handleProductMenuExpand} href={"#"}>محصولات</Link>
                              {productMenuExpand ?
                                  <div className="bg-white absolute top-14 border rounded-lg py-2 px-2 transition duration-300 ease-in-out">
                                      <ul className="space-y-3">
                                          <li className="nav-item"> <Link href={"#"}> شعمدانی</Link></li>
                                          <li className="nav-item"> <Link href={"#"}>لوستر اداری</Link></li>
                                          <li className="nav-item"><Link href={"#"}>لوستر مرکزی</Link></li>
                                          <li className="nav-item"><Link href={"#"}>آینه و لوستر</Link></li>
                                      </ul>
                                  </div> :
                                  <></>
                              }

                          </li>
                          <li className="nav-item"><Link href={"#"}>تماس با ما</Link></li>
                          <li className="nav-item"><Link href={"#"}>درباره ما</Link></li>
                        </ul>
                      </div>
                    </div>
                    <div>
                      <h2>paaano.ir</h2>
                    </div>
                </div>
           </div>
           </header>
      );
}

export default Header;