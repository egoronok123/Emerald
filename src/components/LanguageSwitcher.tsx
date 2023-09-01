import React, { useState, useEffect, useRef } from 'react';
import i18n from 'i18next';

const LanguageSwitcher: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const languages = [
        { code: 'en', name: 'English' },
        { code: 'ru', name: 'Русский' },
        // Добавьте другие языки здесь
    ];

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleLanguageChange = async (languageCode: string) => {
        await i18n.changeLanguage(languageCode);
        setIsOpen(false);
    };


    return (
        <div className=" absolute lg:top-5 sm:top-4 sm:left-4  inline-block text-left " ref={dropdownRef}>
            <div
                className="cursor-pointer hover:text-[#369CFB] transition-colors duration-300 "
                onClick={() => setIsOpen(!isOpen)}
            >
                {i18n.language === 'en' ? 'En' : 'Ru'}
            </div>
            {isOpen && (
                <div className="origin-top-right relative top-0 rounded-md text-center shadow-lg bg-[#062243]">
                    <div className="py-1">
                        {languages.map((language) => (
                            <div
                                key={language.code}
                                onClick={() => handleLanguageChange(language.code)}
                                className="cursor-pointer px-4 py-2  nav-link"
                            >
                                {language.name}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default LanguageSwitcher;
