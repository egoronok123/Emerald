import React, {useEffect} from 'react';
import TelegramForm from '../components/TelegramForm.tsx';

const App: React.FC = () => {
    useEffect(() => {
        // Устанавливаем вертикальную прокрутку в начало страницы при загрузке
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className={'regContent   mt-28 '} >
            <TelegramForm />
        </div>
    );
};

export default App;