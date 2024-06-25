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
                { name: "Django REST", icon: "/django-logo.png" },
                { name: "Next.js", icon: "/next.svg" },
                { name: "Flask", icon: "/flask.svg" },
            ],
        },
        {
            title: "Frontend Technologies",
            items: [
                { name: "React", icon: "/react-logo.png" },
                { name: "jQuery", icon: "/jquery.svg" },
                { name: "Tailwind CSS", icon: "/tail.svg" },
                { name: "Bootstrap", icon: "/bootstrap-icon.png" },
            ],
        },
        {
            title: "Databases",
            items: [
                { name: "PostgreSQL", icon: "/postgres.svg" },
                { name: "MySQL", icon: "/mysql.svg" },
            ],
        },
        {
            title: "Cloud Hosting and Deployment",
            items: [
                { name: "DigitalOcean", icon: "/digitalocean_logo.png" },
                { name: "AWS S3", icon: "/aws-icon.svg" },
                { name: "Heroku", icon: "/heroku-logo.png" },
                { name: "Railway", icon: "/railway-logo.png" },
                { name: "Netlify", icon: "/netlify-logo.png" },
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
