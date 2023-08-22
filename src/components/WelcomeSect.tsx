import gsap from 'gsap';
import {Link} from "react-router-dom";
import {useEffect, useRef} from "react";
import emerald1 from "../assets/emerald1.png";
import emerald2 from "../assets/emerald2.png";
import coin1 from "../assets/Coin1.png";
import coin2 from "../assets/Coin2.png";
import coin3 from "../assets/Coin3.png";
import coinMob1 from "../assets/mobile/coinMob1.png";
import coinMob2 from "../assets/mobile/coinMob2.png";
import emeraldMob1 from "../assets/mobile/emeraldMob1.png";
import emeraldMob2 from "../assets/mobile/emeraldMob2.png";

function WelcomeSect() {
    gsap.registerPlugin(ScrollTrigger)


    const welcomeDivRef1 = useRef(null);
    const welcomeDivRef2 = useRef(null);
    const welcomeDivRef3 = useRef(null);
    useEffect(() => {
        const tl = gsap.timeline();
        tl.fromTo(
            welcomeDivRef1.current,
            {
                x: -100,
                opacity: 0,
                scale:1
            },
            {
                x: 0,
                opacity: 1,
                scale:1,
                duration: 0.5,
            },0.3
        ).fromTo(
            welcomeDivRef2.current,
            {
                y: 50,
                opacity: 0,
                scale:1
            },
            {
                y: 0,
                opacity: 1,
                scale:1,
                duration: 0.5,
            },0.3
        ).fromTo(
            welcomeDivRef3.current,
            {
                y: 50,
                opacity: 0,
                scale:1
            },
            {
                y: 0,
                opacity: 1,
                scale:1,
                duration: 0.5,
            },0.3
        ).fromTo(
            '.emeraldFirstGroup',
            {
                scale:0,
                opacity: 0
            },
            {
                opacity: 1,
                scale:1,
                stagger: 0.4
            },0.5
        ).fromTo(
            '.coinFirstGroup',
            {
                scale:0,
                opacity: 0
            },
            {
                opacity: 1,
                scale:1,
                stagger: 0.4
            },0.5
        ).fromTo(
            '.lineGsap',
            {
                opacity: 0,
                scale:1
            },
            {

                opacity: 1,
                scale:1,
                duration: 1,
            },1.5
        )
    }, []);


    return (
    <section className="flex sm:justify-center " id={"start"}>
        <div className="lg:hidden sm:visible ">
            <img
                src={emeraldMob1}
                alt="img"
                className={"absolute emeraldFirstGroup hidden ml-[-1rem]  mt-[1rem] z-10"}
            />
            <img
                src={emeraldMob2}
                alt="img"
                className={"absolute emeraldFirstGroup ml-[7rem] mt-[5rem] z-10"}
            />
            <img
                src={coinMob1}
                alt="img"
                className={"absolute coinFirstGroup ml-[19rem] mt-[6.5rem] z-10"}
            />
            <img
                src={coinMob2}
                alt="img"
                className={"absolute coinFirstGroup ml-[20.5rem] mt-[15rem] z-10"}
            />

            <div className={"line-container-mobile"}>
                <svg xmlns="http://www.w3.org/2000/svg" width="335" height="252" viewBox="0 0 335 252" fill="none" className={'lineGsap'}>
                    <path
                        d="M1 51.5C64 34 79.3888 77.3759 122 93C137 98.5 247.201 100.802 288.701 56.8019C330.201 12.8019 288.701 -16.1981 272.701 12.3018C256.981 40.3019 300.5 93 323.5 148C346.5 203 324.5 242.5 314.5 250.5"
                        stroke="#3F72BD" strokeWidth="1.5" strokeDasharray="12 12"/>
                </svg>
            </div>
        </div>
        <div className={"lg:w-8/12 lg:mt-36 sm:mt-48 px-4"}>
            <h2 className="lg:text-5xl sm:text-4xl lg:font-bold sm:font-black mb-4 leading-[1.2] tracking-wide " ref={welcomeDivRef1}>
                Добро пожаловать в партнерскую программу
                <span className={"text-green-1"}> Emerald Partners </span>
            </h2>
            <h3 className="font-normal lg:text-base sm:text-sm text-gray-300 mb-2 tracking-wide"
                ref={welcomeDivRef2}>
                Окунитесь в царство изумрудных богатств уже сегодня!
            </h3>
            <button
                className={
                    " text-white font-bold  rounded-md cursor-pointer mt-11 tracking-wide  button-hover button-link w-52"
                }
                ref={welcomeDivRef3}
            >
                <Link
                    to={"registration"}
                    className={"flex  py-4 px-1 ml-1"}
                >
                    <p className={"ml-8"}>Регистрация</p>
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={"ml-2.5"}
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
        <div className="sm:hidden lg:visible lg:w-5/12">
            <img
                src={emerald1}
                alt="img"
                className={" absolute emeraldFirstGroup ml-[2rem] mt-[3rem] z-10"}
            />
            <img
                src={emerald2}
                alt="img"
                className={"absolute emeraldFirstGroup ml-[-rem] mt-[19rem]"}
            />
            <img
                src={coin1}
                alt="img"
                className={"absolute coinFirstGroup ml-[22rem] mt-[11rem]"}
            />
            <img
                src={coin2}
                alt="img"
                className={"absolute coinFirstGroup ml-[17rem] mt-[15.5rem] z-10"}
            />
            <img
                src={coin3}
                alt="img"
                className={"absolute coinFirstGroup ml-[-5rem] mt-[29rem] z-10"}
            />
            <div className={"line-container"}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="621"
                    height="3830"
                    viewBox="0 0 621 3830"
                    className={"line1 lineGsap"}
                >
                    <path
                        d="M284.499 1.5C196.999 5.66667 21.9993 24.1 21.9993 64.5C21.9993 115 510.499 149.5 511.999 225.5C513.499 301.5 -8.00067 297 1.49933 410.5C10.9993 524 575.397 570.5 535 670.5C504.5 746 373.248 807.177 476.5 908C561.5 991 696 1121.5 524.5 1422C312.134 1794.1 603 1850.5 596 2032C589 2213.5 316 2087.15 397.5 2010C492 1920.55 609.5 2206 570 2300.5C530.5 2395 391 2588 523 2764C655 2940 509 2912 375.5 3059C271.039 3174.02 347 3195 388 3280C419.357 3345.01 310.123 3382.33 330 3516.5C346 3624.5 529.5 3628.5 599.5 3695C669.5 3761.5 537 3828.5 537 3828.5"
                        stroke="#3F72BD"
                        strokeWidth={"2"}
                        strokeDasharray={"12 12"}
                        id="line1"
                        fill="none"
                    />
                </svg>
            </div>
        </div>
    </section>
    );
}

export default WelcomeSect;