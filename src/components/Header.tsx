import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import logoImg from "../assets/emerald_logo.svg";
import logoImg2 from "../assets/svg/EmeraldParners.svg";
import regImg from "../assets/Profile.svg";
import icon1 from "../assets/mobile/example1.svg";
import icon2 from "../assets/mobile/exapmle2.svg";


const Header = () => {
  // Состояние, которое отслеживает, прокручена ли страница или нет
  const [isScrolled, setIsScrolled] = useState(false);

  // Состояние для управления видимостью меню
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Функция обработки события прокрутки
  const handleScroll = () => {
    // Если вертикальная прокрутка больше 0, устанавливаем состояние isScrolled в true, иначе в false
    setIsScrolled(window.scrollY > 0);
  };

  // Функция для открытия/закрытия меню
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Добавляем и удаляем обработчик события прокрутки при монтировании и размонтировании компонента
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
      <header
          id="home"
          className={`fixed top-0 left-0 right-0 z-30   lg:w-full sm:header-mob 
          ${
              isScrolled ? "header-active" : ""
          } 
          ${
              isMenuOpen ? "" : ""
          }
          `}
      >
        <div
            onClick={toggleMenu}
            className={"absolute right-4 top-[1.1rem] cursor-pointer lg:hidden"}
        >
          <img
              src={isMenuOpen ? icon2 : icon1}
              alt="Icon"
              className="w-full h-full"
          />
        </div>
        <div
            className={
              "lg:flex   items-center lg:h-[4rem] lg:max-w-[73rem] mx-auto  text-white font-inter text-base"
            }
        >

          <div className="py-4 sm:ml-2 lg:w-1/4  items-center lg:flex lg:justify-start">
            <Link to="/ru/#start" className={"flex cursor-pointer"}>
              <img src={logoImg} alt="img" className={""} />
              <img src={logoImg2} alt="img" className={"ml-2"} />
            </Link>
          </div>

          <ul
              className={`py-4 text-white lg:flex lg:justify-center lg:gap-11 lg:ml-20 items-center lg:w-2/4  transition-all duration-500 ease-in ${
                  isMenuOpen ? "" : "sm:hidden"
              }`}
          >
            <Link to="/ru/#advantages">
              <li
                  className={
                    "ml-3 lg:ml-0 my-2 cursor-pointer lg:nav-link font-normal"
                  }
              >
                Преимущества
              </li>
            </Link>

            <Link to="/ru/#cases">
              <li
                  className={
                    "ml-3 lg:ml-0 my-2 cursor-pointer lg:nav-link font-normal"
                  }
              >
                Кейсы
              </li>
            </Link>

            <Link to="/ru/#faq">
              <li
                  className={
                    "ml-3 lg:ml-0 my-2 cursor-pointer lg:nav-link font-normal"
                  }
              >
                FAQ
              </li>
            </Link>
            <Link to="/ru/#contacts">
              <li
                  className={
                    "ml-3 lg:ml-0 my-2 cursor-pointer lg:nav-link  font-normal"
                  }
              >
                Контакты
              </li>
            </Link>
          </ul>
          <ul
              className={`py-4 px-4 lg:px-0 text-white flex justify-between lg:justify-end lg:w-1/3 items-center transition-all duration-500 ease-in ${
                  isMenuOpen ? "" : "sm:hidden"
              }`}
          >
            <Link to={"logIn"} className={""}>
              <li
                  className={
                    "my-2 cursor-pointer  flex  items-center hover-svg font-semibold"
                  }
              >
                <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    xmlns="http://www.w3.org/2000/svg"
                    className={"py-1 w-[1.6rem] h-[1.6rem] fill-current"}
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
                <p>Вход</p>
              </li>
            </Link>

            <Link to={"/ru/registration"} className={"ml-8  flex justify-center"}>
              <li
                  className={
                    "  py-1.5 lg:px-8 px-3 sm:w-48  border-2 border-solid border-blue-500 button-hover2 font-semibold rounded-md  cursor-pointer flex justify-center items-center "
                  }
              >
                <img src={regImg} alt="img" className={"w-18 mr-2.5 py-1"} />
                <p>Регистрация</p>
              </li>
            </Link>
          </ul>
        </div>


      </header>
  );
};

export default Header;
