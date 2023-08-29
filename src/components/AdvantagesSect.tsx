import coin4 from "../assets/Coin4.png";
import arrowTrend from "../assets/svg/Arrow-trend-up.svg";
import thunder from "../assets/svg/Thunder.svg";
import coinCircle from "../assets/svg/Coin-circle.svg";
import rocket from "../assets/svg/Rocket.svg";
import map from "../assets/svg/Map.svg";
import headset from "../assets/svg/headset.svg";
import commetSmile from "../assets/svg/comment-smile.svg";
import chartMixed from "../assets/svg/Chart_Mixed.svg";
import {useTranslation} from "react-i18next";

function AdvantagesSect() {
    const {t} = useTranslation();
    return (
        <section className="lg:mt-40 sm:mt-24 sm:px-3 lg:px-8" id="advantages">
            <h2 className="lg:text-4xl sm:text-2xl sm:max-w-[22rem] mx-auto font-bold  mt-12 text-center">
                {t('advantagesSect.mainText')}
                <span className={"text-green-1"}> Emerald Partners</span>
            </h2>
            <img
                src={coin4}
                alt="img"
                className={"sm:hidden absolute ml-[65rem] mt-[1rem] "}
            />
            <div className="grid lg:grid-cols-4 lg:gap-4 lg:gap-y-16 sm:ml-6 sm:gap-y-8 lg:mt-20 sm:mt-10 px-1 ">
                <div className=" lg:h-40 sm:h-[5.5rem] flex lg:flex-col items-center  bg-opacity-30">
                    <div className="svgBlock  sm:ml-[-1.8rem] lg:mt-[-2rem] ">
                        <svg className="svgImage ">
                            <image href={arrowTrend} className="svgImage2" />
                        </svg>
                    </div>
                    <p className={"sm:text-left lg:text-center text-sm text-gray-1 sm:ml-[2.3rem] lg:mt-[2.5rem] px-[1rem]"}>
                        {t('advantagesSect.text1')}
                    </p>
                </div>

                <div className=" lg:h-40 sm:h-[5.5rem] flex lg:flex-col items-center bg-opacity-30">
                    <div className="svgBlock  sm:ml-[-1.8rem] lg:mt-[-2rem] ">
                        <svg className="svgImage">
                            <image href={thunder} className="svgImage2" />
                        </svg>
                    </div>
                    <p className={"sm:text-left lg:text-center text-sm text-gray-1 sm:ml-[2.3rem] lg:mt-[2.5rem] px-[1rem]"}>
                        {t('advantagesSect.text2')}
                    </p>
                </div>

                <div className=" lg:h-40 sm:h-[5.5rem] flex lg:flex-col items-center  bg-opacity-30">
                    <div className="svgBlock  sm:ml-[-1.8rem] lg:mt-[-2rem] ">
                        <svg className="svgImage">
                            <image href={coinCircle} className="svgImage2" />
                        </svg>
                    </div>
                    <p className={"sm:text-left lg:text-center text-sm text-gray-1 sm:ml-[2.3rem] lg:mt-[2.5rem] px-[1rem]"}>
                        {t('advantagesSect.text3')}
                    </p>
                </div>

                <div className=" lg:h-40 sm:h-[5.5rem] flex lg:flex-col items-center  bg-opacity-30">
                    <div className="svgBlock  sm:ml-[-1.8rem] lg:mt-[-2rem] ">
                        <svg className="svgImage">
                            <image href={rocket} className="svgImage2" />
                        </svg>
                    </div>
                    <p className={"sm:text-left lg:text-center text-sm text-gray-1 sm:ml-[2.3rem] lg:mt-[2.5rem] px-[1rem]"}>
                        {t('advantagesSect.text4')}
                    </p>
                </div>

                <div className=" lg:h-40 sm:h-[5.5rem] flex lg:flex-col items-center  bg-opacity-30">
                    <div className="svgBlock  sm:ml-[-1.8rem] lg:mt-[-2rem] ">
                        <svg className="svgImage">
                            <image href={map} className="svgImage2" />
                        </svg>
                    </div>
                    <p className={"sm:text-left lg:text-center text-sm text-gray-1 sm:ml-[2.3rem] lg:mt-[2.5rem] px-[1rem]"}>
                        {t('advantagesSect.text5')}
                    </p>
                </div>

                <div className=" lg:h-40 sm:h-[5.5rem] flex lg:flex-col items-center  bg-opacity-30">
                    <div className="svgBlock  sm:ml-[-1.8rem] lg:mt-[-2rem] ">
                        <svg className="svgImage">
                            <image href={headset} className="svgImage2" />
                        </svg>
                    </div>
                    <p className={"sm:text-left lg:text-center text-sm text-gray-1 sm:ml-[2.3rem] lg:mt-[2.5rem] px-[1rem]"}>
                        {t('advantagesSect.text6')}
                    </p>
                </div>

                <div className=" lg:h-40 sm:h-[5.5rem] flex lg:flex-col items-center  bg-opacity-30">
                    <div className="svgBlock  sm:ml-[-1.8rem] lg:mt-[-2rem] ">
                        <svg className="svgImage">
                            <image href={commetSmile} className="svgImage2" />
                        </svg>
                    </div>
                    <p className={"sm:text-left lg:text-center text-sm text-gray-1 sm:ml-[2.3rem] lg:mt-[2.5rem] px-[1rem]"}>
                        {t('advantagesSect.text7')}
                    </p>
                </div>

                <div className=" lg:h-40 sm:h-[5.5rem] flex lg:flex-col items-center  bg-opacity-30 ">
                    <div className="svgBlock  sm:ml-[-1.8rem] lg:mt-[-2rem] ">
                        <svg className="svgImage">
                            <image href={chartMixed} className="svgImage2" />
                        </svg>
                    </div>
                    <p className={"sm:text-left lg:text-center text-sm text-gray-1 sm:ml-[2.3rem] lg:mt-[2.5rem] px-[1rem]"}>
                        {t('advantagesSect.text8')}
                    </p>
                </div>
            </div>
        </section>
    );
}

export default AdvantagesSect;

