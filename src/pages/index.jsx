import Head from 'next/head'


import { Footer } from '@/components/Footer'
import { FreeChapters } from '@/components/FreeChapters'
import { Hero } from '@/components/Hero'
import { Introduction } from '@/components/Introduction'
import { NavBar } from '@/components/NavBar'
import { Pricing } from '@/components/Pricing'
import { Resources } from '@/components/Resources'
import { Screencasts } from '@/components/Screencasts'
import { TableOfContents } from '@/components/TableOfContents'
import { Testimonial } from '@/components/Testimonial'
import Features  from '@/components/Features'
import { Testimonials } from '@/components/Testimonials'
import avatarImage1 from '@/images/avatars/avatar-1.png'
import avatarImage2 from '@/images/avatars/avatarwoman.jpg'
import Author from "@/components/Author";


export default function Home() {
  return (
    <>
      <Head>
        <title>
          Lou Academy 3.0 - Deviens Community Manager
        </title>
        <meta
          name="description"
          content="A book and video course that teaches you how to design your own icons from scratch. "
        />
      </Head>
      <Hero />
      <Introduction />
        <Features />
      <NavBar />
      <TableOfContents />
      <Testimonial
        id="testimonial-from-tommy-stroman"
        author={{
          name: 'Thomas',
          role: 'CM Indépendant depuis 8 mois',
          image: avatarImage1,
        }}
      >
        <p>
            « Je ne connaissais pas le métier de CM.
            J’ai acquis les compétences nécessaires, appris à vendre et estimer mes prestations à ma juste valeur ! »
        </p>
      </Testimonial>
      <Screencasts />
      <Testimonial
        id="testimonial-from-gerardo-stark"
        author={{
          name: 'Lolita',
          role: 'CM indépendante depuis 6 mois',
          image: avatarImage2,
        }}
      >
        <p>
            "Choisir la formation Lou Academy 3.0 pour devenir Community Manager a été la meilleure décision. Son accompagnement personnalisé de 6 mois m'a aidé à atteindre mon objectif de gagner 5000€/mois. Professionnelle, passionnée et humaine, je recommande vivement sa formation."
        </p>
      </Testimonial>
      <Resources />
      <FreeChapters />
      <Pricing />
      <Testimonials />
        <Author />
      <Footer />

    </>
  )
}
