import {Link as LinkRout, Link} from "react-router-dom";
import logoImg from "../assets/emerald_logo.svg";

import telegram2 from "../assets/svg/Telegram2.svg";
import logoImg2 from "../assets/svg/EmeraldParners.svg";


const Footer = () => {
    return (
        <footer className={'mt-36 h-full sm:px-2 footer bottom-0 left-0'}>

            <div className={'flex justify-between lg:max-w-[73rem]  py-4 items-center mx-auto borderB'}>
                <div className="items-center flex justify-start">
                    <Link to="/ru/#start" className={"flex  cursor-pointer"}>
                        <img src={logoImg} alt="img" className={""} />
                        <img src={logoImg2} alt="img" className={" ml-2"} />
                    </Link>
                </div>
                <div>
                    <ul className=" sm:hidden lg:visible  text-white flex  justify-center gap-11 mr-10 items-center  ">
                        <Link to="/ru/#advantages">
                            <li className={"my-2 cursor-pointer nav-link font-normal"}>

                                Преимущества
                            </li>
                        </Link>

                        <Link to="/ru/#cases">
                            <li className={"my-2 cursor-pointer nav-link font-normal"}> Кейсы</li>
                        </Link>

                        <Link to="/ru/#faq">
                            <li className={"my-2 cursor-pointer nav-link font-normal"}> FAQ</li>
                        </Link>
                        <Link to="/ru/#contacts">
                            <li className={" my-2 cursor-pointer nav-link  font-normal"}>
                                Контакты
                            </li>
                        </Link>
                    </ul>
                </div>
                <LinkRout
                    to={"https://t.me/mettamorg" }
                    target="_blank"
                    rel="noopener noreferrer"
                    className={"flex justify-center nav-link2   "}
                >
                    <img src={telegram2} alt="img" className={" mr-2.5 "} />
                    <p>Чат Телеграм</p>

                </LinkRout>

            </div>
            <div className={'flex flex-col '}>
                <div className={'mx-auto mt-4'}>
                    <p>Публичная оферта</p>
                </div>
                <div className={'mx-auto mt-4 mb-4'}>
                    <p className={'text-gray-500'}>EmeraldPartners © 2023</p>
                </div>

            </div>
        </footer>
    )
}
export default Footer