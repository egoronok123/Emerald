import coin7 from "../assets/Coin7.png";
import coin9 from "../assets/Coin9.png";
import emerald3 from "../assets/emerald3.png";
import emerald4 from "../assets/emerald4.png";
import {Link} from "react-router-dom";


function LastRegSect() {

    return (
        <section className={'px-4'}>
            <div className={'sm:hidden lg:visible'}>
                <img
                    src={coin7}
                    alt="img"
                    className={"absolute ml-[3rem]  mt-[-2rem]  z-10"}
                />

                <img
                    src={coin9}
                    alt="img"
                    className={"absolute ml-[60rem] mt-[10rem]  z-10"}
                />
                <img
                    src={emerald3}
                    alt="img"
                    className={"absolute ml-[-5rem] mt-[9rem] z-10"}
                />
                <img
                    src={emerald4}
                    alt="img"
                    className={"absolute  ml-[52rem] mt-[-3rem]  "}
                />
            </div>

            <div
                className={
                    "lg:w-[48rem] lg:h-80 h-64 bg-opacity-30 mx-auto lg:mt-40 sm:mt-32 flex flex-col justify-center z-20"
                }
            >
                <h2 className="lg:text-4xl sm:text-2xl font-bold text-center">
                    Присоеденияйся к нам <br /> уже
                    <span className={"text-green-1"}> сегодня </span>
                </h2>
                <button
                    className={
                        " text-white font-bold mx-auto rounded-md cursor-pointer mt-11 tracking-wide button-hover button-link lg:w-52 sm:w-[16rem]"
                    }
                >
                    <Link
                        to={"registration"}
                        className={"flex justify-start py-4 "}
                    >
                        <p className={"sm:ml-16 lg:ml-10"}>Регистрация</p>
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
        </section>
    );
}

export default LastRegSect;

