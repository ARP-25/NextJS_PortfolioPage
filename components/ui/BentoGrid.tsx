"use client";
import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";

// Also install this npm i --save-dev @types/react-lottie
import Lottie from "react-lottie";

import { cn } from "../../utils/cn";

import { BackgroundGradientAnimation } from "./GradientBg";
import GridGlobe from "./GridGlobe";
import animationData from "@/data/confetti.json";
import MagicButton from "../ui/MagicButton";

import useTechstackModal from "@/hooks/useTechstackModal";
import { useTranslations } from "next-intl";
export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                // change gap-4 to gap-8, change grid-cols-3 to grid-cols-5, remove md:auto-rows-[18rem], add responsive code
                "md:grid-row-7 mx-auto grid grid-cols-1 gap-4 md:grid-cols-6 lg:grid-cols-5 lg:gap-8",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    id,
    title,
    description,
    img,
    imgClassName,
    titleClassName,
    spareImg,
    buttonDescrip,
}: {
    className?: string;
    id: number;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    img?: string;
    imgClassName?: string;
    titleClassName?: string;
    spareImg?: string;
    buttonDescrip?: string[] | ["", ""];
}) => {
    const leftLists = ["ReactJS", "NextJS", "Typescript"];
    const rightLists = ["Django", "DjangoREST", "Stripe"];

    const [copied, setCopied] = useState(false);

    const TechstackModal = useTechstackModal();

    const t = useTranslations("Grid");

    const handleClick = () => {
        if (id === 3) {
            TechstackModal.open();
        }
    };

    // console.log("TechstackModal", TechstackModal.isOpen);

    const defaultOptions = {
        loop: copied,
        autoplay: copied,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    const handleCopy = () => {
        const text = "angelo.pucci@outlook.de";
        navigator.clipboard.writeText(text);
        setCopied(true);
    };

    return (
        <div
            className={`group/bento relative row-span-1 flex flex-col justify-between space-y-4 overflow-hidden rounded-3xl border border-white/[0.1] shadow-input transition duration-200 hover:shadow-xl dark:shadow-none ${
                id === 3 ? "cursor-pointer" : ""
            } ${className}`}
            style={{
                //   add these two
                //   you can generate the color from here https://cssgradient.io/
                background: "rgb(4,7,29)",
                backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                // boxShadow: id === 3 ? '0 0 8px 0 #CBACF9' : ''
            }}
            onClick={id === 3 ? handleClick : undefined}
        >
            {/* add img divs */}
            <div className={`${id === 6 && "flex justify-center"} h-full`}>
                <div className="absolute h-full w-full">
                    {img && (
                        <img
                            src={img}
                            alt={img}
                            className={cn(imgClassName, "object-cover object-center")}
                        />
                    )}
                </div>
                <div className={`absolute -bottom-5 right-0 ${id === 5 && "w-full opacity-80"} `}>
                    {spareImg && (
                        <img
                            src={spareImg}
                            alt={spareImg}
                            //   width={220}
                            className="h-full w-full object-cover object-center"
                        />
                    )}
                </div>
                {id === 6 && (
                    // add background animation , remove the p tag
                    <BackgroundGradientAnimation>
                        <div className="pointer-events-none absolute inset-0 z-50 flex items-center justify-center px-4 text-center text-3xl font-bold text-white md:text-4xl lg:text-7xl"></div>
                    </BackgroundGradientAnimation>
                )}

                <div
                    className={cn(
                        titleClassName,
                        "relative flex min-h-40 flex-col p-5 px-5 transition duration-200 group-hover/bento:translate-x-2 md:h-full lg:p-10"
                    )}
                >
                    {/* change the order of the title and des, font-extralight, remove text-xs text-neutral-600 dark:text-neutral-300 , change the text-color */}
                    <div className="z-50 hidden font-sans text-sm text-[#C1C2D3] md:block md:max-w-32 md:text-xs xl:text-base">
                        {description}
                    </div>
                    {/* add text-3xl max-w-96 , remove text-neutral-600 dark:text-neutral-300*/}
                    {/* remove mb-2 mt-2 */}
                    <div className={`z-50 max-w-96 font-sans text-lg font-bold xl:text-3xl`}>
                        {title}
                    </div>

                    {id === 3 && (
                        <div className="z-50 hidden font-sans text-sm text-[#C1C2D3] md:block md:max-w-32 md:text-xs xl:text-base">
                            {t("click")}
                        </div>
                    )}

                    {/* for the github 3d globe */}
                    {id === 2 && <GridGlobe />}

                    {/* Tech stack list div */}
                    {id === 3 && (
                        <div className="absolute -right-3 flex w-fit gap-1 lg:-right-2 xl:gap-4">
                            {/* tech stack lists */}
                            <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                                {leftLists.map((item, i) => (
                                    <span
                                        key={i}
                                        className="rounded-xl bg-[#10132E] px-3 py-2 text-center text-xs opacity-50 lg:px-3 lg:py-4 lg:text-sm"
                                    >
                                        {item}
                                    </span>
                                ))}
                                <span className="rounded-xl bg-[#10132E] px-3 py-4 text-center"></span>
                            </div>

                            <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                                <span className="rounded-xl bg-[#10132E] px-3 py-4 text-center"></span>
                                {rightLists.map((item, i) => (
                                    <span
                                        key={i}
                                        className="rounded-xl bg-[#10132E] px-3 py-2 text-center text-xs opacity-50 lg:px-3 lg:py-4 lg:text-sm"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                    {id === 6 && (
                        <div className="relative mt-5">
                            {/* button border magic from tailwind css buttons  */}
                            {/* add rounded-md h-8 md:h-8, remove rounded-full */}
                            {/* remove focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 */}
                            {/* add handleCopy() for the copy the text */}
                            <div
                                className={`absolute -bottom-5 right-0 ${
                                    copied ? "block" : "block"
                                }`}
                            >
                                <Lottie options={defaultOptions} height={200} width={400} />
                            </div>

                            <MagicButton
                                title={copied ? `${buttonDescrip?.[0]}` : `${buttonDescrip?.[1]}`}
                                icon={<IoCopyOutline />}
                                position="left"
                                handleClick={handleCopy}
                                otherClasses="!bg-[#161A31]"
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
