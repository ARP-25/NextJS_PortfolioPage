import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./ui/MagicButton";

import { highlightWords } from "@/lib/highlightWords";
import { useTranslations } from "next-intl";

import { Boxes } from "./ui/background-boxes";

const Footer = () => {
    const t = useTranslations("footer");

    return (
        <footer className="relative w-full overflow-hidden bg-[#000319] pb-20 pt-20" id="contact">
            {/* Background Grid */}
            <div className="absolute left-0 top-0 flex h-screen w-full items-center justify-center bg-white bg-grid-black/[0.2] dark:bg-black-100 dark:bg-grid-white/[0.03]">
                {/* Radial gradient for the container to give a faded look */}
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100"></div>
            </div>
            {/* <div className="pointer-events-none absolute inset-0 z-20 h-full w-full bg-[#000319] [mask-image:radial-gradient(transparent,white)]" />
            <Boxes /> */}
            <div className="relative z-20 flex flex-col items-center">
                <h1 className="text-center text-4xl font-bold lg:max-w-[45vw]">
                    {highlightWords(t("title"), 3, 6)}
                </h1>
                <p className="my-5 text-center text-white-200 md:mt-10">{t("description")}</p>
                <a href="mailto:angelo.pucci@outlook.de">
                    <MagicButton title={t("button")} icon={<FaLocationArrow />} position="right" />
                </a>
            </div>
            <div className="relative z-20 mt-16 flex flex-col items-center justify-between md:flex-row">
                <p className="text-sm font-light md:text-base md:font-normal">
                    Copyright © 2024 Angelo R. Pucci
                </p>

                <div className="flex items-center gap-6 pt-5 md:gap-3 md:pt-0">
                    {socialMedia.map(info => (
                        <a
                            href={info.link}
                            rel="noreferrer noopener"
                            target="_blank"
                            key={info.id}
                            className="saturate-180 flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border border-black-300 bg-black-200 bg-opacity-75 backdrop-blur-lg backdrop-filter"
                        >
                            <img src={info.img} alt={info.alt} width={20} height={20} />
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
