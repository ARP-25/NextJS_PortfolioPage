import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";

import {useTranslations} from 'next-intl';
import { highlightWords } from "@/lib/highlightWords";

  

const Hero = () => {

    const t = useTranslations("Hero");
    
    return (
        <section id="hero" className="hero-section">
            <div className="pb-20 pt-32 text-white">
                {/* Spotlights */}
                <Spotlight
                    className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
                    fill="white"
                />
                <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="#7dd3fc" />
                <Spotlight className="top-28 left-[55vw] h-[80vh] w-[50vw]" fill="#c4b5fd" />
            </div>



            <div>
                {/* Background Grid */}
                <div className="absolute top-0 left-0 h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center">
                    {/* Radial gradient for the container to give a faded look */}
                    <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
                </div>
                
                {/* Content */}
                <div className="flex justify-center relative  z-10">
                    <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                        <h2 className="uppercase tracking-widest text-[10px] sm:text-xs text-center text-blue-100 max-w-80 mb-3">
                            {t("hero1")}
                        </h2>
                        <TextGenerateEffect
                            words={t("hero2")}
                            className="text-center text-lg sm:text-[40px] md:text-5xl xl:text-6xl mb-6"
                        />
                        <p className="text-center md:tracking-wider text-[12px] md:text-lg xl:text-2xl mb-10">
                            {t("hero3")}
                        </p>
                        <a href="#about">
                            <MagicButton
                                title={t("hero4")}
                                icon={<FaLocationArrow />}
                                position="right"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
