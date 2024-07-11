import Approach from "@/components/Approach";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { useTranslations } from "next-intl";
import Avatar from "@/components/Avatar";
import { LanguageDropdownMenu } from "@/components/ui/DropdownMenuRadioGroupDemo";
import TechstackModal from "@/components/ui/TechstackModal";

export default function Home() {
    //
    // Destructuring JSON-Objekt into Array of Objects
    const t = useTranslations("navItems");
    const array = ["1", "2", "3", "4"];
    const navItems = array.map(key => ({
        name: t(`${key}.name`),
        link: t(`${key}.link`),
    }));

    return (
        <main className="relative mx-auto flex flex-col items-center justify-center overflow-clip bg-black-100 px-5 sm:px-10">
            <div className="w-full max-w-7xl">
                <Avatar />
                <LanguageDropdownMenu />
                <FloatingNav navItems={navItems} />
                <Hero />
                <Grid />
                {/* <RecentProjects />
                <Clients />
                <Experience />
                <Approach /> */}
                <Footer />
                <TechstackModal />
            </div>
        </main>
    );
}
