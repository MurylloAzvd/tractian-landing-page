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
          <img src="/logo-tractian.svg" className="w-28 md:w-40" />
          <nav className="hidden md:block">
            <ul className="flex  text-white gap-8 font-bold">
              <li>Conheça o Produto</li>
              <li>Planos</li>
              <li>Sobre Nós</li>
              <li>Contato</li>
              <li>Blog</li>
            </ul>
          </nav>
          <FontAwesomeIcon className="text-white w-8 md:hidden" icon={faBars} />
        </div>
        <div className="flex-1 justify-center flex flex-col items-center gap-4">
          <h1 className="text-white text-3xl text-center md:text-5xl">O sistema preditivo mais completo do mercado</h1>
          <h2 className="text-white text-lg text-center md:text-2xl">Evite falhas nas suas máquinas e torne o tempo de inatividade uma coisa do passado com sistema preditivo da TRACTIAN.</h2>
          <button className="text-lg text-center bg-primary text-white py-2 px-12 rounded-full md:text-2xl">Demonstração</button>
        </div>
      </header>
      <main className="text-center">
        <section className="flex flex-col items-center py-8 px-6 gap-8 md:gap-20">
          <div>
            <h1 className="text-3xl mt-4 max-w-xl">Mantenha a sua equipe e seus ativos com o melhor desempenho</h1>
            <h2 className="text-lg text-gray-700 mt-4 max-w-xl">Descomplicamos a manutenção preditiva evitando vários problemas</h2>
          </div>
          <div className="w-full max-w-xl mx-auto md:order-last">
            <div className="relative overflow-hidden w-full h-0 pt-iframe">
              <iframe className="rounded-2xl absolute top-0 left-0 bottom-0 right-0 w-full h-full" src="https://www.youtube.com/embed/2JUH7Z17NEE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
          <div className="flex flex-col md:flex-row max-w-4xl gap-8">
            <Feature />
            <Feature />
            <Feature />
          </div>
        </section>
        <section className="py-8 px-6 flex flex-col md:flex-row items-center justify-center">
          <div className="flex flex-col items-center md:items-start max-w-sm md:text-left">
            <h1 className="text-3xl">Plataforma que trabalha por você</h1>
            <h2 className="text-lg text-gray-700 mt-4">A plataforma oferece uma visão ampla da condição da sua máquina.</h2>
            <button className="text-lg text-center bg-primary text-white py-2 px-12 rounded-full inline-block mt-8">Demonstração</button>
          </div>
          <div className="w-full max-w-md">
            <Image src={imagePlatform} />
          </div>
        </section>
        <section className="py-8 px-6 flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="hidden my-8 md:block w-full max-w-sm">
            <Image src={imageAlert} />
          </div>
          <div className="flex flex-col gap-2 items-center md:items-start">
            <h3 className="font-bold md:text-left">Na ponta dos seus dados</h3>
            <h2 className=" text-4xl md:text-left">Newsletter</h2>
            <div className="my-8 w-full max-w-md  md:hidden">
              <Image src={imageAlert} />
            </div>
            <div>
              <p className="text-gray-700 md:text-left">Cadastre-se para receber nossa Newsletter</p>
            </div>
            <div className="md:flex gap-4">
              <input type="text" placeholder="Insira seu email" className="bg-gray-200 w-full rounded-full py-2 px-6 mt-4" />
              <button className="bg-primary w-full rounded-full py-2 text-white mt-2" >Enviar</button>
            </div>
          </div>
        </section>
        <section className="py-8 px-6">
          <h2 className=" text-4xl">Nossos Clientes</h2>
          <p className="text-lg text-gray-700 mt-4 max-w-md mx-auto">Maiores indústrias brasileiras e internacionais</p>
          <div className="my-12 flex flex-col items-center gap-4 md:flex-row justify-center flex-wrap max-w-4xl mx-auto">
            <Client />
            <Client />
            <Client />
            <Client />
            <Client />
            <Client />
          </div>
          <button className="text-lg text-center bg-primary text-white py-2 px-12 rounded-full">Agendar Demo</button>
        </section>
        <section className="bg-gray-800 py-8 px-6 flex flex-col justify-center items-center mt-12 lg:flex-row gap-8">
          <Plan />
          <Plan />
        </section>
        <section className="py-8 px-6">
          <h2 className="text-4xl">#1 Solução para Manutenção</h2>
          <div className="mt-6 max-w-xs mx-auto">
            <Image src={stars} />
          </div>
          <p className="text-gray-700 font-bold mt-6 text-sm max-w-lg mx-auto">
            O que os nossos clientes dizem
          </p>
          <div className="mt-8 flex justify-center items-center gap-2">
            <div className="w-12">
              <Image className="rounded-full" src={profile} />
            </div>
            <div className="text-left">
              <span className="block font-bold">Muryllo Dantas</span>
              <span className="block">Front-end Developer</span>
            </div>
          </div>
          <button className="my-12 text-lg text-center bg-primary text-white py-2 px-8 rounded-full">Demonstração</button>
        </section>
        <footer className="bg-gray-800 py-8 px-12 flex flex-col gap-8 md:gap-16 md:flex-row justify-center md:text-left">
          <div className="">
            <h3 className="text-white font-bold mb-6 text-xl">SOBRE</h3>
            <ul>
              <li className="text-white my-4 text-sm">Trabalhe conosco</li>
              <li className="text-white my-4 text-sm">Conheça a Tractian</li>
              <li className="text-white my-4 text-sm">Histórias de Sucesso</li>
              <li className="text-white my-4 text-sm">Imprensa</li>
              <li className="text-white my-4 text-sm">Política de Privacidade</li>
            </ul>
          </div>
          <div className="">
            <h3 className="text-white font-bold mb-6 text-xl">PRODUTO</h3>
            <ul>
              <li className="text-white my-4 text-sm">Sensor Tractian</li>
              <li className="text-white my-4 text-sm">Plataforma</li>
              <li className="text-white my-4 text-sm">Funcionalidades</li>
              <li className="text-white my-4 text-sm">Planos</li>
            </ul>
          </div>
          <div className="">
            <h3 className="text-white font-bold mb-6 text-xl">MATERIAIS</h3>
            <ul>
              <li className="text-white my-4 text-sm">Guias e Ebooks</li>
              <li className="text-white my-4 text-sm">Checklists</li>
              <li className="text-white my-4 text-sm">Calculadora</li>
              <li className="text-white my-4 text-sm">Intensivão</li>
            </ul>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <Image src={location} width={32} />
              <span className="text-white text-xs">7480 Mockingbird Hill</span>
            </div>
            <div className="flex items-center gap-2">
              <Image src={mobile} width={32} />
              <span className="text-white text-xs">(239) 555-0108</span>
            </div>
            <div className="mt-6 flex items-center justify-center gap-4 md:justify-start">
              <Image src={facebook} />
              <Image src={twitter} />
              <Image src={linkedin} />
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
