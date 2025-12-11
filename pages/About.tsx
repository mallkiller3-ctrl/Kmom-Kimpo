import React from 'react';
import Section from '../components/Section';
import { MapPin, Phone, Clock } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Intro */}
      <Section className="text-center">
        <h1 className="text-4xl font-bold text-[#333333] mb-8">지점 소개</h1>
        <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#FF9E9E] to-[#66D2C2]"></div>
           <h2 className="text-2xl font-bold mb-6">"친정엄마의 마음으로 다가갑니다"</h2>
           <p className="text-gray-600 leading-loose text-lg mb-8">
             안녕하세요, 케이맘 산후도우미 김포점 지점장입니다.<br/>
             저 또한 두 아이를 키우는 엄마로서, 산후조리 기간이 얼마나 중요하고 힘든 시기인지 잘 알고 있습니다.<br/><br/>
             김포점은 단순한 가사 도우미가 아닌, <br/>
             <strong>'육아 파트너'</strong>로서 산모님의 든든한 지원군이 되어드리기 위해<br/>
             매주 정기적인 교육과 철저한 모니터링을 실시하고 있습니다.<br/><br/>
             믿고 맡겨주시는 만큼, 최상의 서비스로 보답하겠습니다.
           </p>
           <div className="inline-block border-b-2 border-[#FF9E9E] pb-1 font-bold text-[#333333]">
             케이맘 김포점 임직원 일동
           </div>
        </div>
      </Section>

      {/* Map & Location */}
      <Section bgColor="bg-[#FFF0F0]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map Placeholder */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg h-[400px] relative flex items-center justify-center bg-gray-200">
             {/* Use fixed image instead of loremflickr */}
             <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop)' }}></div>
             <div className="relative z-10 bg-white p-6 rounded-xl shadow-xl text-center">
                <MapPin className="w-10 h-10 text-[#FF9E9E] mx-auto mb-2" />
                <p className="font-bold text-lg">경기도 김포한강11로 312 2층 201호</p>
                <p className="text-gray-500 text-sm">골드라인 운양역 도보 5분</p>
             </div>
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center space-y-8">
             <div>
                <h3 className="text-2xl font-bold text-[#333333] mb-6 flex items-center gap-2">
                   <MapPin className="text-[#FF9E9E]" /> 서비스 가능 지역
                </h3>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                   <p className="text-gray-700 font-medium mb-2">김포 전 지역 가능 합니다.</p>
                   <p className="text-gray-500 text-sm leading-relaxed">
                     그 외 인근 지역은 문의 주시면 상담 가능합니다.
                   </p>
                </div>
             </div>

             <div>
                <h3 className="text-2xl font-bold text-[#333333] mb-6 flex items-center gap-2">
                   <Clock className="text-[#66D2C2]" /> 운영 시간
                </h3>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-2">
                   <div className="flex justify-between items-center">
                     <span className="text-gray-500 text-lg">상담문의</span>
                     <span className="font-bold text-xl text-[#FF9E9E]">365일 24시간 운영</span>
                   </div>
                   <div className="flex justify-between items-center">
                     <span className="text-gray-500">휴무일</span>
                     <span className="font-bold">연중무휴</span>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default About;