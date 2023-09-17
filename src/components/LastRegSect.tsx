import coin7 from "../assets/Coin7.png";
import coin8 from "../assets/Coin8.png";
import coin9 from "../assets/Coin9.png";
import emerald3 from "../assets/emerald3.png";
import emerald4 from "../assets/emerald4.png";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
// import gsap from "gsap";


function LastRegSect() {
    // gsap.to('.coin7', {
    //     y: -20, // Движение вверх на 20 пикселей
    //     yoyo: true, // Повторять анимацию в обратном направлении
    //     repeat: -1, // Бесконечное повторение
    //     duration: 1, // Продолжительность одного цикла анимации в секундах
    //     ease: "linear", // Линейное перемещение
    // });
    // gsap.to('.coin8', {
    //     y: 20, // Движение вверх на 20 пикселей
    //     yoyo: true, // Повторять анимацию в обратном направлении
    //     repeat: -1, // Бесконечное повторение
    //     duration: 1, // Продолжительность одного цикла анимации в секундах
    //     ease: "linear", // Линейное перемещение
    // });
    const {t} = useTranslation();
    return (
        <section className={'px-4'}>
            <div className={'sm:hidden lg:visible'}>
                <img
                    src={coin7}
                    alt="img"
                    className={"absolute coin7 ml-[70rem]  mt-[4rem]  z-10"}
                />
                <img
                    src={coin8}
                    alt="img"
                    className={"absolute coin8 ml-[3rem] mt-[-4rem]  "}
                />
                <img
                    src={coin9}
                    alt="img"
                    className={"absolute coin9 ml-[60rem] mt-[10rem]  z-10"}
                />
                <img
                    src={emerald3}
                    alt="img"
                    className={"absolute emerald3 ml-[-5rem] mt-[9rem] z-10"}
                />
                <img
                    src={emerald4}
                    alt="img"
                    className={"absolute emerald4 ml-[52rem] mt-[-3rem]  "}
                />
            </div>

            <div
                className={
                    "lg:w-[48rem] lg:h-80 h-64 bg-opacity-30 mx-auto lg:mt-40 sm:mt-32 flex flex-col justify-center z-20"
                }
            >
                <h2 className="lg:text-4xl sm:text-2xl font-bold text-center lg:w-[30rem] sm:w-[20rem] mx-auto">
                    {t('lastRegSect.mainText1')}
                    <span className={"text-green-1"}>  {t('lastRegSect.mainText2')} </span>
                </h2>
                <button
                    className={
                        " text-white font-bold btn-5 mx-auto rounded-md cursor-pointer mt-11 tracking-wide button-hover button-link lg:w-52 sm:w-[16rem]"
                    }
                >
                    <Link
                        to={"https://emerald.affise.com/v2/sign/up"}
                        className={"flex justify-center py-4"}
                    >
                        <p className={"ml-4"}>{t('welcomeSect.buttonText')}</p>
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className={"ml-2.5 svg1"}
                        >
                            <path
                                d="M8.5 5L15.5 12L8.5 19"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </Link>
                </button>
            </div>
        </section>
    );
}

export default LastRegSect;

