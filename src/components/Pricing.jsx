import { CheckIcon } from '@/components/CheckIcon'
import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import {useState} from "react";
import {Button} from "@/components/Button";

const tiers = [
  {
    name: 'Freelancer',
    id: 'tier-freelancer',
    href: '#',
    price:  '$144' ,
    description: 'The essentials to provide your best work for clients.',
    features: ['5 products', 'Up to 1,000 subscribers', 'Basic analytics', '48-hour support response time'],
    mostPopular: false,
  },
  {
    name: 'Startup',
    id: 'tier-startup',
    href: '#',
    price:  '$288' ,
    description: 'A plan that scales with your rapidly growing business.',
    features: [
      '25 products',
      'Up to 10,000 subscribers',
      'Advanced analytics',
      '24-hour support response time',
      'Marketing automations',
    ],
    mostPopular: true,
  },
  {
    name: 'Enterprise',
    id: 'tier-enterprise',
    href: '#',
    price:  '$576' ,
    description: 'Dedicated support and infrastructure for your company.',
    features: [
      'Unlimited products',
      'Unlimited subscribers',
      'Advanced analytics',
      '1-hour, dedicated support response time',
      'Marketing automations',
      'Custom reporting tools',
    ],
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
          Choisissez votre forfait
        </p>
        <p className="mt-4 max-w-xl text-lg tracking-tight text-slate-600">"La Formation Lou Academy" est disponible en trois packages différents afin que vous puissiez choisir celui qui vous convient le mieux.</p>
      </Container>
      <div className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {tiers.map((tier) => (
                <div
                    key={tier.id}
                    className={classNames(
                        tier.mostPopular ? 'ring-2 ring-blue-600' : 'ring-1 ring-gray-200',
                        'rounded-3xl p-8 xl:p-10'
                    )}
                >
                  <div className="flex items-center font-sans  justify-between gap-x-4">
                    <h3
                        id={tier.id}
                        className={classNames(
                            tier.mostPopular ? 'text-blue-600' : 'text-gray-900',
                            'text-lg font-semibold leading-8'
                        )}
                    >
                      {tier.name}
                    </h3>
                    {tier.mostPopular ? (
                        <p className="rounded-full bg-blue-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-blue-600">
                          Most popular
                        </p>
                    ) : null}
                  </div>
                  <p className="mt-4 text-sm leading-6 text-gray-600">{tier.description}</p>
                  <p className="mt-6 flex items-baseline gap-x-1">
                    <span className="text-4xl font-bold tracking-tight text-gray-900">{tier.price}</span>

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
                  <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600 xl:mt-10">
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
