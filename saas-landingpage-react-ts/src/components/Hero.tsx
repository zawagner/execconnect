import heroImage from '@/assets/landing/saas-hero.png'
import googleImage from '@/assets/logo/google.svg'
import microsoftImage from '@/assets/logo/microsoft.svg'
import netflixImage from '@/assets/logo/netflix.svg'
import spotifyImage from '@/assets/logo/spotify.svg'
import paypalImage from '@/assets/logo/paypal.svg'
import {Button} from 'react-daisyui'
import Card3d from 'card3d';
import {useEffect, useRef} from "react";


export const Hero = () => {

    const heroImageRef = useRef<HTMLDivElement|null>(null);

    useEffect(() => {
        if(heroImageRef.current) {
            new Card3d(heroImageRef.current, {perspective:1000, fullPageListening: true})
        }
    }, [heroImageRef.current]);

    return (<section className="py-8 lg:py-20" id="home">
            <div className="container">
                <div className="grid gap-12 lg:grid-cols-2">
                    <div>
                        <h1 className="text-4xl font-black tracking-tighter lg:text-6xl lg:leading-none">
                            Revolutionize your business with our
                            <span className="text-primary"> dynamic SaaS </span>
                            solutions.
                        </h1>
                        <p className=" mt-8 text-lg">
                            Elevate your business to new heights with our cutting-edge SaaS solutions. Seamlessly
                            integrate powerful
                            features, flexible pricing, and
                            dedicated support.
                        </p>
                        <div className="mt-16 inline-flex gap-3">
                            <Button color="primary">Get Started</Button>
                            <Button color="ghost">Learn More</Button>
                        </div>
                    </div>

                    <div>
                        <div className="rounded-2xl bg-gradient-to-r from-indigo-200 via-red-200 to-purple-300 p-3"
                             ref={heroImageRef}>
                            <img alt="SaaS" id='hero-image' className="rounded-lg" src={heroImage}/>
                        </div>
                    </div>
                </div>

                <h2 className="mt-12 text-center text-2xl font-semibold text-base-content/60 lg:mt-32">Our Partners</h2>

                <div className="mt-12 grid grid-cols-2 justify-center gap-8 sm:grid-cols-3 md:grid-cols-5">
                    <img className="mx-auto h-8 cursor-pointer grayscale transition-all duration-500 hover:grayscale-0"
                         src={googleImage} alt="google logo"/>
                    <img
                        className="mx-auto h-6 cursor-pointer grayscale transition-all duration-500 hover:grayscale-0"
                        src={microsoftImage}
                        alt="microsoft logo"
                    />
                    <img
                        className="mx-auto hidden h-6 cursor-pointer grayscale transition-all duration-500 hover:grayscale-0 md:inline"
                        src={netflixImage}
                        alt="netflix logo"
                    />
                    <img
                        className="mx-auto hidden h-8 cursor-pointer grayscale transition-all duration-500 hover:grayscale-0 md:inline"
                        src={spotifyImage}
                        alt="spotify logo"
                    />
                    <img
                        className="mx-auto hidden h-8 cursor-pointer grayscale transition-all duration-500 hover:grayscale-0 sm:inline"
                        src={paypalImage}
                        alt="paypal logo"
                    />
                </div>
            </div>
        </section>)
}
