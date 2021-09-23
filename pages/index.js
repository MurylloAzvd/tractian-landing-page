import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Head from 'next/head'
import Feature from '../components/Feature'
import Image from 'next/image'
import imagePlatform from '../public/image-platform.png'
import imageAlert from '../public/oneMinuteAlert.png'
import stars from '../public/stars.svg'
import profile from '../public/profile.png'
import Cliente from '../components/Client'

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
          <h2 className="text-white text-lg text-center">Most calendars are designed for teams.</h2>
          <button className="text-lg text-center bg-primary text-white py-2 px-12 rounded-full">Try for free</button>
        </div>
      </header>
      <main className="text-center">
        <section className="flex flex-col items-center py-12 px-6 gap-12">
          <div>
            <h1 className="text-3xl">Features</h1>
            <h2 className="text-lg text-gray-700 mt-4">Most calendars are designed for teams.</h2>
          </div>
          <iframe className="rounded-2xl" src="https://www.youtube.com/embed/2JUH7Z17NEE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <Feature />
          <Feature />
          <Feature />
        </section>
        <section className="my-16 px-6">
          <div>
            <h1 className="text-3xl">Fastest way to organize</h1>
            <h2 className="text-lg text-gray-700 mt-4">Most calendars are designed for teams.</h2>
            <button className="text-lg text-center bg-primary text-white py-2 px-12 rounded-full inline-block mt-8">Try for free</button>
          </div>
          <Image src={imagePlatform} />
        </section>
        <section className="my-16 px-6">
          <h3 className="font-bold">At your fingertips</h3>
          <h2 className=" text-4xl">Newsletter</h2>
          <p className="text-lg text-gray-700 mt-4">Most calendars are designed for teams. Slate is designed for freelancers</p>
          <div className="my-8">
            <Image src={imageAlert} />
          </div>
          <h3 className="font-bold">Subscribe to our Newsletter</h3>
          <p className="text-gray-700">Available exclusivery on Figmaland</p>
          <input type="text" placeholder="Your Email" className="bg-gray-200 w-full rounded-full py-2 px-6 mt-4" />
          <button className="bg-primary w-full rounded-full py-2 text-white mt-2" >Subscribe</button>
        </section>
        <section className="my-16 px-6">
          <h2 className=" text-4xl">Partners</h2>
          <p className="text-lg text-gray-700 mt-4">Most calendars are designed for teams. Slate is designed for freelancers</p>
          <div className="my-12 flex flex-col items-center gap-4">
            <Cliente />
            <Cliente />
            <Cliente />
          </div>
          <button className="text-lg text-center bg-primary text-white py-2 px-12 rounded-full">Try for free</button>
        </section>
        <section className="my-16 px-6">
          <h2 className="text-4xl">Testimonial</h2>
          <div className="mt-12">
            <Image src={stars} />
          </div>
          <p className="text-gray-700 font-bold mt-6 text-sm">Most calendars are designed for teams.
            Slate is designed for freelancers who want a
            simple way to plan their schedule.</p>
          <div className="mt-8 flex justify-center items-center gap-2">
            <div className="w-12">
              <Image className="rounded-full" src={profile} />
            </div>
            <div className="text-left">
              <span className="block font-bold">Organize across</span>
              <span className="block">Ui designer</span>
            </div>
          </div>
          <button className="my-12 text-lg text-center bg-primary text-white py-2 px-8 rounded-full">More Testomonials</button>
        </section>
        <section className="bg-gray-800 py-16 px-6">
          <h2 className="text-white text-4xl">Pricing</h2>
          <p className="text-white mt-4">Most calendars are designed for teams. Slate is designed for teams.</p>
        </section>
      </main>
    </div>
  )
}
