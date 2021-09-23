import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Head from 'next/head'
// import Image from 'next/image'

export default function Home() {
  return (
    <div className="font-roboto">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');
        </style>
      </Head>

      <header className="bg-hero-tractian bg-no-repeat bg-cover bg-center h-screen pt-8 px-6">
        <div className="flex justify-between">
          <h1 className="text-white">TRACTIAN</h1>
          <FontAwesomeIcon className="text-white" icon={faBars} width={20} />
        </div>
        <div className="mt-24 flex flex-col items-center gap-4">
          <h1 className="text-white text-3xl text-center">The best products start with Figma</h1>
          <h2 className="text-white text-xl text-center">Most calendars are designed for teams.</h2>
          <span className="text-xl text-center bg-primary text-white py-2 px-12 rounded-full">Try for free</span>
        </div>
      </header>
      <section className="flex flex-col items-center py-12 px-12 text-center gap-6">
        <h1 className="text-3xl">Features</h1>
        <h2 className="text-xl text-gray-700">Most calendars are designed for teams.</h2>
        <iframe className="rounded-2xl" src="https://www.youtube.com/embed/2JUH7Z17NEE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </section>
    </div>
  )
}
