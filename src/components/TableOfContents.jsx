import { Container } from '@/components/Container'
import { Expandable } from '@/components/Expandable'
import { SectionHeading } from '@/components/SectionHeading'

const tableOfContents = {
  'Introduction': {
    'Bienvenue': "02:37",
    'Mon parcours, mon évolution': "04:06",
    'L’élément déclencheur': "02:08",
    'Les bases du métier': "04:47",
    'Certitude d’engagement': "01:16",
  },
  "Module 1 : Augmenter ses compétences de CM": {
    'Les compétences informatiques': "09:11",
    'La prise en main': "06:59",
    'La prise en main (suite)': "11:08",
    'Le questionnaire idéal': "04:59",
    'Créer tes premiers reels viraux (Introduction)': "05:45",
    'Créer tes premiers reels viraux (Partie 1)': "08:14",
    'Créer tes premiers reels viraux (Partie 2)': "10:59",
    'Photographies et retouches Introduction': "02:49",
    'Photographies et retouches (suite)': "06:11",
    'Un audit bien réalisé': "16:11",
    'Instagram et ses chiffres': "10:09",
    'Le Copywriting': "08:55",
  },
  'Module 2 : Apprends à vendre tes prestations': {
    'Mes secrets pour réussir ma prospection froide sur Instagram, Facebook et Linkedin': "02:44",
    'Mes secrets pour réussir ma prospection froide sur Instagram, Facebook et Linkedin (Partie 1)': "20:05",
    'Mes secrets pour réussir ma prospection froide sur Instagram, Facebook et Linkedin (Partie 2)': "20:19",
    'Des rendez-vous physiques qui convertissent': "14:39",
    'Comprendre les vrais besoins et les objectifs du client': "08:35",
    'Etablir un contrat de collaboration juste': "09:44",
    'Le script de vente pour les CM': "26:27",

  },
  "Module 3 : Automatise ta production grâce à l'IA": {
    'Créer un agenda productif pour devenir excellente (Partie 1)': "04:59",
    'Créer un agenda productif pour devenir excellente (Partie 2)': "04:59",
    'Améliorer son état d’esprit et construire de nouvelles habitudes': "06:58",
    'La méthode des Sherpas': "09:41",

  },

  'BONUS : Atteins tes premiers 5000€/mensuel': {
    "🎁 Une surprise c'est une surprise": "Gratuit",
  },
}

export function TableOfContents() {
  return (
    <section
      id="table-of-contents"
      aria-labelledby="table-of-contents-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading number="1" id="table-of-contents-title">
          Sommaire
        </SectionHeading>
        <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
          Jette un œil à tout le contenu de la formation. Tout ce que tu dois savoir est à l’intérieur.
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          La Lou Academy 3.0 est composé de contenu premium, des process et des outils exclusivement créés pour les CM, l’intervention d’un photographe international, des screencasts, l'accès à une communauté privée et un accompagnement personnalisé.
        </p>
        <Expandable>
          {({ isExpanded }) => (
            <>
              <ol role="list" className="mt-16 space-y-10 sm:space-y-16">
                {Object.entries(tableOfContents)
                  .slice(0, isExpanded ? undefined : 2)
                  .map(([title, pages]) => (
                    <li key={title}>
                      <h3 className="font-display text-3xl font-bold tracking-tight text-slate-900">
                        {title}
                      </h3>
                      <ol
                        role="list"
                        className="mt-8 divide-y divide-slate-300/30 rounded-2xl bg-slate-50 px-6 py-3 text-base tracking-tight sm:px-8 sm:py-7"
                      >
                        {Object.entries(pages).map(([title, pageNumber]) => (
                          <li
                            key={title}
                            className="flex justify-between py-3"
                            aria-label={`${title} on page ${pageNumber}`}
                          >
                            <span
                              className="font-medium text-slate-900"
                              aria-hidden="true"
                            >
                              {title}
                            </span>
                            <span
                              className="font-sans text-slate-400"
                              aria-hidden="true"
                            >
                              {pageNumber}
                            </span>
                          </li>
                        ))}
                      </ol>
                    </li>
                  ))}
              </ol>
              <Expandable.Button>Voir plus</Expandable.Button>
            </>
          )}
        </Expandable>
      </Container>
    </section>
  )
}
