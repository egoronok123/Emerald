
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import '../index.css'
import map from "../assets/map.png"
import map2 from "../assets/map2.png"
// import required modules
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import {Link as LinkRout} from "react-router-dom";
import telegram from "../assets/svg/Telegram.svg";
import {useTranslation} from "react-i18next";



export default function App() {
    const {t} = useTranslation();
    return (
        <Swiper
            breakpoints={{
                320: {

                    slidesPerView: 1,
                    spaceBetween: 20,
                    coverflowEffect:{
                rotate: 2,
                stretch: 1.5,
                depth: 10,
                modifier: 0,
            }
                },
                1000: {

                    slidesPerView: 2,
                    coverflowEffect:{
                        rotate: 0,
                        stretch: 9.5,
                        depth: 100,
                        modifier: 5,
                    }
                },
            }}
            effect={'coverflow'}
            centeredSlides={true}
            loop={true}
            slidesPerView={2}


            pagination={{ el: '.swiper-pagination', clickable: true }}
            navigation={{
                nextEl: '.swiper-button2',
                prevEl: '.swiper-button1',
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="swiper_container mx-auto"
        >

                <SwiperSlide
                >
                    <div className={'relative w-full '}>
                        <img
                            src={map}
                            className={"imgMain mx-auto "}
                            alt={'image'}/>
                        <div  className="flex flex-col items-center bg-opacity-30-2 textMain  mx-auto ">
                            <h2>{t('casesSect.text1')}</h2>
                            <button
                                className={
                                    "text-white font-bold mx-auto    rounded-md cursor-pointer mt-4 tracking-wide  button-hover button-link w-52"
                                }
                            >
                                <LinkRout
                                    to={"https://telegra.ph/Kejs-na-Latinskuyu-Ameriku-07-20-2" }
                                    target="_blank"
                                    className={"flex justify-center py-2"}
                                >
                                    <img src={telegram} alt="img" className={"w-18 mr-2.5 "} />
                                    <p>{t('casesSect.buttonText')}</p>

                                </LinkRout>
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <img
                        src={map2}
                        className={"imgSub mx-auto"}
                        alt={'image'}/>
                </SwiperSlide>
                <SwiperSlide >
                    <img
                        src={map2}
                        className={"imgSub mx-auto"}
                        alt={'image'}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={map2}
                        className={"imgSub mx-auto"}
                        alt={'image'}/>
                </SwiperSlide>
                <SwiperSlide >
                    <img
                        src={map2}
                        className={"imgSub mx-auto"}
                        alt={'image'}/>
                </SwiperSlide>
                <SwiperSlide >
                    <img
                        src={map2}
                        className={"imgSub mx-auto"}
                        alt={'image'}/>
                </SwiperSlide>
                <div className="slider-controler ">
                    <button className="swiper-button-prev slider-arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 swiper-button1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </button>
                    <div className="swiper-pagination"></div>

                        <div className="swiper-button-next slider-arrow">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 swiper-button2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </div>
                </div>
            </Swiper>

    );
}