import Image from 'next/image'

import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import duotoneImage from '@/images/screencasts/duotone.svg'
import gridsImage from '@/images/screencasts/grids.svg'
import setupImage from '@/images/screencasts/setup.svg'
import strokesImage from '@/images/screencasts/strokes.svg'

const videos = [
  {
    title: "Apprendre Business Manager",
    description:
      'Familiarise-toi avec l\'interface Business Manager, les différents outils qu\'elle propose et les fonctionnalités les plus importantes pour gérer les réseaux sociaux de tes clients.',
    image: setupImage,
    runtime: { minutes: 16, seconds: 54 },
  },
  {
    title: "Apprendre Cap Cut",
    description:
      'Familiarise-toi avec l\'application Cap Cut et crée tes premiers Reels viraux sur Instagram.',
    image: gridsImage,
    runtime: { minutes: 9, seconds: 12 },
  },
  {
    title: "Apprendre gestion d'Agenda",
    description:
      'Créer un agenda super productif, pour gérer la délivrabilité de tes clients et aussi le développement de ton activité.',
    image: strokesImage,
    runtime: { minutes: 23, seconds: 25 },
  },
  {
    title: 'Apprendre logiciel de tracking',
    description:
      'Un outil conçu pour changer la relation avec tes clients, et améliorer vos performances tout en gérant vos actions en temps réels.',
    image: duotoneImage,
    runtime: { minutes: 28, seconds: 44 },
  },
]

function PlayIcon(props) {
  return (
    <svg
      aria-hidden="true"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      {...props}
    >
      <path d="M6.75 10.25v-4.5L10.25 8l-3.5 2.25Z" />
      <circle cx="8" cy="8" r="6.25" fill="none" />
    </svg>
  )
}

export function Screencasts() {
  return (
    <section
      id="screencasts"
      aria-labelledby="screencasts-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading number="2" id="screencasts-title">
          Screencasts
        </SectionHeading>
        <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
          Vidéos étape par étape de haute qualité pour gagner en compétences et en productivité.
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          Apprenez à concevoir vos premiers Reels afin qu’ils deviennent viraux dans une série de screencasts qui vous apprendront tout ce que vous devez savoir pour passer d’un simple CM débutant à un professionnel du secteur de la communication.
        </p>
      </Container>
      <Container size="lg" className="mt-16">
        <ol
          role="list"
          className="grid grid-cols-1 gap-x-8 gap-y-10 [counter-reset:video] sm:grid-cols-2 lg:grid-cols-4"
        >
          {videos.map((video) => (
            <li key={video.title} className="[counter-increment:video]">
              <div
                className="relative flex h-44 items-center justify-center rounded-2xl px-6 shadow-lg"
                style={{
                  backgroundImage:
                    // Do a green gradient like the class blue-500
                    'linear-gradient(90deg, #119079 0%, #19B395 100%)',
                }}
              >
                <div className="flex overflow-hidden rounded shadow-sm">
                  <Image src={video.image} alt="" unoptimized />
                </div>
                <div className="absolute bottom-2 left-2 flex items-center rounded-lg bg-black/30 px-1.5 py-0.5 text-sm text-white [@supports(backdrop-filter:blur(0))]:bg-white/10 [@supports(backdrop-filter:blur(0))]:backdrop-blur">
                  <PlayIcon className="h-4 w-4 fill-current stroke-current" />
                  <time
                    dateTime={`${video.runtime.minutes}m ${video.runtime.seconds}s`}
                    className="ml-2"
                  >
                    {`${video.runtime.minutes}:${video.runtime.seconds
                      .toString()
                      .padStart(2, '0')}`}
                  </time>
                </div>
              </div>
              <h3 className="mt-8 text-base font-medium tracking-tight text-slate-900 before:mb-2 before:block before:font-sans before:text-sm before:text-slate-500 ">
                {video.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{video.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
