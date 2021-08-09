import { useRef } from 'react';
import {Swiper, SwiperSlide} from 'swiper/react'
import SwiperCore, { Navigation, Autoplay , A11y, Pagination } from 'swiper';
import axios from 'axios';
import { SubmitHandler, FormHandles } from '@unform/core'
import { Form } from '@unform/web'
import { useSnackbar } from 'notistack'

import CardProject from '../components/CardProject'
import CardTec from '../components/CardTec'
import Header from '../components/Header'
import Input from '../components/Input';

import projects from '../utils/projects.json'
import useWindowDimensions from '../hook/useDimensions';

interface FormData {
  name: string;
  email: string;
  telephone: number;
  subject: string;
  description: string;
}

const technologies = [
  { 
    title: "Reac.js",
    image: '/icons/reactjs.svg'
  },
  { 
    title: "Next.js",
    image: '/icons/nextjs.svg'
  },
  { 
    title: "Node.js",
    image: '/icons/nodejs.svg'
  },
  { 
    title: "HTML",
    image: '/icons/html.svg'
  },
  { 
    title: "CSS",
    image: '/icons/css.svg'
  },
  { 
    title: "JavaScript",
    image: '/icons/js.svg'
  },
  { 
    title: "Typescript",
    image: '/icons/typescript.svg '
  },
  { 
    title: "Tailwindcss",
    image: '/icons/tailwindcss.svg  '
  },
  { 
    title: "Docker",
    image: '/icons/docker.svg  '
  },
]

SwiperCore.use([Navigation, Autoplay , A11y, Pagination]);

export default function Home() {
  const {enqueueSnackbar} = useSnackbar()
  const {width} = useWindowDimensions()
  const formRef = useRef<FormHandles>(null)

  const handleSubmit: SubmitHandler<FormData> = async ({name, email, telephone, subject, description}) => {
    try {
      const {data} = await axios.post('/api/send-email', {
        name,
        email,
        telephone,
        subject,
        description
      })

      enqueueSnackbar('Menssagem enviada com sucesso!', {
        variant: 'success'
      })
    } catch (error) {
      enqueueSnackbar('Erro ao enviar a menssagem, tente mais tarde!', {
        variant: 'error'
      })
      console.log(error)
    }

  }
  return (
    <div className="bg-black min-h-screen">
      <div className="h-screen border-b-4 border-red">
        <div className="container mx-auto h-full relative flex flex-col items-center">
          <Header />

          <div className="flex h-divid-custon flex-col justify-center items-center px-10 mb-10 md:mb-96 md:items-start md:w-full">
            <h2 className="font-serif text-red text-3xl text-center md:text-5xl md:text-left">Ola, Eu sou Sander</h2>
            <p className="font-serif text-white text-center mt-6 md:text-xl md:text-left">Desenvolvedor Front-end React.js</p>
          </div>

          <div className="absolute -bottom-1">
            <img src="/home.svg" alt="background" />
          </div>
        </div>
      </div>
      <main className="border-b-4 border-red pb-14">
        <section className="container mx-auto px-4 flex flex-col">
          <div className="mx-auto -mt-12 z-10">
              <img src="/profile.png" alt="profile" />
          </div>

          <h2 className="font-serif text-red text-2xl text-center mt-7">Sander Pereira Paniago</h2>
          <p className="font-serif text-white text-center mt-3.5 uppercase">Desenvolvedor Front-end</p>

          <p className="text-textGray text-center font-medium mt-8 md:max-w-xl md:mx-auto">Foi me dada a missão de explorar os mais diversos conhecimentos espalhados pelo universo da programação, meu objetivo atual é recolher os conhecimentos em React.js, ao decorrer da missão devo conquistar novos mundos e criar aplicações incríveis e transformadoras para que os terráqueos possam se beneficiar e ajuda-los em seu cotidiano.</p>

          <img className="mt-8 max-w-xl mx-auto w-full" src="/home-2.svg" alt="" />
        </section>


        <section className="container mx-auto mt-20 px-4">
          <h3 className="font-serif text-white text-2xl text-center mt-7">Alguns dos conhecimentos já conquistados</h3>

          <Swiper
            slidesPerView={width < 1024 ? 2.6 : 4}
            spaceBetween={23}
            loop={true}
            autoplay={{disableOnInteraction: false}}
            pagination={{ clickable: true }}
            className="h-44 mt-6"
          >
            {technologies.map((technology, index)=> {
              return (
                <SwiperSlide key={index}>
                  <CardTec title={technology.title} image={technology.image}/>
                </SwiperSlide>
              )
            })}

          </Swiper>
        </section>

        <section id='projetos' className="container mx-auto mt-48 px-4">
          <div className="md:flex">
              <img className="md:mr-6 md:w-4/12" src="/home-3.svg" alt="" /> 

              <Swiper
                slidesPerView={width < 1024 ? 1.25 : 2}
                spaceBetween={15} 
                loop={true} 
                navigation 
                centeredSlides={true}
                pagination={{ clickable: true }}
                className="mt-6 h-100 md:w-8/12"
                >
                {projects.map((project, index) => {
                  return (
                    <SwiperSlide key={index} >
                      {({isActive}) => (
                        <CardProject project={project} active={isActive} />
                        )}
                    </SwiperSlide>
                  )
                })}

              </Swiper>
            </div>

            <a className="h-16 bg-red px-6 text-white uppercase font-bold flex items-center justify-center rounded mt-14 mx-auto max-w-xs">Acessar Github</a>
        </section>
      </main>
      <footer className="container mx-auto px-4 py-10 max-w-4xl" id='contato'>
        <Form ref={formRef} onSubmit={handleSubmit}>

          <Input name='name' label='Seu nome'/>
          <Input name='email' label='Seu melhor e-mail' type="email"/>
          <Input name='telephone' label='Seu nome' type="tel"/>
          <Input name='subject' label='Assunto'/>
          <Input name='description' label='Mensagem'/>

          <button className='bg-red text-white h-14 px-6 rounded mt-8 mx-auto flex items-center'>Enviar contato</button>
        </Form>
      </footer>
    </div>
  )
}
