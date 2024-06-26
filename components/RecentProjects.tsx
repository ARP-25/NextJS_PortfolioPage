"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useTranslations } from "next-intl";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
    const t = useTranslations("Projects");

    // Abrufen der Projekte-Daten explizit
    const projectKeys = ["1", "2", "3", "4"];
    const projectsArray = projectKeys.map(key => ({
        id: key,
        title: t(`items.${key}.title`),
        description: t(`items.${key}.description`),
        img: t(`items.${key}.img`),
        iconLists: t.raw(`items.${key}.iconLists`),
        link: t(`items.${key}.link`),
        github1: t(`items.${key}.github1`),
        github2: t(`items.${key}.github2`),
        github3: t(`items.${key}.github3`),
        github1_link: t(`items.${key}.github1_link`),
        github2_link: t(`items.${key}.github2_link`),
        github3_link: t(`items.${key}.github3_link`),
    }));

    const highlightFirstThreeWords = (text: string) => {
        const words = text.split(" ");
        const firstThreeWords = words.slice(0, 3).join(" ");
        const remainingWords = words.slice(3).join(" ");

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
                <div className="flex flex-wrap items-center justify-center gap-x-24 gap-y-4 p-4">
                    {projectsArray.map(item => (
                        <ProjectItem key={item.id} item={item} t={t} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const ProjectItem = ({ item, t }: { item: any; t: any }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    const githubVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div className="flex flex-col items-center" ref={ref}>
            {/* Pincontainer Container */}
            <div className="flex h-[32rem] w-[80vw] items-center justify-center sm:h-[41rem] sm:w-[570px] lg:min-h-[32.5rem]">
                <a href={item.link} rel="noopener" target="_blank">
                    <PinContainer title={item.link} href={item.link}>
                        {/* Image */}
                        <div className="relative mb-5 flex h-[20vh] w-[260px] items-center justify-center overflow-hidden sm:mb-10 sm:h-[40vh] sm:w-[570px]">
                            <div
                                className="relative h-full w-full overflow-hidden rounded-2xl"
                                style={{ backgroundColor: "#13162D" }}
                            >
                                <img
                                    src="/bg.png"
                                    alt="bgimg"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <img
                                src={item.img}
                                alt={item.title}
                                className="absolute bottom-[11.5%] z-10 w-[80%] rotate-6 transform rounded-xl"
                            />
                        </div>

                        {/* Title */}
                        <h1 className="line-clamp-1 w-[260px] text-base font-bold sm:w-[570px] md:text-xl lg:text-2xl">
                            {item.title}
                        </h1>

                        {/* Description */}
                        <p
                            className="line-clamp-2 w-[260px] text-sm font-light sm:w-[570px] lg:text-xl lg:font-normal"
                            style={{
                                color: "#BEC1DD",
                                margin: "1vh 0",
                            }}
                        >
                            {item.description}
                        </p>

                        {/* Icon List */}
                        <div className="mb-3 mt-7 flex w-[260px] flex-col items-center justify-between sm:w-[570px] sm:flex-row">
                            <div className="flex items-center justify-center ps-[3.8rem] sm:ps-[0]">
                                {item.iconLists.map((icon: string, index: number) => (
                                    <div
                                        key={index}
                                        className="flex h-7 w-7 items-center justify-center rounded-full border border-white/[.2] bg-black lg:h-10 lg:w-10"
                                        style={{
                                            transform: `translateX(-${5 * index + 2}px)`,
                                        }}
                                    >
                                        <img src={icon} alt={`icon-${index}`} className="p-2" />
                                    </div>
                                ))}
                            </div>

                            <div className="mt-3 flex items-center justify-center sm:mt-0">
                                <p className="flex text-sm text-purple md:text-xs lg:text-xl">
                                    {t("button")}
                                </p>
                                <FaLocationArrow className="ms-3" color="#CBACF9" />
                            </div>
                        </div>
                    </PinContainer>
                </a>
            </div>

            {/* Github Links */}
            <motion.div
                className="flex"
                initial="hidden"
                animate={controls}
                variants={githubVariants}
                transition={{ duration: 3 }}
            >
                {item.github1 && item.github1 !== "null" && (
                    <motion.div
                        className="mt-0 lg:mt-8"
                        whileHover={{ skew: 10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <a href={item.github1_link} rel="noopener" target="_blank" className="flex">
                            <img src="/githublogo.svg" alt="GitHub Logo" />
                            <div className="z-50 ml-2 mr-2">{item.github1}</div>
                        </a>
                    </motion.div>
                )}
                {item.github2 && item.github2 !== "null" && (
                    <motion.div
                        className="mt-0 lg:mt-8"
                        whileHover={{ skew: 10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <a href={item.github2_link} rel="noopener" target="_blank" className="flex">
                            <img src="/githublogo.svg" alt="GitHub Logo" />
                            <div className="z-50 ml-2 mr-2">{item.github2}</div>
                        </a>
                    </motion.div>
                )}
                {item.github3 && item.github3 !== "null" && (
                    <motion.div
                        className="mt-0 lg:mt-8"
                        whileHover={{ skew: 10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <a href={item.github3_link} rel="noopener" target="_blank" className="flex">
                            <img src="/githublogo.svg" alt="GitHub Logo" />
                            <div className="z-50 ml-2 mr-2">{item.github3}</div>
                        </a>
                    </motion.div>
                )}
            </motion.div>
        </div>
    );
};

export default RecentProjects;
