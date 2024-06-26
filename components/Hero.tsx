"use client";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import { useTranslations } from "next-intl";
import { highlightWords } from "@/lib/highlightWords";

const Hero = () => {
    const t = useTranslations("Hero");
    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = "/Angelo Pucci Resume.pdf";
        link.download = "/Angelo Pucci Resume.pdf";
        link.click();
    };
    return (
        <section id="hero" className="hero-section">
            <div className="pb-20 pt-32 text-white">
                {/* Spotlights */}
                <Spotlight
                    className="-left-10 -top-40 h-screen md:-left-32 md:-top-20"
                    fill="white"
                />
                <Spotlight className="left-full top-10 h-[80vh] w-[50vw]" fill="#7dd3fc" />
                <Spotlight className="left-[55vw] top-28 h-[80vh] w-[50vw]" fill="#c4b5fd" />
            </div>

            <div>
                {/* Background Grid */}
                <div className="absolute left-0 top-0 flex h-screen w-full items-center justify-center bg-white bg-grid-black/[0.2] dark:bg-black-100 dark:bg-grid-white/[0.03]">
                    {/* Radial gradient for the container to give a faded look */}
                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 flex justify-center">
                    <div className="flex max-w-[89vw] flex-col items-center justify-center md:max-w-2xl lg:max-w-[60vw]">
                        <h2 className="mb-3 max-w-80 text-center text-[10px] uppercase tracking-widest text-blue-100 sm:text-xs md:max-w-96">
                            {t("hero1")}
                        </h2>
                        <TextGenerateEffect
                            words={t("hero2")}
                            className="mb-6 text-center text-2xl sm:text-[40px] md:text-5xl xl:text-6xl"
                        />
                        {/* <p className="text-center md:tracking-wider text-[12px] md:text-lg xl:text-2xl mt-1 mb-10"> */}
                        <h2 className="mb-10 max-w-80 text-center text-[10px] uppercase tracking-widest text-blue-100 sm:text-xs md:max-w-96">
                            {t("hero3")}
                        </h2>

                        {/* </p> */}
                        <div className="flex flex-col gap-4 sm:flex-row">
                            <a href="#about">
                                <MagicButton
                                    title={t("hero4")}
                                    icon={<FaLocationArrow />}
                                    position="right"
                                />
                            </a>
                            <div onClick={handleDownload}>
                                <MagicButton
                                    title={t("hero5")}
                                    icon={<FaDownload />}
                                    position="right"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
