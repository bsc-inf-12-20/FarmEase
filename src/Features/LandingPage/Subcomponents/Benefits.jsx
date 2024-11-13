import React, { useState, useEffect } from 'react';

const BenefitsProcess = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: 1,
      title: "Register",
      description: "Join Farmease community",
      icon: (
        <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      number: 2,
      title: "Browse",
      description: "Look for your favorite produce",
      icon: (
        <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    {
      number: 3,
      title: "Enquire",
      description: "Connect with farmers, express interest",
      icon: (
        <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0));
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 lg:py-12 font-poppins">
      <style>
        {`
          @keyframes fillProgress {
            from { transform: scale(0); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
          }
          
          @keyframes slideIn {
            from { transform: translateY(10px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
          
          .circle-fill {
            animation: fillProgress 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          }
          
          .content-slide {
            animation: slideIn 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          }
        `}
      </style>

      <div className="text-center mb-8 lg:mb-12">
        <h1 className="text-2xl lg:text-3xl font-bold mb-3 text-gray-900">
          Benefit from your agriculture
        </h1>
        <p className="text-sm lg:text-base text-gray-600 max-w-2xl mx-auto">
          Join our platform and connect with farmers directly
        </p>
      </div>
      
      <div className="relative">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-6 max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={step.number}
              className="relative flex flex-col items-center w-full lg:w-1/3 group"
            >
              <div 
                className={`w-12 h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center 
                  border-2 transition-all duration-500 mb-4 relative
                  ${index <= activeStep 
                    ? 'border-green-500 bg-green-500 text-white' 
                    : 'border-gray-300 bg-white text-gray-500 group-hover:border-green-300'}`}
              >
                <div className="relative z-10">
                  {step.icon}
                </div>
                {index <= activeStep && (
                  <div className="absolute inset-0 bg-green-500 rounded-full circle-fill" />
                )}
              </div>
              <div 
                className={`text-center transition-all duration-500 content-slide
                  ${index <= activeStep ? 'delay-100' : ''}`}
              >
                <h3 className={`text-lg lg:text-xl font-semibold mb-0 transition-colors duration-500
                  ${index <= activeStep ? 'text-green-500' : 'text-gray-700'}`}>
                  {step.title}
                </h3>
                <p className="text-sm lg:text-base text-gray-600 max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center mt-8 lg:mt-12">
        <button className="bg-green-500 hover:bg-green-600 text-white text-base font-medium px-8 py-3 rounded-md 
          transition-all duration-300 hover:scale-105 hover:shadow-lg">
          Register Now
        </button>
      </div>
    </div>
  );
};

export default BenefitsProcess;