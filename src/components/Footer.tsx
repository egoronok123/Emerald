// import  {Link as LinkRout} from "react-router-dom";
// import {Link as LinkScroll} from 'react-scroll';

import {Link as LinkRout} from "react-router-dom";
import logoImg from "../assets/emerald_logo.svg";

import telegram2 from "../assets/svg/Telegram2.svg";

const Footer = () => {
    return (
        <footer className={'mt-36 h-40 footer  bottom-0 left-0'}>

            <div className={'flex justify-between max-w-7xl items-center mx-auto'}>
                <div className={'flex justify-between'}>
                    <LinkRout to="/"   className={'flex justify-between gap-5'}>
                        <img src={logoImg} alt='img' className={'w-26'}/>
                        <h1 className=' '>Emerald Partners</h1>
                    </LinkRout>
                </div>
                <div>
                    <ul className='py-4 px-4 text-white flex justify-center gap-10'>

                        <LinkRout  to="/#advantages"  >
                            <li className={'my-2 cursor-pointer nav-link'}> Преимущества   </li>
                        </LinkRout>


                        <LinkRout  to="cases"  >
                            <li className={'my-2 cursor-pointer nav-link'}>   Кейсы    </li>
                        </LinkRout>


                        <LinkRout to="faq"  >
                            <li className={'my-2 cursor-pointer nav-link'}>  FAQ    </li>
                        </LinkRout>
                        <LinkRout  to="contacts"  >
                            <li className={'mr-12 my-2 cursor-pointer nav-link'}>   Контакты   </li>
                        </LinkRout>
                    </ul>
                </div>
                <a
                    href={"https://t.me/mettamorg"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={"flex justify-center"}
                >
                    <img src={telegram2} alt="img" className={" mr-2.5 "} />
                    <p>Чат Телеграм</p>
                </a>
            </div>
        </footer>
    )
}
export default Footer