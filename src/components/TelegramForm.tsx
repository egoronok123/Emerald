import React, {useState} from "react";
import axios from "axios";
import regCoin1 from "../assets/regCoin1.png";
import regCoin2 from "../assets/regCoin2.png";
import regCoin3 from "../assets/regCoin3.png";
import regEmerald1 from "../assets/regEmerald1.png";
import regEmerald2 from "../assets/regEmerald2.png";
import shieldDone from "../assets/svg/ShieldDone.svg";


const RegistrationForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [telegramNickname, setTelegramNickname] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [trafficSource, setTrafficSource] = useState(""); // Добавлено поле для источника трафика
  const [experience, setExperience] = useState(""); // Добавлено поле для опыта работы
  const [errorMessages, setErrorMessages] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    telegramNickname: "",
    trafficSource: "",
    experience: "",
    agreed: "",
  });
  const passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
  const validateField = (fieldName: string, value: any) => {
    switch (fieldName) {
      case "name":
        if (value.trim() === "") {
          setErrorMessages((prevErrors) => ({
            ...prevErrors,
            name: "Введите ваше имя.",
          }));
        } else {
          setErrorMessages((prevErrors) => ({ ...prevErrors, name: "" }));
        }
        break;
      case "email":
        if (value.trim() === "") {
          setErrorMessages((prevErrors) => ({
            ...prevErrors,
            email: "Введите email.",
          }));
        } else {
          setErrorMessages((prevErrors) => ({ ...prevErrors, email: "" }));
        }
        break;
      case "password":
        if (value.trim() === "") {
          setErrorMessages((prevErrors) => ({
            ...prevErrors,
            password: "Введите пароль.",
          }));
        } else if (!passwordPattern.test(value)) {
          setErrorMessages((prevErrors) => ({
            ...prevErrors,
            password: "Пароль не соответствует требованиям.",
          }));
        } else {
          setErrorMessages((prevErrors) => ({ ...prevErrors, password: "" }));
        }
        break;
      case "confirmPassword":
        if (value.trim() === "") {
          setErrorMessages((prevErrors) => ({
            ...prevErrors,
            confirmPassword: "Подтвердите пароль.",
          }));
        } else if (value !== password) {
          setErrorMessages((prevErrors) => ({
            ...prevErrors,
            confirmPassword: "Пароли не совпадают.",
          }));
        } else {
          setErrorMessages((prevErrors) => ({
            ...prevErrors,
            confirmPassword: "",
          }));
        }
        break;
      case "telegramNickname":
        if (value.trim() === "") {
          setErrorMessages((prevErrors) => ({
            ...prevErrors,
            telegramNickname: "Введите никнейм в Telegram.",
          }));
        } else {
          setErrorMessages((prevErrors) => ({
            ...prevErrors,
            telegramNickname: "",
          }));
        }
        break;
      case "experience":
        if (value.trim() === "") {
          setErrorMessages((prevErrors) => ({
            ...prevErrors,
            experience: "Введите ваш опыт.",
          }));
        } else {
          setErrorMessages((prevErrors) => ({ ...prevErrors, experience: "" }));
        }
        break;
      case "trafficSource":
        if (value.trim() === "") {
          setErrorMessages((prevErrors) => ({
            ...prevErrors,
            trafficSource: "Выберите источник трафика.",
          }));
        } else {
          setErrorMessages((prevErrors) => ({
            ...prevErrors,
            trafficSource: "",
          }));
        }
        break;
      case "agreed":
        if (!value) {
          setErrorMessages((prevErrors) => ({
            ...prevErrors,
            agreed:
              "Вы должны согласиться с условиями предоставления услуг и политикой конфиденциальности.",
          }));
        } else {
          setErrorMessages((prevErrors) => ({
            ...prevErrors,
            agreed: "",
          }));
        }
        break;
      default:
        break;
    }
  };

  const canSubmitForm = () => {
    return (
      errorMessages.name === "" &&
      errorMessages.email === "" &&
      errorMessages.password === "" &&
      errorMessages.confirmPassword === "" &&
      errorMessages.telegramNickname === "" &&
      (agreed || errorMessages.agreed === "")
    );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    validateField("name", name);
    validateField("email", email);
    validateField("password", password);
    validateField("confirmPassword", confirmPassword);
    validateField("telegramNickname", telegramNickname);
    validateField("experience", experience);
    validateField("trafficSource", trafficSource);
    validateField("agreed", agreed);
    // validateField('agreed', agreed);
    e.preventDefault();
    // Ваш токен Telegram-бота
    const telegramBotToken = "6637324148:AAEaiaQn-eGU9EhyQ-RalsLh8N6Eo1vayho";

    // Ваш ID чата в Telegram, куда нужно отправить данные
    const chatId = "-1001945625263";

    if (!canSubmitForm()) {
      // Если есть активные сообщения об ошибках, не отправляем форму
      return;
    }

    if (!emailIsValid(email)) {
      setErrorMessages((prevErrors) => ({
        ...prevErrors,
        email: "Неправильный формат email.",
      }));
      return;
    }

    // Проверка длины полей
    if (fieldsAreTooLong()) {
      setErrorMessages((prevErrors) => ({
        ...prevErrors,
        name: name.length > 30 ? "Слишком длинное имя." : "",
        email: email.length > 30 ? "Слишком длинный email." : "",
        password: password.length > 30 ? "Слишком длинный пароль." : "",
        confirmPassword:
          confirmPassword.length > 30
            ? "Слишком длинное подтверждение пароля."
            : "",
        telegramNickname:
          telegramNickname.length > 30
            ? "Слишком длинный никнейм в Telegram."
            : "",
      }));
      return;
    }
    // Формируем текст сообщения для отправки в Telegram
    const text = `Telegram: ${telegramNickname}\nEmail: ${email}\nName: ${name}\nИсточник трафика: ${trafficSource}\nОпыт работы: ${experience}
    `;

    // Отправляем данные в Telegram через API бота
    axios
      .get(
        `https://api.telegram.org/bot${telegramBotToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(
          text,
        )}`,
      )
      .then(() => {
        console.log("Сообщение успешно отправлено в Telegram!");
        // Здесь можно добавить обработку успешной отправки (например, показать уведомление об успехе)
      })
      .catch((error) => {
        console.error("Ошибка при отправке сообщения в Telegram:", error);
        // Здесь можно добавить обработку ошибок (например, показать уведомление об ошибке)
      });
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setTelegramNickname("");
    setAgreed(false);
    setTrafficSource("");
    setExperience("");
  };
  const handleInputChange = (fieldName: string, value: string) => {
    setErrorMessages((prevErrors) => ({ ...prevErrors, [fieldName]: "" }));
    validateField(fieldName, value);
  };
  const emailIsValid = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const fieldsAreTooLong = () => {
    return (
      name.length > 30 ||
      email.length > 30 ||
      password.length > 30 ||
      confirmPassword.length > 30 ||
      telegramNickname.length > 30
    );
  };
  return (
    <section className={"px-2"}>
      <div className={'sm:hidden'}>
        <img
            src={regCoin1}
            alt="img"
            className={"absolute ml-[57rem] mt-[50rem] z-10"}
        />
        <img
            src={regCoin2}
            alt="img"
            className={"absolute ml-[3rem] mt-[54rem] z-10"}
        />{" "}
        <img
            src={regCoin3}
            alt="img"
            className={"absolute ml-[-6rem] mt-[21rem] z-10"}
        />
        <img
            src={regEmerald1}
            alt="img"
            className={"absolute ml-[-1rem] mt-[-2rem] z-10"}
        />
        <img
            src={regEmerald2}
            alt="img"
            className={"absolute ml-[60rem] mt-[15rem] z-10"}
        />
        <div className={"line-container2"}>
          <svg
              xmlns="http://www.w3.org/2000/svg"
              width="135"
              height="872"
              viewBox="0 0 135 872"
              fill="none"
          >
            <path
                d="M108.499 1C64.1653 36.3333 -34.8713 138.274 54.0025 246C120.003 326 91.0001 426.5 40.9998 494C-9.00045 561.5 -41.0004 759 134 871"
                stroke="#264777"
                strokeWidth="2"
                strokeDasharray="12 12"
            />
          </svg>
        </div>
        <div className={"line-container3"}>
          <svg
              xmlns="http://www.w3.org/2000/svg"
              width="211"
              height="611"
              viewBox="0 0 211 611"
              fill="none"
          >
            <path
                d="M106.5 1.5C157.833 60.6667 256 279.032 183.499 318.5C98.9992 364.5 16.5 287.473 61.5 237C106.5 186.527 281.5 375.5 1 609.5"
                stroke="#3F72BD"
                strokeWidth="2"
                strokeDasharray="12 12"
            />
          </svg>
        </div>
      </div>

      <div className=" p-4  relative bg-opacity-30 max-w-4xl mx-auto z-20">
        <div className={"max-w-md mx-auto"}>
          <h2 className="lg:text-4xl sm:text-2xl font-semibold text-center mt-10">
            Регистрация
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                placeholder="Как вас зовут?"
                className={`w-full mt-10 p-2 pl-9  rounded text-black focus1 ${
                  errorMessages.name ? "input-error" : ""
                }`}
                value={name}
                onChange={(e) => {
                  const newValue = e.target.value;
                  setName(newValue);
                  handleInputChange("name", newValue);
                }}
                onBlur={() => {
                  validateField("name", name);
                }}
                maxLength={30}
              />

              {/* Переместите иконку внутрь контейнера с классом "relative" */}
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={"absolute mt-[-2.1rem] left-2"}
              >
                <g id="Iconly/Light/Profile">
                  <g id="Profile">
                    <path
                      id="Stroke 1"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.9849 15.3462C8.11731 15.3462 4.81445 15.931 4.81445 18.2729C4.81445 20.6148 8.09636 21.2205 11.9849 21.2205C15.8525 21.2205 19.1545 20.6348 19.1545 18.2938C19.1545 15.9529 15.8735 15.3462 11.9849 15.3462Z"
                      stroke="#8893A1"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      id="Stroke 3"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.9849 12.0059C14.523 12.0059 16.5801 9.94779 16.5801 7.40969C16.5801 4.8716 14.523 2.81445 11.9849 2.81445C9.44679 2.81445 7.3887 4.8716 7.3887 7.40969C7.38013 9.93922 9.42394 11.9973 11.9525 12.0059H11.9849Z"
                      stroke="#8893A1"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </g>
              </svg>

              {errorMessages.name && (
                <p className="textError absolute text-sm">{errorMessages.name}</p>
              )}
            </div>
            <div className="mt-8 relative">
              <input
                type="email"
                placeholder="Email"
                className={`w-full p-2 pl-9  rounded text-black focus1 ${
                  errorMessages.email ? "input-error" : ""
                }`}
                value={email}
                onChange={(e) => {
                  const newValue = e.target.value;
                  setEmail(newValue);
                  handleInputChange("email", newValue);
                }}
                onBlur={() => {
                  validateField("email", email);
                }}
                maxLength={30}
              />
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={"absolute mt-[-2.1rem] left-2"}
              >
                <g id="Iconly/Light/Message">
                  <g id="Message">
                    <path
                      id="Stroke 1"
                      d="M17.9033 8.85107L13.46 12.4641C12.6205 13.1301 11.4394 13.1301 10.5999 12.4641L6.11914 8.85107"
                      stroke="#8893A1"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      id="Stroke 3"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16.9089 21C19.9502 21.0084 22 18.5095 22 15.4384V8.57001C22 5.49883 19.9502 3 16.9089 3H7.09114C4.04979 3 2 5.49883 2 8.57001V15.4384C2 18.5095 4.04979 21.0084 7.09114 21H16.9089Z"
                      stroke="#8893A1"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </g>
              </svg>

              {errorMessages.email && (
                <p className="textError absolute text-sm">{errorMessages.email}</p>
              )}
            </div>
            <div className="mt-8 relative">
              <input
                type="password"
                placeholder="Пароль"
                className={`w-full p-2 pl-9  rounded text-black focus1 ${
                  errorMessages.password ? "input-error" : ""
                }`}
                value={password}
                onChange={(e) => {
                  const newValue = e.target.value;
                  setPassword(newValue);
                  handleInputChange("password", newValue);
                }}
                onBlur={() => {
                  validateField("password", password);
                }}
                maxLength={30}
              />
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={"absolute mt-[-2.1rem] left-2"}
              >
                <g id="Iconly/Light/Lock">
                  <g id="Lock">
                    <path
                      id="Stroke 1"
                      d="M16.4237 9.44756V7.30056C16.4237 4.78756 14.3857 2.74956 11.8727 2.74956C9.35973 2.73856 7.31373 4.76656 7.30273 7.28056V7.30056V9.44756"
                      stroke="#8893A1"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      id="Stroke 3"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M15.683 21.2495H8.042C5.948 21.2495 4.25 19.5525 4.25 17.4575V13.1685C4.25 11.0735 5.948 9.37646 8.042 9.37646H15.683C17.777 9.37646 19.475 11.0735 19.475 13.1685V17.4575C19.475 19.5525 17.777 21.2495 15.683 21.2495Z"
                      stroke="#8893A1"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      id="Stroke 5"
                      d="M11.8633 14.2026V16.4236"
                      stroke="#8893A1"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </g>
              </svg>

              {errorMessages.password && (
                <p className="textError absolute text-sm">{errorMessages.password}</p>
              )}
            </div>
            <div>
              <div className="svgBlock2  mt-[0.45rem]  ">
                <svg className="svgImage3">
                  <image href={shieldDone} className="svgImage4"/>
                </svg>
              </div>
              <p className={'ml-11 mt-6 text-xs text-justify pr-2'}>Пароль должен содержать от 8 символов, состоящих из
                латинских заглавных и маленьких букв, минимум одной цифры и специального символа: @$!%*?&#</p>
            </div>
            <div className="mt-4 relative">
              <input
                type="password"
                placeholder="Повторите пароль"
                className={`w-full p-2 pl-9  rounded text-black focus1 ${
                  errorMessages.confirmPassword ? "input-error" : ""
                }`}
                value={confirmPassword}
                onChange={(e) => {
                  const newValue = e.target.value;
                  setConfirmPassword(newValue);
                  handleInputChange("confirmPassword", newValue);
                }}
                onBlur={() => {
                  validateField("confirmPassword", confirmPassword);
                }}
                maxLength={30}
              />
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={"absolute mt-[-2.1rem] left-2"}
              >
                <g id="Iconly/Light/Lock">
                  <g id="Lock">
                    <path
                      id="Stroke 1"
                      d="M16.4237 9.44756V7.30056C16.4237 4.78756 14.3857 2.74956 11.8727 2.74956C9.35973 2.73856 7.31373 4.76656 7.30273 7.28056V7.30056V9.44756"
                      stroke="#8893A1"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      id="Stroke 3"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M15.683 21.2495H8.042C5.948 21.2495 4.25 19.5525 4.25 17.4575V13.1685C4.25 11.0735 5.948 9.37646 8.042 9.37646H15.683C17.777 9.37646 19.475 11.0735 19.475 13.1685V17.4575C19.475 19.5525 17.777 21.2495 15.683 21.2495Z"
                      stroke="#8893A1"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      id="Stroke 5"
                      d="M11.8633 14.2026V16.4236"
                      stroke="#8893A1"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </g>
              </svg>
              {errorMessages.confirmPassword && (
                <p className="textError absolute text-sm">
                  {errorMessages.confirmPassword}
                </p>
              )}
            </div>
            <div className="mt-8 relative">
              <input
                type="text"
                placeholder="Ваш никнейм в телеграме"
                className={`w-full p-2 pl-9  rounded text-black focus1 ${
                  errorMessages.telegramNickname ? "input-error" : ""
                }`}
                value={telegramNickname}
                onChange={(e) => {
                  const newValue = e.target.value;
                  setTelegramNickname(newValue);
                  handleInputChange("telegramNickname", newValue);
                }}
                onBlur={() => {
                  validateField("telegramNickname", telegramNickname);
                }}
                maxLength={30}
              />
              <svg
                width="19"
                height="21"
                viewBox="0 0 19 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={"absolute mt-[-2rem] left-2"}
              >
                <path
                  d="M9.90625 20.2188C8.3125 20.2188 6.90365 20 5.67969 19.5625C4.45573 19.1302 3.42708 18.4922 2.59375 17.6484C1.76042 16.8047 1.13021 15.7708 0.703125 14.5469C0.276042 13.3229 0.0625001 11.9219 0.0625001 10.3437C0.0625001 8.81771 0.278646 7.45312 0.710938 6.25C1.14844 5.04687 1.78125 4.02604 2.60938 3.1875C3.44271 2.34375 4.45313 1.70052 5.64063 1.25781C6.83333 0.815104 8.18229 0.593749 9.6875 0.593749C11.151 0.593749 12.4323 0.833332 13.5313 1.3125C14.6354 1.78646 15.5573 2.42969 16.2969 3.24219C17.0417 4.04948 17.599 4.95833 17.9688 5.96875C18.3438 6.97917 18.5313 8.02083 18.5313 9.09375C18.5313 9.84896 18.4948 10.6146 18.4219 11.3906C18.349 12.1667 18.1953 12.8802 17.9609 13.5312C17.7266 14.1771 17.3646 14.6979 16.875 15.0937C16.3906 15.4896 15.7344 15.6875 14.9063 15.6875C14.5417 15.6875 14.1406 15.6302 13.7031 15.5156C13.2656 15.401 12.8776 15.2109 12.5391 14.9453C12.2005 14.6797 12 14.3229 11.9375 13.875H11.8437C11.7188 14.1771 11.526 14.4635 11.2656 14.7344C11.0104 15.0052 10.6745 15.2214 10.2578 15.3828C9.84635 15.5443 9.34375 15.6146 8.75 15.5937C8.07292 15.5677 7.47656 15.4167 6.96094 15.1406C6.44531 14.8594 6.01302 14.4792 5.66406 14C5.32031 13.5156 5.0599 12.9557 4.88281 12.3203C4.71094 11.6797 4.625 10.9896 4.625 10.25C4.625 9.54687 4.72917 8.90365 4.9375 8.32031C5.14583 7.73698 5.4349 7.22656 5.80469 6.78906C6.17969 6.35156 6.61719 6.0026 7.11719 5.74219C7.6224 5.47656 8.16667 5.3125 8.75 5.25C9.27083 5.19792 9.74479 5.22135 10.1719 5.32031C10.599 5.41406 10.9505 5.55729 11.2266 5.75C11.5026 5.9375 11.6771 6.14583 11.75 6.375H11.8437V5.5H13.5V12.5625C13.5 13 13.6224 13.3854 13.8672 13.7187C14.112 14.0521 14.4688 14.2187 14.9375 14.2187C15.4688 14.2187 15.875 14.0365 16.1563 13.6719C16.4427 13.3073 16.638 12.7448 16.7422 11.9844C16.8516 11.224 16.9063 10.25 16.9063 9.0625C16.9063 8.36458 16.8099 7.67708 16.6172 7C16.4297 6.31771 16.1432 5.67969 15.7578 5.08594C15.3776 4.49219 14.8958 3.96875 14.3125 3.51562C13.7292 3.0625 13.0443 2.70833 12.2578 2.45312C11.4766 2.19271 10.5885 2.0625 9.59375 2.0625C8.36979 2.0625 7.27344 2.2526 6.30469 2.63281C5.34115 3.00781 4.52083 3.55729 3.84375 4.28125C3.17188 5 2.65885 5.875 2.30469 6.90625C1.95573 7.93229 1.78125 9.09896 1.78125 10.4062C1.78125 11.7344 1.95573 12.9141 2.30469 13.9453C2.65885 14.9766 3.17969 15.8464 3.86719 16.5547C4.5599 17.263 5.41667 17.7995 6.4375 18.1641C7.45833 18.5339 8.63542 18.7188 9.96875 18.7188C10.5417 18.7188 11.1068 18.6641 11.6641 18.5547C12.2214 18.4453 12.7135 18.3255 13.1406 18.1953C13.5677 18.0651 13.875 17.9688 14.0625 17.9062L14.5 19.3438C14.1771 19.4792 13.7552 19.6146 13.2344 19.75C12.7188 19.8854 12.1667 19.9974 11.5781 20.0859C10.9948 20.1745 10.4375 20.2188 9.90625 20.2188ZM9 14C9.69792 14 10.263 13.8594 10.6953 13.5781C11.1276 13.2969 11.4427 12.8724 11.6406 12.3047C11.8385 11.737 11.9375 11.0208 11.9375 10.1562C11.9375 9.28125 11.8281 8.59896 11.6094 8.10937C11.3906 7.61979 11.0677 7.27604 10.6406 7.07812C10.2135 6.88021 9.6875 6.78125 9.0625 6.78125C8.46875 6.78125 7.96094 6.9375 7.53906 7.25C7.1224 7.55729 6.80208 7.96875 6.57813 8.48437C6.35938 8.99479 6.25 9.55208 6.25 10.1562C6.25 10.8229 6.33854 11.4505 6.51563 12.0391C6.69271 12.6224 6.98177 13.0964 7.38281 13.4609C7.78385 13.8203 8.32292 14 9 14Z"
                  fill="#8893A2"
                />
              </svg>

              {errorMessages.telegramNickname && (
                <p className="textError absolute text-sm">
                  {errorMessages.telegramNickname}
                </p>
              )}
            </div>
            <div className="mt-8">
              <label htmlFor="trafficSource" className="block ">
                С каким источником трафика работаете?
              </label>
              <select
                id="trafficSource"
                className={`w-full p-2 focus1 rounded text-black ${
                  errorMessages.trafficSource ? "input-error" : ""
                }`}
                value={trafficSource}
                onChange={(e) => {
                  const newValue = e.target.value;
                  setTrafficSource(newValue);
                  handleInputChange("trafficSource", newValue);
                }}
                onBlur={() => {
                  validateField("trafficSource", trafficSource);
                }}
              >
                <option value="">Выберите источник трафика</option>
                <option value="Источник 1">Источник 1</option>
                <option value="Источник 2">Источник 2</option>
                <option value="Источник 3">Источник 3</option>
                <option value="Источник 4">Источник 4</option>
                <option value="Источник 5">Источник 5</option>
                {/* ... Добавьте ещё пункты */}
              </select>
              {errorMessages.trafficSource && (
                <p className="textError absolute text-sm">
                  {errorMessages.trafficSource}
                </p>
              )}
            </div>
            <div className="mt-8">
              <label htmlFor="experience" className="block">
                Опишите ваш опыт работы?
              </label>
              <textarea
                id="experience"
                className={`w-full p-2 focus1 rounded text-black ${
                  errorMessages.experience ? "input-error" : ""
                }`}
                value={experience}
                onChange={(e) => {
                  const newValue = e.target.value;
                  setExperience(newValue);
                  handleInputChange("experience", newValue);
                }}
                onBlur={() => {
                  validateField("experience", experience);
                }}
                maxLength={300}
                rows={4}
                placeholder="Опишите ваш опыт работы здесь..."
              />
              {errorMessages.experience && (
                <p className="textError absolute text-sm">{errorMessages.experience}</p>
              )}
            </div>
            <div className="mt-8">
              <label className="flex items-center text-xs cursor-pointer lg:w-[22rem]">
                <input
                  type="checkbox"
                  className="hidden"
                  checked={agreed}
                  onChange={() => {
                    setAgreed(!agreed);
                    validateField("agreed", !agreed);
                  }}
                />
                <div className="checkbox-icon">
                  {agreed ? (
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={'cursor-pointer mr-2'}>
                        <g id="Tick Square">
                          <path id="Stroke 1" fillRule="evenodd" clipRule="evenodd"
                                d="M14.334 0.75H5.665C2.644 0.75 0.75 2.889 0.75 5.916V14.084C0.75 17.111 2.635 19.25 5.665 19.25H14.333C17.364 19.25 19.25 17.111 19.25 14.084V5.916C19.25 2.889 17.364 0.75 14.334 0.75Z"
                                fill="#369CFB" stroke="#130F26" strokeWidth="1.5" strokeLinecap="round"
                                strokeLinejoin="round"/>
                          <g id="Stroke 3">
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M6.43945 9.99995L8.81345 12.373L13.5595 7.62695" fill="#369CFB"/>
                            <path d="M6.43945 9.99995L8.81345 12.373L13.5595 7.62695" stroke="#130F26" strokeWidth="1.2"
                                  strokeLinecap="round" strokeLinejoin="round"/>
                          </g>
                        </g>
                      </svg>

                  ) : (
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={'cursor-pointer mr-2'}>
                        <g id="Tick Square">
                          <path id="Stroke 1" fillRule="evenodd" clipRule="evenodd"
                                d="M14.334 0.75H5.665C2.644 0.75 0.75 2.889 0.75 5.916V14.084C0.75 17.111 2.635 19.25 5.665 19.25H14.333C17.364 19.25 19.25 17.111 19.25 14.084V5.916C19.25 2.889 17.364 0.75 14.334 0.75Z"
                                stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                        </g>
                      </svg>

                  )}
                </div>
                Я принимаю Условия предоставления услуг и Политику
                конфиденциальности.
              </label>
              {errorMessages.agreed && (
                <p className="textError absolute text-sm lg:w-[27rem]">
                  {errorMessages.agreed}
                </p>
              )}
            </div>
            <button
              type="submit"
              className={
                " text-white text-base font-semibold  mx-auto flex justify-start py-3 rounded-md cursor-pointer  tracking-wide button-hover button-link mt-16 mb-4 px-3.5"
              }
            >
              <p className={""}>Завершить регистрацию</p>
              <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={"ml-2.5"}
              >
                <path
                    d="M8.5 5L15.5 12L8.5 19"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
              </svg>
            </button>

          </form>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;
