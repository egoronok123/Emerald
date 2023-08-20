
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

export default function App() {
    return (

            <Swiper
                effect={'coverflow'}
                centeredSlides={true}
                loop={true}
                slidesPerView={2}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 9.5,
                    depth: 100,
                    modifier: 5,
                }}
                pagination={{ el: '.swiper-pagination', clickable: true }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',

                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="swiper_container "
            >


                <SwiperSlide >
                    <div>
                        <img
                            src={map}
                            className={"imgMain mx-auto "}
                            alt={'image'}/>
                        <div  className="flex flex-col items-center bg-opacity-30-2  mx-auto  py-8">
                            <h2>Кейс на Латинскую Америку</h2>
                            <button
                                className={
                                    "bg-blue-500 hover:bg-blue-600 text-white   px-8 rounded-md cursor-pointer mt-5 "
                                }
                            >
                                <LinkRout
                                    to={"https://telegra.ph/Kejs-na-Latinskuyu-Ameriku-07-20-2" }
                                    target="_blank"
                                    className={"flex justify-center py-2"}
                                >
                                    <img src={telegram} alt="img" className={"w-18 mr-2.5 "} />
                                    <p>Читать статью</p>

                                </LinkRout>
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <img
                        src={map2}
                        className={" mx-auto"}
                        alt={'image'}/>
                </SwiperSlide>
                <SwiperSlide >
                    <img
                        src={map2}
                        className={" mx-auto"}
                        alt={'image'}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={map2}
                        className={" mx-auto"}
                        alt={'image'}/>
                </SwiperSlide>
                <SwiperSlide >
                    <img
                        src={map2}
                        className={" mx-auto"}
                        alt={'image'}/>
                </SwiperSlide>
                <SwiperSlide >
                    <img
                        src={map2}
                        className={" mx-auto"}
                        alt={'image'}/>
                </SwiperSlide>
                <div className="slider-controler ">
                    <button className="swiper-button-prev slider-arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </button>
                    <div className="swiper-pagination"></div>

                        <div className="swiper-button-next slider-arrow">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </div>




                </div>
            </Swiper>

    );
}