import Link from "next/link";

const Panel = ({children}) => {    
    return(
        <>
        <section>
        <div className='container mx-auto py-2 px-10'>
        <div class="flex flex-col sm:flex-row gap-5 items-center">
            <div class="bg-slate-400 basis-1/5 w-full">
              <div className='grid grid-cols-1 gap-4 place-items-center'>
                 <Link href={"/admin/home"}>خانه</Link>
                 <Link href={"/admin/merchant"}>فروشندگان</Link>
                 <Link href={"/admin/news"}>اخبار</Link>
              </div>
            </div>
            <div class="bg-slate-400 basis-4/5 w-full">
              {children}
            </div>
          </div>
        </div>
        </section>
            {/* panel changed  */}
        </>
    )
}

export default Panel;