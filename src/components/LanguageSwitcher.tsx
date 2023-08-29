
import React, { useState } from 'react';
import i18n from "i18next";

const LanguageSwitcher: React.FC = () => {
    const [selectedLanguage, setSelectedLanguage] = useState<string>('en');
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const languages = [
        { code: 'en', name: 'English' },
        { code: 'ru', name: 'Русский' },
        // Добавьте другие языки здесь
    ];

    const handleLanguageChange = (languageCode: string) => {
        setSelectedLanguage(languageCode);
        setIsOpen(false);
    };

    return (
        <div
            className="relative inline-block text-left"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <div className="cursor-pointer">
                {selectedLanguage === 'en' ? 'En' : 'Ru'}
            </div>
            {isOpen && (
                <div className="origin-top-right absolute top-0   w-40 rounded-md shadow-lg bg-[#171327]  ">
                    <div className="py-1">
                        {languages.map((language) => (
                            <div
                                key={language.code}
                                onClick={() => {handleLanguageChange(language.code)
                                    i18n.changeLanguage(language.code)
                                }}
                                className="cursor-pointer px-4 py-2 hover:bg-gray-500"
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
