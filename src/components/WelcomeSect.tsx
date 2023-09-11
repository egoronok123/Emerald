import gsap from 'gsap';
import {Link} from "react-router-dom";
import {useEffect, useRef} from "react";
import emerald1 from "../assets/emerald1.png";
import emerald2 from "../assets/emerald2.png";
import coin1 from "../assets/Coin1.png";
import coin2 from "../assets/Coin2.png";
import coin3 from "../assets/Coin3.png";
import coinMob1 from "../assets/mobile/coinMob1.png";
import coinMob2 from "../assets/mobile/coinMob2.png";
import emeraldMob1 from "../assets/mobile/emeraldMob1.png";
import emeraldMob2 from "../assets/mobile/emeraldMob2.png";
import {useTranslation} from "react-i18next";

function WelcomeSect() {
    gsap.registerPlugin(ScrollTrigger)
    const {t} = useTranslation();

    const welcomeDivRef1 = useRef(null);
    const welcomeDivRef2 = useRef(null);
    const welcomeDivRef3 = useRef(null);
    useEffect(() => {



        const tl = gsap.timeline();
        tl.fromTo(
            welcomeDivRef1.current,
            {
                x: -100,
                opacity: 0,
                scale:1
            },
            {
                x: 0,
                opacity: 1,
                scale:1,
                duration: 0.5,
            },0.3
        ).fromTo(
            welcomeDivRef2.current,
            {
                y: 50,
                opacity: 0,
                scale:1
            },
            {
                y: 0,
                opacity: 1,
                scale:1,
                duration: 0.5,
            },0.3
        ).fromTo(
            welcomeDivRef3.current,
            {
                y: 50,
                opacity: 0,
                scale:1
            },
            {
                y: 0,
                opacity: 1,
                scale:1,
                duration: 0.5,
            },0.3
        ).fromTo(
            '.emeraldFirstGroup',
            {
                scale:0,
                opacity: 0
            },
            {
                opacity: 1,
                scale:1,
                stagger: 0.4
            },0.3
        ).fromTo(
            '.coinFirstGroup',
            {
                scale:0,
                opacity: 0
            },
            {
                opacity: 1,
                scale:1,
                stagger: 0.4
            },0.3
        ).fromTo(
            '.lineGsap',
            {
                opacity: 0,
                scale:1
            },
            {

                opacity: 1,
                scale:1,
                duration: 1,
            },1.2
        )
        gsap.to('.coin1', {
            y: -20, // Движение вверх на 20 пикселей
            yoyo: true, // Повторять анимацию в обратном направлении
            repeat: -1, // Бесконечное повторение
            duration: 1, // Продолжительность одного цикла анимации в секундах
            ease: "linear", // Линейное перемещение
        });
        gsap.to('.emerald2', {
            y: 20, // Движение вверх на 20 пикселей
            yoyo: true, // Повторять анимацию в обратном направлении
            repeat: -1, // Бесконечное повторение
            duration: 1, // Продолжительность одного цикла анимации в секундах
            ease: "linear", // Линейное перемещение
        });
        // gsap.to('.emerald1', {
        //     rotation: -30, // Движение вверх на 20 пикселей
        //     yoyo: true, // Повторять анимацию в обратном направлении
        //     repeat: -1, // Бесконечное повторение
        //     duration: 4, // Продолжительность одного цикла анимации в секундах
        //     ease: "linear", // Линейное перемещение
        // });
    }, []);




    return (
        <section className="flex sm:justify-start " id={"start"}>
        <div className="lg:hidden sm:visible ">
            <img
                src={emeraldMob1}
                alt="img"
                className={"absolute emeraldFirstGroup  ml-[rem]  mt-[rem] z-10"}
            />
            <img
                src={emeraldMob2}
                alt="img"
                className={"absolute emeraldFirstGroup ml-[9rem] mt-[3rem] z-10"}
            />
            <img
                src={coinMob1}
                alt="img"
                className={"absolute coinFirstGroup  ml-[21rem] mt-[6.5rem] z-10"}
            />
            <img
                src={coinMob2}
                alt="img"
                className={"absolute coinFirstGroup ml-[31rem] mt-[9.2rem] z-10"}
            />

            <div className={"line-container-mobile"}>
                <svg xmlns="http://www.w3.org/2000/svg" width="718" height="177" viewBox="0 0 718 177" fill="none" className={'lineGsap'}>
                    <path d="M169.454 85.8235L169.537 85.0781L169.454 85.8235ZM337.336 51.4617L336.818 50.9193L337.336 51.4617ZM321.607 12.0525L322.228 12.473L321.607 12.0525ZM592.5 171.5L592.644 172.236L592.5 171.5ZM357.5 109.5L358.126 109.087L357.5 109.5ZM717.292 133.191C717.673 133.03 717.852 132.59 717.691 132.208C717.53 131.827 717.09 131.648 716.708 131.809L717.292 133.191ZM-9.28321 3.85492C-8.9438 4.09235 -8.47617 4.00967 -8.23874 3.67026C-8.00132 3.33085 -8.08399 2.86323 -8.4234 2.6258L-9.28321 3.85492ZM-2.05109 6.95871C-2.39631 6.72981 -2.86173 6.8241 -3.09063 7.16932C-3.31953 7.51454 -3.22523 7.97996 -2.88001 8.20886L-2.05109 6.95871ZM3.66024 12.4569C4.00956 12.6795 4.47319 12.5768 4.6958 12.2275C4.91841 11.8782 4.81569 11.4145 4.46638 11.1919L3.66024 12.4569ZM11.0062 15.2919C10.6537 15.0743 10.1916 15.1837 9.97401 15.5361C9.75644 15.8886 9.86579 16.3507 10.2183 16.5683L11.0062 15.2919ZM16.8567 20.609C17.2118 20.8223 17.6725 20.7073 17.8858 20.3522C18.099 19.9971 17.984 19.5363 17.6289 19.3231L16.8567 20.609ZM24.3076 23.2835C23.9502 23.0741 23.4908 23.1941 23.2814 23.5516C23.0721 23.909 23.1921 24.3684 23.5495 24.5778L24.3076 23.2835ZM30.2606 28.4632C30.62 28.669 31.0783 28.5444 31.284 28.1849C31.4898 27.8254 31.3652 27.3672 31.0057 27.1614L30.2606 28.4632ZM37.7426 30.9746C37.3812 30.7723 36.9242 30.9013 36.7219 31.2627C36.5195 31.6242 36.6485 32.0812 37.0099 32.2835L37.7426 30.9746ZM43.7989 36.0428C44.1621 36.2418 44.618 36.1086 44.8169 35.7453C45.0159 35.382 44.8827 34.9262 44.5195 34.7272L43.7989 36.0428ZM51.3324 38.4187C50.9673 38.223 50.5127 38.3603 50.3171 38.7254C50.1214 39.0905 50.2587 39.5451 50.6238 39.7408L51.3324 38.4187ZM57.4829 43.3767C57.8498 43.569 58.3031 43.4275 58.4954 43.0607C58.6877 42.6938 58.5462 42.2405 58.1794 42.0482L57.4829 43.3767ZM65.0596 45.6143C64.6909 45.4254 64.239 45.5712 64.0501 45.9398C63.8612 46.3084 64.0069 46.7604 64.3755 46.9493L65.0596 45.6143ZM71.3016 50.4564C71.6721 50.6417 72.1226 50.4917 72.3079 50.1212C72.4933 49.7508 72.3432 49.3002 71.9728 49.1149L71.3016 50.4564ZM78.9194 52.5469C78.5471 52.3653 78.0981 52.5199 77.9165 52.8922C77.7349 53.2645 77.8895 53.7135 78.2618 53.8951L78.9194 52.5469ZM85.257 57.2613C85.6312 57.4389 86.0785 57.2795 86.2561 56.9053C86.4337 56.531 86.2743 56.0837 85.9001 55.9061L85.257 57.2613ZM92.916 59.1873C92.5398 59.014 92.0943 59.1785 91.921 59.5548C91.7477 59.931 91.9122 60.3764 92.2884 60.5497L92.916 59.1873ZM99.3577 63.7538C99.736 63.9224 100.179 63.7524 100.348 63.374C100.517 62.9957 100.347 62.5523 99.9683 62.3837L99.3577 63.7538ZM107.061 65.4876C106.68 65.3241 106.239 65.5002 106.076 65.8808C105.912 66.2614 106.088 66.7025 106.469 66.8659L107.061 65.4876ZM113.633 69.8783C114.016 70.0359 114.454 69.8531 114.612 69.4701C114.769 69.087 114.586 68.6487 114.203 68.4911L113.633 69.8783ZM121.394 71.378C121.008 71.2271 120.573 71.4175 120.422 71.8032C120.271 72.189 120.461 72.624 120.847 72.7749L121.394 71.378ZM128.115 75.5371C128.504 75.6803 128.935 75.4812 129.078 75.0925C129.221 74.7039 129.022 74.2727 128.634 74.1295L128.115 75.5371ZM135.924 76.7203C135.532 76.5863 135.106 76.7955 134.972 77.1875C134.838 77.5794 135.047 78.0057 135.439 78.1397L135.924 76.7203ZM142.817 80.548C143.212 80.6707 143.633 80.4494 143.755 80.0538C143.878 79.6582 143.657 79.238 143.261 79.1153L142.817 80.548ZM150.69 81.28C150.29 81.1716 149.878 81.4077 149.769 81.8075C149.661 82.2073 149.897 82.6192 150.297 82.7277L150.69 81.28ZM157.867 84.6014C158.272 84.691 158.672 84.4358 158.762 84.0314C158.851 83.627 158.596 83.2265 158.192 83.1369L157.867 84.6014ZM165.749 84.5722C165.34 84.5089 164.957 84.7895 164.893 85.1988C164.83 85.6082 165.111 85.9913 165.52 86.0546L165.749 84.5722ZM173.308 86.9377C173.721 86.9707 174.083 86.6627 174.116 86.2498C174.148 85.8369 173.84 85.4754 173.428 85.4425L173.308 86.9377ZM181.39 85.9291C180.977 85.9102 180.626 86.2304 180.607 86.6442C180.588 87.0579 180.908 87.4087 181.322 87.4276L181.39 85.9291ZM189.295 87.6944C189.709 87.7036 190.052 87.3754 190.062 86.9613C190.071 86.5471 189.743 86.204 189.328 86.1948L189.295 87.6944ZM197.272 86.2905C196.858 86.2896 196.522 86.6246 196.521 87.0388C196.52 87.4531 196.855 87.7896 197.269 87.7905L197.272 86.2905ZM205.282 87.733C205.696 87.7261 206.027 87.3849 206.02 86.9707C206.013 86.5565 205.672 86.2263 205.257 86.2332L205.282 87.733ZM213.187 86.0302C212.773 86.0445 212.449 86.3918 212.464 86.8057C212.478 87.2197 212.825 87.5436 213.239 87.5293L213.187 86.0302ZM221.226 87.1784C221.64 87.1564 221.957 86.8032 221.935 86.3896C221.913 85.976 221.56 85.6585 221.146 85.6805L221.226 87.1784ZM229.088 85.1826C228.675 85.2124 228.364 85.5716 228.394 85.9847C228.424 86.3978 228.783 86.7085 229.196 86.6786L229.088 85.1826ZM237.148 86.0245C237.561 85.9864 237.864 85.6211 237.826 85.2087C237.788 84.7962 237.423 84.4927 237.01 84.5309L237.148 86.0245ZM244.925 83.7158C244.513 83.7626 244.218 84.1342 244.265 84.5458C244.311 84.9573 244.683 85.253 245.095 85.2061L244.925 83.7158ZM253.024 84.213C253.435 84.1568 253.722 83.7785 253.665 83.3681C253.609 82.9578 253.231 82.6706 252.821 82.7269L253.024 84.213ZM260.683 81.5518C260.274 81.6181 259.997 82.0034 260.063 82.4123C260.13 82.8211 260.515 83.0988 260.924 83.0324L260.683 81.5518ZM268.793 81.6466C269.2 81.5692 269.467 81.1765 269.39 80.7696C269.312 80.3627 268.919 80.0956 268.513 80.1731L268.793 81.6466ZM276.297 78.571C275.893 78.6608 275.638 79.0613 275.727 79.4657C275.817 79.8701 276.218 80.1252 276.622 80.0354L276.297 78.571ZM284.395 78.1749C284.796 78.0716 285.038 77.6626 284.934 77.2615C284.831 76.8604 284.422 76.619 284.021 76.7224L284.395 78.1749ZM291.671 74.5971C291.274 74.7158 291.049 75.1337 291.168 75.5305C291.286 75.9274 291.704 76.1529 292.101 76.0342L291.671 74.5971ZM299.723 73.575C300.114 73.439 300.321 73.0115 300.185 72.6203C300.049 72.2291 299.621 72.0222 299.23 72.1583L299.723 73.575ZM306.653 69.3681C306.269 69.5239 306.084 69.9614 306.24 70.3452C306.396 70.7289 306.833 70.9137 307.217 70.7579L306.653 69.3681ZM314.539 67.5329C314.913 67.3544 315.071 66.9067 314.893 66.5329C314.714 66.1592 314.266 66.0009 313.893 66.1794L314.539 67.5329ZM320.924 62.5165C320.564 62.7212 320.438 63.1791 320.643 63.5392C320.848 63.8993 321.306 64.0252 321.666 63.8205L320.924 62.5165ZM328.473 59.5696C328.815 59.335 328.901 58.8681 328.667 58.5267C328.432 58.1854 327.965 58.0988 327.624 58.3333L328.473 59.5696ZM333.897 53.5489C333.581 53.817 333.543 54.2903 333.811 54.606C334.079 54.9217 334.552 54.9602 334.868 54.692L333.897 53.5489ZM340.892 48.9768C341.178 48.678 341.169 48.2032 340.87 47.9164C340.571 47.6295 340.096 47.6393 339.809 47.9381L340.892 48.9768ZM345.3 41.6007C345.046 41.9285 345.107 42.3995 345.435 42.6527C345.763 42.9058 346.234 42.8453 346.487 42.5174L345.3 41.6007ZM351.227 35.4036C351.429 35.042 351.3 34.5851 350.938 34.383C350.577 34.181 350.12 34.3103 349.918 34.6719L351.227 35.4036ZM353.21 27.0733C353.09 27.4698 353.315 27.8883 353.711 28.0082C354.108 28.128 354.526 27.9037 354.646 27.5072L353.21 27.0733ZM355.867 18.9337C355.854 18.5197 355.508 18.1948 355.094 18.208C354.68 18.2212 354.355 18.5676 354.368 18.9816L355.867 18.9337ZM352.373 11.1991C352.568 11.5644 353.022 11.7021 353.388 11.5068C353.753 11.3115 353.891 10.857 353.695 10.4918L352.373 11.1991ZM347.71 4.10922C347.358 3.89134 346.895 4.00028 346.678 4.35256C346.46 4.70483 346.569 5.16704 346.921 5.38493L347.71 4.10922ZM339.279 3.03559C339.693 3.05585 340.044 2.7369 340.065 2.32318C340.085 1.90946 339.766 1.55765 339.352 1.53739L339.279 3.03559ZM330.776 3.16414C330.398 3.33159 330.226 3.77446 330.394 4.15332C330.561 4.53218 331.004 4.70356 331.383 4.53611L330.776 3.16414ZM324.8 9.25559C325.085 8.95485 325.072 8.48015 324.771 8.19532C324.471 7.91049 323.996 7.92338 323.711 8.22412L324.8 9.25559ZM318.957 15.0943C318.772 15.4648 318.923 15.9153 319.293 16.1004C319.664 16.2856 320.114 16.1353 320.299 15.7647L318.957 15.0943ZM317.855 22.9475C317.935 22.5411 317.671 22.1466 317.265 22.0665C316.858 21.9863 316.464 22.2507 316.384 22.6571L317.855 22.9475ZM315.789 30.6096C315.804 31.0236 316.152 31.347 316.565 31.3319C316.979 31.3169 317.303 30.9692 317.288 30.5552L315.789 30.6096ZM318.26 38.1656C318.174 37.7604 317.776 37.5012 317.371 37.5868C316.966 37.6724 316.707 38.0703 316.792 38.4756L318.26 38.1656ZM318.921 46.0894C319.055 46.4813 319.482 46.6901 319.874 46.5559C320.265 46.4217 320.474 45.9952 320.34 45.6033L318.921 46.0894ZM323.182 52.8101C323.014 52.4312 322.571 52.2599 322.193 52.4274C321.814 52.5948 321.642 53.0377 321.81 53.4166L323.182 52.8101ZM325.223 60.5031C325.414 60.8709 325.866 61.0145 326.234 60.8239C326.602 60.6334 326.745 60.1807 326.555 59.813L325.223 60.5031ZM330.299 66.6401C330.092 66.2812 329.634 66.1579 329.275 66.3647C328.916 66.5715 328.792 67.0301 328.999 67.389L330.299 66.6401ZM333.029 74.1168C333.247 74.4689 333.709 74.5775 334.061 74.3593C334.414 74.1412 334.522 73.6789 334.304 73.3268L333.029 74.1168ZM338.491 79.9085C338.265 79.5613 337.8 79.463 337.453 79.6889C337.106 79.9149 337.007 80.3794 337.233 80.7266L338.491 79.9085ZM341.552 87.2542C341.783 87.5982 342.249 87.69 342.593 87.4592C342.937 87.2285 343.029 86.7625 342.798 86.4186L341.552 87.2542ZM347.176 92.8883C346.943 92.5459 346.476 92.4573 346.134 92.6904C345.792 92.9235 345.703 93.39 345.936 93.7324L347.176 92.8883ZM350.338 100.192C350.571 100.534 351.038 100.623 351.38 100.39C351.722 100.157 351.811 99.6904 351.578 99.348L350.338 100.192ZM355.959 105.829C355.728 105.484 355.263 105.392 354.918 105.623C354.574 105.853 354.482 106.319 354.712 106.663L355.959 105.829ZM359.152 113.186C359.397 113.52 359.866 113.593 360.2 113.348C360.534 113.103 360.607 112.633 360.362 112.299L359.152 113.186ZM365.292 118.404C365.017 118.094 364.543 118.065 364.233 118.339C363.923 118.614 363.894 119.088 364.168 119.398L365.292 118.404ZM369.707 125.145C370.006 125.431 370.481 125.42 370.767 125.121C371.054 124.821 371.043 124.347 370.744 124.06L369.707 125.145ZM376.629 129.278C376.31 129.014 375.837 129.06 375.574 129.38C375.31 129.7 375.356 130.172 375.676 130.436L376.629 129.278ZM381.996 135.293C382.332 135.535 382.801 135.458 383.043 135.122C383.284 134.785 383.207 134.316 382.871 134.075L381.996 135.293ZM389.403 138.478C389.053 138.256 388.589 138.36 388.368 138.71C388.146 139.06 388.25 139.523 388.6 139.745L389.403 138.478ZM395.435 143.822C395.797 144.025 396.254 143.896 396.457 143.535C396.66 143.174 396.532 142.717 396.171 142.514L395.435 143.822ZM403.132 146.213C402.762 146.027 402.311 146.176 402.125 146.546C401.939 146.916 402.089 147.367 402.459 147.553L403.132 146.213ZM409.636 150.968C410.014 151.138 410.458 150.97 410.628 150.592C410.798 150.215 410.63 149.771 410.253 149.6L409.636 150.968ZM417.505 152.702C417.121 152.546 416.684 152.731 416.528 153.115C416.373 153.499 416.558 153.936 416.941 154.092L417.505 152.702ZM424.353 156.947C424.742 157.089 425.173 156.889 425.315 156.5C425.458 156.111 425.258 155.681 424.869 155.538L424.353 156.947ZM432.325 158.13C431.931 158 431.507 158.214 431.377 158.607C431.248 159.001 431.461 159.425 431.855 159.554L432.325 158.13ZM439.431 161.931C439.828 162.049 440.246 161.823 440.364 161.426C440.482 161.029 440.256 160.612 439.859 160.493L439.431 161.931ZM447.461 162.643C447.061 162.536 446.649 162.773 446.542 163.173C446.435 163.573 446.672 163.985 447.072 164.092L447.461 162.643ZM454.767 166.05C455.17 166.147 455.575 165.899 455.672 165.497C455.769 165.094 455.521 164.689 455.119 164.592L454.767 166.05ZM462.824 166.35C462.419 166.263 462.02 166.52 461.933 166.925C461.845 167.33 462.103 167.729 462.508 167.817L462.824 166.35ZM470.287 169.401C470.693 169.479 471.086 169.212 471.164 168.805C471.242 168.398 470.976 168.005 470.569 167.927L470.287 169.401ZM478.348 169.331C477.939 169.262 477.552 169.537 477.483 169.945C477.414 170.354 477.689 170.741 478.097 170.81L478.348 169.331ZM485.934 172.051C486.344 172.112 486.725 171.828 486.786 171.419C486.846 171.009 486.563 170.628 486.153 170.567L485.934 172.051ZM493.982 171.641C493.571 171.589 493.195 171.88 493.143 172.291C493.091 172.702 493.382 173.077 493.793 173.129L493.982 171.641ZM501.676 174.049C502.088 174.093 502.458 173.795 502.502 173.383C502.546 172.971 502.247 172.601 501.835 172.558L501.676 174.049ZM509.707 173.318C509.294 173.282 508.931 173.588 508.895 174C508.859 174.413 509.165 174.776 509.577 174.812L509.707 173.318ZM517.492 175.42C517.905 175.447 518.263 175.135 518.29 174.721C518.318 174.308 518.005 173.95 517.592 173.923L517.492 175.42ZM525.487 174.372C525.074 174.353 524.722 174.672 524.703 175.086C524.684 175.5 525.003 175.851 525.417 175.87L525.487 174.372ZM533.349 176.163C533.763 176.174 534.108 175.847 534.119 175.433C534.13 175.019 533.804 174.674 533.389 174.663L533.349 176.163ZM541.295 174.792C540.881 174.79 540.543 175.124 540.541 175.538C540.538 175.952 540.872 176.29 541.286 176.292L541.295 174.792ZM549.224 176.252C549.638 176.245 549.969 175.904 549.962 175.49C549.955 175.076 549.614 174.745 549.2 174.752L549.224 176.252ZM557.1 174.533C556.686 174.549 556.364 174.898 556.38 175.312C556.396 175.726 556.745 176.048 557.159 176.032L557.1 174.533ZM565.085 175.617C565.498 175.59 565.811 175.233 565.784 174.82C565.757 174.407 565.4 174.093 564.987 174.12L565.085 175.617ZM572.85 173.495C572.437 173.534 572.134 173.9 572.173 174.312C572.212 174.725 572.578 175.027 572.991 174.988L572.85 173.495ZM580.877 174.115C581.287 174.062 581.578 173.686 581.525 173.275C581.472 172.864 581.097 172.574 580.686 172.627L580.877 174.115ZM588.521 171.464C588.113 171.533 587.838 171.921 587.908 172.329C587.977 172.737 588.365 173.012 588.773 172.942L588.521 171.464ZM596.651 171.432C597.056 171.348 597.318 170.952 597.234 170.546C597.15 170.14 596.754 169.879 596.348 169.963L596.651 171.432ZM604.319 168.241C603.915 168.332 603.662 168.734 603.753 169.138C603.844 169.542 604.245 169.796 604.649 169.705L604.319 168.241ZM612.613 167.836C613.015 167.738 613.262 167.333 613.164 166.93C613.066 166.528 612.66 166.281 612.258 166.379L612.613 167.836ZM620.166 164.389C619.765 164.493 619.525 164.902 619.629 165.303C619.733 165.704 620.142 165.945 620.543 165.841L620.166 164.389ZM628.446 163.729C628.846 163.619 629.081 163.207 628.971 162.807C628.861 162.408 628.449 162.173 628.049 162.283L628.446 163.729ZM635.9 160.072C635.502 160.187 635.273 160.602 635.387 161C635.502 161.398 635.918 161.628 636.316 161.513L635.9 160.072ZM644.159 159.199C644.556 159.079 644.781 158.661 644.661 158.264C644.541 157.867 644.123 157.643 643.726 157.762L644.159 159.199ZM651.525 155.363C651.13 155.487 650.91 155.908 651.034 156.303C651.158 156.698 651.579 156.918 651.974 156.794L651.525 155.363ZM659.762 154.304C660.156 154.176 660.371 153.753 660.243 153.359C660.115 152.965 659.692 152.75 659.298 152.878L659.762 154.304ZM667.04 150.315C666.648 150.447 666.436 150.872 666.569 151.265C666.701 151.657 667.126 151.868 667.519 151.736L667.04 150.315ZM675.263 149.087C675.654 148.951 675.861 148.523 675.725 148.132C675.589 147.741 675.162 147.534 674.771 147.67L675.263 149.087ZM682.463 144.955C682.073 145.095 681.87 145.524 682.01 145.914C682.15 146.304 682.579 146.507 682.969 146.367L682.463 144.955ZM690.648 143.576C691.037 143.432 691.235 143.001 691.092 142.613C690.949 142.224 690.517 142.025 690.129 142.168L690.648 143.576ZM697.78 139.304C697.393 139.451 697.198 139.885 697.346 140.272C697.493 140.659 697.926 140.854 698.313 140.707L697.78 139.304ZM705.927 137.771C706.312 137.62 706.503 137.185 706.352 136.799C706.201 136.413 705.765 136.223 705.38 136.374L705.927 137.771ZM712.982 133.344C712.598 133.5 712.413 133.938 712.569 134.322C712.725 134.705 713.163 134.89 713.546 134.734L712.982 133.344ZM-12.4405 1.60699C-11.4406 2.33266 -10.3872 3.08261 -9.28321 3.85492L-8.4234 2.6258C-9.52098 1.85801 -10.5672 1.11312 -11.5595 0.393008L-12.4405 1.60699ZM-2.88001 8.20886C-0.815905 9.57749 1.36811 10.9962 3.66024 12.4569L4.46638 11.1919C2.18121 9.73562 0.00482489 8.3219 -2.05109 6.95871L-2.88001 8.20886ZM10.2183 16.5683C12.3608 17.8909 14.5761 19.2395 16.8567 20.609L17.6289 19.3231C15.3534 17.9566 13.1433 16.6111 11.0062 15.2919L10.2183 16.5683ZM23.5495 24.5778C25.74 25.8609 27.9789 27.1573 30.2606 28.4632L31.0057 27.1614C28.7283 25.8579 26.4937 24.564 24.3076 23.2835L23.5495 24.5778ZM37.0099 32.2835C39.2413 33.5326 41.5059 34.7868 43.7989 36.0428L44.5195 34.7272C42.2306 33.4735 39.97 32.2215 37.7426 30.9746L37.0099 32.2835ZM50.6238 39.7408C52.8896 40.9551 55.1775 42.1681 57.4829 43.3767L58.1794 42.0482C55.878 40.8417 53.5942 39.6309 51.3324 38.4187L50.6238 39.7408ZM64.3755 46.9493C66.6728 48.1264 68.9829 49.2964 71.3016 50.4564L71.9728 49.1149C69.6584 47.9571 67.3526 46.7893 65.0596 45.6143L64.3755 46.9493ZM78.2618 53.8951C80.5904 55.0308 82.9235 56.1538 85.257 57.2613L85.9001 55.9061C83.5716 54.8011 81.2433 53.6804 78.9194 52.5469L78.2618 53.8951ZM92.2884 60.5497C94.6502 61.6377 97.0081 62.7067 99.3577 63.7538L99.9683 62.3837C97.6246 61.3392 95.2724 60.2728 92.916 59.1873L92.2884 60.5497ZM106.469 66.8659C108.872 67.8976 111.262 68.9029 113.633 69.8783L114.203 68.4911C111.84 67.5187 109.457 66.5164 107.061 65.4876L106.469 66.8659ZM120.847 72.7749C123.297 73.7335 125.722 74.6555 128.115 75.5371L128.634 74.1295C126.25 73.2516 123.835 72.3332 121.394 71.378L120.847 72.7749ZM135.439 78.1397C137.943 78.9955 140.405 79.7998 142.817 80.548L143.261 79.1153C140.864 78.3717 138.416 77.5718 135.924 76.7203L135.439 78.1397ZM150.297 82.7277C152.896 83.4327 155.423 84.0596 157.867 84.6014L158.192 83.1369C155.772 82.6008 153.268 81.9796 150.69 81.28L150.297 82.7277ZM165.52 86.0546C166.836 86.2581 168.12 86.43 169.371 86.5689L169.537 85.0781C168.309 84.9417 167.045 84.7727 165.749 84.5722L165.52 86.0546ZM169.371 86.5689C170.508 86.695 171.825 86.8194 173.308 86.9377L173.428 85.4425C171.957 85.3251 170.655 85.2022 169.537 85.0781L169.371 86.5689ZM181.322 87.4276C183.768 87.5391 186.435 87.6309 189.295 87.6944L189.328 86.1948C186.48 86.1315 183.824 86.0401 181.39 85.9291L181.322 87.4276ZM197.269 87.7905C199.837 87.7963 202.513 87.7786 205.282 87.733L205.257 86.2332C202.498 86.2786 199.831 86.2963 197.272 86.2905L197.269 87.7905ZM213.239 87.5293C215.844 87.4388 218.51 87.323 221.226 87.1784L221.146 85.6805C218.44 85.8246 215.783 85.9401 213.187 86.0302L213.239 87.5293ZM229.196 86.6786C231.816 86.4892 234.469 86.272 237.148 86.0245L237.01 84.5309C234.342 84.7774 231.698 84.9938 229.088 85.1826L229.196 86.6786ZM245.095 85.2061C247.725 84.9067 250.371 84.5764 253.024 84.213L252.821 82.7269C250.18 83.0887 247.545 83.4175 244.925 83.7158L245.095 85.2061ZM260.924 83.0324C263.551 82.6059 266.177 82.1448 268.793 81.6466L268.513 80.1731C265.91 80.6686 263.298 81.1274 260.683 81.5518L260.924 83.0324ZM276.622 80.0354C279.233 79.4561 281.827 78.8367 284.395 78.1749L284.021 76.7224C281.47 77.3797 278.893 77.9951 276.297 78.571L276.622 80.0354ZM292.101 76.0342C294.68 75.2628 297.224 74.4439 299.723 73.575L299.23 72.1583C296.753 73.0195 294.231 73.8316 291.671 74.5971L292.101 76.0342ZM307.217 70.7579C309.72 69.7415 312.164 68.6675 314.539 67.5329L313.893 66.1794C311.546 67.3002 309.13 68.3622 306.653 69.3681L307.217 70.7579ZM321.666 63.8205C324.029 62.4772 326.302 61.0614 328.473 59.5696L327.624 58.3333C325.49 59.7993 323.253 61.1926 320.924 62.5165L321.666 63.8205ZM334.868 54.692C335.896 53.8186 336.892 52.9228 337.854 52.004L336.818 50.9193C335.878 51.8172 334.904 52.6936 333.897 53.5489L334.868 54.692ZM337.854 52.004C338.92 50.9858 339.932 49.9765 340.892 48.9768L339.809 47.9381C338.865 48.9216 337.869 49.9156 336.818 50.9193L337.854 52.004ZM346.487 42.5174C348.375 40.0725 349.945 37.6978 351.227 35.4036L349.918 34.6719C348.675 36.8957 347.146 39.2089 345.3 41.6007L346.487 42.5174ZM354.646 27.5072C355.574 24.4377 355.951 21.5677 355.867 18.9337L354.368 18.9816C354.446 21.4367 354.095 24.1439 353.21 27.0733L354.646 27.5072ZM353.695 10.4918C352.25 7.78816 350.17 5.63059 347.71 4.10922L346.921 5.38493C349.161 6.77031 351.054 8.73385 352.373 11.1991L353.695 10.4918ZM339.352 1.53739C336.527 1.39902 333.596 1.91806 330.776 3.16414L331.383 4.53611C333.99 3.38385 336.689 2.90873 339.279 3.03559L339.352 1.53739ZM323.711 8.22412C322.75 9.23875 321.837 10.3735 320.985 11.6321L322.228 12.473C323.035 11.2797 323.897 10.209 324.8 9.25559L323.711 8.22412ZM320.985 11.6321C320.22 12.7626 319.546 13.9172 318.957 15.0943L320.299 15.7647C320.858 14.6472 321.499 13.5496 322.228 12.473L320.985 11.6321ZM316.384 22.6571C315.874 25.2387 315.69 27.8941 315.789 30.6096L317.288 30.5552C317.193 27.9429 317.371 25.4041 317.855 22.9475L316.384 22.6571ZM316.792 38.4756C317.321 40.9763 318.04 43.517 318.921 46.0894L320.34 45.6033C319.476 43.0801 318.774 40.5985 318.26 38.1656L316.792 38.4756ZM321.81 53.4166C322.846 55.7593 323.99 58.1234 325.223 60.5031L326.555 59.813C325.334 57.4568 324.203 55.1207 323.182 52.8101L321.81 53.4166ZM328.999 67.389C330.287 69.6233 331.635 71.8675 333.029 74.1168L334.304 73.3268C332.917 71.0887 331.577 68.8585 330.299 66.6401L328.999 67.389ZM337.233 80.7266C338.649 82.9025 340.094 85.0798 341.552 87.2542L342.798 86.4186C341.342 84.2483 339.902 82.077 338.491 79.9085L337.233 80.7266ZM345.936 93.7324C347.409 95.8969 348.877 98.0444 350.338 100.192L351.578 99.348C350.12 97.2059 348.644 95.0444 347.176 92.8883L345.936 93.7324ZM354.712 106.663C355.441 107.75 356.162 108.834 356.874 109.913L358.126 109.087C357.411 108.005 356.689 106.918 355.959 105.829L354.712 106.663ZM356.874 109.913C357.604 111.02 358.364 112.111 359.152 113.186L360.362 112.299C359.588 111.244 358.842 110.173 358.126 109.087L356.874 109.913ZM364.168 119.398C365.917 121.373 367.765 123.288 369.707 125.145L370.744 124.06C368.831 122.231 367.011 120.346 365.292 118.404L364.168 119.398ZM375.676 130.436C377.705 132.107 379.814 133.726 381.996 135.293L382.871 134.075C380.715 132.526 378.632 130.927 376.629 129.278L375.676 130.436ZM388.6 139.745C390.819 141.149 393.099 142.508 395.435 143.822L396.171 142.514C393.856 141.213 391.598 139.867 389.403 138.478L388.6 139.745ZM402.459 147.553C404.806 148.732 407.2 149.87 409.636 150.968L410.253 149.6C407.834 148.511 405.459 147.382 403.132 146.213L402.459 147.553ZM416.941 154.092C419.378 155.08 421.85 156.031 424.353 156.947L424.869 155.538C422.381 154.628 419.925 153.683 417.505 152.702L416.941 154.092ZM431.855 159.554C434.356 160.38 436.882 161.172 439.431 161.931L439.859 160.493C437.324 159.738 434.811 158.951 432.325 158.13L431.855 159.554ZM447.072 164.092C449.621 164.776 452.187 165.428 454.767 166.05L455.119 164.592C452.551 163.973 449.997 163.324 447.461 162.643L447.072 164.092ZM462.508 167.817C465.092 168.374 467.686 168.902 470.287 169.401L470.569 167.927C467.98 167.431 465.397 166.905 462.824 166.35L462.508 167.817ZM478.097 170.81C480.708 171.252 483.322 171.665 485.934 172.051L486.153 170.567C483.551 170.183 480.948 169.771 478.348 169.331L478.097 170.81ZM493.793 173.129C496.427 173.463 499.056 173.77 501.676 174.049L501.835 172.558C499.225 172.279 496.606 171.974 493.982 171.641L493.793 173.129ZM509.577 174.812C512.23 175.042 514.87 175.244 517.492 175.42L517.592 173.923C514.979 173.748 512.35 173.547 509.707 173.318L509.577 174.812ZM525.417 175.87C528.085 175.996 530.731 176.093 533.349 176.163L533.389 174.663C530.781 174.594 528.146 174.497 525.487 174.372L525.417 175.87ZM541.286 176.292C543.969 176.308 546.617 176.294 549.224 176.252L549.2 174.752C546.604 174.794 543.967 174.808 541.295 174.792L541.286 176.292ZM557.159 176.032C559.855 175.925 562.499 175.786 565.085 175.617L564.987 174.12C562.415 174.289 559.783 174.426 557.1 174.533L557.159 176.032ZM572.991 174.988C575.701 174.733 578.333 174.441 580.877 174.115L580.686 172.627C578.159 172.951 575.545 173.241 572.85 173.495L572.991 174.988ZM588.773 172.942C590.094 172.717 591.385 172.482 592.644 172.236L592.356 170.764C591.11 171.007 589.831 171.241 588.521 171.464L588.773 172.942ZM592.644 172.236C593.977 171.976 595.313 171.707 596.651 171.432L596.348 169.963C595.016 170.237 593.685 170.504 592.356 170.764L592.644 172.236ZM604.649 169.705C607.306 169.105 609.962 168.481 612.613 167.836L612.258 166.379C609.615 167.022 606.967 167.644 604.319 168.241L604.649 169.705ZM620.543 165.841C623.191 165.153 625.828 164.448 628.446 163.729L628.049 162.283C625.437 163 622.807 163.703 620.166 164.389L620.543 165.841ZM636.316 161.513C638.958 160.751 641.575 159.978 644.159 159.199L643.726 157.762C641.147 158.54 638.536 159.311 635.9 160.072L636.316 161.513ZM651.974 156.794C654.615 155.965 657.214 155.134 659.762 154.304L659.298 152.878C656.754 153.706 654.161 154.536 651.525 155.363L651.974 156.794ZM667.519 151.736C670.172 150.843 672.757 149.958 675.263 149.087L674.771 147.67C672.269 148.539 669.688 149.423 667.04 150.315L667.519 151.736ZM682.969 146.367C685.651 145.407 688.215 144.473 690.648 143.576L690.129 142.168C687.701 143.064 685.14 143.996 682.463 144.955L682.969 146.367ZM698.313 140.707C701.125 139.639 703.674 138.653 705.927 137.771L705.38 136.374C703.132 137.254 700.587 138.238 697.78 139.304L698.313 140.707ZM713.546 134.734C714.76 134.241 715.696 133.855 716.328 133.593C716.645 133.462 716.885 133.362 717.047 133.294C717.128 133.26 717.189 133.234 717.23 133.217C717.25 133.208 717.266 133.202 717.276 133.198C717.281 133.195 717.285 133.194 717.288 133.193C717.289 133.192 717.29 133.192 717.291 133.191C717.291 133.191 717.291 133.191 717.292 133.191C717.292 133.191 717.292 133.191 717.292 133.191C717.292 133.191 717.292 133.191 717.292 133.191C717.292 133.191 717.292 133.191 717 132.5C716.708 131.809 716.708 131.809 716.708 131.809C716.708 131.809 716.708 131.809 716.708 131.809C716.708 131.809 716.708 131.809 716.708 131.809C716.708 131.809 716.708 131.809 716.707 131.809C716.707 131.81 716.706 131.81 716.705 131.811C716.702 131.812 716.698 131.813 716.693 131.815C716.683 131.82 716.668 131.826 716.648 131.834C716.608 131.851 716.547 131.877 716.467 131.91C716.307 131.977 716.068 132.077 715.754 132.208C715.124 132.469 714.192 132.853 712.982 133.344L713.546 134.734Z" fill="#3F72BD"/>
                </svg>
            </div>
        </div>
            <div className={"lg:w-8/12  lg:mt-36 sm:mt-48 flex flex-col px-4"}>
                <h2 className="lg:text-5xl sm:text-[2.125rem] sm2:text-4xl  sm3:text-5xl lg:font-bold sm:max-w-[22rem] sm2:max-w-[32rem] sm3:max-w-[40rem] lg:max-w-[40rem] sm:font-bold mb-4 leading-[1.2] tracking-wide "
                    ref={welcomeDivRef1}>
                    {t('welcomeSect.mainText')}<br/>
                <span className={"text-green-1"}> Emerald Partners </span>
            </h2>
            <h3 className="font-normal lg:text-base sm:text-sm text-gray-300 mb-2 tracking-wide"
                ref={welcomeDivRef2}>
                {t('welcomeSect.subText')}
            </h3>

            <button
                className={
                    " text-white font-bold    rounded-md cursor-pointer mt-11 tracking-wide  button-hover button-link w-52 btn-5"
                }
                ref={welcomeDivRef3}
            >
                <Link
                    to={"registration"}
                    className={"flex justify-center py-4 px-1 "}
                >
                    <p className={"ml-4"}>  {t('welcomeSect.buttonText')}</p>

                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={"ml-2.5 svg1"}
                    >
                        <path
                            d="M8.5 5L15.5 12L8.5 19"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>

                </Link>
            </button>
        </div>
        <div className="sm:hidden lg:visible lg:w-5/12">
            <img
                src={emerald1}
                alt="img"
                className={" absolute emerald1 emeraldFirstGroup ml-[2rem] mt-[3rem] z-10"}
            />
            <img
                src={emerald2}
                alt="img"
                className={"absolute emerald2 emeraldFirstGroup   mt-[17rem]"}
            />
            <img
                src={coin1}
                alt="img"
                className={"absolute coinFirstGroup coin1 ml-[22rem] mt-[9rem]"}
            />
            <img
                src={coin2}
                alt="img"
                className={"absolute coinFirstGroup coin2 ml-[17rem] mt-[15.5rem] z-10"}
            />
            <img
                src={coin3}
                alt="img"
                className={"absolute coinFirstGroup ml-[-5rem] mt-[29rem] z-10"}
            />
            <div className={"line-container"}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="621"
                    height="3830"
                    viewBox="0 0 621 3830"
                    className={"line1 lineGsap"}
                >
                    <path
                        d="M284.499 1.5C196.999 5.66667 21.9993 24.1 21.9993 64.5C21.9993 115 510.499 149.5 511.999 225.5C513.499 301.5 -8.00067 297 1.49933 410.5C10.9993 524 575.397 570.5 535 670.5C504.5 746 373.248 807.177 476.5 908C561.5 991 696 1121.5 524.5 1422C312.134 1794.1 603 1850.5 596 2032C589 2213.5 316 2087.15 397.5 2010C492 1920.55 609.5 2206 570 2300.5C530.5 2395 391 2588 523 2764C655 2940 509 2912 375.5 3059C271.039 3174.02 347 3195 388 3280C419.357 3345.01 310.123 3382.33 330 3516.5C346 3624.5 529.5 3628.5 599.5 3695C669.5 3761.5 537 3828.5 537 3828.5"
                        stroke="#3F72BD"
                        strokeWidth={"2"}
                        strokeDasharray={"12 12"}
                        id="line1"
                        fill="none"
                    />
                </svg>
            </div>
        </div>
    </section>
    );
}

export default WelcomeSect;