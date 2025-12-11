import React from 'react';
import Section from '../components/Section';
import { KAKAO_CHAT_URL } from '../constants';
import { Award, BookOpen, Shield, Heart, GraduationCap, MessageSquare, CheckCircle2 } from 'lucide-react';
import Button from '../components/Button';

const Caregiver: React.FC = () => {
  const handleConsultation = () => {
    window.open(KAKAO_CHAT_URL, '_blank');
  };

  return (
    <div className="pt-20">
      <Section bgColor="bg-white">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#333333] mb-6">케이맘의 자부심, 전문 관리사</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            아무에게나 맡길 수 없는 우리 아기.<br/>
            엄격한 선발 과정과 지속적인 교육을 이수한 전문가만이 케이맘의 유니폼을 입을 수 있습니다.
          </p>
        </div>

        {/* Screening Process */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-24">
          {[
            { icon: <Shield className="w-8 h-8"/>, title: "1. 서류 및 신원 확인", desc: "산모신생아 건강관리사 수료, 아동학대 예방교육 수료, 보건증, 정신건강진단서, 백일해 접종, 범죄경력 조회" },
            { icon: <BookOpen className="w-8 h-8"/>, title: "2. 전문 교육 이수", desc: "보건복지부 지정 교육 60시간 필수 이수" },
            { icon: <Award className="w-8 h-8"/>, title: "3. 인성 면접", desc: "지점장 1:1 심층 면접을 통한 인성 및 마인드 체크" },
            { icon: <Heart className="w-8 h-8"/>, title: "4. 실습 및 평가", desc: "현장 실습 및 고객 만족도 평가를 통한 등급 관리" }
          ].map((step, idx) => (
             <div key={idx} className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-2xl h-full">
                <div className="w-16 h-16 rounded-full bg-white text-[#FF9E9E] flex items-center justify-center shadow-sm mb-4 shrink-0">
                  {step.icon}
                </div>
                <h3 className="font-bold text-lg mb-2 break-keep">{step.title}</h3>
                <p className="text-sm text-gray-500 break-keep leading-relaxed">{step.desc}</p>
             </div>
          ))}
        </div>

        {/* REPLACED CONTENT: Continuous Education */}
        <div className="bg-[#FFF0F0] rounded-3xl p-8 md:p-12 overflow-hidden relative">
            <div className="relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-[#333333] mb-4">멈추지 않는 배움, 정기 교육 프로그램</h2>
                    <p className="text-gray-600">
                        배정이 끝이 아닙니다. 케이맘 김포점은 매월 정기적인 보수 교육을 통해<br className="hidden md:block" />
                        서비스의 품질을 상향 평준화하고 있습니다.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Training Card 1 */}
                    <div className="bg-white p-8 rounded-3xl shadow-lg border border-white/50">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-14 h-14 bg-[#FF9E9E]/10 rounded-2xl flex items-center justify-center">
                                <GraduationCap className="w-8 h-8 text-[#FF9E9E]" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-[#333333]">실무 심화 교육</h3>
                                <p className="text-sm text-gray-500">주기적인 교육 실시</p>
                            </div>
                        </div>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-[#FF9E9E] shrink-0 mt-0.5" />
                                <span className="text-gray-600">최신 육아 트렌드 및 신생아 케어 매뉴얼 업데이트</span>
                            </li>
                             <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-[#FF9E9E] shrink-0 mt-0.5" />
                                <span className="text-gray-600">상황별 대처 능력 향상을 위한 사례 연구</span>
                            </li>
                             <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-[#FF9E9E] shrink-0 mt-0.5" />
                                <span className="text-gray-600">모유 수유 자세 교정 및 수유 지도 역량 강화</span>
                            </li>
                        </ul>
                    </div>

                    {/* Training Card 2 */}
                    <div className="bg-white p-8 rounded-3xl shadow-lg border border-white/50">
                         <div className="flex items-center gap-4 mb-6">
                            <div className="w-14 h-14 bg-[#66D2C2]/10 rounded-2xl flex items-center justify-center">
                                <MessageSquare className="w-8 h-8 text-[#66D2C2]" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-[#333333]">CS 및 인성 교육</h3>
                                <p className="text-sm text-gray-500">고객 만족도 기반 피드백</p>
                            </div>
                        </div>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-[#66D2C2] shrink-0 mt-0.5" />
                                <span className="text-gray-600">산모님과의 공감 대화법 및 소통 교육</span>
                            </li>
                             <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-[#66D2C2] shrink-0 mt-0.5" />
                                <span className="text-gray-600">이용 후기를 바탕으로 한 서비스 개선 회의</span>
                            </li>
                             <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-[#66D2C2] shrink-0 mt-0.5" />
                                <span className="text-gray-600">직업 윤리 의식 고취 및 마인드 셋업</span>
                            </li>
                        </ul>
                    </div>
                </div>
                
                <div className="mt-12 text-center">
                    <p className="text-gray-600 mb-6">
                        "우리 아기를 돌보는 것처럼, 내 딸을 챙기는 것처럼"<br/>
                        진심을 담은 서비스를 위해 끊임없이 노력하겠습니다.
                    </p>
                    <Button onClick={handleConsultation} size="lg">
                        상담 문의하기
                    </Button>
                </div>
            </div>
            
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF9E9E] rounded-full mix-blend-multiply filter blur-3xl opacity-10 -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#66D2C2] rounded-full mix-blend-multiply filter blur-3xl opacity-10 translate-y-1/2 -translate-x-1/2"></div>
        </div>
      </Section>
    </div>
  );
};

export default Caregiver;