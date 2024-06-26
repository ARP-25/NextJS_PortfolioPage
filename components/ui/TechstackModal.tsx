"use client";

import Modal from "./Modal";

import { useState } from "react";
import { useRouter } from "next/navigation";
import useTechstackModal from "@/hooks/useTechstackModal";
import { categories } from "@/data/index";

const TechstackModal = () => {
    const content = (
        <div className="mx-auto mt-2 max-w-4xl">
            {categories.map(category => (
                <div key={category.title} className="mb-8">
                    <h3 className="mb-4 text-lg font-bold text-gray-200">{category.title}</h3>
                    <ul className="ml-5 flex list-none flex-wrap">
                        {category.items.map(item => (
                            <li
                                key={item.name}
                                className="mb-4 mr-6 flex items-center text-sm text-gray-200"
                            >
                                <img
                                    src={item.icon}
                                    alt={item.name + " icon"}
                                    className="mr-2 h-6 w-6"
                                />
                                {item.name}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );

    const techstackModal = useTechstackModal();

    return (
        <Modal
            isOpen={techstackModal.isOpen}
            close={techstackModal.close}
            label="Tech Stack"
            content={content}
        />
    );
};

export default TechstackModal;
