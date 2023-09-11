import photo1 from "../assets/svg/photo.svg";
import telegram2 from "../assets/svg/Telegram2.svg";
import photo2 from "../assets/svg/photo2.svg";
import photo3 from "../assets/svg/photo3.svg";
import {useTranslation} from "react-i18next";


function ContactSect() {
    const {t} = useTranslation();
    return (
        <section id={'contacts'} className={'px-4'}>
            <h2 className="lg:text-4xl sm:text-2xl sm:font-black lg:font-bold  lg:mt-40 sm:mt-20 text-center">
                {t('contactSect.mainText1')}<span className={"text-green-1"}> {t('contactSect.mainText2')} </span>
            </h2>
            <div className="flex lg:justify-between sm:flex-col mt-12 gap-7 ">
                <a
                    href={"https://t.me/jumansss"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={"flex items-center contactHref  transform transition-transform hover:scale-105 duration-300  bg-opacity-30 lg:w-[25rem]"}
                >
                    <img src={photo1} alt="img" className={""} />
                    <div className={''}>
                        <p className={'sm:text-lg sm:font-semibold'}>CEO</p>
                        <div className={'flex justify-center'}>
                            <img src={telegram2} alt="img" className={" mr-1.5 "}/>
                            <p className={'sm:text-sm lg:font-normal transition-colors duration-300'}>@jumansss</p>
                        </div>
                    </div>
                </a>
                <a
                    href={"https://t.me/SuppEmeraldPartners"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={"flex items-center contactHref  transform transition-transform hover:scale-105 duration-300  bg-opacity-30 lg:w-[25rem]"}
                >
                    <img src={photo2} alt="img" className={""} />
                    <div className={''}>
                        <p className={'sm:text-lg sm:font-semibold'}>Manager</p>
                        <div className={'flex justify-center'}>
                            <img src={telegram2} alt="img" className={" mr-1.5 "}/>
                            <p className={'sm:text-sm lg:font-normal transition-colors duration-300'}>@SuppEmeraldPartners</p>
                        </div>
                    </div>
                </a>
                <a
                    href={"https://t.me/mettamorg"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={"flex items-center contactHref transform transition-transform hover:scale-105 duration-300  bg-opacity-30 lg:w-[25rem]"}
                >
                    <img src={photo3} alt="img" className={""} />
                    <div className={''}>
                        <p className={'sm:text-lg sm:font-semibold'}>Tech Support</p>
                        <div className={'flex justify-center'}>
                            <img src={telegram2} alt="img" className={" mr-1.5 "}/>
                            <p className={'sm:text-sm lg:font-normal transition-colors duration-300'}>@Metamorg</p>
                        </div>
                </div>
                </a>
            </div>
        </section>
    );
}

export default ContactSect;

