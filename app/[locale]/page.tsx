"use client";

import { useTranslations } from "next-intl";
import LocalizedLink from "../components/LocalizedLink";
import Carousel from "../components/Carousel";
import ContractorLeadBanner from "../components/ContractorLeadBanner"; // Import the component

export default function Home() {
    const t = useTranslations("HomePage");

    return (
        <div className="flex flex-col items-center justify-between min-h-screen p-8 pb-20 gap-16 sm:p-20 font-sans bg-white dark:bg-black">
            <h1>{t("title")}</h1>
            <LocalizedLink href="/about">{t("about")}</LocalizedLink>

            <div className="flex flex-col justify-center items-center pt-10 px-8">
                <h2 className="text-2xl font-semibold text-blue-500 text-center mb-8 mt-20">
                    WHAT OUR USERS HAVE TO SAY
                </h2>

                <Carousel
                    children={[
                        {
                            description:
                                "Our Experience With WAYZ Has Been Excellent From Start To Finish. Nathan And The Team Took The Time To Understand Our Business, Our Target Market, And Digital Ambitions They Have",
                            bgColor: "white",
                            image: "/images/rob-olsson.png",
                            name: "Rob Olsson",
                            role: "Head Of Strategy",
                        },
                        {
                            description:
                                "Working with WAYZ was a game-changer for our company. Their expertise and dedication were evident throughout the entire project. We highly recommend them.",
                            bgColor: "white",
                            image: "/images/dummy-user.png",
                            name: "Jane Smith",
                            role: "Marketing Director",
                        },
                    ]}
                />
            </div>
        </div>
    );
}
