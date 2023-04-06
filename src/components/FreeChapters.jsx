import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Pattern } from '@/components/Pattern'

export function FreeChapters() {
  return (
    <section
      id="free-chapters"
      aria-label="Free preview"
      className="scroll-mt-14 bg-blue-600 sm:scroll-mt-32"
    >
      <div className="overflow-hidden lg:relative">
        <Container
          size="md"
          className="relative grid grid-cols-1 items-end gap-y-12 py-20 lg:static lg:grid-cols-2 lg:py-28 xl:py-32"
        >
          <Pattern className="absolute -top-32 left-0 w-full sm:-top-5 sm:left-3/4 sm:ml-8 sm:w-auto md:left-2/3 lg:left-auto lg:right-2 lg:ml-0 xl:left-2/3 xl:right-auto" />
          <div>
            <h2 className="font-display text-5xl font-extrabold tracking-tight text-white sm:w-3/4 sm:text-6xl md:w-2/3 lg:w-auto">
              Si on se rencontrait ?
            </h2>
            <p className="mt-4 mb-8 text-lg tracking-tight text-blue-200">
              L'agenda d'une CM accomplie est souvent bien rempli. Mais pour toi il y aura toujours une place ! Réserve ton appel dès maintenant, et on parlera de tes projets.
            </p>
            <Button
                href="cal"
                type="submit"
                color="white"
                className="mt-12 w-full sm:relative sm:z-10 sm:mt-0 sm:w-auto sm:flex-none "
            >
              Je prends rendez-vous maintenant !
            </Button>
          </div>

        </Container>
      </div>
    </section>
  )
}
