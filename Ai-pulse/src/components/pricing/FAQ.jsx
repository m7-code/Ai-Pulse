import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { q: "Can I cancel anytime?", a: "Yes, you can cancel your subscription at any time from your account settings. Your access will continue until the end of your billing period." },
    { q: "How does AI summarization work?", a: "Our AI reads articles and extracts the most important points, providing a quick summary so you can stay updated faster." },
    { q: "Is my salary expectation public?", a: "No, your salary expectations are only visible to employers you explicitly apply to or share your profile with." },
    { q: "What counts as a candidate contact?", a: "A contact is counted when an employer initiates a direct message or reveals your contact information through our platform." }
  ];

  return (
    <div className="max-w-3xl mx-auto w-full mt-20">
      <h2 className="text-2xl font-bold text-white mb-6">Questions</h2>
      <div className="flex flex-col border-t border-gray-800">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-800">
            <button 
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between py-5 text-left focus:outline-none group"
            >
              <span className="text-sm font-semibold text-gray-200 group-hover:text-white transition-colors">
                {faq.q}
              </span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className={`h-5 w-5 text-gray-500 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
                fill="none" viewBox="0 0 24 24" stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}>
              <p className="text-sm text-gray-400 leading-relaxed">
                {faq.a}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;