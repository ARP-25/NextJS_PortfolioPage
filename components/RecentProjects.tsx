"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import { use } from "react";

import {useTranslations} from 'next-intl';

const RecentProjects = () => {

    const t = useTranslations("Projects");
    // Abrufen der Projekte-Daten explizit
    const projectKeys = ["1", "2", "3"];
    const projectsArray = projectKeys.map(key => ({
        id: key,
        title: t(`items.${key}.title`),
        description: t(`items.${key}.description`),
        img: t(`items.${key}.img`),
        iconLists: t.raw(`items.${key}.iconLists`),
        link: t(`items.${key}.link`)
    }));

    const highlightFirstThreeWords = (text:string) => {
        const words = text.split(' ');
        const firstThreeWords = words.slice(0, 3).join(' ');
        const remainingWords = words.slice(3).join(' ');

        return (
            <>
            <span>{firstThreeWords}</span>
            <span className="text-purple"> {remainingWords}</span>
            </>
        );
    };

    return (
        <section id="projects">
            <div className="mt-32">
                <h1 className="text-center text-4xl font-bold">
                    {highlightFirstThreeWords(t("title"))}
                </h1>
                <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-4 ">
                    {projectsArray.map((item) => (
                        <div
                            className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
                            key={item.id}
                        >
                            <a href={item.link} rel="noopener" target="_blank">
                            <PinContainer title={item.link} href={item.link}>
                                {/* Image */}
                                <div className="relative flex items-center justify-center w-[260px] sm:w-[570px] overflow-hidden h-[20vh] sm:h-[40vh] mb-5 sm:mb-10">
                                    <div
                                        className="relative w-full h-full overflow-hidden rounded-2xl"
                                        style={{ backgroundColor: "#13162D" }}
                                    >
                                        <img src="/bg.png" alt="bgimg" className="w-full h-full object-cover" />
                                    </div>
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="z-10 absolute bottom-0 w-[80%] transform rotate-6 rounded-xl"
                                    />
                                </div>

                                {/* Title */}
                                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 w-[260px] sm:w-[570px]">
                                    {item.title}
                                </h1>

                                {/* Description */}
                                <p
                                    className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2 w-[260px] sm:w-[570px]"
                                    style={{
                                        color: "#BEC1DD",
                                        margin: "1vh 0",
                                    }}
                                >
                                    {item.description}
                                </p>

                                {/* Icon List */}
                                <div className="flex flex-col sm:flex-row items-center justify-between mt-7 mb-3 w-[260px] sm:w-[570px]">
                                    <div className="ps-[2.8rem] flex items-center justify-center">
                                        {item.iconLists.map((icon: string, index: number) => (
                                            <div
                                                key={index}
                                                className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-7 h-7 flex justify-center items-center"
                                                style={{
                                                    transform: `translateX(-${5 * index + 2}px)`,
                                                }}
                                            >
                                                <img src={icon} alt="icon5" className="p-2" />
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex mt-3 sm:mt-0 justify-center items-center">
                                        <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                                            {t("button")}
                                        </p>
                                        <FaLocationArrow className="ms-3" color="#CBACF9" />
                                    </div>
                                </div>
                            </PinContainer>

                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RecentProjects;
