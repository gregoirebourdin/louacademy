import Image from 'next/image'

import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import whatsapp from '@/images/resources/Whatsapp.png'
import sheet from '@/images/resources/Sheet.png'
import docs from '@/images/resources/Docs.png'

const resources = [
  {
    title: 'Communauté CM',
    description:
      'L’accès à une communauté de CM en devenir, tous autant passionnés que toi ! Tu pourras échanger avec eux, ' +
        'partager tes doutes, tes réussites et tes échecs.',
    image: function FigmaImage() {
      return (
          <div className="absolute inset-0 flex items-center justify-center "
               style={{
                 backgroundImage:
                 // Do a green gradient like the class blue-500
                     'linear-gradient(90deg, #119079 0%, #19B395 100%)',
               }}>
            <Image src={whatsapp} alt="" unoptimized />
          </div>
      )
    },
  },
  {
    title: 'Logiciel de tracking',
    description:
      'Un logiciel conçu pour suivre les données, actions et statistiques de tes clients en direct, afin de faire des reportings rapides et efficaces.',
    image: function VideoPlayerImage() {
      return (
          <div className="absolute inset-0 flex items-center justify-center "
               style={{
                 backgroundImage:
                 // Do a green gradient like the class blue-500
                     'linear-gradient(90deg, #119079 0%, #19B395 100%)',
               }}>
            <Image src={sheet} alt="" unoptimized />
          </div>
      )
    },
  },
  {
    title: 'Documents à l’appui',
    description:
      "Support PDF des cours, des exercices et surtout des documents qui vont t’apprendre à enfin vendre tes prestations, grâce à un script de vente de qualité créé pour les CM.",
    image: function DiscordImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center "
             style={{
               backgroundImage:
               // Do a green gradient like the class blue-500
                   'linear-gradient(90deg, #119079 0%, #19B395 100%)',
             }}>
          <Image src={docs} alt="" unoptimized />
        </div>
      )
    },
  },
]

export function Resources() {
  return (
    <section
      id="resources"
      aria-labelledby="resources-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading number="3" id="resources-title">
          Outils
        </SectionHeading>
        <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">Des outils sur-mesure pour les CM.</p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          Dans cet accompagnement, tu trouveras aussi tout les outils/documents nécéssaires pour devenir excellent.e dans le domaine du Community Management et progresser encore plus vite.
        </p>
      </Container>
      <Container size="lg" className="mt-16">
        <ol
          role="list"
          className="-mx-3 grid grid-cols-1 gap-y-10 lg:grid-cols-3 lg:text-center xl:-mx-12 xl:divide-x xl:divide-slate-400/20"
        >
          {resources.map((resource) => (
            <li
              key={resource.title}
              className="grid auto-rows-min grid-cols-1 items-center gap-8 px-3 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-1 xl:px-12"
            >
              <div className="relative h-48 overflow-hidden rounded-2xl shadow-lg sm:h-60 lg:h-40">
                <resource.image />
              </div>
              <div>
                <h3 className="text-base font-medium tracking-tight text-slate-900">
                  {resource.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  {resource.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
