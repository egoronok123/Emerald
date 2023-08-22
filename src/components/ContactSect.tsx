import photo1 from "../assets/svg/photo.svg";
import telegram2 from "../assets/svg/Telegram2.svg";
import photo2 from "../assets/svg/photo2.svg";
import photo3 from "../assets/svg/photo3.svg";



function ContactSect() {

    return (
        <section id={'contacts'} className={'px-4'}>
            <h2 className="lg:text-4xl sm:text-2xl sm:font-black lg:font-bold  lg:mt-40 sm:mt-20 text-center">
                По вопросам <span className={"text-green-1"}> сотрудничества </span>
            </h2>
            <div className="flex lg:justify-between sm:flex-col mt-12 gap-7 ">
                <div className="flex  items-center bg-opacity-30 lg:w-[25rem]">
                    <img src={photo1} alt="img" className={""} />
                    <div>
                        <p>CEO</p>
                        <a
                            href={"https://t.me/mettamorg"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={"flex justify-center"}
                        >
                            <img src={telegram2} alt="img" className={" mr-2.5 "} />
                            <p>@Ivan</p>
                        </a>
                    </div>
                </div>
                <div className="flex  items-center bg-opacity-30 lg:w-[25rem]">
                    <img src={photo2} alt="img" className={""} />
                    <div>
                        <p>Manager</p>
                        <a
                            href={"https://t.me/mettamorg"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={"flex justify-center"}
                        >
                            <img src={telegram2} alt="img" className={" mr-2.5 "} />
                            <p>@Ivan</p>
                        </a>
                    </div>
                </div>
                <div className="flex  items-center bg-opacity-30 lg:w-[25rem]">
                    <img src={photo3} alt="img" className={""} />
                    <div>
                        <p>Manager</p>
                        <a
                            href={"https://t.me/mettamorg"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={"flex justify-center"}
                        >
                            <img src={telegram2} alt="img" className={" mr-2.5 "} />
                            <p>@Ivan</p>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactSect;

