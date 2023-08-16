import React, {useEffect, useState} from 'react';
import axios from 'axios';

const RegistrationForm: React.FC = () => {
    const [emptyFields, setEmptyFields] = useState<string[]>([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [telegramNickname, setTelegramNickname] = useState('');
    const [agreed, setAgreed] = useState(false);
    const [trafficSource, setTrafficSource] = useState(''); // Добавлено поле для источника трафика
    const [experience, setExperience] = useState(''); // Добавлено поле для опыта работы
    const [errorMessages, setErrorMessages] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        telegramNickname: '',
        experience: '',
        agreed: '',
    });
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
    const validateField = (fieldName: string, value: string) => {
        switch (fieldName) {
            case 'name':
                if (value.trim() === '') {
                    setErrorMessages((prevErrors) => ({
                        ...prevErrors,
                        name: 'Введите ваше имя.',
                    }));
                } else {
                    setErrorMessages((prevErrors) => ({ ...prevErrors, name: '' }));
                }
                break;
            case 'email':
                if (value.trim() === '') {
                    setErrorMessages((prevErrors) => ({
                        ...prevErrors,
                        email: 'Введите email.',
                    }));
                } else {
                    setErrorMessages((prevErrors) => ({ ...prevErrors, email: '' }));
                }
                break;
            case 'password':
                if (value.trim() === '') {
                    setErrorMessages((prevErrors) => ({
                        ...prevErrors,
                        password: 'Введите пароль.',
                    }));
                } else if (!passwordPattern.test(value)) {
                    setErrorMessages((prevErrors) => ({
                        ...prevErrors,
                        password: 'Пароль не соответствует требованиям.',
                    }));
                } else {
                    setErrorMessages((prevErrors) => ({ ...prevErrors, password: '' }));
                }
                break;
            case 'confirmPassword':
                if (value.trim() === '') {
                    setErrorMessages((prevErrors) => ({
                        ...prevErrors,
                        confirmPassword: 'Подтвердите пароль.',
                    }));
                } else if (value !== password) {
                    setErrorMessages((prevErrors) => ({
                        ...prevErrors,
                        confirmPassword: 'Пароли не совпадают.',
                    }));
                } else {
                    setErrorMessages((prevErrors) => ({ ...prevErrors, confirmPassword: '' }));
                }
                break;
            case 'telegramNickname':
                if (value.trim() === '') {
                    setErrorMessages((prevErrors) => ({
                        ...prevErrors,
                        telegramNickname: 'Введите никнейм в Telegram.',
                    }));
                } else {
                    setErrorMessages((prevErrors) => ({ ...prevErrors, telegramNickname: '' }));
                }
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        if (name !== '') {
            validateField('name', name);
        }
    }, [name]);

    useEffect(() => {
        if (email !== '') {
            validateField('email', email);
        }
    }, [email]);

    useEffect(() => {
        if (password !== '') {
            validateField('password', password);
        }
    }, [password]);

    useEffect(() => {
        if (confirmPassword !== '') {
            validateField('confirmPassword', confirmPassword);
        }
    }, [confirmPassword]);

    useEffect(() => {
        if (telegramNickname !== '') {
            validateField('telegramNickname', telegramNickname);
        }
    }, [telegramNickname]);
    const validateAgreement = () => {
        if (agreed) {
            setErrorMessages((prevErrors) => ({
                ...prevErrors,
                agreed: 'Вы должны согласиться с условиями предоставления услуг и политикой конфиденциальности.',
            }));
        } else {
            setErrorMessages((prevErrors) => ({ ...prevErrors, agreed: '' }));
        }
    };
    const canSubmitForm = () => {
        return (

            errorMessages.name === '' &&
            errorMessages.email === '' &&
            errorMessages.password === '' &&
            errorMessages.confirmPassword === '' &&
            errorMessages.telegramNickname === '' &&
            errorMessages.agreed === ''
        );
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();
        // Ваш токен Telegram-бота
        const telegramBotToken = "6637324148:AAEaiaQn-eGU9EhyQ-RalsLh8N6Eo1vayho";

        // Ваш ID чата в Telegram, куда нужно отправить данные
        const chatId = "-1001945625263";


        // Проверка наличия ошибок


        if (!canSubmitForm()) {
            // Если есть активные сообщения об ошибках, не отправляем форму
            return;
        }
        const emptyFieldsList: string[] = [];

        if (name.trim() === '') {
            emptyFieldsList.push('name');
        }
        if (email.trim() === '') {
            emptyFieldsList.push('email');
        }
        if (password.trim() === '') {
            emptyFieldsList.push('password');
        }
        if (confirmPassword.trim() === '') {
            emptyFieldsList.push('confirmPassword');
        }
        if (telegramNickname.trim() === '') {
            emptyFieldsList.push('telegramNickname');
        }
        if (!agreed) {
            emptyFieldsList.push('agreed');
        }

        setEmptyFields(emptyFieldsList);

        // Если есть пустые поля, не выполняем отправку данных
        if (emptyFieldsList.length > 0) {
            return;
        }
        // Проверка валидности email
        if (!emailIsValid(email)) {
            setErrorMessages((prevErrors) => ({
                ...prevErrors,
                email: 'Неправильный формат email.',
            }));
            return;
        }

        // Проверка длины полей
        if (fieldsAreTooLong()) {
            setErrorMessages((prevErrors) => ({
                ...prevErrors,
                name: name.length > 30 ? 'Слишком длинное имя.' : '',
                email: email.length > 30 ? 'Слишком длинный email.' : '',
                password: password.length > 30 ? 'Слишком длинный пароль.' : '',
                confirmPassword: confirmPassword.length > 30 ? 'Слишком длинное подтверждение пароля.' : '',
                telegramNickname: telegramNickname.length > 30 ? 'Слишком длинный никнейм в Telegram.' : '',
            }));
            return;
        }
        // Формируем текст сообщения для отправки в Telegram
                    const text = `Telegram: ${telegramNickname}\nEmail: ${email}\nName: ${name}\nИсточник трафика: ${trafficSource}\nОпыт работы: ${experience}
    `;

        // Отправляем данные в Telegram через API бота
        axios
            .get(
                `https://api.telegram.org/bot${telegramBotToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(text)}`,
            )
            .then(() => {
                console.log("Сообщение успешно отправлено в Telegram!");
                // Здесь можно добавить обработку успешной отправки (например, показать уведомление об успехе)
            })
            .catch((error) => {
                console.error("Ошибка при отправке сообщения в Telegram:", error);
                // Здесь можно добавить обработку ошибок (например, показать уведомление об ошибке)
            });
        setName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setTelegramNickname('');
        setAgreed(false);
        setTrafficSource('');
        setExperience('');
    };
    const handleInputChange = (fieldName: string, value: string) => {
        setErrorMessages((prevErrors) => ({ ...prevErrors, [fieldName]: '' }));
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
console.log(emptyFields);
    return (
        <div className="max-w-md mx-auto p-4">
            <h2 className="text-2xl font-semibold mb-4">РЕГИСТРАЦИЯ</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-2">
                    <input
                        type="text"
                        placeholder="Как вас зовут?"
                        className="w-full p-2 border rounded text-black"
                        value={name}
                        onChange={(e) => {
                            const newValue = e.target.value;
                            setName(newValue);
                            handleInputChange('name', newValue);
                        }}
                        onBlur={() => {
                            validateField('name', name);
                        }}
                        maxLength={30}
                    />
                    {emptyFields.includes('name') && <p className="text-red-500">Введите Имя.</p>}
                    {errorMessages.name && <p className="text-red-500">{errorMessages.name}</p>}

                </div>
                <div className="mb-2">
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full p-2 border rounded text-black"
                        value={email}
                        onChange={(e) => {
                            const newValue = e.target.value;
                            setEmail(newValue);
                            handleInputChange('email', newValue);
                        }}
                        onBlur={() => {
                            validateField('email', email);
                        }}
                        maxLength={30}
                    />
                    {emptyFields.includes('email') && <p className="text-red-500">Введите email.</p>}
                    {errorMessages.email && <p className="text-red-500">{errorMessages.email}</p>}
                </div>
                <div className="mb-2">
                    <input
                        type="password"
                        placeholder="Пароль"
                        className="w-full p-2 border rounded text-black"
                        value={password}
                        onChange={(e) => {
                            const newValue = e.target.value;
                            setPassword(newValue);
                            handleInputChange('password', newValue);
                        }}
                        onBlur={() => {
                            validateField('password', password);
                        }}
                        maxLength={30}
                    />
                    {emptyFields.includes('password') && <p className="text-red-500">Введите пароль.</p>}
                    {errorMessages.password && <p className="text-red-500">{errorMessages.password}</p>}
                </div>
                <div className="mb-2">
                    <input
                        type="password"
                        placeholder="Повторите пароль"
                        className="w-full p-2 border rounded text-black"
                        value={confirmPassword}
                        onChange={(e) => {
                            const newValue = e.target.value;
                            setConfirmPassword(newValue);
                            handleInputChange('confirmPassword', newValue);
                        }}
                        onBlur={() => {
                            validateField('confirmPassword', confirmPassword);
                        }}
                        maxLength={30}
                    />
                    {emptyFields.includes('confirmPassword') && <p className="text-red-500">Подтвердите пароль.</p>}

                    {errorMessages.confirmPassword && <p className="text-red-500">{errorMessages.confirmPassword}</p>}
                </div>
                <div className="mb-2">
                    <input
                        type="text"
                        placeholder="Ваш никнейм в телеграме"
                        className="w-full p-2 border rounded text-black"
                        value={telegramNickname}
                        onChange={(e) => {
                            const newValue = e.target.value;
                            setTelegramNickname(newValue);
                            handleInputChange('telegramNickname', newValue);
                        }}
                        onBlur={() => {
                            validateField('telegramNickname', telegramNickname);
                        }}
                        maxLength={30}
                    />
                    {emptyFields.includes('telegramNickname') && <p className="text-red-500">Введите никнейм в Telegram.</p>}

                    {errorMessages.telegramNickname && <p className="text-red-500">{errorMessages.telegramNickname}</p>}
                </div>
                <div className="mb-2">
                    <label htmlFor="trafficSource" className="block mb-1">
                        С каким источником трафика работаете? И 5 пунктов в нём.
                    </label>
                    <select
                        id="trafficSource"
                        className="w-full p-2 border rounded text-black"
                        value={trafficSource}
                        onChange={(e) => {
                            const newValue = e.target.value;
                            setTrafficSource(newValue);
                            handleInputChange('trafficSource', newValue);
                        }}
                        onBlur={() => {
                            validateField('trafficSource', trafficSource);
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
                </div>
                <div className="mb-2">
                    <label htmlFor="experience" className="block mb-1">
                        Опишите ваш опыт работы?
                    </label>
                    <textarea
                        id="experience"
                        className="w-full p-2 border rounded text-black"
                        value={experience}
                        onChange={(e) => {
                            const newValue = e.target.value;
                            setExperience(newValue);
                            handleInputChange('experience', newValue);
                        }}
                        onBlur={() => {
                            validateField('experience', experience);
                        }}
                        maxLength={300}
                        rows={4}
                        placeholder="Опишите ваш опыт работы здесь..."
                    />
                </div>
                <div className="mb-2">
                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            className="mr-2"
                            checked={agreed}
                            onChange={() => {
                                setAgreed(!agreed);
                                validateAgreement();
                            }}
                        />
                        Я принимаю Условия предоставления услуг и Политику конфиденциальности.
                    </label>
                    {emptyFields.includes('agreed') && (
                        <p className="text-red-500">
                            Вы должны согласиться с условиями предоставления услуг и политикой конфиденциальности.
                        </p>
                    )}
                    {errorMessages.agreed && <p className="text-red-500">{errorMessages.agreed}</p>}
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700"

                >
                    Зарегистрироваться
                </button>
            </form>
        </div>
    );
};

export default RegistrationForm;
