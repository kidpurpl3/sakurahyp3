import colors from '@/style/colors'
import Dang from "@/components/Dang.jsx"

let titlee = 'hyperactiv3!'

// colors.neon = colors.pale

export default function Home()
{
  return(
    <main className='bg-slate-900'>
      <div className='w-screen h-screen' id='hero'>
        <div className='border-s-orange-50 flex'>
        <nav className='flex absolute z-10 flex-col mx-24 my-24 right-0 text-right'>
          <ul>
            <li><a style={{ color:`${colors.neon}`}} className='hover:text-xl' href="">shop</a></li>
            <li><a style={{ color:`${colors.neon}`}} className='hover:text-xl' href="">artists</a></li>
            <li><a style={{ color:`${colors.neon}`}} className='hover:text-xl' href="">watch</a></li>
            <li><a style={{ color:`${colors.neon}`}} className='hover:text-xl' href="">buy</a></li>
            <li><a style={{ color:`${colors.neon}`}} className='hover:text-xl' href="">cart</a></li>
          </ul>
        </nav>
        </div>
        <Dang wireframe={true} size='8' sizee='12' speedd={8} color={colors.neon}/>
        {/* TITLE */}
        <h1 id='title1'
        style={{ color:`${colors.neon}`}}
        className=
        {` text-3xl absolute bottom-0 py-8 px-10`}>
         {titlee}</h1>

      </div>

      <div style={{
        width:"100vw", height:"100vh"}}>
      </div>
    </main>
  )
}