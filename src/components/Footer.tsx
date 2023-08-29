import {Link as LinkRout, Link} from "react-router-dom";
import logoImg from "../assets/emerald_logo.svg";

import telegram2 from "../assets/svg/Telegram2.svg";
import logoImg2 from "../assets/svg/EmeraldPartners.svg";
import {useTranslation} from "react-i18next";


const Footer = () => {
    const {t} = useTranslation();
    return (
        <footer className={'mt-36 h-full sm:px-2 footer bottom-0 left-0'}>

            <div className={'flex justify-between lg:max-w-[71rem]  py-4 items-center mx-auto borderB'}>
                <div className="items-center flex justify-start">
                    <Link to="/#start" className={"flex  cursor-pointer"}>
                        <img src={logoImg} alt="img" className={""} />
                        <img src={logoImg2} alt="img" className={" ml-2"} />
                    </Link>
                </div>
                <div>
                    <ul className=" sm:hidden lg:visible  text-white flex  justify-center gap-11 mr-10 items-center  ">
                        <Link to="/#advantages">
                            <li className={"my-2 cursor-pointer nav-link font-normal"}>

                                {t('header.headerNav1')}
                            </li>
                        </Link>

                        <Link to="/#cases">
                            <li className={"my-2 cursor-pointer nav-link font-normal"}>           {t('header.headerNav2')}</li>
                        </Link>

                        <Link to="/#faq">
                            <li className={"my-2 cursor-pointer nav-link font-normal"}>           {t('header.headerNav3')}</li>
                        </Link>
                        <Link to="/#contacts">
                            <li className={" my-2 cursor-pointer nav-link  font-normal"}>
                                {t('header.headerNav4')}
                            </li>
                        </Link>
                    </ul>
                </div>
                <LinkRout
                    to={"https://t.me/emeraldpartners_chat" }
                    target="_blank"
                    rel="noopener noreferrer"
                    className={"flex justify-center nav-link2   "}
                >
                    <img src={telegram2} alt="img" className={" mr-1 "} />
                    <p> {t('other.telegram')}</p>

                </LinkRout>

            </div>
            <div className={'flex sm:flex-col lg:max-w-[71rem] mx-auto lg:justify-between'}>
                <div className={'flex lg:justify-end sm:mx-auto mt-4 lg:order-2'}>
                    <div className={'cursor-pointer'}> {t('other.offer')}</div>
                </div>
                <div className={'flex lg:justify-start sm:mx-auto  mt-4 mb-4 lg:order-1'}>
                    <p className={'text-gray-500'}>EmeraldPartners © 2023</p>
                </div>

            </div>
        </footer>
    )
}
export default Footer