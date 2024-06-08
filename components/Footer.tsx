import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./ui/MagicButton";

import { highlightWords } from "@/lib/highlightWords";
import { useTranslations } from "next-intl";

const Footer = () => {

  const t = useTranslations("footer");

  return (
    <footer className="w-full pb-20 " id="contact">


      <div className="flex flex-col items-center">
        <h1 className="text-center text-4xl font-bold lg:max-w-[45vw]">
          {highlightWords(t("title"), 1, 3)}
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          {t("description")}
        </p>
        <a href="mailto:angelo.pucci@outlook.de">
          <MagicButton
            title={t("button")}
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Angelo R. Pucci
        </p>

        <div className="flex items-center md:gap-3 gap-6 pt-5 md:pt-0 ">
          {socialMedia.map((info) => (
            <a href={info.link} rel="noreferrer noopener" target="_blank"
            
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-xl border border-black-300"
            >
              <img src={info.img} alt={info.alt} width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;