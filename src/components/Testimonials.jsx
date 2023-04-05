import Image from 'next/image'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { Expandable } from '@/components/Expandable'
import avatarImage3 from '@/images/avatars/avatar-3.png'
import avatarImage4 from '@/images/avatars/avatar-4.png'
import avatarImage5 from '@/images/avatars/avatar-5.png'
import avatarImage6 from '@/images/avatars/avatar-6.png'
import avatarImage7 from '@/images/avatars/avatar-7.png'
import avatarImage8 from '@/images/avatars/avatar-8.png'
import avatarImage9 from '@/images/avatars/avatar-9.png'
import avatarImage10 from '@/images/avatars/avatar-10.png'
import avatarImage11 from '@/images/avatars/avatar-11.png'

const testimonials = [
  [
    {
      content:
        'Nous sommes des investisseurs, et nous avions besoin de quelqu’un de confiance pour déléguer toute la partie communication (Instagram et Youtube). Le défi a été relevé avec brio. Elle fait partie de nos projets, et nous souhaitons avoir son avis sur les futures stratégies à adopter. Ce n’est pas une simple CM, c’est la CM qu’il faut à votre activité entrepreneuriale',
      author: {
        name: 'Antonio Littel',
        role: 'Frontend Developer',
        image: avatarImage3,
      },
    },
    {
      content:
        'Les changements de l\'environnement en ligne sont nombreux, il nous fallait quelqu’un de réactive. C’est une des qualités que nous avons trouvé chez Leslie. Une force pétillante et ingénieuse, à toute épreuve !',
      author: {
        name: 'Lynn Nolan',
        role: 'Growth Marketer',
        image: avatarImage4,
      },
    },
    {
      content:
        'Leslie est une professionnelle de la gestion de communauté très réactive qui sait comment répondre rapidement aux besoins de notre communauté. Elle est également très créative, et pour un salon de coiffure comme le nôtre c’était exactement la bonne personne.',
      author: {
        name: 'Krista Prosacco',
        role: 'Professional Designer',
        image: avatarImage9,
      },
    },
  ],
  [
    {
      content:
        'J’avais besoin de contenu UGC, pour développer le compte Tiktok d’une plateforme de réservations. J’ai naturellement fait appel à Leslie. Je l’avais rencontré quelques mois plus tôt, durant un dîner d’entrepreneur. Elle avait su me convaincre rapidement lors d’un rapide échange. Son professionnalisme et son efficacité dans la création de contenu ont fait de suite la différence. ',
      author: {
        name: 'Cameron Considine',
        role: 'Entrepreneur',
        image: avatarImage7,
      },
    },
    {
      content:
        'Sa connaissance approfondie des médias sociaux et sa capacité à créer des campagnes de marketing efficaces pour engager notre communauté a été un vrai plus dans le développement de notre pôle communication',
      author: {
        name: 'Regina Wisoky',
        role: 'Design Student',
        image: avatarImage11,
      },
    },
    {
      content:
        'Leslie est une rockstar du marketing des médias sociaux ! Elle possède une grande expérience en gestion de communauté et sait comment créer une communauté dynamique et passionnée autour de notre entreprise !',
      author: {
        name: 'Vernon Cummerata',
        role: 'UI Engineer',
        image: avatarImage8,
      },
    },
  ],
  [
    {
      content:
        'Je voulais vous parler de Leslie. J’ai fait appel à ces services pour une mission très précise sur la partie communication sur les réseaux sociaux : sur Instagram. Toute l’équipe a apprécié les compétences de Leslie, d’une façon pragmatique et concrète. Deuxièmement, son niveau de créativité, de réactivité et de bonne humeur.',
      author: {
        name: 'Steven Hackett',
        role: 'Bootcamp Instructor',
        image: avatarImage5,
      },
    },
    {
      content:
        'Je confirme à 100% le gain de temps et de tranquillité que j’ai eu grâce à ton travail. C’est devenu indispensable pour moi ! Et mes clientes voient totalement la différence, sans regret d’avoir sauté le pas d’engager une CM !',
      author: {
        name: 'Carla Schoen',
        role: 'Startup Founder',
        image: avatarImage10,
      },
    },
    {
      content:
        'Cela fait 1 an que nous collaborons ensemble et je dois dire que le professionnalisme, le soutien, ou  la créativité de Leslie m’ont permis de franchir un réel cap dans ma carrière professionnelle ! Un grand merci et ce n’est que le début d’une longue collaboration.',
      author: {
        name: 'Leah Kiehn',
        role: 'Creative Director',
        image: avatarImage6,
      },
    },
  ],
]

function Testimonial({ author, children }) {
  return (
    <figure className="rounded-4xl p-8 shadow-md ring-1 ring-slate-900/5">
      <blockquote>
        <p className="text-lg tracking-tight text-slate-900 before:content-['“'] after:content-['”']">
          {children}
        </p>
      </blockquote>
      <figcaption className="mt-6 flex items-center">
        <div className="overflow-hidden rounded-full bg-slate-50">
          <Image
            className="h-12 w-12 object-cover"
            src={author.image}
            alt=""
            width={48}
            height={48}
          />
        </div>
        <div className="ml-4">
          <div className="text-base font-medium leading-6 tracking-tight text-slate-900">
            {author.name}
          </div>
          <div className="mt-1 text-sm text-slate-600">{author.role}</div>
        </div>
      </figcaption>
    </figure>
  )
}

export function Testimonials() {
  return (
    <section className="py-8 sm:py-10 lg:py-16">
      <Container className="text-center">
        <h2 className="font-display text-4xl font-bold tracking-tight text-slate-900">
          Quelques mots gentils des premiers clients ...
        </h2>
        <p className="mt-4 text-lg tracking-tight text-slate-600">Ces entrepreneurs m’ont confié le développement et la mise en place de stratégies de communication visant à développer leur image de marque, leur visibilité et leur communauté.
          Tu peux maintenant entendre ce qu’ils ont à dire sur mes compétences de CM.
        </p>
      </Container>
      <Expandable>
        {({ isExpanded }) => (
          <>
            <ul
              role="list"
              className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 px-4 lg:max-w-7xl lg:grid-cols-3 lg:px-8"
            >
              {testimonials
                .map((column) => column[0])
                .map((testimonial, testimonialIndex) => (
                  <li key={testimonialIndex} className="lg:hidden">
                    <Testimonial author={testimonial.author}>
                      {testimonial.content}
                    </Testimonial>
                  </li>
                ))}
              {testimonials.map((column, columnIndex) => (
                <li
                  key={columnIndex}
                  className={isExpanded ? undefined : 'hidden lg:list-item'}
                >
                  <ul role="list">
                    {column
                      .slice(0, isExpanded ? undefined : 2)
                      .map((testimonial, testimonialIndex) => (
                        <li
                          key={testimonialIndex}
                          className={clsx(
                            testimonialIndex === 0 && 'hidden lg:list-item',
                            testimonialIndex === 1 && 'lg:mt-8',
                            testimonialIndex > 1 && 'mt-8'
                          )}
                        >
                          <Testimonial author={testimonial.author}>
                            {testimonial.content}
                          </Testimonial>
                        </li>
                      ))}
                  </ul>
                </li>
              ))}
            </ul>
            <Expandable.Button>Lire plus</Expandable.Button>
          </>
        )}
      </Expandable>
    </section>
  )
}
