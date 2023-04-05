import { CheckIcon } from '@/components/CheckIcon'
import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import {useState} from "react";
import {Button} from "@/components/Button";

const tiers = [
  {
    name: 'Basic',
    id: 'tier-freelancer',
    href: 'cal',
    price:  '497 €' ,
    description: 'L\'essentiel pour commencer son activité de Community Manager.',
    features: ['Accès illimité à la formation', 'Accès aux ressources'],
    mostPopular: false,
  },
  {
    name: 'Premium',
    id: 'tier-startup',
    href: 'cal',
    price:  '1 497 €' ,
    description: 'Pour celles et ceux qui veulent se lancer en tant que Community Manager indépendant.',
    features: ['Accès illimité à la formation',  'Accès aux ressources', 'Coaching collectif de 6 mois', "Accès à la communauté"],
    mostPopular: true,
  },
  {
    name: 'Privilege',
    id: 'tier-enterprise',
    href: 'cal',
    price:  '2 997 €' ,
    description: 'Pour les entreprises qui souhaitent former leurs équipes à la gestion de communautés.',
    features: ['Deux accès illimités à la formation', 'Accès aux ressources', 'Coaching collectif de 6 mois', "Accès à la communauté", "Coaching individuel (3 sessions)"],
    mostPopular: false,
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export function Pricing() {

  return (
    <section
      id="pricing"
      aria-labelledby="pricing-title"
      className="scroll-mt-14 pb-8 pt-16 sm:scroll-mt-32 sm:pb-10 sm:pt-20 lg:pb-16 lg:pt-32"
    >
      <Container>
        <SectionHeading number="4" id="pricing-title">
          Offres
        </SectionHeading>
        <p className="mt-8 font-display text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
          Pas besoin de se ruiner pour exceller
        </p>
        <p className="mt-4 max-w-xl text-lg tracking-tight text-slate-600">La formation Lou Academy est disponible en trois packages différents afin que tu puisses choisir celui qui te convient le mieux.</p>
      </Container>
      <div className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {tiers.map((tier) => (
                <div
                    key={tier.id}
                    className={classNames(
                        tier.mostPopular ? 'ring-2 ring-blue-600' : 'ring-1 ring-slate-200',
                        'rounded-3xl p-8 xl:p-10'
                    )}
                >
                  <div className="flex items-center font-sans  justify-between gap-x-4">
                    <h3
                        id={tier.id}
                        className={classNames(
                            tier.mostPopular ? 'text-blue-600' : 'text-slate-900',
                            ' font-display text-4xl font-bold tracking-tight '
                        )}
                    >
                      {tier.name}
                    </h3>
                    {tier.mostPopular ? (
                        <p className="rounded-full bg-blue-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-blue-600">
                          Plus populaire
                        </p>
                    ) : null}
                  </div>
                  <p className="mt-4 text-sm text-slate-600">{tier.description}</p>
                  <p className="mt-6 flex items-baseline gap-x-1">
                    <span className="text-4xl font-bold tracking-tight text-slate-900">{tier.price}</span>

                  </p>

                  {/* Create a centered div */}
                  <div className="flex justify-center mt-8">


                  {tier.mostPopular ? (
                      <Button href={tier.href} color="blue" className={"w-full"}>
                        Rejoindre l'académie
                      </Button>) : (
                      <Button href={tier.href} variant={"outline"} className={"w-full"} color="blue" >
                        Rejoindre l'académie
                      </Button>

                  )
                  }
                    </div>
{/*
                  <a
                      href={tier.href}
                      aria-describedby={tier.id}
                      className={classNames(
                          tier.mostPopular
                              ? 'bg-blue-600 text-white shadow-sm hover:bg-blue-500'
                              : 'text-blue-600 ring-1 ring-inset ring-blue-200 hover:ring-blue-300',
                          'mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
                      )}
                  >
                    Buy plan
                  </a>
*/}
                  <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-slate-600 xl:mt-10">
                    {tier.features.map((feature) => (
                        <li key={feature} className="flex gap-x-3">
                          <CheckIcon className="h-6 w-5 flex-none text-blue-600" aria-hidden="true" />
                          {feature}
                        </li>
                    ))}
                  </ul>
                </div>
            ))}
          </div>
        </div>
      </div>
      {/*<div className="mx-auto mt-16 max-w-5xl lg:px-6">
        <div className="grid bg-slate-50 sm:px-6 sm:pb-16 md:grid-cols-2 md:rounded-6xl md:px-8 md:pt-16 lg:p-20">
          <Plan
            name="Essential"
            description="The perfect starting point if you’re on a budget."
            price={15}
            href="#"
            features={[
              'The 240-page ebook',
              'Figma icon templates',
              'Community access',
            ]}
          />
          <Plan
            featured
            name="Complete"
            description="Everything icon resource you could ever ask for."
            price={229}
            href="#"
            features={[
              'The 240-page ebook',
              'Figma icon templates',
              'Over an hour of screencasts',
              'Weekly icon teardowns',
              'Community access',
            ]}
          />
        </div>
      </div>*/}
    </section>
  )
}
