import 'focus-visible'
import '@/styles/tailwind.css'
import Cal from "@/components/Cal";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Cal />
        <Component {...pageProps} />
    </>
  )
}
