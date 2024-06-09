"use client";

import React from "react";

import { companies } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";

import {useTranslations} from 'next-intl';
import { highlightWords } from "@/lib/highlightWords";

const Clients = () => {
    const t = useTranslations("Testimonials"); 
    const array = ["1", "2"];
    const testimonials = array.map(key => ({
        quote: t(`items.${key}.quote`),
        name: t(`items.${key}.name`),
        image: t(`items.${key}.image`),
        // title: t(`items.${key}.title`)
    }));
    return (
        <section id="testimonials" className="py-20">
            <h1 className="text-center text-4xl font-bold pb-10">
                {highlightWords(t("title"), 2, 3)}
            </h1>

            <div className="flex flex-col items-center max-lg:mt-10">
                <div
                    // Adjust height for responsiveness
                    className="w-full h-[50vh] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden"
                >
                    <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
                </div>


                {/* Companies worked with */}
                {/* <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 mt-10 px-4">
                    {companies.map((company) => (
                        <React.Fragment key={company.id}>
                            <div className="flex md:max-w-60 max-w-32 gap-2">
                                <img src={company.img} alt={company.name} className="md:w-10 w-5" />
                                <img
                                    src={company.nameImg}
                                    alt={company.name}
                                    width={company.id === 4 || company.id === 5 ? 100 : 150}
                                    className="md:w-24 w-20"
                                />
                            </div>
                        </React.Fragment>
                    ))}
                </div> */}


            </div>
        </section>
    );
};

export default Clients;
