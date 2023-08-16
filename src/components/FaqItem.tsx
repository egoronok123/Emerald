import React from "react";

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  questionClassName?: string;
  answerClassName?: string;
}

const FaqItem: React.FC<FaqItemProps> = ({
                                             question,
                                             answer,
                                             isOpen,
                                             onClick,
                                         }) => {
    const arrowIcon = isOpen ? (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
        </svg>

    ) : (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>


    );

    return (
        <div className="mx-auto w-[48rem]  buttonForm">
            <button
                className={`font-bold my-3 mx-auto px-6 py-6 bg-opacity-30  buttonForm`}
                onClick={onClick}
            >
                <div className={`w-[48rem]`}>
                    <div className="flex justify-between items-center">
                        {question}
                        {arrowIcon}
                    </div>

                        {isOpen &&<p
                            className={`mt-2 font-sans text-left ${
                                isOpen ? "animate-fadeIn" : "opacity-0"
                            }`}
                        >
                            {answer}
                        </p>}

                </div>
            </button>
        </div>
    );
};

export default FaqItem;
