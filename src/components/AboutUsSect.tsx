

import aboutImg from "../assets/aboutImg.png";
import {useTranslation} from "react-i18next";
function WelcomeSect() {
    const {t} = useTranslation();
    return (
        <section className="flex sm:flex-col mt-24 px-4">
            <img
                src={aboutImg}
                alt="img"
                className={"absolute hidden lg:hidden sm:top-[38rem] sm:right-[3rem] max-w-full"}
            />
            <div className="flex flex-col items-start bg-opacity-30 p-8 lg:w-1/2">
                <h3 className="text-lg font-semibold text-gray-1">{t('welcomeSect.aboutUsMainText')}</h3>
                <p className="text-sm text-gray-1 mt-1">
                    {t('welcomeSect.aboutUsSubText')}
                </p>
            </div>
            <div className="flex flex-col items-start bg-opacity-30 p-8 lg:w-1/2 h-44 lg:ml-8 sm:mt-8 z-20">
                <h3 className="text-lg font-semibold text-gray-1">{t('welcomeSect.OurGoalMainText')}</h3>
                <p className="text-sm text-gray-1 mt-1">
                    {t('welcomeSect.OurGoalSubText')}
                </p>
                <img
                    src={aboutImg}
                    alt="img"
                    className={"absolute lg:right-[-4.5rem] lg:top-[-4rem] sm:hidden max-w-full"}
                />
            </div>
        </section>
    );
}

export default WelcomeSect;