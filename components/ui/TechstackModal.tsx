"use client";

import Modal from "./Modal";

import { useState } from "react";
import { useRouter } from "next/navigation";
import useTechstackModal from "@/hooks/useTechstackModal";
;

const TechstackModal = () => {
    const content = (
        <>
            <div className="text-[#0003af]">TestContent</div>
        </>
    );
    const techstackModal = useTechstackModal();

    return <Modal isOpen={techstackModal.isOpen} close={techstackModal.close} label="Tech Stack" content={content} />;
};

export default TechstackModal;
