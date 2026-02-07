import React, { useState } from 'react';
import Section from '../components/Section';
import Button from '../components/Button';
import { Baby, User, Calculator, Clock, Calendar, AlertCircle, FileText, Info, Check } from 'lucide-react';

// Data types for the voucher table
type DurationType = 'short' | 'standard' | 'long';
type CategoryType = 'single' | 'twins' | 'triplets' | 'quads';

interface VoucherRow {
  target: string;
  typeCode: string;
  incomeInfo: string;
  days: Record<DurationType, number>;
  totalPrice: Record<DurationType, string>;
  govSupport: Record<DurationType, string>;
  selfPay: Record<DurationType, string>;
}

const Program: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('single');
  const [activeDuration, setActiveDuration] = useState<DurationType>('standard');

  const handleConsultation = () => {
    window.open("https://open.kakao.com/o/syYIK3Ah", '_blank');
  };

  // 2026 Voucher Data Mapping
  const voucherData: Record<CategoryType, VoucherRow[]> = {
    single: [
      {
        target: "첫째아", typeCode: "A-가-➀", incomeInfo: "자격확인",
        days: { short: 5, standard: 10, long: 15 },
        totalPrice: { short: "732", standard: "1,464", long: "2,196" },
        govSupport: { short: "659", standard: "1,165", long: "1,525" },
        selfPay: { short: "73", standard: "299", long: "671" }
      },
      {
        target: "첫째아", typeCode: "A-통합-➀", incomeInfo: "150% 이하",
        days: { short: 5, standard: 10, long: 15 },
        totalPrice: { short: "732", standard: "1,464", long: "2,196" },
        govSupport: { short: "569", standard: "1,002", long: "1,303" },
        selfPay: { short: "163", standard: "462", long: "893" }
      },
      {
        target: "첫째아", typeCode: "A-라-➀", incomeInfo: "150% 초과",
        days: { short: 5, standard: 10, long: 15 },
        totalPrice: { short: "732", standard: "1,464", long: "2,196" },
        govSupport: { short: "456", standard: "764", long: "1,035" },
        selfPay: { short: "276", standard: "700", long: "1,161" }
      },
      {
        target: "둘째아", typeCode: "A-가-➁", incomeInfo: "자격확인",
        days: { short: 10, standard: 15, long: 20 },
        totalPrice: { short: "1,464", standard: "2,196", long: "2,928" },
        govSupport: { short: "1,345", standard: "1,794", long: "2,094" },
        selfPay: { short: "119", standard: "402", long: "834" }
      },
      {
        target: "둘째아", typeCode: "A-통합-➁", incomeInfo: "150% 이하",
        days: { short: 10, standard: 15, long: 20 },
        totalPrice: { short: "1,464", standard: "2,196", long: "2,928" },
        govSupport: { short: "1,165", standard: "1,525", long: "1,767" },
        selfPay: { short: "299", standard: "671", long: "1,161" }
      },
      {
        target: "둘째아", typeCode: "A-라-➁", incomeInfo: "150% 초과",
        days: { short: 10, standard: 15, long: 20 },
        totalPrice: { short: "1,464", standard: "2,196", long: "2,928" },
        govSupport: { short: "943", standard: "1,193", long: "1,440" },
        selfPay: { short: "521", standard: "1,003", long: "1,488" }
      },
      {
        target: "셋째아+", typeCode: "A-가-➂", incomeInfo: "자격확인",
        days: { short: 10, standard: 15, long: 20 },
        totalPrice: { short: "1,464", standard: "2,196", long: "2,928" },
        govSupport: { short: "1,374", standard: "1,838", long: "2,154" },
        selfPay: { short: "90", standard: "358", long: "774" }
      },
      {
        target: "셋째아+", typeCode: "A-통합-➂", incomeInfo: "150% 이하",
        days: { short: 10, standard: 15, long: 20 },
        totalPrice: { short: "1,464", standard: "2,196", long: "2,928" },
        govSupport: { short: "1,195", standard: "1,548", long: "1,797" },
        selfPay: { short: "269", standard: "648", long: "1,131" }
      },
      {
        target: "셋째아+", typeCode: "A-라-➂", incomeInfo: "150% 초과",
        days: { short: 10, standard: 15, long: 20 },
        totalPrice: { short: "1,464", standard: "2,196", long: "2,928" },
        govSupport: { short: "973", standard: "1,236", long: "1,499" },
        selfPay: { short: "491", standard: "960", long: "1,429" }
      }
    ],
    twins: [
      {
        target: "인력1명", typeCode: "B-가-➀", incomeInfo: "자격확인",
        days: { short: 10, standard: 15, long: 20 },
        totalPrice: { short: "1,832", standard: "2,748", long: "3,664" },
        govSupport: { short: "1,758", standard: "2,357", long: "2,771" },
        selfPay: { short: "74", standard: "391", long: "893" }
      },
      {
        target: "인력1명", typeCode: "B-통합-➀", incomeInfo: "150% 이하",
        days: { short: 10, standard: 15, long: 20 },
        totalPrice: { short: "1,832", standard: "2,748", long: "3,664" },
        govSupport: { short: "1,572", standard: "2,050", long: "2,436" },
        selfPay: { short: "260", standard: "698", long: "1,228" }
      },
      {
        target: "인력1명", typeCode: "B-라-➀", incomeInfo: "150% 초과",
        days: { short: 10, standard: 15, long: 20 },
        totalPrice: { short: "1,832", standard: "2,748", long: "3,664" },
        govSupport: { short: "1,274", standard: "1,605", long: "1,952" },
        selfPay: { short: "558", standard: "1,143", long: "1,712" }
      },
      {
        target: "인력2명", typeCode: "B-가-➁", incomeInfo: "자격확인",
        days: { short: 10, standard: 15, long: 20 },
        totalPrice: { short: "2,848", standard: "4,272", long: "5,696" },
        govSupport: { short: "2,614", standard: "3,478", long: "4,289" },
        selfPay: { short: "234", standard: "794", long: "1,407" }
      },
      {
        target: "인력2명", typeCode: "B-통합-➁", incomeInfo: "150% 이하",
        days: { short: 10, standard: 15, long: 20 },
        totalPrice: { short: "2,848", standard: "4,272", long: "5,696" },
        govSupport: { short: "2,369", standard: "3,165", long: "3,915" },
        selfPay: { short: "479", standard: "1,107", long: "1,781" }
      },
      {
        target: "인력2명", typeCode: "B-라-➁", incomeInfo: "150% 초과",
        days: { short: 10, standard: 15, long: 20 },
        totalPrice: { short: "2,848", standard: "4,272", long: "5,696" },
        govSupport: { short: "2,004", standard: "2,698", long: "3,353" },
        selfPay: { short: "844", standard: "1,574", long: "2,343" }
      }
    ],
    triplets: [
      {
        target: "인력2명", typeCode: "C-가-➀", incomeInfo: "자격확인",
        days: { short: 15, standard: 25, long: 40 },
        totalPrice: { short: "5,544", standard: "9,240", long: "14,784" },
        govSupport: { short: "5,431", standard: "8,303", long: "12,088" },
        selfPay: { short: "113", standard: "937", long: "2,696" }
      },
      {
        target: "인력2명", typeCode: "C-통합-➀", incomeInfo: "150% 이하",
        days: { short: 15, standard: 25, long: 40 },
        totalPrice: { short: "5,544", standard: "9,240", long: "14,784" },
        govSupport: { short: "4,983", standard: "7,368", long: "11,039" },
        selfPay: { short: "561", standard: "1,872", long: "3,745" }
      },
      {
        target: "인력2명", typeCode: "C-라-➀", incomeInfo: "150% 초과",
        days: { short: 15, standard: 25, long: 40 },
        totalPrice: { short: "5,544", standard: "9,240", long: "14,784" },
        govSupport: { short: "4,253", standard: "6,337", long: "9,540" },
        selfPay: { short: "1,291", standard: "2,903", long: "5,244" }
      },
      {
        target: "인력3명", typeCode: "C-가-➁", incomeInfo: "자격확인",
        days: { short: 15, standard: 25, long: 40 },
        totalPrice: { short: "6,408", standard: "10,680", long: "17,088" },
        govSupport: { short: "6,278", standard: "9,596", long: "13,968" },
        selfPay: { short: "130", standard: "1,084", long: "3,120" }
      },
      {
        target: "인력3명", typeCode: "C-통합-➁", incomeInfo: "150% 이하",
        days: { short: 15, standard: 25, long: 40 },
        totalPrice: { short: "6,408", standard: "10,680", long: "17,088" },
        govSupport: { short: "5,759", standard: "8,514", long: "12,755" },
        selfPay: { short: "649", standard: "2,166", long: "4,333" }
      },
      {
        target: "인력3명", typeCode: "C-라-➁", incomeInfo: "150% 초과",
        days: { short: 15, standard: 25, long: 40 },
        totalPrice: { short: "6,408", standard: "10,680", long: "17,088" },
        govSupport: { short: "4,914", standard: "7,321", long: "11,020" },
        selfPay: { short: "1,494", standard: "3,359", long: "6,068" }
      }
    ],
    quads: [
      {
        target: "인력2명", typeCode: "D-가-➀", incomeInfo: "자격확인",
        days: { short: 15, standard: 25, long: 40 },
        totalPrice: { short: "5,976", standard: "9,960", long: "15,936" },
        govSupport: { short: "5,854", standard: "8,952", long: "13,035" },
        selfPay: { short: "122", standard: "1,008", long: "2,901" }
      },
      {
        target: "인력2명", typeCode: "D-통합-➀", incomeInfo: "150% 이하",
        days: { short: 15, standard: 25, long: 40 },
        totalPrice: { short: "5,976", standard: "9,960", long: "15,936" },
        govSupport: { short: "5,372", standard: "7,946", long: "11,906" },
        selfPay: { short: "604", standard: "2,014", long: "4,030" }
      },
      {
        target: "인력2명", typeCode: "D-라-➀", incomeInfo: "150% 초과",
        days: { short: 15, standard: 25, long: 40 },
        totalPrice: { short: "5,976", standard: "9,960", long: "15,936" },
        govSupport: { short: "4,586", standard: "6,836", long: "10,293" },
        selfPay: { short: "1,390", standard: "3,124", long: "5,643" }
      },
      {
        target: "인력4명", typeCode: "D-가-➁", incomeInfo: "자격확인",
        days: { short: 15, standard: 25, long: 40 },
        totalPrice: { short: "8,544", standard: "14,240", long: "22,784" },
        govSupport: { short: "8,369", standard: "12,789", long: "18,604" },
        selfPay: { short: "175", standard: "1,451", long: "4,180" }
      },
      {
        target: "인력4명", typeCode: "D-통합-➁", incomeInfo: "150% 이하",
        days: { short: 15, standard: 25, long: 40 },
        totalPrice: { short: "8,544", standard: "14,240", long: "22,784" },
        govSupport: { short: "7,674", standard: "11,338", long: "16,978" },
        selfPay: { short: "870", standard: "2,902", long: "5,806" }
      },
      {
        target: "인력4명", typeCode: "D-라-➁", incomeInfo: "150% 초과",
        days: { short: 15, standard: 25, long: 40 },
        totalPrice: { short: "8,544", standard: "14,240", long: "22,784" },
        govSupport: { short: "6,542", standard: "9,740", long: "14,655" },
        selfPay: { short: "2,002", standard: "4,500", long: "8,129" }
      }
    ]
  };

  const currentRows = voucherData[activeCategory];

  return (
    <div className="pt-20">
      <Section bgColor="bg-[#FFF0F0]" className="text-center">
        <h1 className="text-4xl font-bold text-[#333333] mb-4">2026년 서비스 프로그램</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          산모님의 건강 회복과 신생아의 안정을 최우선으로 생각합니다.<br className="hidden md:block"/>
          2026년 보건복지부 고시 기준 최신 정부지원 바우처 및 일반 서비스 요금표입니다.
        </p>
      </Section>

      <Section>
        {/* Core Care Info Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
           <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-[#FF9E9E]/10 rounded-2xl flex items-center justify-center mb-6">
                <User className="text-[#FF9E9E] w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-[#333333] mb-4">산모 집중 케어</h3>
              <ul className="space-y-4 text-gray-600">
                {["균형 잡힌 영양 식단 준비", "모유 수유 및 가슴 관리 보조", "좌욕 및 부종 완화 케어", "정서적 안정과 산후 우울증 예방"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-[#FF9E9E] rounded-full shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
           </div>
           <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-[#66D2C2]/10 rounded-2xl flex items-center justify-center mb-6">
                <Baby className="text-[#66D2C2] w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-[#333333] mb-4">신생아 집중 케어</h3>
              <ul className="space-y-4 text-gray-600">
                {["매일 목욕 및 위생 관리 (배꼽 소독 등)", "수유 관리 및 젖병 열탕 소독", "신생아 발달 모니터링", "아가 의류 세탁 및 생활공간 위생"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-[#66D2C2] rounded-full shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
           </div>
        </div>

        {/* 2026 Daily Price Table */}
        <div className="mb-24 scroll-mt-24">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-[#66D2C2]/10 text-[#66D2C2] font-bold text-sm mb-3">
              <Info size={16} /> 2026년 산모·신생아 건강관리 서비스 단가
            </span>
            <h2 className="text-3xl font-bold text-[#333333] mb-4">서비스 1일당 단가 안내</h2>
            <p className="text-gray-500">정부지원 바우처 산정의 기준이 되는 1일 이용 금액입니다.</p>
          </div>

          <div className="overflow-x-auto bg-white rounded-3xl shadow-xl border border-gray-100 max-w-5xl mx-auto">
            <table className="w-full min-w-[800px] text-sm text-center border-collapse">
              <thead>
                <tr className="bg-gray-100 text-[#333333] font-bold">
                  <th className="py-4 border-r border-white">구분</th>
                  <th className="py-4 border-r border-white">단태아 (1명)</th>
                  <th className="py-4 border-r border-white" colSpan={2}>쌍태아</th>
                  <th className="py-4 border-r border-white" colSpan={2}>삼태아</th>
                  <th className="py-4" colSpan={2}>사태아 이상</th>
                </tr>
                <tr className="bg-gray-50 text-gray-500 text-[11px] border-t border-white">
                  <th className="py-2 border-r border-white">인력 수</th>
                  <th className="py-2 border-r border-white">1명</th>
                  <th className="py-2 border-r border-white">1명</th>
                  <th className="py-2 border-r border-white">2명</th>
                  <th className="py-2 border-r border-white">2명</th>
                  <th className="py-2 border-r border-white">3명</th>
                  <th className="py-2 border-r border-white">2명</th>
                  <th className="py-2">4명</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-lg font-black text-[#333333]">
                  <td className="py-6 bg-gray-50/50 text-xs font-bold border-r border-gray-100">1일당 단가(천원)</td>
                  <td className="border-r border-gray-100 text-[#FF9E9E]">146.4</td>
                  <td className="border-r border-gray-100">183.2</td>
                  <td className="border-r border-gray-100">284.8</td>
                  <td className="border-r border-gray-100">369.6</td>
                  <td className="border-r border-gray-100">427.2</td>
                  <td className="border-r border-gray-100">398.4</td>
                  <td className="text-gray-800">569.6</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 2026 Voucher Table */}
        <div className="mb-24 scroll-mt-24" id="gov-price">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-[#FF9E9E]/10 text-[#FF9E9E] font-bold text-sm mb-3">
              <Calculator size={16} /> 2026년 정부지원 바우처 최신 기준
            </span>
            <h2 className="text-3xl font-bold text-[#333333] mb-4">정부지원 바우처 서비스 요금</h2>
            <p className="text-gray-500">12개 컬럼을 6개로 압축하여 한눈에 보실 수 있도록 정리했습니다.</p>
          </div>

          <div className="flex justify-center mb-6">
            <div className="bg-gray-100 p-1 rounded-full inline-flex flex-wrap justify-center shadow-inner">
              {([['single', '단태아'], ['twins', '쌍태아'], ['triplets', '삼태아'], ['quads', '사태아 이상']] as const).map(([id, label]) => (
                <button 
                  key={id}
                  onClick={() => setActiveCategory(id)}
                  className={`px-5 py-2 rounded-full text-xs md:text-sm font-bold transition-all ${
                    activeCategory === id ? 'bg-white text-[#FF9E9E] shadow-md' : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-center mb-8">
            <div className="bg-white border-2 border-[#FF9E9E]/20 p-1 rounded-2xl inline-flex shadow-sm">
                {([['short', '단축'], ['standard', '표준'], ['long', '연장']] as const).map(([id, label]) => (
                    <button
                        key={id}
                        onClick={() => setActiveDuration(id)}
                        className={`px-8 py-2 rounded-xl text-sm font-black transition-all flex items-center gap-2 ${
                            activeDuration === id ? 'bg-[#FF9E9E] text-white shadow-lg scale-105' : 'text-gray-400 hover:bg-gray-50'
                        }`}
                    >
                        {activeDuration === id && <Check size={16} />}
                        {label}
                    </button>
                ))}
            </div>
          </div>

          <div className="max-w-5xl mx-auto overflow-hidden bg-white rounded-3xl shadow-2xl border border-gray-100">
            <table className="w-full text-sm text-center border-collapse">
              <thead>
                <tr className="bg-[#FFF0F0] text-[#333333] font-black border-b border-white">
                  <th className="py-4 px-2 w-24">대상</th>
                  <th className="py-4 px-2">유형(코드)</th>
                  <th className="py-4 px-2">소득유형</th>
                  <th className="py-4 px-2 bg-white/50">기간</th>
                  <th className="py-4 px-2">서비스가격</th>
                  <th className="py-4 px-2">정부지원금</th>
                  <th className="py-4 px-2 bg-[#FF9E9E] text-white text-lg">본인부담금</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {currentRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                    <td className="py-4 font-bold text-gray-700">{row.target}</td>
                    <td className="py-4 text-xs font-medium text-gray-500">{row.typeCode}형</td>
                    <td className="py-4 text-xs text-left px-4">{row.incomeInfo}</td>
                    <td className="py-4 font-bold text-[#66D2C2] bg-gray-50/50">{row.days[activeDuration]}일</td>
                    <td className="py-4 text-gray-400 font-medium">{row.totalPrice[activeDuration]}</td>
                    <td className="py-4 text-gray-400 font-medium">{row.govSupport[activeDuration]}</td>
                    <td className="py-4 font-black text-[#FF9E9E] bg-[#FF9E9E]/5 text-lg">
                        {row.selfPay[activeDuration]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4 px-4 max-w-5xl mx-auto">
             <div className="flex items-center gap-2 text-xs text-gray-400 italic text-left">
                <AlertCircle size={14} className="shrink-0" />
                <span>금액 단위: 천원 / A-라형 등 예외지원은 지자체마다 다를 수 있으니 꼭 상담받으세요.</span>
             </div>
             <Button variant="outline" size="sm" onClick={() => window.scrollTo({ top: document.getElementById('general-price')?.offsetTop, behavior: 'smooth' })}>
                일반 서비스 요금 확인하기
             </Button>
          </div>
        </div>

        {/* General Service Fees */}
        <div className="mb-24 scroll-mt-24" id="general-price">
            <div className="text-center mb-12">
                <span className="inline-block py-1 px-4 rounded-full bg-[#E0F7F1] text-[#66D2C2] font-bold text-xs mb-3">일반 서비스 (2026년 기준)</span>
                <h2 className="text-3xl font-bold text-[#333333] mb-4">케이맘 일반 서비스 요금</h2>
                <p className="text-gray-500">바우처 없이 100% 자비로 이용하시는 경우의 표준 요금표입니다.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                {/* 출퇴근형 */}
                <div className="bg-white p-6 md:p-8 rounded-3xl shadow-xl border border-gray-100">
                    <div className="flex items-center gap-3 mb-6">
                        <Clock className="text-[#FF9E9E] w-6 h-6" />
                        <h3 className="text-xl font-bold text-[#333333]">출퇴근형 요금</h3>
                    </div>
                    <div className="overflow-hidden rounded-xl border border-gray-100">
                        <table className="w-full text-center text-sm border-collapse">
                            <thead>
                                <tr className="bg-[#FFF0F0] text-[#333333] font-bold">
                                    <th className="py-3 border-r border-white">구분</th>
                                    <th className="py-3 border-r border-white">예약금</th>
                                    <th className="py-3">총액(주5일)</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50 text-gray-600">
                                <tr><td className="py-4 font-bold">1주</td><td>265,000원</td><td className="font-bold text-gray-800">890,000원</td></tr>
                                <tr><td className="py-4 font-bold">2주</td><td>500,000원</td><td className="font-bold text-gray-800">1,750,000원</td></tr>
                                <tr><td className="py-4 font-bold">3주</td><td>650,000원</td><td className="font-bold text-gray-800">2,525,000원</td></tr>
                                <tr><td className="py-4 font-bold">4주</td><td>800,000원</td><td className="font-bold text-gray-800">3,300,000원</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* 파트타임 */}
                <div className="bg-white p-6 md:p-8 rounded-3xl shadow-xl border border-gray-100">
                    <div className="flex items-center gap-3 mb-6">
                        <Clock className="text-[#FF9E9E] w-6 h-6" />
                        <h3 className="text-xl font-bold text-[#333333]">파트타임 요금</h3>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-6 mb-6 space-y-4">
                        <div className="flex justify-between items-start">
                            <span className="font-bold text-gray-700 text-sm">이용 시간 선택</span>
                            <div className="text-right text-xs">
                                <p className="text-[#FF9E9E] font-bold">오전파트 09:00 ~ 14:00</p>
                                <p className="text-[#66D2C2] font-bold">오후파트 13:00 ~ 18:00</p>
                            </div>
                        </div>
                        <div className="flex justify-between border-t border-dashed border-gray-200 pt-4">
                            <span className="font-bold text-gray-700 text-sm">예약금</span>
                            <span className="font-bold text-[#FF9E9E]">350,000원</span>
                        </div>
                        <div className="space-y-3 pt-2">
                            <div className="flex gap-4">
                                <span className="text-xs font-bold text-[#66D2C2] shrink-0">필수</span>
                                <p className="text-xs text-gray-600">신생아케어 전반적 업무</p>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-xs font-bold text-[#FF9E9E] shrink-0">선택</span>
                                <p className="text-xs text-gray-600 leading-relaxed">청소(아가방, 주방, 거실) OR 산모 식사준비(국+반찬2가지)</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 입주형 */}
                <div className="lg:col-span-2 bg-white p-6 md:p-8 rounded-3xl shadow-xl border border-gray-100">
                    <div className="flex items-center gap-3 mb-6">
                        <Calendar className="text-[#66D2C2] w-6 h-6" />
                        <h3 className="text-xl font-bold text-[#333333]">입주형 요금</h3>
                    </div>
                    <div className="overflow-x-auto rounded-xl border border-gray-100">
                        <table className="w-full text-center text-sm border-collapse min-w-[800px]">
                            <thead>
                                <tr className="bg-[#F0FDF9] text-[#333333] font-bold">
                                    <th rowSpan={2} className="py-4 border-r border-white">구분</th>
                                    <th colSpan={2} className="py-2 border-r border-white">일반</th>
                                    <th colSpan={2} className="py-2">프리미엄</th>
                                </tr>
                                <tr className="bg-[#F0FDF9] text-[11px] text-gray-500 border-t border-white">
                                    <th className="py-2 border-r border-white font-medium">예약금</th>
                                    <th className="py-2 border-r border-white font-medium">총액</th>
                                    <th className="py-2 border-r border-white font-medium">예약금</th>
                                    <th className="py-2 font-medium">총액</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50 text-gray-600">
                                <tr>
                                    <td className="py-4 font-bold bg-gray-50/30">1주</td>
                                    <td>350,000원</td><td>1,350,000원</td>
                                    <td>400,000원</td><td className="text-[#FF9E9E] font-bold">1,425,000원</td>
                                </tr>
                                <tr>
                                    <td className="py-4 font-bold bg-gray-50/30">2주</td>
                                    <td>500,000원</td><td>2,500,000원</td>
                                    <td>550,000원</td><td className="text-[#FF9E9E] font-bold">2,600,000원</td>
                                </tr>
                                <tr>
                                    <td className="py-4 font-bold bg-gray-50/30">3주</td>
                                    <td>650,000원</td><td>3,650,000원</td>
                                    <td>700,000원</td><td className="text-[#FF9E9E] font-bold">3,775,000원</td>
                                </tr>
                                <tr>
                                    <td className="py-4 font-bold bg-gray-50/30">4주</td>
                                    <td>800,000원</td><td>4,800,000원</td>
                                    <td>850,000원</td><td className="text-[#FF9E9E] font-bold">4,950,000원</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* 추가 요금표 (수정 완료 확인용 강조) */}
                <div className="lg:col-span-2 bg-white p-6 md:p-8 rounded-3xl shadow-xl border border-gray-100">
                    <div className="flex items-center gap-3 mb-6">
                        <AlertCircle className="text-orange-400 w-6 h-6" />
                        <h3 className="text-xl font-bold text-[#333333]">추가 요금 안내 (1일 기준)</h3>
                    </div>
                    <div className="overflow-x-auto rounded-xl border border-gray-100">
                        <table className="w-full text-center text-sm border-collapse min-w-[800px]">
                            <thead>
                                <tr className="bg-gray-100 text-[#333333] font-bold">
                                    <th className="py-3 border-r border-white">구분</th>
                                    <th className="py-3 border-r border-white">출퇴근형</th>
                                    <th className="py-3 border-r border-white">입주형</th>
                                    <th className="py-3">파트타임</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 text-gray-600">
                                <tr><td className="py-3 bg-gray-50/30 font-medium text-left px-4">큰아이 취학(36개월 이상)</td><td className="font-bold text-red-500">5,000원</td><td className="font-bold text-red-500">5,000원</td><td className="font-bold text-red-500">5,000원</td></tr>
                                <tr><td className="py-3 bg-gray-50/30 font-medium text-left px-4">큰아이 미취학(36개월 미만)</td><td>8,000원</td><td>12,000원</td><td>3,000원</td></tr>
                                <tr><td className="py-3 bg-gray-50/30 font-medium text-left px-4">미취학 (가정보육)</td><td>10,000원</td><td>15,000원</td><td>5,000원</td></tr>
                                <tr><td className="py-3 bg-gray-50/30 font-medium text-left px-4">가족 1인 추가</td><td className="font-bold text-red-500">5,000원</td><td className="font-bold text-red-500">5,000원</td><td className="font-bold text-red-500">5,000원</td></tr>
                                <tr><td className="py-3 bg-gray-50/30 font-medium text-left px-4">남편 상주</td><td className="font-bold text-red-500">5,000원</td><td className="font-bold text-red-500">5,000원</td><td className="font-bold text-red-500">5,000원</td></tr>
                                <tr><td className="py-3 bg-gray-50/30 font-medium text-left px-4">토,일요일 / 공휴일</td><td>160,000원</td><td>250,000원</td><td>-</td></tr>
                                <tr><td className="py-3 bg-gray-50/30 font-medium text-left px-4">시간 연장 (시간당)</td><td>20,000원</td><td>20,000원</td><td>20,000원</td></tr>
                            </tbody>
                        </table>
                    </div>
                    
                    {/* Highly visible disclaimer box */}
                    <div className="mt-10 p-8 bg-[#FFF9F9] rounded-[32px] border-l-8 border-[#FF9E9E] shadow-lg">
                        <div className="flex items-start gap-4">
                            <AlertCircle className="text-[#FF9E9E] w-8 h-8 mt-1 shrink-0" />
                            <div className="space-y-4">
                                <p className="text-lg text-[#FF9E9E] font-black leading-relaxed">
                                    ※ 지역의 특성에 따라 요금은 지점별로 상이할 수 있습니다.
                                </p>
                                <p className="text-[15px] text-gray-700 font-bold leading-relaxed break-keep">
                                    ※ 쌍둥이 케어의 경우, 관리사님의 전문 등급에 따라 별도의 추가 비용이 발생할 수 있으며 금액에 차이가 있을 수 있습니다. 산모님께 가장 적합한 서비스를 위해 상담 시 상세히 안내해 드리겠습니다.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Refund & Policy */}
            <div className="max-w-5xl mx-auto mt-24">
                <div className="bg-gray-50 rounded-[40px] p-8 md:p-12 border border-gray-200">
                    <div className="flex items-center gap-3 mb-8">
                        <FileText className="text-[#FF9E9E] w-8 h-8" />
                        <h3 className="text-2xl font-bold text-[#333333]">이용 계약 및 환불 규정</h3>
                    </div>
                    <div className="space-y-10">
                        <div>
                            <h4 className="text-lg font-bold text-[#333333] mb-3 flex items-center gap-2">
                                <span className="w-6 h-6 bg-[#FF9E9E] text-white rounded-full flex items-center justify-center text-xs">1</span>
                                출산 예정일의 변동 등
                            </h4>
                            <p className="text-sm text-gray-600 ml-8 leading-relaxed">
                                • 예정일과 다른 일자에 출산하여 매칭 가능한 제공인력이 없는 경우 계약을 해제할 수 있으며, <b>계약금은 전액 환급</b>됩니다.<br/>
                                • 이용자의 요청 시 인근 다른 제공기관 안내를 위해 노력합니다.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-[#333333] mb-3 flex items-center gap-2">
                                <span className="w-6 h-6 bg-[#FF9E9E] text-white rounded-full flex items-center justify-center text-xs">2</span>
                                서비스 개시 전 계약의 해제
                            </h4>
                            <div className="overflow-hidden rounded-xl border border-gray-200 ml-8 mb-4">
                                <table className="w-full text-xs text-center border-collapse">
                                    <thead className="bg-gray-100">
                                        <tr><th className="py-2 border-r border-gray-200">제공기관 귀책사유</th><th className="py-2">이용자 귀책사유 (환급 기준)</th></tr>
                                    </thead>
                                    <tbody className="bg-white">
                                        <tr>
                                            <td className="py-4 border-r border-gray-200 font-bold text-[#FF9E9E]">계약금 환급 및<br/>계약금의 100% 배상</td>
                                            <td className="py-4 text-left px-4 space-y-1">
                                                <p>• 개시 전 3일 이내 : 계약금 전액 미환급</p>
                                                <p>• 개시 7일 ~ 4일 전 : 계약금의 60% 환급</p>
                                                <p>• 계약 다음날 ~ 8일 전 : 계약금 전액 환급</p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-[#333333] mb-3 flex items-center gap-2">
                                <span className="w-6 h-6 bg-[#FF9E9E] text-white rounded-full flex items-center justify-center text-xs">3</span>
                                서비스 개시 후 계약의 해지
                            </h4>
                            <div className="overflow-hidden rounded-xl border border-gray-200 ml-8 mb-4">
                                <table className="w-full text-xs text-center border-collapse">
                                    <thead className="bg-gray-100">
                                        <tr><th className="py-2 border-r border-gray-200">제공기관 귀책사유</th><th className="py-2">이용자 귀책사유</th></tr>
                                    </thead>
                                    <tbody className="bg-white">
                                        <tr>
                                            <td className="py-4 border-r border-gray-200 px-4 text-left">
                                                실제 이용 기간 본인부담금 공제 후 잔액 환급 + <span className="font-bold text-[#FF9E9E]">총 서비스 이용 금액의 10% 배상</span>
                                            </td>
                                            <td className="py-4 px-4 text-left">
                                                실제 이용 기간 본인부담금 + <span className="font-bold text-gray-800">총 서비스 이용 금액의 10% 공제 후 전액 환급</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="pt-6 border-t border-gray-200">
                             <p className="text-[12px] text-gray-400 italic">
                                * 일반건의 경우 카드결제 및 현금영수증 발행은 예약금에 한해서만 가능함을 안내 드립니다.
                             </p>
                             <div className="flex flex-col items-center gap-4">
                                <Button onClick={handleConsultation} className="mt-8">상담 및 예약 신청하기</Button>
                                <span className="text-[10px] text-gray-300">K-MOM 2026 Ver 1.1 업데이트 완료</span>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </Section>
    </div>
  );
};
