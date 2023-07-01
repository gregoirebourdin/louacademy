import Image from 'next/image'
import Link from 'next/link'
import { GridPattern } from '@/components/GridPattern'
import { SectionHeading } from '@/components/SectionHeading'
import authorImage from '@/images/avatars/Autrice.png'

export default function Author() {
  return (
      <div>
        <section
            id="author"
            aria-labelledby="author-title"
            className="relative scroll-mt-14 pb-3 pt-8 sm:scroll-mt-32 sm:pb-16 sm:pt-10 lg:pt-16"
        >
          <div className="absolute inset-x-0 bottom-0 top-1/2 text-slate-900/10 [mask-image:linear-gradient(transparent,white)]">
            <GridPattern x="50%" y="100%" />
          </div>
          <div className="relative mx-auto max-w-5xl pt-16 sm:px-6">
            <div className="bg-slate-50 pt-px sm:rounded-6xl">
              <div className="relative mx-auto -mt-16 h-44 w-44 overflow-hidden rounded-full bg-slate-200 md:float-right md:h-64 md:w-64 md:[shape-outside:circle(40%)] lg:mr-20 lg:h-72 lg:w-72">
                <Image
                    className="absolute inset-0 h-full w-full object-cover"
                    src={authorImage}
                    alt=""
                    sizes="(min-width: 1024px) 18rem, (min-width: 768px) 16rem, 11rem"
                />
              </div>
              <div className="px-4 py-10 sm:px-10 sm:py-16 md:py-20 lg:px-20 lg:py-32">
                <SectionHeading number="5" id="author-title">
                  Autrice
                </SectionHeading>
                <p className="mt-8 font-display text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
                  <span className="block text-blue-600">Leslie Bussat –</span> Fondatrice de la <br /> Lou Academy.
                </p>
                <p className="mt-4 text-lg tracking-tight text-slate-700">
                  On pourrait penser que c’est de la chance, du hasard, une réussite toute tracée. <br />
                  Mais tu ne vois pas la partie de l’iceberg caché …

                  <p className="mt-4">Les réseaux sociaux nous laissent la liberté de montrer ce que l’on veut et non pas ce qui est vrai. Je m’efforce à travers mes contenus et mes accompagnements d’être la plus authentique et la plus transparente possible. C’est mon moteur.</p>
                  <p className="mt-4">Là où on pourrait te vendre la liberté, les voyages, et les cocktails. Je préfère te garantir la sécurité. Faire partie de l'académie te permettra de devenir rapidement indépendante.</p>
                  <p className="mt-4">Au lancement de mon activité de CM, je cumule un job de serveuse en boîte de nuit. La semaine je développe mon business, et le week-end je repars pour mon second travail. Le peu de trésorerie que j’ai me permettra d’investir dans mon tout premier accompagnement. Mon objectif est de travailler avec les entrepreneurs génèrant déja 7 chiffres à l'année. Pour cela, il faut que j'apprenne à vendre et à me vendre.</p>
                  <p className="mt-4">J’apprends, je teste et je rencontre l’échec, je suis la plus nulle en vente dans mon accompagnement, mais je continue. La machine est lancée. Je passe de 1200€ de à 5000€ de bénéfice net mensuel. En quelques mois je réalise mon grand projet de créer la première Académie Devenir Community Maanger, avec un parcours apprenant.</p>
                  <p className="mt-4">Aujourd’hui, je suis devenue une cheffe d’entreprise accomplie. J'enseigne mon savoir et mon savoir-faire à celles qui souhaitent découvrir le Community Management, et vivre aisément de cette activité. J'ai compris très vite que pour sortir du lot, il fallait monter en compétences, et ne plus vendre mon temps contre de l'argent.
                  </p>
                  <p className="mt-4"> La Lou Academy 3.0. est née, afin de permettre aux plus ambitieuses d'être indépendante grâce au Community Management.</p>
                </p>
                <p className="mt-8">

                  <Link
                      href="https://www.instagram.com/lou.academy/"
                      target="_blank"
                      className="inline-flex items-center text-base font-medium tracking-tight text-blue-600"
                  >

                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className={"h-10 w-10 fill-current"}><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>


                    <span className="ml-4">Suivez moi sur Instagram</span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

  )
}
