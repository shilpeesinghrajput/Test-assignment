import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold">{question}</span>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      {isOpen && (
        <p className="mt-2 text-gray-600">{answer}</p>
      )}
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    { question: "How do I sign up?", answer: "Answer to how to sign up..." },
    { question: "What information do I need to provide during the sign-up process?", answer: "Answer about required information..." },
    { question: "Is my information secure during the sign-up process?", answer: "Answer about information security..." },
    { question: "Who can apply?", answer: "Answer about who can apply..." },
    { question: "What are the terms and conditions for the collaboration?", answer: "Answer about terms and conditions..." },
    { question: "What is the minimum duration of the contract?", answer: "Answer about minimum contract duration..." },
  ];

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
      <div className="flex flex-wrap ">
      <div className="w-full lg:w-1/2 lg:mb-0">
        <h2 className="text-3xl font-bold mb-8">Frequently asked questions</h2>
        </div>
        <div className="max-w-3xl gap-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;