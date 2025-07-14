import Button from "../interactives/Button";
import content from "../../content/content";
import { FaWhatsapp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import CarouselDivsV1 from "../interactives/CarouselDivsV1";
import { Quote } from "lucide-react";

export default function Feedback({ colorMode = "default" }) {
  const navigate = useNavigate();

  // Definir classes de tema
  const bgClasses = {
    dark: "bg-bgSectionOpacityDark",
    light: "bg-bgSectionOpacityLight",
    default: "squares",
  };
  const textClasses = {
    dark: "text-black",
    light: "text-black",
    default: "text-black",
  };
  const bgClass = bgClasses[colorMode] || bgClasses.default;
  const textClass = textClasses[colorMode] || textClasses.default;

  return (
    <>
      <SectionArea className={`${bgClass}`}>
        <SectionWrapper>
          <SectionHeader
            colorMode="dark"
            className={`text-center ${textClass}`}
            miniTitle="CASOS DE SUCESSO"
            sectionHeaderTitle="Histórias reais de quem virou o jogo"
            sectionHeaderSubtitle="Conheça clientes que enfrentaram situações difíceis no trânsito e conseguiram reverter tudo com a nossa ajuda."
            titleColorSet={textClass}
            subtitleColorSet={textClass}
            miniTitleBgColor="bg-minititle"
            miniTitleTextColor="text-darker"
          />
          <div className=" w-[100%]">
            <CarouselDivsV1>
              <div className="bg-primary text-black p-4 rounded-2xl">
                <h1 className="pt-8">
                  <p className="text-[74px] text-start leading-[0px] font-serif">
                    “
                  </p>
                </h1>
                <p className="font-light text-lg italic">
                  “Fui parado na blitz e me recusei a soprar o bafômetro. Eles
                  cancelaram a penalidade usando brechas que nem sabia que
                  existiam.”
                </p>

                <div className="mt-6 text-end">
                  <p className="text-base font-semibold tracking-wide">
                    – Carlos A.
                  </p>
                  <p className="text-sm font-medium text-neutral-700 ">
                    Goiânia
                  </p>
                </div>
              </div>

              <div className="bg-primary text-black p-4 rounded-2xl">
                <h1 className="pt-8">
                  <p className="text-[74px] text-start leading-[0px] font-serif">
                    “
                  </p>
                </h1>
                <p className="font-light text-lg italic">
                  “Recebi três multas por excesso de velocidade em 5 dias. A
                  Prime Trânsito descobriu falhas no radar e anulou tudo.”
                </p>
                <div className="mt-6 text-end">
                  <p className="text-base font-semibold tracking-wide">
                    – Juliana M.
                  </p>
                  <p className="text-sm font-medium text-neutral-700 ">
                    Anápolis
                  </p>
                </div>
              </div>

              <div className="bg-primary text-black p-4 rounded-2xl">
                <h1 className="pt-8">
                  <p className="text-[74px] text-start leading-[0px] font-serif">
                    “
                  </p>
                </h1>
                <p className="font-light text-lg italic">
                  “Achei que ia ficar 12 meses sem dirigir. No fim, mantive
                  minha CNH e ainda aprendi muito sobre meus direitos.”
                </p>
                <div className="mt-6 text-end">
                  <p className="text-base font-semibold tracking-wide">
                    – Reginaldo B.
                  </p>
                  <p className="text-sm font-medium text-neutral-700 ">
                    Palmeiras de Goiás
                  </p>
                </div>
              </div>
            </CarouselDivsV1>
          </div>
        </SectionWrapper>
      </SectionArea>
    </>
  );
}
