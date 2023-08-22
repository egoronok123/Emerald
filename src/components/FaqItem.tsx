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
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 ">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
        </svg>

    ) : (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 ">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>


    );

    return (
        <div className="mx-auto w-full ">
            <button
                className={` font-bold my-3 mx-auto sm:p-3 lg:p-8 bg-opacity-30 buttonForm `}
                onClick={onClick}
            >
                <div className={`w-full`}>
                    <div className="flex justify-between items-center ">
                        <div className="pr-6 lg:text-lg sm:text-base ">
                            {question}
                        </div>

                        <div className="">
                            {arrowIcon}
                        </div>
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
