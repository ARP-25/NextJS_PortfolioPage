"use client";
import React, { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/utils/cn";
import Link from "next/link";

export const FloatingNav = ({
    navItems,
    className,
}: {
    navItems: {
        name: string;
        link: string;
        icon?: JSX.Element;
    }[];
    className?: string;
}) => {
    const { scrollYProgress } = useScroll();
    const [visible, setVisible] = useState(false);

    useMotionValueEvent(scrollYProgress, "change", (current) => {
        if (typeof current === "number") {
            let direction = current - scrollYProgress.getPrevious()!;
            if (scrollYProgress.get() < 0.05) {
                setVisible(false);
            } else {
                setVisible(direction < 0);
            }
        }
    });

    return (
        <AnimatePresence mode="wait">
            <motion.div
                initial={{
                    opacity: 1,
                    y: -100,
                }}
                animate={{
                    y: visible ? 0 : -100,
                    opacity: visible ? 1 : 0,
                }}
                transition={{
                    duration: 0.2,
                }}
                className={cn(
                    "flex max-w-fit fixed top-10 inset-x-0 mx-auto border rounded-full shadow z-[5000] px-5 sm:px-10 py-2 sm:py-5 border-white/[0.2] bg-black-100 items-center justify-center space-x-2 sm:space-x-4",
                    className
                )}
            >
                {navItems.map((navItem, idx) => (
                    <Link
                        key={`link-${idx}`}
                        href={navItem.link}
                        className={cn(
                            "relative items-center flex space-x-1 text-neutral-600 dark:text-neutral-50 dark:hover:text-neutral-300 hover:text-neutral-500"
                        )}
                    >
                        <span className="block">{navItem.icon}</span>
                        <span className="sm:block text-sm">{navItem.name}</span>
                    </Link>
                ))}
            </motion.div>
        </AnimatePresence>
    );
};
