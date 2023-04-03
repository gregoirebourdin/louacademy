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
          Un accompagnement basé sur 3 grands piliers de réussite. Les mêmes que j’ai appliqués pour atteindre mes premiers 5000€ de CA mensuel.
        </p>

        <p className="mt-4">
          Je t'arrête tout de suite, si tu penses qu’une simple connexion internet et un téléphone suffisent pour être un bon CM, alors tu n’as rien à faire ici … Cette Academie est évolutive et n’accepte que les personnes passionnés et déterminés .
        </p>
          <p className="mt-4">
          Cette méthode 3.0 comprend&nbsp;:
        </p>
{/*        <p className="mt-4">
          In “Everything Starts as a Square”, you’ll learn the systems experts
          use to create pixel perfect icons, without relying on a steady hand.
        </p>*/}
        <ul role="list" className="mt-8 space-y-3">
          {[
            "Accompagnement personnalisé sur 6 mois pour te permettre de trouver tes premiers clients.",
            "Environ 8 heures de formation vidéo pour comprendre le métier de Community Manager.",
            'Des screencasts pour te guider pas à pas afin de créer des contenus viraux.',
            "Un script de vente qui convertit crée pour les CM.",
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
        <p className="mt-8">
          Unique et incomparable, cette formation retrace mon parcours, mes réussites, mes échecs mais pas seulement.  Je te délivre tout ce qui m’a permis de devenir une CM accomplie; qui collabore aujourd’hui, avec des entrepreneurs générant 7 chiffres à l’année.
        </p>
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
