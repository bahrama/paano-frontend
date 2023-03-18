import Link from "next/link";

const Header = () =>{
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
                        <ul className="flex gap-7">
                          <li><Link href={"/"}>صفحه اصلی</Link></li>
                          <li>محتویات</li>
                          <li>تماس با ما</li>
                          <li>درباره ما</li>
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