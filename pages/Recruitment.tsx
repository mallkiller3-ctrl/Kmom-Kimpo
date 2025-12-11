import React from 'react';
import Section from '../components/Section';
import Button from '../components/Button';
import { KAKAO_CHAT_URL } from '../constants';
import { Heart, ShieldCheck, UserPlus, Sparkles, CheckCircle2 } from 'lucide-react';

const Recruitment: React.FC = () => {
  const handleConsultation = () => {
    window.open(KAKAO_CHAT_URL, '_blank');
  };

  return (
    <div className="pt-20">
       <Section className="text-center">
          <div className="inline-flex items-center justify-center p-3 bg-[#66D2C2]/10 rounded-full mb-6">
            <UserPlus className="text-[#66D2C2] w-8 h-8" />
          </div>
          <h1 className="text-4xl font-bold text-[#333333] mb-6">관리사님 모집</h1>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
             케이맘 산후도우미와 함께하실<br className="md:hidden"/>
             따뜻한 마음을 가진 관리사님을 기다립니다.
          </p>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-left mb-16">
               {/* Qualifications */}
               <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100 flex flex-col h-full">
                  <div className="flex items-center gap-4 mb-8">
                      <div className="w-12 h-12 bg-[#FF9E9E]/10 rounded-2xl flex items-center justify-center">
                          <Sparkles className="text-[#FF9E9E] w-6 h-6" />
                      </div>
                      <h3 className="text-2xl font-bold text-[#333333]">모집 요건 및 인재상</h3>
                  </div>
                  <ul className="space-y-6 text-gray-600 leading-relaxed flex-grow">
                      <li className="flex items-start gap-4">
                          <CheckCircle2 className="w-6 h-6 text-[#FF9E9E] shrink-0" />
                          <div>
                            <span className="block font-bold text-[#333333] mb-1">자격 요건</span>
                            40대부터 60대 사이의 출산 경험이 있는 신체 건강한 여성
                          </div>
                      </li>
                      <li className="flex items-start gap-4">
                          <CheckCircle2 className="w-6 h-6 text-[#FF9E9E] shrink-0" />
                          <div>
                            <span className="block font-bold text-[#333333] mb-1">따뜻한 마음</span>
                            산모와 아기를 진심으로 아끼고 보듬어주실 수 있는 분
                          </div>
                      </li>
                       <li className="flex items-start gap-4">
                          <CheckCircle2 className="w-6 h-6 text-[#FF9E9E] shrink-0" />
                          <div>
                            <span className="block font-bold text-[#333333] mb-1">용모와 인품</span>
                            단정한 용모와 인품으로 산모와 가족에게 호감을 줄 수 있는 분
                          </div>
                      </li>
                  </ul>
               </div>

               {/* Value & Insurance */}
               <div className="space-y-8 flex flex-col h-full">
                   <div className="bg-[#FFF0F0] p-8 rounded-3xl flex-grow">
                      <div className="flex items-center gap-3 mb-4">
                          <Heart className="text-[#FF9E9E] w-6 h-6" />
                          <h3 className="text-xl font-bold text-[#333333]">삶의 가치</h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed text-lg">
                          "케이맘 산후도우미 가족이 되어 아가와 산모에게 따뜻한 서비스를 제공하며 내 삶의 가치를 더해보세요."
                      </p>
                   </div>

                   <div className="bg-[#F0FDF9] p-8 rounded-3xl border border-[#66D2C2]/20 flex-grow">
                      <div className="flex items-center gap-3 mb-4">
                          <ShieldCheck className="text-[#66D2C2] w-6 h-6" />
                          <h3 className="text-xl font-bold text-[#333333]">배상책임보험 가입 의무화</h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                          케이맘산후도우미는 관리사님이 신생아와 산모 케어에 집중하실 수 있도록
                          <span className="font-bold text-[#333333]"> 대물, 대인사고 등에 대비한 보험 가입을 의무화</span>하고 있습니다.
                      </p>
                   </div>
               </div>
          </div>

          <div className="bg-gray-50 rounded-3xl p-10 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-[#333333] mb-6">지원 및 상담 문의</h3>
              <p className="text-gray-600 mb-8">
                  아래 카카오톡 상담하기 버튼을 눌러 편하게 문의주세요.<br/>
                  담당자가 확인 후 친절하게 안내해 드립니다.
              </p>
              <Button onClick={handleConsultation} size="lg" className="w-full md:w-auto min-w-[250px] shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all">
                  관리사 모집 상담문의 (카카오톡)
              </Button>
          </div>
       </Section>
    </div>
  );
};

export default Recruitment;