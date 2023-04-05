import 'focus-visible'
import '@/styles/tailwind.css'
import Cal from "@/components/Cal";
import {useEffect, useState} from "react";

export default function App({ Component, pageProps }) {
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 0) {
                setShowBanner(true);
                window.removeEventListener("scroll", handleScroll);
            }
        };
        const timeoutId = setTimeout(() => {
            window.addEventListener("scroll", handleScroll);
        }, 2000);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            clearTimeout(timeoutId);
        };
    }, []);



    return (
    <>
        <style jsx>{`
        @keyframes slide-up {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }
      `}</style>
        {showBanner && (
            <div
                style={{
                    animation: "slide-up 0.5s ease-out",
                }}>
                    <Cal />
                </div>)}
        <Component {...pageProps} />

    </>
  )
}
