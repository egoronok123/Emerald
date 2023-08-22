

import aboutImg from "../assets/aboutImg.png";
function WelcomeSect() {

    return (
        <section className="flex sm:flex-col mt-24 px-4">
            <img
                src={aboutImg}
                alt="img"
                className={"absolute hidden lg:hidden sm:top-[38rem] sm:right-[3rem] max-w-full"}
            />
            <div className="flex flex-col items-start bg-opacity-30 p-8 lg:w-1/2">
                <h3 className="text-lg font-semibold text-gray-1">О нас</h3>
                <p className="text-sm text-gray-1 mt-1">
                    Мы — команда вебов с многолетней экспертизой в вертикалях.
                    Протестировав большинство источников трафика, гео и прочувствовав на
                    себе все боли арбитражной сферы, мы объединили знания и опыт
                    воедино.
                </p>
            </div>
            <div className="flex flex-col items-start bg-opacity-30 p-8 lg:w-1/2 h-44 lg:ml-8 sm:mt-8 z-20">
                <h3 className="text-lg font-semibold text-gray-1">Наша цель</h3>
                <p className="text-sm text-gray-1 mt-1">
                    Мы cделаем всё чтобы вы могли зарабатывать больше и не думать о
                    проблемах. Оcтальное берем на себя!
                </p>
                <img
                    src={aboutImg}
                    alt="img"
                    className={"absolute lg:right-[-4.5rem] lg:top-[-4rem] sm:hidden max-w-full"}
                />
            </div>
        </section>
    );
}

export default WelcomeSect;