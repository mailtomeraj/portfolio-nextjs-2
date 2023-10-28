import Image from 'next/image'
import Navbar from './components/Navbar'
import Bio from './components/Bio'
import Experience from './components/Experience'
export default function Home() {
  return (
    <main className="min-h-screen">
<Navbar/>
<Bio/>
<Experience/>
    </main>
  )
}
