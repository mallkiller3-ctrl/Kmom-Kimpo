import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Menu, X, Phone, UserPlus } from 'lucide-react';
import { NAV_ITEMS } from '../../constants';
import Button from '../Button';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  const handleRecruitmentClick = () => {
    navigate('/recruitment');
    setIsOpen(false);
  };

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div 
            onClick={() => navigate('/')} 
            className="cursor-pointer flex items-center gap-2"
          >
            <div className="w-8 h-8 md:w-10 md:h-10 bg-[#FF9E9E] rounded-full flex items-center justify-center text-white font-bold text-lg md:text-xl">K</div>
            <span className={`text-xl md:text-2xl font-bold ${scrolled ? 'text-[#333333]' : 'text-[#333333] md:text-white md:shadow-sm'}`}>
              케이맘 <span className="text-sm font-normal">김포점</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-base font-medium transition-colors ${
                    isActive 
                      ? 'text-[#FF9E9E]' 
                      : scrolled ? 'text-[#333333] hover:text-[#FF9E9E]' : 'text-white hover:text-[#FF9E9E] shadow-sm'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            
            <div className="flex items-center gap-3 border-l pl-6 border-gray-200/30">
                <a href="tel:010-2794-3548">
                    <Button size="sm" variant={scrolled ? "primary" : "secondary"}>
                        <Phone className="w-4 h-4 mr-2" />
                        상담전화
                    </Button>
                </a>

                {/* Recruitment Button with Point */}
                <button 
                  onClick={() => navigate('/recruitment')}
                  className={`group flex items-center gap-1.5 font-bold text-sm transition-all ${
                    scrolled ? 'text-[#333333] hover:text-[#66D2C2]' : 'text-white hover:text-[#66D2C2] drop-shadow-sm'
                  }`}
                >
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#66D2C2] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#66D2C2]"></span>
                  </span>
                  관리사모집
                </button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${scrolled ? 'text-[#333333]' : 'text-[#333333]'}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-4 flex flex-col space-y-4">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={handleNavClick}
              className={({ isActive }) =>
                `block px-4 py-2 text-lg font-medium rounded-lg ${
                  isActive ? 'bg-[#FFF0F0] text-[#FF9E9E]' : 'text-[#333333]'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <div className="border-t border-gray-100 my-2 pt-2 space-y-3">
             <button 
                onClick={handleRecruitmentClick}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 text-[#333333] font-bold bg-[#F0FDF9] rounded-lg border border-[#66D2C2]/30"
             >
                <UserPlus className="w-5 h-5 text-[#66D2C2]" />
                관리사 모집 지원하기
             </button>
             <a href="tel:010-2794-3548" className="block w-full">
                <Button fullWidth>전화 상담하기</Button>
             </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;