import React from 'react';
import { useNavigate } from 'react-router-dom';
import Section from '../components/Section';
import Button from '../components/Button';
import { Star, CheckCircle, Quote, ShieldCheck, Heart, AlertCircle } from 'lucide-react';
import { REVIEWS, KAKAO_CHAT_URL } from '../constants';

const Main: React.FC = () => {
  const navigate = useNavigate();

  const handleConsultation = () => {
    window.open(KAKAO_CHAT_URL, '_blank');
  };

  const SERVICE_ITEMS = [
    { 
      title: "1. 신생아 케어", 
      items: [
        "청결한 아기 목욕",
        "적정 체온 확인",
        "위생관리 (기저귀 갈기, 배꼽소독 등)",
        "모유수유 보조 및 지도",
        "분유수유 및 젖병 살균 소독",
        "예방 접종일 관리",
        "아가 옷 세탁"
      ],
      // Baby feet / care image
      img: "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=600&auto=format&fit=crop",
      note: null
    },
    { 
      title: "2. 산모 산후회복 지원", 
      items: [
        "산후부종관리 (좌욕)",
        "산모 의복 세탁",
        "건강 식단 준비 (요청 시, 저염 식사 지원)"
      ],
      // Healthy food image
      img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=600&auto=format&fit=crop",
      note: null
    },
    { 
      title: "3. 간단한 집안 청소", 
      items: [
        "산모님과 신생아가 주로 생활하는 공간 관리"
      ],
      // Clean living room image
      img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=600&auto=format&fit=crop",
      note: {
        important: "신생아 케어 및 산모 관리 서비스의 품질 유지를 위해 무리한 가사일을 요청하지 말아주세요.",
        detail: "(무리한 가사일 예시: 베란다, 냉장고 청소, 이불 빨래, 손님 상차림, 김치 담그기 등)"
      }
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image - Mother holding baby */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=1600&auto=format&fit=crop" 
            alt="Happy mother and baby" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 md:bg-black/30" /> 
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 text-[#FF9E9E] font-bold mb-6 animate-fade-in-up">
            대한민국 소비자브랜드 대상
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight drop-shadow-md">
            산모의 편안함을 위한<br />
            <span className="text-[#FF9E9E] bg-white/10 px-2 rounded-lg backdrop-blur-sm inline-block mt-2">케이맘산후도우미</span>의 약속
          </h1>
          <div className="text-lg md:text-xl text-white/95 mb-10 max-w-3xl mx-auto drop-shadow-sm leading-relaxed font-medium">
            <p className="mb-6">
              케이맘산후도우미는<br className="hidden md:block"/>
              산모의 편안한 회복과 가족의 행복한 시작을 위해<br className="hidden md:block"/>
              새로운 돌봄 문화를 만들어가고 있습니다.
            </p>
            <p>
              진심 어린 케어로,<br className="hidden md:block"/>
              산후의 순간이 따뜻한 기억이 되도록 함께하겠습니다.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={handleConsultation}>
              무료 상담 신청하기
            </Button>
            <Button size="lg" variant="secondary" onClick={() => navigate('/program')}>
              서비스 자세히 보기
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <div className="bg-white py-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-8 md:gap-16 grayscale opacity-70">
           {/* Mock Logos */}
           <div className="flex items-center gap-2 font-bold text-xl text-gray-400"><ShieldCheck /> 대한민국 소비자브랜드 대상</div>
           <div className="flex items-center gap-2 font-bold text-xl text-gray-400"><Heart /> 배상책임보험 가입</div>
           <div className="flex items-center gap-2 font-bold text-xl text-gray-400"><Star /> 고객만족도 1위</div>
        </div>
      </div>

      {/* Service Highlights */}
      <Section className="text-center">
        <h2 className="text-3xl font-bold text-[#333333] mb-4">어떤 케어가 필요하신가요?</h2>
        <p className="text-gray-500 mb-12">산모님과 아기의 건강을 위한 체계적인 프로그램을 제공합니다.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICE_ITEMS.map((item, idx) => (
            <div key={idx} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col">
              <div className="h-56 overflow-hidden relative">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                   <h3 className="text-xl font-bold text-white p-6 w-full text-left">{item.title}</h3>
                </div>
              </div>
              <div className="p-6 text-left flex-grow flex flex-col justify-between">
                <ul className="space-y-2 mb-4">
                  {item.items.map((subItem, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-600 text-sm md:text-base">
                      <CheckCircle className="w-4 h-4 text-[#FF9E9E] mt-1 shrink-0" />
                      <span>{subItem}</span>
                    </li>
                  ))}
                </ul>
                
                {item.note && (
                  <div className="mt-4 pt-4 border-t border-dashed border-gray-200 bg-[#FFF0F0]/50 -mx-6 px-6 pb-2">
                    <div className="flex gap-2 items-start mb-1">
                      <AlertCircle className="w-4 h-4 text-[#FF9E9E] mt-0.5 shrink-0" />
                      <p className="text-xs font-bold text-[#FF9E9E] leading-relaxed">
                        {item.note.important}
                      </p>
                    </div>
                    {item.note.detail && (
                      <p className="text-xs text-gray-500 pl-6 leading-relaxed">
                        {item.note.detail}
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Why K-Mom */}
      <Section bgColor="bg-[#FFF0F0]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            {/* Consulting / Trust image */}
            <img 
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop" 
              alt="Consulting" 
              className="rounded-3xl shadow-2xl z-10 relative" 
            />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#66D2C2] rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse"></div>
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-[#FF9E9E] rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse"></div>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-6">
              왜 많은 김포맘들이<br/>
              <span className="text-[#FF9E9E]">케이맘</span>을 선택할까요?
            </h2>
            <div className="space-y-6">
              {[
                "엄격한 신원 검증을 통과한 한국인 관리사",
                "정기적인 보수 교육 및 건강 검진 실시",
                "전문 배상 책임 보험 100% 가입 업체",
                "김포 전 지역(풍무, 운양, 구래 등) 빠른 배정"
              ].map((text, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0">
                    <CheckCircle className="text-[#66D2C2] w-6 h-6" />
                  </div>
                  <p className="text-lg text-gray-700 font-medium">{text}</p>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <Button onClick={() => navigate('/caregiver')}>관리사 시스템 더보기</Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Reviews */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#333333] mb-4">생생한 이용 후기</h2>
          <p className="text-gray-500">김포맘 카페에서 인정한 찐 후기를 확인하세요.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((review) => (
            <div key={review.id} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-50 relative">
              <Quote className="text-[#FFF0F0] w-12 h-12 absolute top-6 left-6" />
              <div className="relative z-10">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(review.rating)].map((_, i) => <Star key={i} fill="currentColor" size={20} />)}
                </div>
                <p className="text-gray-600 mb-6 min-h-[80px] line-clamp-3">{review.content}</p>
                <div className="flex justify-between items-center text-sm">
                  <span className="font-bold text-[#333333]">{review.author}</span>
                  <span className="text-gray-400">{review.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section bgColor="bg-[#FF9E9E]" className="text-center">
        <h2 className="text-3xl font-bold text-white mb-6">
          정부지원 바우처, 얼마나 받을 수 있을까요?
        </h2>
        <p className="text-white/90 mb-10 text-lg">
          복잡한 바우처 계산, 케이맘이 친절하게 도와드립니다.<br/>
          지금 바로 잔액 조회 및 무료 상담을 신청하세요.
        </p>
        <Button size="lg" variant="secondary" onClick={handleConsultation}>
          간편 상담 신청하기
        </Button>
      </Section>
    </div>
  );
};

export default Main;