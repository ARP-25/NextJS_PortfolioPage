"use client";

import Modal from "./Modal";

import { useState } from "react";
import { useRouter } from "next/navigation";
import useTechstackModal from "@/hooks/useTechstackModal";
const TechstackModal = () => {
    const categories = [
        {
            title: "Programming Languages",
            items: [
                { name: "HTML", icon: "/html-logo.png" },
                { name: "CSS", icon: "/css-icon.png" },
                { name: "JavaScript", icon: "/javascript-icon.png" },
                { name: "TypeScript", icon: "/ts.svg" },
                { name: "Python", icon: "/python-logo.png" },
                { name: "Java", icon: "/java-logo.png" },
            ],
        },
        {
            title: "Web Development Frameworks",
            items: [
                { name: "Django", icon: "/django-logo.png" },
                { name: "Django REST", icon: "/django-logo.png" }, // You may use the same Django logo for Django REST or find a specific one
                { name: "Flask", icon: "/flask.svg" }, // Placeholder, replace with actual path
                { name: "Next.js", icon: "/next.svg" },
            ],
        },
        {
            title: "Frontend Technologies",
            items: [
                { name: "React", icon: "/react-logo.png" },
                { name: "jQuery", icon: "/jquery.svg" }, // Placeholder, replace with actual path
                { name: "Bootstrap", icon: "/bootstrap-icon.png" },
                { name: "Tailwind CSS", icon: "/tail.svg" }, // Placeholder, replace with actual path
            ],
        },
        {
            title: "Databases",
            items: [
                { name: "MySQL", icon: "/mysql.svg" }, // Placeholder, replace with actual path
                { name: "PostgreSQL", icon: "/postgres.svg" },
            ],
        },
        {
            title: "Cloud Hosting and Deployment",
            items: [
                { name: "AWS S3", icon: "/aws-icon.svg" }, // Placeholder, replace with actual path
                { name: "Heroku", icon: "/heroku-logo.png" },
                { name: "DigitalOcean", icon: "/digitalocean_logo.png" },
                { name: "Railway", icon: "/railway-logo.png" }, // Placeholder, replace with actual path
            ],
        },
        {
            title: "Web Server Technologies",
            items: [
                { name: "Nginx", icon: "/nginx.png" },
                { name: "Docker", icon: "/docker-logo.png" },
            ],
        },
        {
            title: "Version Control",
            items: [
                { name: "Git", icon: "/git-logo.png" },
                { name: "GitHub", icon: "/github-logo.png" },
            ],
        },
        {
            title: "Payment Systems",
            items: [
                { name: "Stripe", icon: "/stripe-logo.png" },
                { name: "PayPal", icon: "/paypal-logo.png" },
            ],
        },
    ];
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
