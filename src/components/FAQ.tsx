// import { FiPlus } from "react-icons/fi";

// const questions = [
//   {
//     question: "Why Midnight Network?",
//     answer: "",
//   },
//   {
//     question: "What is statera?",
//     answer: "",
//   },
//   {
//     question: "What is launchpad?",
//     answer: "",
//   },
//   {
//     question: "Why Midnight Network?",
//     answer: "",
//   },
//   {
//     question: "What is statera?",
//     answer: "",
//   },
//   {
//     question: "What is launchpad?",
//     answer: "",
//   },
// ];

// const FAQ = () => {
//   return (
//     <section className="container flex flex-col justify-center items-center gap-6">
//       <div className="flex flex-col justify-center items-center">
//         <span className="py-2 px-10 tracking-widest text-2xl bg-white text-black font-semibold rounded-2xl">
//           FAQs
//         </span>
//         <p className="text-lg md:text-xl my-4 text-center">
//           These are our frequently asked questions
//         </p>
//       </div>
//       <div className="flex flex-col gap-2 w-full max-w-5xl mx-auto text-xl md:text-2xl lg:text-3xl">
//         {questions.map((q, idx) => (
//           <div
//             key={idx}
//             className="py-6 md;py-9 flex justify-between items-center border-b border-gray-800 cursor-pointer"
//           >
//             <span>{q.question}</span>
//             <span>
//               <FiPlus />
//             </span>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default FAQ;

"use client";

import { useState } from "react";
import { FiPlus } from "react-icons/fi";

const questions = [
  {
    question: "Why Midnight Network?",
    answer:
      "Midnight Network enables privacy-preserving smart contracts and data protection for decentralized applications.",
  },
  {
    question: "What is Statera?",
    answer:
      "Statera is a decentralized financial protocol focused on stablecoin issuance, staking, and launchpad services.",
  },
  {
    question: "What is Launchpad?",
    answer:
      "The launchpad allows projects to raise funds, distribute tokens, and onboard users through curated token sales.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="container flex flex-col justify-center items-center gap-6">
      <div className="flex flex-col justify-center items-center">
        <span className="py-2 px-10 tracking-widest text-2xl bg-white text-black font-semibold rounded-2xl">
          FAQs
        </span>
        <p className="text-lg md:text-xl my-4 text-center">
          These are our frequently asked questions
        </p>
      </div>

      <div className="flex flex-col gap-2 w-full max-w-5xl mx-auto text-xl md:text-2xl">
        {questions.map((q, idx) => {
          const isOpen = activeIndex === idx;

          return (
            <div
              key={idx}
              className="border-b border-gray-800 py-6 cursor-pointer"
              onClick={() => toggleFAQ(idx)}
            >
              {/* Question Row */}
              <div className="flex justify-between items-center">
                <span>{q.question}</span>
                <FiPlus
                  className={`transition-transform duration-300 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                />
              </div>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isOpen ? "max-h-40 mt-4 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-base md:text-lg text-gray-400">{q.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;
