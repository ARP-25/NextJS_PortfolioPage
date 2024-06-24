"use client"
import React, { useState } from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "@/data";
import {useTranslations} from 'next-intl';
import { motion } from "framer-motion";

const Grid = () => {
    const t = useTranslations("Grid");
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);


    return (
        <section id="about" className="pt-[5vh]">

            <BentoGrid>
                {gridItems.map((item) => (
                    <React.Fragment key={item.id}>                    
                        {item.id !== 6 ? (
                            <BentoGridItem
                                id={item.id}
                                title={t(`items.${item.id}.title`)}
                                description={t(`items.${item.id}.description`)}
                                className={item.className}
                                img={item.img}
                                imgClassName={item.imgClassName}
                                titleClassName={item.titleClassName}
                                spareImg={item.spareImg}
                            />
                        ) : (
                            <BentoGridItem
                                id={item.id}
                                title={t(`items.${item.id}.title`)}
                                description={t(`items.${item.id}.description`)}
                                className={item.className}
                                img={item.img}
                                imgClassName={item.imgClassName}
                                titleClassName={item.titleClassName}
                                spareImg={item.spareImg}
                                buttonDescrip={[t(`items.${item.id}.copied`), t(`items.${item.id}.copy`)]}
                            />
                        )}
                    </React.Fragment>
                ))}
            </BentoGrid>
        </section>
    );
};

export default Grid;
