import React from 'react';
import { NAV_ITEMS } from '../../constants';
import { NavLink } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
               <div className="w-8 h-8 bg-[#FF9E9E] rounded-full flex items-center justify-center text-white font-bold">K</div>
               <span className="text-xl font-bold text-[#333333]">케이맘 산후도우미 김포점</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              보건복지부 지정 공식 제공기관.<br/>
              엄마의 마음으로, 전문적인 손길로 산모님과 아기의 첫 시작을 응원합니다.
            </p>
            <div className="text-sm text-gray-400">
              © 2024 K-Mom Gimpo. All rights reserved.
            </div>
          </div>

          <div>
            <h4 className="font-bold text-[#333333] mb-4">바로가기</h4>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.path}>
                  <NavLink 
                    to={item.path} 
                    className="text-gray-500 hover:text-[#FF9E9E] text-sm transition-colors"
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#333333] mb-4">상담문의</h4>
            <div className="text-[#FF9E9E] text-2xl font-bold mb-2">010-2794-3548</div>
            <p className="text-gray-500 text-sm">
              365일 24시간 운영<br/>
              (연중무휴)
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;