import {Link as LinkRout, Link} from "react-router-dom";
import telegram2 from "../assets/svg/Telegram2.svg";
import {useTranslation} from "react-i18next";
import React from "react";


interface OverlayHeaderProps {
    isOpen: boolean;
    toggleMenu: () => void;
}

const OverlayHeader: React.FC<OverlayHeaderProps> = ({ isOpen, toggleMenu }) => {
    const {t} = useTranslation();
    const handleOverlayClick = () => {
        if (isOpen) {
            toggleMenu();
        }
    };
    return (

        <div>

            {isOpen && (
                <div className="fixed inset-0 bg-black opacity-50 bgHeader z-0 " onClick={handleOverlayClick}></div>
            )}
            <div

                className={`fixed top-0 right-0 h-full w-0 transition-all duration-500 overflow-hidden burgerActive z-30 ${
                    isOpen ? "w-[20rem]" : ""
                }`}
            >

                <div className={'flex justify-between px-4 py-4 w-80 items-center'}>
                    <div><h2 className={'text-2xl font-bold '}>{t('other.menu')}</h2></div>
                    <div
                        onClick={toggleMenu}
                        className={` cursor-pointer lg:hidden overflow-hidden  `}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white"
                             className={'w-6 h-6 hover:fill-[#369CFB] transition-colors duration-300'}>
                            <path
                                d="M4.26706 19.7331C3.91116 19.3772 3.91116 18.8001 4.26706 18.4442L18.4442 4.26705C18.8001 3.91115 19.3772 3.91115 19.7331 4.26705C20.089 4.62296 20.089 5.19999 19.7331 5.55589L5.5559 19.7331C5.2 20.089 4.62297 20.089 4.26706 19.7331Z"/>
                            <path
                                d="M4.26693 4.26693C4.62283 3.91102 5.19986 3.91102 5.55576 4.26693L19.7329 18.4441C20.0888 18.8 20.0888 19.377 19.7329 19.7329C19.377 20.0888 18.8 20.0888 18.4441 19.7329L4.26693 5.55576C3.91102 5.19986 3.91102 4.62283 4.26693 4.26693Z"/>
                        </svg>
                    </div>
                </div>


                {/* Ваше дополнительное меню здесь */}
                <ul className="text-white text-base font-semibold  items-center mt-12">
                    <Link to="/#advantages" onClick={toggleMenu}>
                        <li className="py-4 px-4 relative cursor-pointer  font-semibold hover:text-[#369CFB] transition-colors duration-300">
                            <div
                                className="border-t border-b opacity-10 absolute top-0 bottom-0 left-0 right-0 bg-B7B6CC"></div>
                            {t('header.headerNav1')}
                        </li>
                    </Link>

                    <Link to="/#cases" onClick={toggleMenu}>
                        <li className="py-4 px-4 relative cursor-pointer  font-semibold hover:text-[#369CFB] transition-colors duration-300">
                            <div
                                className="border-t border-b opacity-10 absolute top-0 bottom-0 left-0 right-0 bg-B7B6CC"></div>
                            {t('header.headerNav2')}
                        </li>
                    </Link>

                    <Link to="/#faq" onClick={toggleMenu}>
                        <li className="py-4 px-4 relative cursor-pointer  font-semibold hover:text-[#369CFB] transition-colors duration-300">
                            <div
                                className="border-t border-b opacity-10 absolute top-0 bottom-0 left-0 right-0 bg-B7B6CC"></div>
                            {t('header.headerNav3')}
                        </li>
                    </Link>

                    <Link to="/#contacts" onClick={toggleMenu}>
                        <li className="py-4 px-4 relative cursor-pointer  font-semibold hover:text-[#369CFB] transition-colors duration-300">
                            <div
                                className="border-t border-b opacity-10 absolute top-0 bottom-0 left-0 right-0 bg-B7B6CC"></div>
                            {t('header.headerNav4')}
                        </li>
                    </Link>
                </ul>

                {/* Добавьте второй <ul> сюда */}
                <ul className="` text-white flex flex-col absolute bottom-0 ">
                    <Link to={"/registration"} onClick={toggleMenu} className=" w-80 mx-auto">
                        <li>
                            <button
                                className={
                                    " text-white font-semibold  mx-auto flex justify-start py-4 rounded-md cursor-pointer  tracking-wide button-hover button-link w-[16rem] mb-4"
                                }
                            >
                                <p className={"ml-20"}>{t('header.headerSignUp')}</p>
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

                            </button>
                        </li>

                    </Link>
                    <Link to={"https://emerald.affise.com/v2/sign/in"} className="w-80 mx-auto mb-4" onClick={toggleMenu} target="_blank">
                        <li className=" cursor-pointer w-[13rem] flex justify-end  hover-svg font-semibold transition-colors duration-300">
                            <svg
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                xmlns="http://www.w3.org/2000/svg"
                                className={"py-1 w-[1.6rem] h-[1.6rem] fill-current transition-colors duration-300"}
                                fill="currentColor"
                            >
                                <g id="Iconly/Bold/Login">
                                    <g id="Login">
                                        <path
                                            id="Login_2"
                                            d="M8.91457 1.5H12.694C14.5838 1.5 16.125 3 16.125 4.83V13.17C16.125 15.0075 14.5838 16.5 12.6786 16.5H8.90682C7.01709 16.5 5.46812 15.0075 5.46812 13.1775V9.5775H10.2699L9.03074 10.7775C8.79839 11.0025 8.79839 11.37 9.03074 11.595C9.14691 11.7075 9.30181 11.76 9.45671 11.76C9.60386 11.76 9.75875 11.7075 9.87493 11.595L12.1364 9.4125C12.2526 9.3075 12.3145 9.1575 12.3145 9C12.3145 8.85 12.2526 8.7 12.1364 8.595L9.87493 6.4125C9.64258 6.1875 9.26308 6.1875 9.03074 6.4125C8.79839 6.6375 8.79839 7.005 9.03074 7.23L10.2699 8.4225H5.46812V4.8375C5.46812 3 7.01709 1.5 8.91457 1.5ZM1.875 8.99993C1.875 8.68493 2.14142 8.42243 2.46113 8.42243H5.46789V9.57743H2.46113C2.14142 9.57743 1.875 9.32243 1.875 8.99993Z"
                                        />
                                    </g>
                                </g>
                            </svg>
                            <div className={'  w-12 transition-colors duration-300'}>
                                <p>{t('header.headerLogIn')}</p>
                            </div>
                        </li>
                    </Link>

                    <LinkRout
                        to={"https://t.me/emeraldpartners_chat"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={"  w-80 mx-auto mb-10 "}
                        onClick={toggleMenu}
                    >
                        <li className={'flex justify-center font-semibold  hover:text-[#369CFB] transition-colors duration-300'}>
                            <img src={telegram2} alt="img" className={" mr-2.5 "}/>
                            <p className={'text-base '}>{t('other.telegram')}</p>
                        </li>


                    </LinkRout>
                </ul>
            </div>
        </div>

    );
};

export default OverlayHeader;
