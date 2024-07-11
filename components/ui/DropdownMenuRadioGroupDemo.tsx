"use client";
import { useTranslations } from "next-intl";
import { TfiWorld } from "react-icons/tfi";
import * as React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FiFlag } from "react-icons/fi";

export function LanguageDropdownMenu() {
    const [language, setLanguage] = React.useState<string>("");
    const router = useRouter();

    const t = useTranslations("Languages");

    // Retrieve the language from localStorage when the component mounts
    React.useEffect(() => {
        const storedLanguage = localStorage.getItem("selectedLanguage");
        if (storedLanguage) {
            setLanguage(storedLanguage);
        } else {
            // Set default language if no language is stored
            const defaultLanguage = "de"; // Set your default language here
            setLanguage(defaultLanguage);
            localStorage.setItem("selectedLanguage", defaultLanguage);
            // router.push(`/${defaultLanguage}`);
        }
    }, []);

    // Watch for changes to the language state and navigate
    React.useEffect(() => {
        if (language) {
            localStorage.setItem("selectedLanguage", language);
            router.push(`/${language}`);
        }
    }, [language]);

    return (
        <div className="fixed right-4 top-4" style={{ zIndex: 5000 }}>
            <div className="relative">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="rounded-xl">
                            {language === "en" ? t("lang1") : t("lang2")}
                            <TfiWorld className="bg-transparent pl-2 text-2xl text-white transition duration-200 hover:text-gray-300" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56 rounded-xl">
                        <DropdownMenuLabel>
                            {language === "en" ? "Choose your language" : "Wähle deine Sprache"}
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuRadioGroup value={language} onValueChange={setLanguage}>
                            <DropdownMenuRadioItem value="en">English / EN</DropdownMenuRadioItem>
                            <DropdownMenuRadioItem value="de" className="rounded-b-[8px]">
                                Deutsch / DE
                            </DropdownMenuRadioItem>
                        </DropdownMenuRadioGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    );
}
