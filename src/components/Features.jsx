import {AcademicCapIcon, CalendarIcon, ChartBarIcon} from '@heroicons/react/20/solid'

const features = [
    {
        name: 'Les compétences',
        description:
            'servent à qualifier son audience, et t’imposer parmi les meilleur.es CM sur le marché.',
        icon: AcademicCapIcon,
    },
    {
        name: 'La vente',
        description: "c’est la compétence qui manque à la plupart des CM aujourd’hui. Et il est crucial de leur transmettre ce domaine d'expertise.\n",
        icon: ChartBarIcon,
    },
    {
        name: 'Créer une organisation efficiente. ',
        description: 'Prépare toi à gérer plusieurs dossiers, car ton activité va prendre un tournant ...',
        icon: CalendarIcon,
    },
]

export default function Features() {
    return (
        <div className="overflow-hidden bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
                    <div className="px-6 lg:px-0 lg:pr-4 lg:pt-4">
                        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">

                            <p className="mt-2 font-display text-4xl font-bold tracking-tight text-slate-900">Une académie évolutive, mais pourquoi ?</p>
                            <p className="mt-6 text-lg leading-8 text-slate-600">
                                Le point commun de toutes mes réussites et de mon ascension c’est tout simplement : mon réseau.

                                Les rencontres, et les partages sont la conjoncture excellente pour performer, et s’imposer comme expert.e.

                                </p>
                            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-slate-600 lg:max-w-none">
                                {features.map((feature) => (
                                    <div key={feature.name} className="relative pl-9">
                                        <dt className="inline font-semibold text-slate-900">
                                            <feature.icon className="absolute left-1 top-1 h-5 w-5 text-blue-600" aria-hidden="true" />
                                            {feature.name}
                                        </dt>{' '}
                                        <dd className="inline">{feature.description}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                    <div className="sm:px-6 lg:px-0">
                        <div className="relative isolate overflow-hidden bg-blue-600 px-6 pt-8 sm:mx-auto sm:max-w-2xl sm:rounded-3xl sm:pl-16 sm:pr-0 sm:pt-16 lg:mx-0 lg:max-w-none">
                            <div
                                className="absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-30deg] bg-blue-100 opacity-20 ring-1 ring-inset ring-white"
                                aria-hidden="true"
                            />
                            <div className="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
                                <img
                                    src="https://i.postimg.cc/Hs9kM27X/background.png"
                                    alt="Photo by @corbo_illu on Instagram"
                                    className=" md:rounded-tl-xl sm:rounded-xl bg-slate-800 ring-1 ring-white/10"
                                />



                            </div>
                            <div
                                className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 sm:rounded-3xl"
                                aria-hidden="true"
                            />

                        </div>
                        {/*Ajoute un texte sous la photo*/}
                        <div className="mt-6 text-center text-sm font-medium text-slate-600">
                            <p>Photo by @corbo_illu on Instagram</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
