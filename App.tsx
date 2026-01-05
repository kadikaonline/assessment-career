
import React, { useState, useMemo } from 'react';
import { QUESTIONS, DIAGNOSIS_DATA } from './constants';
import { Option } from './types';

export default function App() {
  const [step, setStep] = useState<'welcome' | 'quiz' | 'result'>('welcome');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Option[]>([]);
  
  const handleStart = () => {
    setStep('quiz');
    setCurrentQuestionIndex(0);
    setAnswers([]);
  };

  const handleAnswer = (option: Option) => {
    const newAnswers = [...answers, option];
    setAnswers(newAnswers);
    
    if (currentQuestionIndex < QUESTIONS.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setStep('result');
    }
  };

  const resultData = useMemo(() => {
    if (step !== 'result') return null;

    let contentScore = 0;
    let copyScore = 0;
    let specialistScore = 0;
    let strategistScore = 0;

    answers.forEach(ans => {
      if (ans.score.role === 'content') contentScore++;
      else copyScore++;

      if (ans.score.level === 'specialist') specialistScore++;
      else strategistScore++;
    });

    const role = contentScore >= copyScore ? 'Content Writer' : 'Copywriter';
    const level = specialistScore >= strategistScore ? 'Specialist' : 'Strategist';
    const key = `${role}-${level}` as keyof typeof DIAGNOSIS_DATA;
    return {
      role,
      level,
      ...DIAGNOSIS_DATA[key]
    };
  }, [step, answers]);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
        
        {/* Progress Bar */}
        {step === 'quiz' && (
          <div className="w-full bg-slate-100 h-2">
            <div 
              className="bg-indigo-600 h-full transition-all duration-500 ease-out" 
              style={{ width: `${((currentQuestionIndex + 1) / QUESTIONS.length) * 100}%` }}
            />
          </div>
        )}

        <div className="p-8 md:p-12">
          {step === 'welcome' && (
            <div className="text-center space-y-6 animate-fadeIn">
              <div className="flex justify-center">
                <div className="bg-indigo-100 p-4 rounded-full">
                  <i className="fas fa-rocket text-4xl text-indigo-600"></i>
                </div>
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                Halo Future High-Income Writer! 👋
              </h1>
              <p className="text-lg text-slate-600 max-w-md mx-auto leading-relaxed">
                Bingung mau jadi <span className="text-indigo-600 font-bold">Content Writer</span> atau <span className="text-indigo-600 font-bold">Copywriter</span>? 
                Aku bantu cari tau mana yang paling cocok sama gaya kerja kamu dalam 5 menit aja!
              </p>
              <div className="pt-4">
                <button 
                  onClick={handleStart}
                  className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white bg-indigo-600 rounded-full overflow-hidden transition-all duration-300 hover:bg-indigo-700 hover:scale-105 active:scale-95 shadow-lg shadow-indigo-200"
                >
                  <span>Siap Mulai Asesmen!</span>
                  <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
                </button>
              </div>
            </div>
          )}

          {step === 'quiz' && (
            <div className="space-y-8 animate-fadeIn">
              <div className="flex justify-between items-center">
                <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wider bg-indigo-50 px-3 py-1 rounded-full">
                  Question {currentQuestionIndex + 1} of {QUESTIONS.length}
                </span>
              </div>
              
              <h2 className="text-2xl font-bold text-slate-800 leading-snug">
                {QUESTIONS[currentQuestionIndex].text}
              </h2>

              <div className="grid gap-4">
                {QUESTIONS[currentQuestionIndex].options.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => handleAnswer(option)}
                    className="flex items-start p-5 text-left border-2 border-slate-100 rounded-2xl transition-all duration-200 hover:border-indigo-400 hover:bg-indigo-50 active:bg-indigo-100 group shadow-sm hover:shadow-md"
                  >
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 text-slate-500 font-bold flex items-center justify-center mr-4 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                      {option.id}
                    </span>
                    <span className="text-slate-700 font-medium leading-relaxed pt-0.5">
                      {option.text}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 'result' && resultData && (
            <div className="space-y-8 animate-fadeIn">
              <div className="text-center space-y-4">
                <div className="inline-block p-4 bg-green-100 rounded-full mb-2">
                  <i className="fas fa-medal text-4xl text-green-600"></i>
                </div>
                <h3 className="text-slate-500 font-semibold tracking-widest uppercase text-sm">Diagnosis Karir Kamu:</h3>
                <h2 className="text-4xl font-extrabold text-slate-900 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                  {resultData.role} {resultData.level}
                </h2>
              </div>

              <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 space-y-4">
                <p className="text-slate-700 leading-relaxed text-lg italic">
                  "{resultData.description}"
                </p>
                <div className="h-px bg-slate-200 w-full"></div>
                <div>
                  <h4 className="font-bold text-indigo-700 flex items-center mb-2">
                    <i className="fas fa-lightbulb mr-2"></i> Advice dari Coach:
                  </h4>
                  <p className="text-slate-600 leading-relaxed">
                    {resultData.advice}
                  </p>
                </div>
              </div>

              {/* Offer Section */}
              <div className="bg-gradient-to-br from-indigo-600 to-purple-700 p-8 rounded-3xl text-white shadow-xl space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Udah siap buat dibayar mahal? 💸</h3>
                  <p className="opacity-90">
                    Bakat kamu udah ada, sekarang tinggal asah tekniknya biar makin pro.
                  </p>
                </div>
                
                <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/20">
                  <p className="text-lg font-semibold mb-1">
                    Rekomendasi Pelatihan:
                  </p>
                  <p className="text-xl font-bold underline decoration-yellow-400 decoration-4">
                    {resultData.productName}
                  </p>
                  <p className="text-sm mt-2 opacity-80 leading-relaxed">
                    {resultData.productDesc}
                  </p>
                </div>

                <a 
                  href={resultData.productLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-yellow-400 hover:bg-yellow-500 text-indigo-900 font-bold py-4 rounded-2xl transition-all transform hover:scale-[1.02] active:scale-95 shadow-lg text-lg"
                >
                  Cek Detail Pelatihannya Yuk! <i className="fas fa-external-link-alt ml-2"></i>
                </a>
              </div>

              <div className="text-center">
                <button 
                  onClick={handleStart}
                  className="text-slate-400 hover:text-indigo-600 font-medium transition-colors"
                >
                  Ulangi Asesmen
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <footer className="mt-8 text-slate-400 text-sm flex items-center gap-2">
        <i className="fas fa-shield-alt"></i> Built with Care by 
        <a 
          href="https://impactfulwriting.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-indigo-600 underline decoration-indigo-200 transition-colors font-semibold"
        >
          Impactful Writing
        </a>
      </footer>
    </div>
  );
}
