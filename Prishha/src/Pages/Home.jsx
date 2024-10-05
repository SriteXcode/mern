import react, { Suspense } from 'react'
import { LayoutCollection } from './Layout-collection'
import { Predesigned } from './Predesigned'
import { Hero } from './Home-hero'


function Home() {
  
  return (
    <>
    <h1 className="text-3xl font-bold underline">Home</h1>
    <Suspense fallback={'Loading...'}>
       <Hero />
       <LayoutCollection />
       <Predesigned />
    </Suspense>
    </>
  )
}

export default Home
