import React, { useState } from 'react';
import Section from '../components/Section';
import { Baby, User, AlertCircle, CheckCircle2, Calculator, Calendar, Clock, CreditCard } from 'lucide-react';
import Button from '../components/Button';
import { KAKAO_CHAT_URL } from '../constants';

const Program: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'single' | 'twins' | 'triplets'>('single');

  const handleConsultation = () => {
    window.open(KAKAO_CHAT_URL, '_blank');
  };

  const formatPrice = (price: number) => {
    return price.toLocaleString();
  };

  return (
    <div className="pt-20">
      <Section bgColor="bg-[#FFF0F0]" className="text-center">
        <h1 className="text-4xl font-bold text-[#333333] mb-4">서비스 프로그램</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          산모님의 건강 회복과 신생아의 안정을 최우선으로 생각합니다.<br className="hidden md:block"/>
          체계적인 전문 케어 서비스를 경험해보세요.
        </p>
      </Section>

      <Section>
        {/* Detail Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
           {/* Mom Care */}
           <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-lg">
              <div className="w-14 h-14 bg-[#FF9E9E]/10 rounded-2xl flex items-center justify-center mb-6">
                <User className="text-[#FF9E9E] w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-[#333333] mb-4">산모 집중 케어</h3>
              <ul className="space-y-4">
                {[
                  "영양 균형을 고려한 식사 제공 (점심 식사 제공)",
                  "모유 수유 시 도움 (자세 교정 및 수유 지도)",
                  "산모의 정서 안정을 위한 말벗 서비스",
                  "좌욕 및 찜질팩 지원"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#FF9E9E] rounded-full mt-2.5 shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
           </div>

           {/* Baby Care */}
           <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-lg">
              <div className="w-14 h-14 bg-[#66D2C2]/10 rounded-2xl flex items-center justify-center mb-6">
                <Baby className="text-[#66D2C2] w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-[#333333] mb-4">신생아 집중 케어</h3>
              <ul className="space-y-4">
                {[
                  "신생아 목욕 및 위생 관리 (배꼽 소독 등)",
                  "수유 돕기 및 트림 시키기",
                  "아기 의류 및 젖병 열탕 소독",
                  "예방접종 동행 서비스",
                  "신생아 발달 사항 체크 및 건강 상태 기록"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#66D2C2] rounded-full mt-2.5 shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
           </div>
        </div>

        {/* 2025 Government Service Price */}
        <div className="mb-24 scroll-mt-24" id="gov-price">
          <div className="text-center mb-10">
            <span className="inline-block py-1 px-3 rounded-full bg-[#FF9E9E]/10 text-[#FF9E9E] font-bold text-sm mb-3">
              2025년 최신 기준
            </span>
            <h2 className="text-3xl font-bold text-[#333333] mb-4">정부지원 바우처 서비스 가격</h2>
            <p className="text-gray-500">
              소득 수준과 태아 유형에 따라 정부지원금이 달라집니다.<br className="hidden md:block"/>
              표를 통해 본인부담금을 확인해 보세요. (단위: 천원)
            </p>
          </div>

          {/* Tabs */}
          <div className="flex justify-center mb-8">
            <div className="bg-gray-100 p-1 rounded-full inline-flex">
              <button 
                onClick={() => setActiveTab('single')}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                  activeTab === 'single' ? 'bg-white text-[#FF9E9E] shadow-sm' : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                단태아
              </button>
              <button 
                onClick={() => setActiveTab('twins')}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                  activeTab === 'twins' ? 'bg-white text-[#FF9E9E] shadow-sm' : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                쌍태아
              </button>
              <button 
                onClick={() => setActiveTab('triplets')}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                  activeTab === 'triplets' ? 'bg-white text-[#FF9E9E] shadow-sm' : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                삼태아 이상/중증
              </button>
            </div>
          </div>

          {/* Table Container */}
          <div className="overflow-x-auto bg-white rounded-3xl shadow-xl border border-gray-100">
            <table className="w-full min-w-[1000px] text-sm text-center">
              <thead>
                <tr className="bg-[#FFF0F0] text-[#333333]">
                  <th className="py-4 px-4 border-r border-white/50 w-24">대상</th>
                  <th className="py-4 px-4 border-r border-white/50 w-48">소득유형</th>
                  <th className="py-4 px-4 border-r border-white/50" colSpan={3}>단축 (5일/10일/15일)</th>
                  <th className="py-4 px-4 border-r border-white/50" colSpan={3}>표준 (10일/15일/25일)</th>
                  <th className="py-4 px-4" colSpan={3}>연장 (15일/20일/40일)</th>
                </tr>
                <tr className="bg-gray-50 text-gray-500 text-xs border-b border-gray-200">
                  <th className="py-2 border-r border-gray-200"></th>
                  <th className="py-2 border-r border-gray-200"></th>
                  <th className="py-2 w-20">총액</th>
                  <th className="py-2 w-20">정부</th>
                  <th className="py-2 w-20 bg-[#FF9E9E]/5 text-[#FF9E9E] font-bold">본인</th>
                  <th className="py-2 w-20 border-l border-gray-200">총액</th>
                  <th className="py-2 w-20">정부</th>
                  <th className="py-2 w-20 bg-[#FF9E9E]/5 text-[#FF9E9E] font-bold">본인</th>
                  <th className="py-2 w-20 border-l border-gray-200">총액</th>
                  <th className="py-2 w-20">정부</th>
                  <th className="py-2 w-20 bg-[#FF9E9E]/5 text-[#FF9E9E] font-bold">본인</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {activeTab === 'single' && (
                  <>
                    {/* First Child */}
                    <tr>
                      <td rowSpan={3} className="font-bold bg-gray-50 border-r border-gray-100">첫째아</td>
                      <td className="text-left px-4 py-3 border-r border-gray-100"><span className="font-bold block">A-가-➀형</span><span className="text-xs text-gray-400">기초/차상위</span></td>
                      {/* Short 5 */} <td>712</td><td>642</td><td className="font-bold text-[#FF9E9E] bg-[#FF9E9E]/5">70</td>
                      {/* Std 10 */} <td className="border-l border-gray-100">1,424</td><td>1,138</td><td className="font-bold text-[#FF9E9E] bg-[#FF9E9E]/5">286</td>
                      {/* Ext 15 */} <td className="border-l border-gray-100">2,136</td><td>1,494</td><td className="font-bold text-[#FF9E9E] bg-[#FF9E9E]/5">642</td>
                    </tr>
                    <tr>
                      <td className="text-left px-4 py-3 border-r border-gray-100"><span className="font-bold block">A-통합-➀형</span><span className="text-xs text-gray-400">기준중위 150% 이하</span></td>
                      {/* Short */} <td>712</td><td>556</td><td className="font-bold text-[#FF9E9E] bg-[#FF9E9E]/5">156</td>
                      {/* Std */} <td className="border-l border-gray-100">1,424</td><td>982</td><td className="font-bold text-[#FF9E9E] bg-[#FF9E9E]/5">442</td>
                      {/* Ext */} <td className="border-l border-gray-100">2,136</td><td>1,281</td><td className="font-bold text-[#FF9E9E] bg-[#FF9E9E]/5">855</td>
                    </tr>
                    <tr>
                      <td className="text-left px-4 py-3 border-r border-gray-100"><span className="font-bold block">A-라-➀형</span><span className="text-xs text-gray-400">기준중위 150% 초과</span></td>
                      {/* Short */} <td>712</td><td>448</td><td className="font-bold text-[#FF9E9E] bg-[#FF9E9E]/5">264</td>
                      {/* Std */} <td className="border-l border-gray-100">1,424</td><td>754</td><td className="font-bold text-[#FF9E9E] bg-[#FF9E9E]/5">670</td>
                      {/* Ext */} <td className="border-l border-gray-100">2,136</td><td>1,025</td><td className="font-bold text-[#FF9E9E] bg-[#FF9E9E]/5">1,111</td>
                    </tr>

                    {/* Second Child */}
                    <tr className="border-t-2 border-gray-100">
                      <td rowSpan={3} className="font-bold bg-gray-50 border-r border-gray-100">둘째아</td>
                      <td className="text-left px-4 py-3 border-r border-gray-100"><span className="font-bold block">A-가-➁형</span><span className="text-xs text-gray-400">기초/차상위</span></td>
                      {/* Short 10 */} <td>1,424</td><td>1,310</td><td className="font-bold text-[#FF9E9E] bg-[#FF9E9E]/5">114</td>
                      {/* Std 15 */} <td className="border-l border-gray-100">2,136</td><td>1,751</td><td className="font-bold text-[#FF9E9E] bg-[#FF9E9E]/5">385</td>
                      {/* Ext 20 */} <td className="border-l border-gray-100">2,848</td><td>2,050</td><td className="font-bold text-[#FF9E9E] bg-[#FF9E9E]/5">798</td>
                    </tr>
                    <tr>
                      <td className="text-left px-4 py-3 border-r border-gray-100"><span className="font-bold block">A-통합-➁형</span><span className="text-xs text-gray-400">기준중위 150% 이하</span></td>
                      {/* Short */} <td>1,424</td><td>1,138</td><td className="font-bold text-[#FF9E9E] bg-[#FF9E9E]/5">286</td>
                      {/* Std */} <td className="border-l border-gray-100">2,136</td><td>1,494</td><td className="font-bold text-[#FF9E9E] bg-[#FF9E9E]/5">642</td>
                      {/* Ext */} <td className="border-l border-gray-100">2,848</td><td>1,737</td><td className="font-bold text-[#FF9E9E] bg-[#FF9E9E]/5">1,111</td>
                    </tr>
                    <tr>
                      <td className="text-left px-4 py-3 border-r border-gray-100"><span className="font-bold block">A-라-➁형</span><span className="text-xs text-gray-400">기준중위 150% 초과</span></td>
                      {/* Short */} <td>1,424</td><td>925</td><td className="font-bold text-[#FF9E9E] bg-[#FF9E9E]/5">499</td>
                      {/* Std */} <td className="border-l border-gray-100">2,136</td><td>1,176</td><td className="font-bold text-[#FF9E9E] bg-[#FF9E9E]/5">960</td>
                      {/* Ext */} <td className="border-l border-gray-100">2,848</td><td>1,424</td><td className="font-bold text-[#FF9E9E] bg-[#FF9E9E]/5">1,424</td>
                    </tr>

                    {/* Third Child */}
                    <tr className="border-t-2 border-gray-100">
                      <td rowSpan={3} className="font-bold bg-gray-50 border-r border-gray-100">셋째아<br/>이상</td>
                      <td className="text-left px-4 py-3 border-r border-gray-100"><span className="font-bold block">A-가-➂형</span><span className="text-xs text-gray-400">기초/차상위</span></td>
                      {/* Short 10 */} <td>1,424</td><td>1,338</td><td className="font-bold text-[#FF9E9E] bg-[#FF9E9E]/5">86</td>
                      {/* Std 15 */} <td className="border-l border-gray-100">2,136</td><td>1,793</td><td className="font-bold text-[#FF9E9E] bg-[#FF9E9E]/5">343</td>
                      {/* Ext 20 */} <td className="border-l border-gray-100">2,848</td><td>2,107</td><td className="font-bold text-[#FF9E9E] bg-[#FF9E9E]/5">741</td>
                    </tr>
                    <tr>
                      <td className="text-left px-4 py-3 border-r border-gray-100"><span className="font-bold block">A-통합-➂형</span><span className="text-xs text-gray-400">기준중위 150% 이하</span></td>
                      {/* Short */} <td>1,424</td><td>1,167</td><td className="font-bold text-[#FF9E9E] bg-[#FF9E9E]/5">257</td>
                      {/* Std */} <td className="border-l border-gray-100">2,136</td><td>1,516</td><td className="font-bold text-[#FF9E9E] bg-[#FF9E9E]/5">620</td>
                      {/* Ext */} <td className="border-l border-gray-100">2,848</td><td>1,766</td><td className="font-bold text-[#FF9E9E] bg-[#FF9E9E]/5">1,082</td>
                    </tr>
                    <tr>
                      <td className="text-left px-4 py-3 border-r border-gray-100"><span className="font-bold block">A-라-➂형</span><span className="text-xs text-gray-400">기준중위 150% 초과</span></td>
                      {/* Short */} <td>1,424</td><td>954</td><td className="font-bold text-[#FF9E9E] bg-[#FF9E9E]/5">470</td>
                      {/* Std */} <td className="border-l border-gray-100">2,136</td><td>1,217</td><td className="font-bold text-[#FF9E9E] bg-[#FF9E9E]/5">919</td>
                      {/* Ext */} <td className="border-l border-gray-100">2,848</td><td>1,481</td><td className="font-bold text-[#FF9E9E] bg-[#FF9E9E]/5">1,367</td>
                    </tr>
                  </>
                )}

                {activeTab === 'twins' && (
                  <>
                     {/* Twins - Workforce 1 */}
                     <tr>
                      <td rowSpan={3} className="font-bold bg-gray-50 border-r border-gray-100">쌍태아<br/>(인력1명)<br/><span className="text-xs font-normal text-gray-400">중증+단태아</span></td>
                      <td className="text-left px-4 py-3 border-r border-gray-100"><span className="font-bold block">B-가-➀형</span><span className="text-xs text-gray-400">기초/차상위</span></td>
                      {/* Short 10 */} <td>1,780</td><td>1,709</td><td className="font-bold text-[#FF9E9E] bg-[#FF9E9E]/5">71</td>
                      {/* Std 15 */} <td className="border-l border-gray-100">2,670</td><td>2,296</td><td className="font-bold text-[#FF9E9E] bg-[#FF9E9E]/5">374</td>
                      {/* Ext 20 */} <td className="border-l border-gray-100">3,560</td><td>2,705</td><td className="font-bold text-[#FF9E9E] bg-[#FF9E9E]/5">855</td>
                    </tr>
                    <tr>
                      <td className="text-left px-4 py-3 border-r border-gray-100"><span className="font-bold block">B-통합-➀형</span><span className="text-xs text-gray-400">150% 이하</span></td>
                      {/* Short */} <td>1,780</td><td>1,531</td><td className="font-bold text-[#FF9E9E] bg-[#FF9E9E]/5">249</td>
                      {/* Std */} <td className="border-l border-gray-100">2,670</td><td>2,002</td><td className="font-bold text-[#FF9E9E] bg-[#FF9E9E]/5">668</td>
                      {/* Ext */} <td className="border-l border-gray-100">3,560</td><td>2,385</td><td className="font-bold text-[#FF9E9E] bg-[#FF9E9E]/5">1,175</td>
                    </tr>
                    <tr>
                      <td className="text-left px-4 py-3 border-r border-gray-100"><span className="font-bold block">B-라-➀형</span><span className="text-xs text-gray-400">150% 초과</span></td>
                      {/* Short */} <td>1,780</td><td>1,246</td><td className="font-bold text-[#FF9E9E] bg-[#FF9E9E]/5">534</td>
                      {/* Std */} <td className="border-l border-gray-100">2,670</td><td>1,576</td><td className="font-bold text-[#FF9E9E] bg-[#FF9E9E]/5">1,094</td>
                      {/* Ext */} <td className="border-l border-gray-100">3,560</td><td>1,922</td><td className="font-bold text-[#FF9E9E] bg-[#FF9E9E]/5">1,638</td>
                    </tr>

                     {/* Twins - Workforce 2 */}
                     <tr className="border-t-2 border-gray-100">
                      <td rowSpan={3} className="font-bold bg-gray-50 border-r border-gray-100">쌍태아<br/>(인력2명)</td>
                      <td className="text-left px-4 py-3 border-r border-gray-100"><span className="font-bold block">B-가-➁형</span><span className="text-xs text-gray-400">기초/차상위</span></td>
                      {/* Short 10 */} <td>2,752</td><td>2,529</td><td className="font-bold text-[#FF9E9E] bg-[#FF9E9E]/5">223</td>
                      {/* Std 15 */} <td className="border-l border-gray-100">4,128</td><td>3,372</td><td className="font-bold text-[#FF9E9E] bg-[#FF9E9E]/5">756</td>
                      {/* Ext 20 */} <td className="border-l border-gray-100">5,504</td><td>4,164</td><td className="font-bold text-[#FF9E9E] bg-[#FF9E9E]/5">1,340</td>
                    </tr>
                    <tr>
                      <td className="text-left px-4 py-3 border-r border-gray-100"><span className="font-bold block">B-통합-➁형</span><span className="text-xs text-gray-400">150% 이하</span></td>
                      {/* Short */} <td>2,752</td><td>2,296</td><td className="font-bold text-[#FF9E9E] bg-[#FF9E9E]/5">456</td>
                      {/* Std */} <td className="border-l border-gray-100">4,128</td><td>3,074</td><td className="font-bold text-[#FF9E9E] bg-[#FF9E9E]/5">1,054</td>
                      {/* Ext */} <td className="border-l border-gray-100">5,504</td><td>3,808</td><td className="font-bold text-[#FF9E9E] bg-[#FF9E9E]/5">1,696</td>
                    </tr>
                    <tr>
                      <td className="text-left px-4 py-3 border-r border-gray-100"><span className="font-bold block">B-라-➁형</span><span className="text-xs text-gray-400">150% 초과</span></td>
                      {/* Short */} <td>2,752</td><td>1,948</td><td className="font-bold text-[#FF9E9E] bg-[#FF9E9E]/5">804</td>
                      {/* Std */} <td className="border-l border-gray-100">4,128</td><td>2,629</td><td className="font-bold text-[#FF9E9E] bg-[#FF9E9E]/5">1,499</td>
                      {/* Ext */} <td className="border-l border-gray-100">5,504</td><td>3,273</td><td className="font-bold text-[#FF9E9E] bg-[#FF9E9E]/5">2,231</td>
                    </tr>
                  </>
                )}

                {activeTab === 'triplets' && (
                  <>
                     {/* Triplets - Workforce 2 */}
                     <tr>
                      <td rowSpan={3} className="font-bold bg-gray-50 border-r border-gray-100">삼태아<br/>(인력2명)<br/><span className="text-xs font-normal text-gray-400">중증+쌍태아</span></td>
                      <td className="text-left px-4 py-3 border-r border-gray-100"><span className="font-bold block">C-가-➀형</span><span className="text-xs text-gray-400">기초/차상위</span></td>
                      {/* Short 15 */} <td>5,352</td><td>5,244</td><td className="font-bold text-[#FF9E9E] bg-[#FF9E9E]/5">108</td>
                      {/* Std 25 */} <td className="border-l border-gray-100">8,920</td><td>8,028</td><td className="font-bold text-[#FF9E9E] bg-[#FF9E9E]/5">892</td>
                      {/* Ext 40 */} <td className="border-l border-gray-100">14,272</td><td>11,704</td><td className="font-bold text-[#FF9E9E] bg-[#FF9E9E]/5">2,568</td>
                    </tr>
                    <tr>
                      <td className="text-left px-4 py-3 border-r border-gray-100"><span className="font-bold block">C-통합-➀형</span><span className="text-xs text-gray-400">150% 이하</span></td>
                      <td>5,352</td><td>4,818</td><td className="font-bold text-[#FF9E9E] bg-[#FF9E9E]/5">534</td>
                      <td className="border-l border-gray-100">8,920</td><td>7,137</td><td className="font-bold text-[#FF9E9E] bg-[#FF9E9E]/5">1,783</td>
                      <td className="border-l border-gray-100">14,272</td><td>10,705</td><td className="font-bold text-[#FF9E9E] bg-[#FF9E9E]/5">3,567</td>
                    </tr>
                    <tr>
                      <td className="text-left px-4 py-3 border-r border-gray-100"><span className="font-bold block">C-라-➀형</span><span className="text-xs text-gray-400">150% 초과</span></td>
                      <td>5,352</td><td>4,122</td><td className="font-bold text-[#FF9E9E] bg-[#FF9E9E]/5">1,230</td>
                      <td className="border-l border-gray-100">8,920</td><td>6,155</td><td className="font-bold text-[#FF9E9E] bg-[#FF9E9E]/5">2,765</td>
                      <td className="border-l border-gray-100">14,272</td><td>9,278</td><td className="font-bold text-[#FF9E9E] bg-[#FF9E9E]/5">4,994</td>
                    </tr>

                     {/* Triplets - Workforce 3 */}
                     <tr className="border-t-2 border-gray-100">
                      <td rowSpan={3} className="font-bold bg-gray-50 border-r border-gray-100">삼태아<br/>(인력3명)</td>
                      <td className="text-left px-4 py-3 border-r border-gray-100"><span className="font-bold block">C-가-➁형</span><span className="text-xs text-gray-400">기초/차상위</span></td>
                      {/* Short 15 */} <td>6,192</td><td>6,068</td><td className="font-bold text-[#FF9E9E] bg-[#FF9E9E]/5">124</td>
                      {/* Std 25 */} <td className="border-l border-gray-100">10,320</td><td>9,288</td><td className="font-bold text-[#FF9E9E] bg-[#FF9E9E]/5">1,032</td>
                      {/* Ext 40 */} <td className="border-l border-gray-100">16,512</td><td>13,541</td><td className="font-bold text-[#FF9E9E] bg-[#FF9E9E]/5">2,971</td>
                    </tr>
                    <tr>
                      <td className="text-left px-4 py-3 border-r border-gray-100"><span className="font-bold block">C-통합-➁형</span><span className="text-xs text-gray-400">150% 이하</span></td>
                      <td>6,192</td><td>5,574</td><td className="font-bold text-[#FF9E9E] bg-[#FF9E9E]/5">618</td>
                      <td className="border-l border-gray-100">10,320</td><td>8,257</td><td className="font-bold text-[#FF9E9E] bg-[#FF9E9E]/5">2,063</td>
                      <td className="border-l border-gray-100">16,512</td><td>12,385</td><td className="font-bold text-[#FF9E9E] bg-[#FF9E9E]/5">4,127</td>
                    </tr>
                    <tr>
                      <td className="text-left px-4 py-3 border-r border-gray-100"><span className="font-bold block">C-라-➁형</span><span className="text-xs text-gray-400">150% 초과</span></td>
                      <td>6,192</td><td>4,769</td><td className="font-bold text-[#FF9E9E] bg-[#FF9E9E]/5">1,423</td>
                      <td className="border-l border-gray-100">10,320</td><td>7,121</td><td className="font-bold text-[#FF9E9E] bg-[#FF9E9E]/5">3,199</td>
                      <td className="border-l border-gray-100">16,512</td><td>10,733</td><td className="font-bold text-[#FF9E9E] bg-[#FF9E9E]/5">5,779</td>
                    </tr>

                     {/* Quadruplets - Workforce 2 */}
                     <tr className="border-t-2 border-gray-100">
                      <td rowSpan={3} className="font-bold bg-gray-50 border-r border-gray-100">사태아<br/>이상<br/>(인력2명)<br/><span className="text-xs font-normal text-gray-400">중증+삼태아</span></td>
                      <td className="text-left px-4 py-3 border-r border-gray-100"><span className="font-bold block">D-가-➀형</span><span className="text-xs text-gray-400">기초/차상위</span></td>
                      {/* Short 15 */} <td>5,760</td><td>5,644</td><td className="font-bold text-[#FF9E9E] bg-[#FF9E9E]/5">116</td>
                      {/* Std 25 */} <td className="border-l border-gray-100">9,600</td><td>8,640</td><td className="font-bold text-[#FF9E9E] bg-[#FF9E9E]/5">960</td>
                      {/* Ext 40 */} <td className="border-l border-gray-100">15,360</td><td>12,597</td><td className="font-bold text-[#FF9E9E] bg-[#FF9E9E]/5">2,763</td>
                    </tr>
                    <tr>
                      <td className="text-left px-4 py-3 border-r border-gray-100"><span className="font-bold block">D-통합-➀형</span><span className="text-xs text-gray-400">150% 이하</span></td>
                      <td>5,760</td><td>5,185</td><td className="font-bold text-[#FF9E9E] bg-[#FF9E9E]/5">575</td>
                      <td className="border-l border-gray-100">9,600</td><td>7,682</td><td className="font-bold text-[#FF9E9E] bg-[#FF9E9E]/5">1,918</td>
                      <td className="border-l border-gray-100">15,360</td><td>11,522</td><td className="font-bold text-[#FF9E9E] bg-[#FF9E9E]/5">3,838</td>
                    </tr>
                    <tr>
                      <td className="text-left px-4 py-3 border-r border-gray-100"><span className="font-bold block">D-라-➀형</span><span className="text-xs text-gray-400">150% 초과</span></td>
                      <td>5,760</td><td>4,436</td><td className="font-bold text-[#FF9E9E] bg-[#FF9E9E]/5">1,324</td>
                      <td className="border-l border-gray-100">9,600</td><td>6,625</td><td className="font-bold text-[#FF9E9E] bg-[#FF9E9E]/5">2,975</td>
                      <td className="border-l border-gray-100">15,360</td><td>9,986</td><td className="font-bold text-[#FF9E9E] bg-[#FF9E9E]/5">5,374</td>
                    </tr>

                     {/* Quadruplets - Workforce 4 */}
                     <tr className="border-t-2 border-gray-100">
                      <td rowSpan={3} className="font-bold bg-gray-50 border-r border-gray-100">사태아<br/>이상<br/>(인력4명)</td>
                      <td className="text-left px-4 py-3 border-r border-gray-100"><span className="font-bold block">D-가-➁형</span><span className="text-xs text-gray-400">기초/차상위</span></td>
                      {/* Short 15 */} <td>8,256</td><td>8,090</td><td className="font-bold text-[#FF9E9E] bg-[#FF9E9E]/5">166</td>
                      {/* Std 25 */} <td className="border-l border-gray-100">13,760</td><td>12,385</td><td className="font-bold text-[#FF9E9E] bg-[#FF9E9E]/5">1,375</td>
                      {/* Ext 40 */} <td className="border-l border-gray-100">22,016</td><td>18,054</td><td className="font-bold text-[#FF9E9E] bg-[#FF9E9E]/5">3,962</td>
                    </tr>
                    <tr>
                      <td className="text-left px-4 py-3 border-r border-gray-100"><span className="font-bold block">D-통합-➁형</span><span className="text-xs text-gray-400">150% 이하</span></td>
                      <td>8,256</td><td>7,431</td><td className="font-bold text-[#FF9E9E] bg-[#FF9E9E]/5">825</td>
                      <td className="border-l border-gray-100">13,760</td><td>11,009</td><td className="font-bold text-[#FF9E9E] bg-[#FF9E9E]/5">2,751</td>
                      <td className="border-l border-gray-100">22,016</td><td>16,513</td><td className="font-bold text-[#FF9E9E] bg-[#FF9E9E]/5">5,503</td>
                    </tr>
                    <tr>
                      <td className="text-left px-4 py-3 border-r border-gray-100"><span className="font-bold block">D-라-➁형</span><span className="text-xs text-gray-400">150% 초과</span></td>
                      <td>8,256</td><td>6,358</td><td className="font-bold text-[#FF9E9E] bg-[#FF9E9E]/5">1,898</td>
                      <td className="border-l border-gray-100">13,760</td><td>9,495</td><td className="font-bold text-[#FF9E9E] bg-[#FF9E9E]/5">4,265</td>
                      <td className="border-l border-gray-100">22,016</td><td>14,311</td><td className="font-bold text-[#FF9E9E] bg-[#FF9E9E]/5">7,705</td>
                    </tr>
                  </>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* K-Mom Private Service Price */}
        <div className="mb-20">
            <div className="text-center mb-10">
                <span className="inline-block py-1 px-3 rounded-full bg-[#66D2C2]/10 text-[#66D2C2] font-bold text-sm mb-3">
                    일반 서비스
                </span>
                <h2 className="text-3xl font-bold text-[#333333] mb-4">케이맘 산후도우미 서비스 가격</h2>
                <p className="text-gray-500">
                    정부지원 바우처 없이 100% 자비로 이용하시는 경우의 표준 요금입니다.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* 1. Commuting Type */}
                <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-[#FF9E9E]/10 rounded-full flex items-center justify-center">
                            <Clock className="w-6 h-6 text-[#FF9E9E]" />
                        </div>
                        <h3 className="text-xl font-bold text-[#333333]">출퇴근형 요금 (주 5일)</h3>
                    </div>
                    <div className="overflow-hidden rounded-xl border border-gray-100">
                        <table className="w-full text-center text-sm">
                            <thead className="bg-[#FFF0F0] text-[#333333] font-bold">
                                <tr>
                                    <th className="py-3">구분</th>
                                    <th className="py-3">예약금</th>
                                    <th className="py-3">총액</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                <tr><td className="py-3 font-medium">1주</td><td>270,000</td><td>870,000</td></tr>
                                <tr><td className="py-3 font-medium">2주</td><td>500,000</td><td>1,700,000</td></tr>
                                <tr><td className="py-3 font-medium">3주</td><td>650,000</td><td>2,450,000</td></tr>
                                <tr><td className="py-3 font-medium">4주</td><td>800,000</td><td>3,200,000</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* 2. Part-Time Type */}
                <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg flex flex-col">
                    <div className="flex items-center gap-3 mb-6">
                         <div className="w-10 h-10 bg-[#FF9E9E]/10 rounded-full flex items-center justify-center">
                            <Clock className="w-6 h-6 text-[#FF9E9E]" />
                        </div>
                        <h3 className="text-xl font-bold text-[#333333]">파트타임 요금 (평일 10일/2주)</h3>
                    </div>
                    <div className="flex-grow space-y-4">
                        <div className="flex justify-between items-center bg-gray-50 p-4 rounded-xl">
                            <span className="font-bold text-gray-600">이용 시간</span>
                            <div className="text-right text-sm">
                                <span className="block text-[#FF9E9E] font-bold">오전 09:00 ~ 14:00</span>
                                <span className="block text-[#66D2C2] font-bold">오후 13:00 ~ 18:00</span>
                            </div>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-xl text-sm space-y-2">
                             <div className="flex gap-2">
                                <span className="font-bold text-[#333333] min-w-[40px]">필수</span>
                                <span className="text-gray-600">신생아케어 전반적 업무</span>
                             </div>
                             <div className="flex gap-2">
                                <span className="font-bold text-[#333333] min-w-[40px]">선택</span>
                                <span className="text-gray-600">청소 (아가방, 주방, 거실) <br/> OR 산모 식사준비 (국+반찬2가지)</span>
                             </div>
                        </div>
                        <div className="flex justify-between items-end border-t border-gray-100 pt-4 mt-auto">
                            <div className="text-sm text-gray-400">
                                예약금 350,000원<br/>잔금 850,000원
                            </div>
                            <div className="text-2xl font-bold text-[#333333]">1,200,000원</div>
                        </div>
                    </div>
                </div>

                {/* 3. Live-In Type */}
                <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg lg:col-span-2">
                     <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-[#66D2C2]/10 rounded-full flex items-center justify-center">
                            <Calendar className="w-6 h-6 text-[#66D2C2]" />
                        </div>
                        <h3 className="text-xl font-bold text-[#333333]">입주형 요금 (주 5일)</h3>
                    </div>
                    <div className="overflow-x-auto rounded-xl border border-gray-100">
                         <table className="w-full text-center text-sm min-w-[600px]">
                            <thead className="bg-[#F0FDF9] text-[#333333] font-bold">
                                <tr>
                                    <th className="py-3 px-4" rowSpan={2}>구분</th>
                                    <th className="py-3 px-4 border-l border-white" colSpan={2}>일반</th>
                                    <th className="py-3 px-4 border-l border-white" colSpan={2}>프리미엄</th>
                                </tr>
                                <tr className="text-xs text-gray-500 bg-[#E0F8F4]">
                                    <th className="py-2 border-l border-white">예약금</th>
                                    <th className="py-2">총액</th>
                                    <th className="py-2 border-l border-white">예약금</th>
                                    <th className="py-2">총액</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                <tr><td className="py-3 font-medium">1주</td><td>350,000</td><td>1,325,000</td><td className="bg-[#FFF0F0]/30">400,000</td><td className="bg-[#FFF0F0]/30 font-bold text-[#FF9E9E]">1,400,000</td></tr>
                                <tr><td className="py-3 font-medium">2주</td><td>500,000</td><td>2,450,000</td><td className="bg-[#FFF0F0]/30">550,000</td><td className="bg-[#FFF0F0]/30 font-bold text-[#FF9E9E]">2,550,000</td></tr>
                                <tr><td className="py-3 font-medium">3주</td><td>650,000</td><td>3,575,000</td><td className="bg-[#FFF0F0]/30">700,000</td><td className="bg-[#FFF0F0]/30 font-bold text-[#FF9E9E]">3,700,000</td></tr>
                                <tr><td className="py-3 font-medium">4주</td><td>800,000</td><td>4,700,000</td><td className="bg-[#FFF0F0]/30">850,000</td><td className="bg-[#FFF0F0]/30 font-bold text-[#FF9E9E]">4,850,000</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

        {/* Service Info */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-[#333333] mb-8 text-center">서비스 이용 안내</h2>

          <div className="bg-white border-2 border-[#FF9E9E] rounded-3xl p-8 md:p-12 text-center max-w-3xl mx-auto shadow-xl">
               <div className="animate-fade-in">
                 <h3 className="text-2xl font-bold mb-4 text-[#333333]">정부지원 산후도우미</h3>
                 <p className="text-gray-500 mb-8 leading-relaxed">
                    엄격한 신원 확인과 전문 교육을 이수한 관리사님이 배정됩니다.<br className="hidden md:block"/>
                    산모님과 아기의 편안한 휴식을 위해 최선을 다하겠습니다.
                 </p>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-10">
                    <div className="bg-[#FFF0F0] p-6 rounded-2xl flex flex-col justify-center">
                      <span className="font-bold text-[#333333] block mb-2">비용 안내</span>
                      <span className="text-xl font-bold text-[#FF9E9E]">정부지원금 + 본인부담금</span>
                      <p className="text-sm text-gray-500 mt-2">
                        * 바우처 유형에 따라 지원금이 상이하므로 상담을 통해 확인해주세요.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-2xl flex flex-col justify-center">
                      <span className="font-bold text-[#333333] block mb-2">관리사 배정</span>
                      <span className="text-gray-700">전문 교육 이수 및 건강 검진 완료</span>
                      <p className="text-sm text-gray-500 mt-2">
                        * 산모님의 요청 사항을 최대한 반영하여 최적의 관리사님을 배정해 드립니다.
                      </p>
                    </div>
                 </div>
                 <Button onClick={handleConsultation} size="lg">상담 및 예약하기</Button>
               </div>
          </div>
        </div>

        {/* Additional Cost Info */}
        <div className="border-t border-gray-100 pt-20">
          <h2 className="text-3xl font-bold text-[#333333] mb-12 text-center">추가 비용 안내</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
             <div className="rounded-3xl overflow-hidden shadow-lg h-[300px] md:h-[400px]">
                {/* Fixed Image for Kid Playing */}
                <img 
                  src="https://images.unsplash.com/photo-1596464716127-f9a804e0647e?q=80&w=800&auto=format&fit=crop" 
                  alt="큰아이 돌봄 서비스" 
                  className="w-full h-full object-cover" 
                />
             </div>
             
             <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-[#333333] mb-3">큰 아이 지원 서비스</h3>
                  <p className="text-gray-600">
                    기본 서비스 외에 큰 아이 케어가 필요하신 경우, 추가 요금으로 이용하실 수 있습니다.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                   <h4 className="font-bold text-[#333333] mb-4">제공 서비스 범위</h4>
                   <ul className="space-y-3">
                      {[
                        "큰아이 식사 및 간식 챙기기",
                        "큰아이 방 청소 및 장난감 정리",
                        "큰아이 생활복 세탁"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                           <CheckCircle2 className="w-5 h-5 text-[#FF9E9E] shrink-0" />
                           <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                   </ul>
                </div>

                <div className="bg-[#FFF0F0] p-5 rounded-2xl border border-[#FF9E9E]/30 flex items-start gap-3">
                   <AlertCircle className="w-5 h-5 text-[#FF9E9E] shrink-0 mt-0.5" />
                   <div>
                      <span className="font-bold text-[#FF9E9E] block mb-1">주의사항</span>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        큰아이에 대한 직접적인 케어(목욕, 기저귀 갈기, 놀아주기 등)는 서비스 범위에 포함되지 않습니다.
                      </p>
                   </div>
                </div>
             </div>
          </div>
        </div>

      </Section>
    </div>
  );
};

export default Program;