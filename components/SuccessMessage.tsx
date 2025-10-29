
import React from 'react';

interface SuccessMessageProps {
  onReset: () => void;
}

export const SuccessMessage: React.FC<SuccessMessageProps> = ({ onReset }) => (
  <div className="min-h-screen bg-brand-light font-sans text-brand-navy flex items-center justify-center p-4">
    <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl p-8 sm:p-12 text-center">
      <svg className="w-20 h-20 mx-auto text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
      <h1 className="font-serif font-bold text-3xl mt-6 mb-2 text-brand-navy">Inscrição Recebida!</h1>
      <p className="text-brand-gray mb-8">
        Agradecemos seu interesse em nossa Pós-Graduação. Em breve, nossa equipe entrará em contato com mais informações.
      </p>
      <button
        onClick={onReset}
        className="bg-brand-navy text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-opacity-90 focus:outline-none focus:ring-4 focus:ring-blue-900/50 transition-all duration-300 ease-in-out"
      >
        Nova Inscrição
      </button>
    </div>
  </div>
);
