import { faBars, faMapMarkedAlt, faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Head from 'next/head'
import Feature from '../components/Feature'
import Image from 'next/image'
import imagePlatform from '../public/image-platform.png'
import imageAlert from '../public/oneMinuteAlert.png'
import stars from '../public/stars.svg'
import profile from '../public/profile.png'
import twitter from '../public/twitter-outlined.svg'
import facebook from '../public/facebook-filled.svg'
import linkedin from '../public/linkedin-filled.svg'
import location from '../public/location.svg'
import mobile from '../public/phone.svg'
import tractianLogo from '../public/logo-tractian.svg'
import Client from '../components/Client'
import Plan from '../components/Plan'

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

      <header className="bg-gradient-to-l from-blue-600 to-blue-900 h-screen pt-8 px-6 flex flex-col">
        <div className="flex justify-between mx-auto w-full max-w-4xl">
          <img src="/logo-tractian.svg" className="w-20 md:w-40" />
          <FontAwesomeIcon className="text-white w-6 md:w-10" icon={faBars} />
        </div>
        <div className="flex-1 justify-center flex flex-col items-center gap-4">
          <h1 className="text-white text-3xl text-center md:text-5xl">The best products start with Figma</h1>
          <h2 className="text-white text-lg text-center md:text-2xl">Most calendars are designed for teams.</h2>
          <button className="text-lg text-center bg-primary text-white py-2 px-12 rounded-full md:text-2xl">Try for free</button>
        </div>
      </header>
      <main className="text-center">
        <section className="flex flex-col items-center py-12 px-6 gap-12">
          <div>
            <h1 className="text-3xl">Features</h1>
            <h2 className="text-lg text-gray-700 mt-4">Most calendars are designed for teams.</h2>
          </div>
          <div className="w-full md:w-2/3 mx-auto md:order-last">
            <div className="relative overflow-hidden w-full h-0 pt-iframe">
              <iframe className="rounded-2xl absolute top-0 left-0 bottom-0 right-0 w-full h-full" src="https://www.youtube.com/embed/2JUH7Z17NEE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
          <div className="flex flex-col md:flex-row max-w-2xl gap-8">
            <Feature />
            <Feature />
            <Feature />
          </div>
        </section>
        <section className="my-16 px-6 flex flex-col md:flex-row items-center justify-center ">
          <div className="flex flex-col items-center md:items-start">
            <h1 className="text-3xl">Fastest way to organize</h1>
            <h2 className="text-lg text-gray-700 mt-4">Most calendars are designed for teams.</h2>
            <button className="text-lg text-center bg-primary text-white py-2 px-12 rounded-full inline-block mt-8">Try for free</button>
          </div>
          <div className="w-full max-w-md">
            <Image src={imagePlatform} />
          </div>
        </section>
        <section className="my-16 px-6 flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="hidden my-8 md:block max-w-md">
            <Image src={imageAlert} />
          </div>
          <div>
            <h3 className="font-bold md:text-left">At your fingertips</h3>
            <h2 className=" text-4xl md:text-left">Newsletter</h2>
            <p className="text-lg text-gray-700 mt-4 md:hidden">Most calendars are designed for teams. Slate is designed for freelancers</p>
            <div className="my-8 md:hidden">
              <Image src={imageAlert} />
            </div>
            <h3 className="font-bold md:text-left">Subscribe to our Newsletter</h3>
            <p className="text-gray-700 md:text-left">Available exclusivery on Figmaland</p>
            <div className="md:flex gap-4">
              <input type="text" placeholder="Your Email" className="bg-gray-200 w-full rounded-full py-2 px-6 mt-4" />
              <button className="bg-primary w-full rounded-full py-2 text-white mt-2" >Subscribe</button>
            </div>
          </div>
        </section>
        <section className="my-16 px-6">
          <h2 className=" text-4xl">Partners</h2>
          <p className="text-lg text-gray-700 mt-4 max-w-md mx-auto">Most calendars are designed for teams. Slate is designed for freelancers</p>
          <div className="my-12 flex flex-col items-center gap-4 md:flex-row justify-center flex-wrap max-w-4xl mx-auto">
            <Client />
            <Client />
            <Client />
            <Client />
            <Client />
            <Client />
          </div>
          <button className="text-lg text-center bg-primary text-white py-2 px-12 rounded-full">Try for free</button>
        </section>
        <section className="bg-gray-800 py-16 px-6">
          <h2 className="text-white text-4xl">Pricing</h2>
          <p className="text-white mt-4">Most calendars are designed for teams. Slate is designed for teams.</p>
          <div className="flex flex-col justify-center items-center mt-12 lg:flex-row gap-8">
            <Plan />
            <Plan />
            <Plan />
          </div>
        </section>
        <section className="my-16 px-6">
          <h2 className="text-4xl">Testimonial</h2>
          <div className="mt-12 max-w-xs mx-auto">
            <Image src={stars} />
          </div>
          <p className="text-gray-700 font-bold mt-6 text-sm max-w-lg mx-auto">
            Most calendars are designed for teams.
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
        <footer className="bg-gray-800 py-16 px-12">
          <div className="mb-16">
            <h3 className="text-white font-bold my-6 text-xl">Annette Steward</h3>
            <ul>
              <li className="text-white my-4 text-sm">Jennie Cooper</li>
              <li className="text-white my-4 text-sm">Julie Henry</li>
              <li className="text-white my-4 text-sm">Johnny Murphy</li>
              <li className="text-white my-4 text-sm">Gregory Mccoy</li>
              <li className="text-white my-4 text-sm">Marvin Mckinney</li>
            </ul>
          </div>
          <div className="mb-16">
            <h3 className="text-white font-bold my-6 text-xl">Annette Steward</h3>
            <ul>
              <li className="text-white my-4 text-sm">Jennie Cooper</li>
              <li className="text-white my-4 text-sm">Julie Henry</li>
              <li className="text-white my-4 text-sm">Johnny Murphy</li>
              <li className="text-white my-4 text-sm">Gregory Mccoy</li>
              <li className="text-white my-4 text-sm">Marvin Mckinney</li>
            </ul>
          </div>
          <div className="mb-16">
            <h3 className="text-white font-bold my-6 text-xl">Annette Steward</h3>
            <ul>
              <li className="text-white my-4 text-sm">Jennie Cooper</li>
              <li className="text-white my-4 text-sm">Julie Henry</li>
              <li className="text-white my-4 text-sm">Johnny Murphy</li>
              <li className="text-white my-4 text-sm">Gregory Mccoy</li>
              <li className="text-white my-4 text-sm">Marvin Mckinney</li>
            </ul>
          </div>
          <div className="flex items-center gap-2">
            <Image src={location} width={32} />
            <span className="text-white text-xs">7480 Mockingbird Hill undefined</span>
          </div>
          <div className="flex items-center gap-2">
            <Image src={mobile} width={32} />
            <span className="text-white text-xs">(239) 555-0108</span>
          </div>
          <div className="my-6 flex items-center justify-evenly">
            <Image src={facebook} />
            <Image src={twitter} />
            <Image src={linkedin} />
          </div>
        </footer>
      </main>
    </div>
  )
}
