import coin5 from "../assets/Coin5.png";
import coin6 from "../assets/Coin6.png";
import FaqItem from "./FaqItem.tsx";
import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import coinMob3 from "../assets/mobile/coinMob3.png";
import gsap from "gsap";


function FaqSect() {
    useEffect(() => {
        gsap.to('.coin6', {
            y: 30, // Движение вверх на 20 пикселей
            yoyo: true, // Повторять анимацию в обратном направлении
            repeat: -1, // Бесконечное повторение
            duration: 1, // Продолжительность одного цикла анимации в секундах
            ease: "linear", // Линейное перемещение
        });
    }, []);
    const [activeQuestionIndex, setActiveQuestionIndex] = useState<number | null>(
        null,
    );

    const handleQuestionClick = (index: number) => {
        setActiveQuestionIndex((prevIndex) => (prevIndex === index ? null : index));
    };
    const {t} = useTranslation();
    const faqData = [
        {
            question: `${t('faqSect.question1')}`,
            answer: `${t('faqSect.answer1')}`,

        },
        {
            question: `${t('faqSect.question2')}`,
            answer: `${t('faqSect.answer2')}`,

        },
        {
            question: `${t('faqSect.question3')}`,
            answer: `${t('faqSect.answer3')}`,

        },
        {
            question: `${t('faqSect.question4')}`,
            answer: `${t('faqSect.answer4')}`,

        },
        {
            question: `${t('faqSect.question5')}`,
            answer: `${t('faqSect.answer5')}`,

        },
        {
            question: `${t('faqSect.question6')}`,
            answer: `${t('faqSect.answer6')}`,

        },
        // Добавьте остальные вопросы и ответы
    ];
    return (
        <section id='faq' className={'max-w-5xl mx-auto lg:mt-40 sm:mt-24'}>
            <h2 className="lg:text-4xl sm:text-2xl sm:font-black lg:font-bold  tracking-wide text-center">FAQ</h2>

            <div className={'sm:hidden lg:visible ml-[-10rem] mb-[-17rem]'}>

                <img
                    src={coin5}
                    alt="img"
                    className={"absolute ml-[-1rem] mt-[11rem] z-10"}
                />
                <img
                    src={coin6}
                    alt="img"
                    className={"absolute coin6 ml-[-2rem] mt-[26rem] z-10"}
                />



                <svg xmlns="http://www.w3.org/2000/svg" width="201" height="1662" viewBox="0 0 201 1662" fill="none"
                     className={"line-container4"}>
                    <path
                        d="M98.834 1C-61.6659 100.5 178.834 140 138.834 235C98.8339 330 13.3096 442.536 10.3353 546.498C6.87379 667.489 152.334 738.671 152.334 821.999C152.334 885.72 23.671 854.498 10.3353 985.499C-3.00044 1116.5 163.499 1111.5 168.993 1222C174.546 1333.69 -6.00711 1361.5 1.81753 1454.5C9.64218 1547.5 267.317 1563.5 182.817 1660.5"
                        stroke="#264777" strokeWidth="2" strokeLinecap="round" strokeDasharray="12 12"/>
                </svg>
            </div>


            <div className="mx-auto p-8 px-4 lg:mt-72">
                <img
                    src={coinMob3}
                    alt="img"
                    className={"absolute  lg:hidden  right-[0rem] mt-[-4rem] max-w-full "}
                />
                {faqData.map((item, index) => (
                    <FaqItem
                        key={index}
                        question={item.question}
                        answer={item.answer}
                        isOpen={activeQuestionIndex === index}
                        onClick={() => handleQuestionClick(index)}
                    />
                ))}
            </div>
        </section>
    );
}

export default FaqSect;















