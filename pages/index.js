import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Head from 'next/head'
import Feature from '../components/Feature'
import Image from 'next/image'
import imagePlatform from '../public/image-platform.png'
import imageAlert from '../public/oneMinuteAlert.png'

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
      <main className="text-center px-6">
        <section className="flex flex-col items-center py-12 px-6 gap-12">
          <div>
            <h1 className="text-3xl">Features</h1>
            <h2 className="text-xl text-gray-700 mt-4">Most calendars are designed for teams.</h2>
          </div>
          <iframe className="rounded-2xl" src="https://www.youtube.com/embed/2JUH7Z17NEE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <Feature />
          <Feature />
          <Feature />
        </section>
        <section className="my-8">
          <div>
            <h1 className="text-3xl">Fastest way to organize</h1>
            <h2 className="text-xl text-gray-700 mt-4">Most calendars are designed for teams.</h2>
            <span className="text-xl text-center bg-primary text-white py-2 px-12 rounded-full inline-block mt-8">Try for free</span>
          </div>
          <Image src={imagePlatform} />
        </section>
        <section className="my-8">
          <h3 className="font-bold">At your fingertips</h3>
          <h2 className=" text-4xl">Newsletter</h2>
          <p className="text-xl text-gray-700 mt-4">Most calendars are designed for teams. Slate is designed for freelancers</p>
          <div className="my-8">
            <Image src={imageAlert} />
          </div>
          <h3 className="font-bold">Subscribe to our Newsletter</h3>
          <p className="text-gray-700">Available exclusivery on Figmaland</p>
          <input type="text" className="bg-gray-200 w-full rounded-full py-2 px-6 mt-4" />
          <input type="text" className="bg-blue-400 w-full rounded-full py-2 px-6 mt-2" />
        </section>

      </main>
    </div>
  )
}
