import Link from 'next/link'

import {CheckIcon} from '@/components/CheckIcon'

import { Container } from '@/components/Container'
import {CrossIcon} from "@/components/CrossIcon";

export function Introduction() {
  return (
    <section
      id="introduction"
      aria-label="Introduction"
      className="pb-16 pt-20 sm:pb-20 md:pt-36 lg:py-32"
    >
      <Container className="text-lg tracking-tight text-slate-700">
        <p className="font-display text-4xl font-bold tracking-tight text-slate-900">
          Un accompagnement basé sur 3 grands piliers de réussite. Les mêmes que j’ai appliqué pour atteindre mes premiers 5000€ de CA mensuel.
        </p>

        <p className="mt-4">Si tu penses qu’une simple connexion internet et un téléphone suffisent pour être un.e bon.ne Community Manager, alors il est inutile de lire la suite de cette page.</p>
        <p className="mt-4">Si il y a bien une chose que j’ai comprise avant d’être indépendante financièrement, c’est qu’il fallait que j’investisse en moi.</p>
          <p className="mt-4">
            Tout au long de mon expérience, j’ai fait le triste constat que la plupart des CM ne savent pas vendre leurs prestations, et encore moins se valoriser. Pourtant, sur un marché devenu si concurrentiel, il est indispensable de savoir s’imposer comme l’expert.e de ton domaine.
          </p>

        <p className="mt-4">
          Alors, pourquoi une formation 3.0 ?
        </p>
{/*        <p className="mt-4">
          In “Everything Starts as a Square”, you’ll learn the systems experts
          use to create pixel perfect icons, without relying on a steady hand.
        </p>*/}
        <ul role="list" className="mt-8 space-y-3">
          {[
            "Augmenter en compétences, pour se démarquer",
            "Apprendre à vendre, pour conquérir son auditoire",
            'Créer son organisation efficiente, pour exceller', ,
          ].map((feature) => (
            <li key={feature} className="flex">
              <CheckIcon className="h-8 w-8 flex-none fill-blue-500" />
              <span className="ml-4">{feature}</span>
            </li>
          ))}
        </ul>

        {/*<ul role="list" className="mt-8 space-y-3">
          {[
            "Accompagnement personnalisé sur 6 mois pour te permettre de trouver tes premiers clients.",
            "Environ 8 heures de formation vidéo pour comprendre le métier de Community Manager.",
            'Des screencasts pour te guider pas à pas afin de créer des contenus viraux.',
            "Un script de vente qui convertit crée pour les CM.",
          ].map((feature) => (
            <li key={feature} className="flex">
              <CrossIcon className="h-6 w-6 flex-none fill-red-500" />
              <span className="ml-4">{feature}</span>
            </li>
          ))}
        </ul>*/}
        <p className="mt-8">Il était important pour moi, de comprendre et rassembler tous les éléments qui ont constitué ma réussite. Unique et incomparable, cette formation est un condensé de compétences et de <br /> savoir-faire pour devenir un.e Community Manager excellent.e.</p>
        <p className="mt-10">
          <Link
            href="#free-chapters"
            className="text-base font-medium text-blue-600 hover:text-blue-800"
          >
            Réserve un appel découverte gratuitement
            {" "}
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </p>
      </Container>
    </section>
  )
}
