
import React, { useState } from 'react';
import Section from '../components/Section';
import Button from '../components/Button';
import { Calculator, Clock, Info, CreditCard, ShieldAlert, User } from 'lucide-react';

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
    triplets: [],
    quads: []
  };

  const currentRows = voucherData[activeCategory] || [];

  return (
    <div className="pt-20">
      <Section bgColor="bg-[#FFF0F0]" className="text-center">
        <h1 className="text-4xl font-bold text-[#333333] mb-4">서비스 프로그램</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          2026년 최신 기준 서비스 요금을 안내해 드립니다.<br/>
          정부지원 바우처부터 일반 서비스까지 산모님의 상황에 맞는 최적의 프로그램을 선택하세요.
        </p>
      </Section>

      {/* 1. 정부지원 바우처 섹션 */}
      <Section id="gov-price">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-[#333333] mb-4 flex items-center justify-center gap-2">
            <Calculator className="text-[#FF9E9E]" /> 정부지원 바우처 서비스 요금
          </h2>
          <p className="text-gray-500">2026년 보건복지부 고시 기준 최신 정보입니다.</p>
        </div>

        <div className="flex justify-center mb-6">
          <div className="bg-gray-100 p-1 rounded-full inline-flex shadow-inner">
            {([['single', '단태아'], ['twins', '쌍태아']] as const).map(([id, label]) => (
              <button 
                key={id}
                onClick={() => setActiveCategory(id)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
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
                      className={`px-8 py-2 rounded-xl text-sm font-bold transition-all ${
                          activeDuration === id ? 'bg-[#FF9E9E] text-white shadow-lg' : 'text-gray-400 hover:bg-gray-50'
                      }`}
                  >
                      {label}
                  </button>
              ))}
          </div>
        </div>

        <div className="max-w-5xl mx-auto overflow-hidden bg-white rounded-3xl shadow-xl border border-gray-100 mb-12">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-center border-collapse">
                <thead>
                <tr className="bg-[#FFF0F0] text-[#333333] font-bold">
                    <th className="py-4 px-2">대상</th>
                    <th className="py-4 px-2">유형(코드)</th>
                    <th className="py-4 px-2">소득유형</th>
                    <th className="py-4 px-2">기간</th>
                    <th className="py-4 px-2">서비스가격</th>
                    <th className="py-4 px-2">정부지원금</th>
                    <th className="py-4 px-2 bg-[#FF9E9E] text-white">본인부담금</th>
                </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                {currentRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-gray-50/50">
                    <td className="py-4 font-bold">{row.target}</td>
                    <td className="py-4 text-xs">{row.typeCode}형</td>
                    <td className="py-4 text-xs text-left px-4">{row.incomeInfo}</td>
                    <td className="py-4 font-bold text-[#66D2C2]">{row.days[activeDuration]}일</td>
                    <td className="py-4 text-gray-400">{row.totalPrice[activeDuration]}</td>
                    <td className="py-4 text-gray-400">{row.govSupport[activeDuration]}</td>
                    <td className="py-4 font-black text-[#FF9E9E] bg-[#FF9E9E]/5 text-lg">
                        {row.selfPay[activeDuration]}
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
          </div>
        </div>
        <div className="max-w-5xl mx-auto flex items-start gap-3 bg-blue-50 p-4 rounded-2xl">
            <Info className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
            <p className="text-xs text-blue-700 leading-relaxed">
                ※ 위 가격은 2026년 보건복지부 고시 기준이며, 바우처 등급은 관할 보건소나 복지로 사이트에서 확인 가능합니다.<br/>
                ※ 서비스 가격 단위 : 천원 (예: 299 -> 299,000원)
            </p>
        </div>
      </Section>

      {/* 2. 일반 서비스 섹션 */}
      <Section bgColor="bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#333333] mb-4">일반 서비스 (2026년 기준)</h2>
          <p className="text-gray-500">바우처 없이 100% 자비로 이용하시는 경우의 표준 요금표입니다.</p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* 출퇴근형 */}
            <div className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-[#FF9E9E]/10 rounded-xl flex items-center justify-center">
                        <Clock className="text-[#FF9E9E] w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-[#333333]">출퇴근형 요금 (주5일)</h3>
                </div>
                <table className="w-full text-left">
                    <thead>
                        <tr className="text-gray-400 text-sm border-b border-gray-50">
                            <th className="pb-3 font-normal">구분</th>
                            <th className="pb-3 font-normal">예약금</th>
                            <th className="pb-3 font-normal text-right">총액</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {[
                            { week: '1주', deposit: '265,000원', total: '890,000원' },
                            { week: '2주', deposit: '500,000원', total: '1,750,000원' },
                            { week: '3주', deposit: '650,000원', total: '2,525,000원' },
                            { week: '4주', deposit: '800,000원', total: '3,300,000원' },
                        ].map((row, i) => (
                            <tr key={i} className="hover:bg-gray-50/50">
                                <td className="py-4 font-bold text-[#333333]">{row.week}</td>
                                <td className="py-4 text-gray-500 text-sm">{row.deposit}</td>
                                <td className="py-4 text-right font-bold text-[#FF9E9E]">{row.total}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* 파트타임 - 최신 수정 완료 */}
            <div className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-100 flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-[#66D2C2]/10 rounded-xl flex items-center justify-center">
                        <Clock className="text-[#66D2C2] w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-[#333333]">파트타임 요금</h3>
                </div>
                <div className="space-y-4 mb-6">
                    <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                        <div className="flex justify-between items-center mb-2">
                           <span className="text-xs text-gray-400 font-bold">이용시간</span>
                           <span className="text-xs text-[#66D2C2] font-bold">시간 선택제</span>
                        </div>
                        <p className="font-bold text-[#333333] text-sm leading-relaxed">
                          오전파트 09:00 ~ 14:00<br/>
                          오후파트 13:00 ~ 18:00
                        </p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex justify-between items-center px-4 py-2 border-b border-gray-50">
                            <span className="text-sm text-gray-500">예약금</span>
                            <span className="font-bold text-[#FF9E9E]">350,000원</span>
                        </div>
                        <div className="flex justify-between items-center px-4 py-2 border-b border-gray-50">
                            <span className="text-sm text-gray-500">잔금</span>
                            <span className="font-bold text-gray-700">900,000원</span>
                        </div>
                        <div className="flex justify-between items-center px-4 bg-[#FF9E9E]/5 py-3 rounded-xl border border-[#FF9E9E]/10">
                            <span className="font-bold text-gray-700">총액</span>
                            <span className="text-xl font-black text-[#FF9E9E]">1,250,000원</span>
                        </div>
                    </div>
                </div>
                <div className="mt-auto pt-6 border-t border-gray-50 space-y-4">
                    <div className="flex items-start gap-2">
                        <div className="bg-[#66D2C2] text-white text-[10px] px-1.5 py-0.5 rounded font-bold mt-0.5">필수</div>
                        <p className="text-sm text-gray-600 font-medium">신생아케어 전반적 업무</p>
                    </div>
                    <div className="flex items-start gap-2">
                        <div className="bg-gray-400 text-white text-[10px] px-1.5 py-0.5 rounded font-bold mt-0.5">선택</div>
                        <p className="text-sm text-gray-500 leading-relaxed">
                          청소 (아가방, 주방, 거실)<br/>
                          <span className="text-[10px] text-gray-400 block my-1">OR</span>
                          산모 식사준비 (국 + 반찬 2가지)
                        </p>
                    </div>
                </div>
            </div>
        </div>

        {/* 입주형 요금표 - 주 5일형 변경 및 색상 통일 */}
        <div className="max-w-5xl mx-auto bg-white p-8 md:p-12 rounded-[40px] shadow-sm border border-gray-100 mb-16">
            <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-[#FF9E9E]/10 rounded-2xl flex items-center justify-center">
                    <Clock className="text-[#FF9E9E] w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-[#333333]">입주형 요금 (주 5일 근무형)</h3>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-center border-collapse">
                    <thead>
                        <tr className="bg-[#FFF0F0] text-[#333333] text-sm">
                            <th className="py-4 px-4 rounded-tl-2xl">구분</th>
                            <th className="py-4 px-4 border-x border-white">일반 예약금</th>
                            <th className="py-4 px-4 border-x border-white font-bold">일반 총액</th>
                            <th className="py-4 px-4 border-x border-white text-[#FF9E9E]">프리미엄 예약금</th>
                            <th className="py-4 px-4 rounded-tr-2xl text-[#FF9E9E] font-bold">프리미엄 총액</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {[
                            { week: '1주', gDep: '350,000원', gTot: '1,350,000원', pDep: '400,000원', pTot: '1,425,000원' },
                            { week: '2주', gDep: '500,000원', gTot: '2,500,000원', pDep: '550,000원', pTot: '2,600,000원' },
                            { week: '3주', gDep: '650,000원', gTot: '3,650,000원', pDep: '700,000원', pTot: '3,775,000원' },
                            { week: '4주', gDep: '800,000원', gTot: '4,800,000원', pDep: '850,000원', pTot: '4,950,000원' },
                        ].map((row, i) => (
                            <tr key={i} className="hover:bg-gray-50/50">
                                <td className="py-5 font-bold text-[#333333]">{row.week}</td>
                                <td className="py-5 text-gray-500 text-sm">{row.gDep}</td>
                                <td className="py-5 font-bold text-[#333333]">{row.gTot}</td>
                                <td className="py-5 text-[#FF9E9E]/70 text-sm">{row.pDep}</td>
                                <td className="py-5 font-black text-[#FF9E9E]">{row.pTot}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

        {/* 추가 요금 안내 - 표 형식으로 개편 */}
        <div className="max-w-5xl mx-auto mb-16">
            <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-[#333333]">추가 요금 안내 (1일 기준)</h3>
            </div>
            <div className="bg-white rounded-[32px] shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-center border-collapse">
                        <thead>
                            <tr className="bg-gray-50 text-gray-400 text-xs font-bold uppercase tracking-wider">
                                <th className="py-4 px-4 text-left">구분</th>
                                <th className="py-4 px-2">출퇴근형</th>
                                <th className="py-4 px-2">입주형</th>
                                <th className="py-4 px-2 bg-[#66D2C2]/5 text-[#66D2C2]">파트타임</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50 text-sm">
                            {[
                                { label: '큰아이 취학 (36개월 이상)', commuter: '5,000원', livein: '5,000원', part: '5,000원' },
                                { label: '큰아이 미취학 (36개월 미만)', commuter: '8,000원', livein: '12,000원', part: '3,000원' },
                                { label: '미취학 (가정보육)', commuter: '10,000원', livein: '15,000원', part: '5,000원' },
                                { label: '가족 1인 추가', commuter: '5,000원', livein: '5,000원', part: '5,000원' },
                                { label: '남편 상주', commuter: '5,000원', livein: '5,000원', part: '5,000원' },
                                { label: '토,일요일 / 공휴일', commuter: '160,000원', livein: '250,000원', part: '-' },
                                { label: '시간 연장 (시간당)', commuter: '20,000원', livein: '20,000원', part: '20,000원' },
                            ].map((row, i) => (
                                <tr key={i} className="hover:bg-gray-50/50">
                                    <td className="py-4 px-4 text-left font-bold text-gray-700">{row.label}</td>
                                    <td className="py-4 text-gray-500">{row.commuter}</td>
                                    <td className="py-4 text-gray-500">{row.livein}</td>
                                    <td className="py-4 font-bold text-[#66D2C2] bg-[#66D2C2]/5">{row.part}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <p className="text-[11px] text-gray-400 mt-6 text-center leading-relaxed">
                ※ 지역의 특성에 따라 요금은 지점별로 상이할 수 있습니다.<br/>
                ※ 쌍둥이 케어의 경우, 관리사님의 전문 등급에 따라 별도의 추가 비용이 발생할 수 있습니다.
            </p>
        </div>
      </Section>

      {/* 3. 이용 계약 및 환불 규정 섹션 */}
      <Section>
        <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-[#333333] mb-4">이용 계약 및 환불 규정</h2>
                <p className="text-gray-500">안전하고 투명한 계약을 위해 꼭 확인해 주세요.</p>
            </div>

            <div className="space-y-6">
                <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex gap-6 items-start">
                    <div className="w-12 h-12 bg-[#FF9E9E] text-white rounded-2xl flex items-center justify-center font-black text-xl shrink-0 shadow-lg shadow-[#FF9E9E]/20">1</div>
                    <div>
                        <h4 className="text-lg font-bold text-[#333333] mb-3">출산 예정일의 변동 등</h4>
                        <ul className="space-y-2 text-gray-600 text-sm leading-relaxed">
                            <li>• 예정일과 다른 일자에 출산하여 매칭 가능한 제공인력이 없는 경우 계약을 해제할 수 있으며, 계약금은 전액 환급됩니다.</li>
                            <li>• 이용자의 요청 시 인근 다른 제공기관 안내를 위해 노력합니다.</li>
                        </ul>
                    </div>
                </div>

                <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex gap-6 items-start">
                    <div className="w-12 h-12 bg-[#FF9E9E] text-white rounded-2xl flex items-center justify-center font-black text-xl shrink-0 shadow-lg shadow-[#FF9E9E]/20">2</div>
                    <div className="w-full">
                        <h4 className="text-lg font-bold text-[#333333] mb-3">서비스 개시 전 계약의 해제</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-red-50 p-4 rounded-2xl">
                                <p className="font-bold text-red-600 text-sm mb-2 flex items-center gap-1">제공기관 귀책사유</p>
                                <p className="text-xs text-red-700">계약금 환급 및 계약금의 100% 배상</p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-2xl">
                                <p className="font-bold text-gray-600 text-sm mb-2 flex items-center gap-1">이용자 귀책사유</p>
                                <ul className="text-xs text-gray-500 space-y-1">
                                    <li>• 개시 전 3일 이내 : 계약금 전액 미환급</li>
                                    <li>• 개시 7일 ~ 4일 전 : 계약금의 60% 환급</li>
                                    <li>• 계약 다음날 ~ 8일 전 : 계약금 전액 환급</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex gap-6 items-start">
                    <div className="w-12 h-12 bg-[#FF9E9E] text-white rounded-2xl flex items-center justify-center font-black text-xl shrink-0 shadow-lg shadow-[#FF9E9E]/20">3</div>
                    <div className="w-full">
                        <h4 className="text-lg font-bold text-[#333333] mb-3">서비스 개시 후 계약의 해지</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-red-50 p-4 rounded-2xl">
                                <p className="font-bold text-red-600 text-sm mb-2">제공기관 귀책사유</p>
                                <p className="text-xs text-red-700">실제 이용 기간 본인부담금 공제 후 잔액 환급 + 총 서비스 이용 금액의 10% 배상</p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-2xl">
                                <p className="font-bold text-gray-600 text-sm mb-2">이용자 귀책사유</p>
                                <p className="text-xs text-gray-500">실제 이용 기간 본인부담금 + 총 서비스 이용 금액의 10% 공제 후 전액 환급</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-12 p-6 bg-gray-100 rounded-3xl text-center">
                <p className="text-sm text-gray-500 italic">
                    * 일반건의 경우 카드결제 및 현금영수증 발행은 예약금에 한해서만 가능함을 안내 드립니다.
                </p>
            </div>

            <div className="mt-12 flex flex-col items-center">
                <Button onClick={handleConsultation} size="lg" className="px-12 py-5 text-xl">
                    상담 및 예약 신청하기
                </Button>
            </div>
        </div>
      </Section>
    </div>
  );
};

export default Program;
