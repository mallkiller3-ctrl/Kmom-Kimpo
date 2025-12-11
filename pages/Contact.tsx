import React, { useState } from 'react';
import Section from '../components/Section';
import Button from '../components/Button';
import { FAQS, KAKAO_CHAT_URL } from '../constants';
import { ChevronDown, ChevronUp, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const handleKakaoConsultation = () => {
    window.open(KAKAO_CHAT_URL, '_blank');
  };

  return (
    <div className="pt-20">
      <Section className="bg-[#FFF0F0]">
        <div className="text-center mb-12">
           <h1 className="text-4xl font-bold text-[#333333] mb-4">상담 및 예약 신청</h1>
           <p className="text-gray-600">
             궁금하신 점을 남겨주시면 전문 상담사가 친절하게 안내해 드립니다.<br/>
             정부지원 바우처 등급 조회도 도와드립니다.
           </p>
        </div>

        <div className="max-w-2xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-xl text-center">
            <div className="w-20 h-20 bg-[#FEE500] rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-10 h-10 text-[#3c1e1e]" fill="currentColor" />
            </div>
            <h2 className="text-2xl font-bold mb-4 text-[#333333]">빠르고 간편한 카카오톡 상담</h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
                복잡한 입력 없이 카카오톡으로 간편하게 문의하세요.<br/>
                전문 상담사가 실시간으로 답변해 드립니다.
            </p>
            
            <Button 
                onClick={handleKakaoConsultation} 
                size="lg" 
                className="bg-[#FEE500] hover:bg-[#fae100] text-[#3c1e1e] font-bold w-full md:w-auto min-w-[200px]"
            >
                카카오톡 무료 상담하기
            </Button>

            <p className="text-sm text-gray-400 mt-6">
                운영시간: 24시간 운영 (연중무휴)
            </p>
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <h2 className="text-3xl font-bold text-[#333333] mb-12 text-center">자주 묻는 질문 (FAQ)</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {FAQS.map((item, index) => (
            <div key={index} className="border border-gray-200 rounded-2xl overflow-hidden transition-all hover:border-[#FF9E9E]/50">
              <button
                className="w-full px-6 py-5 flex justify-between items-center text-left bg-white focus:outline-none"
                onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
              >
                <span className={`font-bold text-lg ${openFaqIndex === index ? 'text-[#FF9E9E]' : 'text-[#333333]'}`}>Q. {item.question}</span>
                {openFaqIndex === index ? <ChevronUp className="text-[#FF9E9E]" /> : <ChevronDown className="text-gray-400" />}
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 bg-gray-50 ${
                  openFaqIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 py-5 text-gray-600 leading-relaxed border-t border-gray-100">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Contact;