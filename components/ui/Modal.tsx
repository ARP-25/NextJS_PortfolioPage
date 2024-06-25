"use client";
import { useCallback, useEffect, useState } from "react";
import { BackgroundBeams } from "../ui/background-beams";
interface ModalProps {
    label: string;
    content: React.ReactElement;
    isOpen: boolean;
    close: () => void;
}

const Modal: React.FC<ModalProps> = ({ label, content, isOpen, close }) => {
    const [showModal, setShowModal] = useState(isOpen);

    useEffect(() => {
        setShowModal(isOpen);
    }, [isOpen]);

    const handleClose = useCallback(() => {
        setShowModal(false);
        setTimeout(() => {
            close();
        }, 700);
    }, [close]);

    if (!isOpen) {
        return null;
    }

    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center bg-black/60 transition-opacity duration-700 ${
                showModal ? "opacity-100" : "opacity-0"
            }`}
        >
            <div className="relative mx-4 my-6 h-auto w-full max-w-3xl">
                <div className="relative flex h-auto w-full flex-col rounded-xl bg-[#020617]">
                    <header className="relative z-10 flex h-[60px] items-center justify-center rounded-t p-8">
                        <div
                            onClick={handleClose}
                            className="absolute left-3 cursor-pointer rounded-full p-3 text-gray-200 transition hover:bg-gray-300 hover:text-black"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill=""
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="h-6 w-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18 18 6M6 6l12 12"
                                />
                            </svg>
                        </div>
                        <h2 className="text-lg font-bold text-gray-200">{label}</h2>
                    </header>
                    <section className="z-10 max-h-[60vh] overflow-auto px-7">{content}</section>
                    <div className="mx-auto max-w-2xl p-4"></div>
                    <BackgroundBeams />
                </div>
            </div>
        </div>
    );
};
export default Modal;
