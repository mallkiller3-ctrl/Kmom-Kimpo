import { NavItem, Review, FAQItem, CaregiverProfile } from './types';

export const COLORS = {
  primary: '#FF9E9E', // Warm Pink
  secondary: '#FFF0F0', // Light Pink Background
  accent: '#66D2C2', // Mint
  text: '#333333',
  background: '#FFFFFF',
};

export const KAKAO_CHAT_URL = "https://open.kakao.com/o/syYIK3Ah";

export const NAV_ITEMS: NavItem[] = [
  { label: '서비스 안내', path: '/program' },
  { label: '관리사 소개', path: '/caregiver' },
  { label: '지점 소개', path: '/about' },
  { label: '상담/예약', path: '/contact' },
];

export const REVIEWS: Review[] = [
  {
    id: 1,
    author: '풍무동 사랑맘',
    rating: 5,
    content: '초산이라 아무것도 몰랐는데 관리사님이 친정엄마처럼 챙겨주셔서 너무 든든했어요. 특히 식사가 정말 맛있었습니다!',
    date: '2023.10.15',
    location: '풍무동',
  },
  {
    id: 2,
    author: '운양동 행복맘',
    rating: 5,
    content: '정부지원 바우처로 이용했는데 추가금 내고 연장하고 싶을 정도였어요. 아기 케어 스킬이 정말 남다르십니다.',
    date: '2023.11.02',
    location: '운양동',
  },
  {
    id: 3,
    author: '구래동 둥이맘',
    rating: 5,
    content: '쌍둥이라 걱정이 많았는데 베테랑 관리사님이 오셔서 편안하게 조리했습니다. 밤에도 푹 잘 수 있게 도와주셨어요.',
    date: '2023.11.20',
    location: '구래동',
  },
];

export const FAQS: FAQItem[] = [
  {
    question: '정부지원 바우처 등급은 어떻게 확인하나요?',
    answer: '보건소 방문 또는 복지로(www.bokjiro.go.kr) 웹사이트를 통해 소득 기준에 따른 등급을 확인하실 수 있습니다. 상담 전화를 주시면 간편 조회 방법을 안내해 드립니다.',
  },
  {
    question: '산후 도우미는 어떤일을 해주시나요?',
    answer: '산모 케어(산모 마사지, 식사 준비, 위생관리), 신생아 돌봄(목욕, 기저귀 갈기, 수유 보조), 가사일 일부(간단한 청소, 세탁 등)를 도와드립니다.',
  },
  {
    question: '서비스 이용 중 관리사 교체가 가능한가요?',
    answer: '물론입니다. 산모님과 성향이 맞지 않거나 불편하신 점이 있다면 지점장과 상담 후 즉시 교체 진행을 도와드립니다.',
  },
];

export const CAREGIVERS: CaregiverProfile[] = [
  {
    id: 1,
    name: '김영희 관리사',
    role: 'VIP 프리미엄 관리사',
    experience: '경력 10년차',
    badges: ['신생아 케어 우수', '한식 조리 자격', '산후 마사지 이수'],
    // Asian middle-aged woman portrait
    imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&auto=format&fit=crop',
  },
  {
    id: 2,
    name: '이정숙 관리사',
    role: '베스트 관리사',
    experience: '경력 7년차',
    badges: ['쌍둥이 케어 전문', '모유수유 전문가', '친절왕 선정'],
    // Professional woman portrait
    imageUrl: 'https://images.unsplash.com/photo-1595211877493-41a4e5f236b3?q=80&w=300&auto=format&fit=crop',
  },
  {
    id: 3,
    name: '박미란 관리사',
    role: '스탠다드 관리사',
    experience: '경력 4년차',
    badges: ['유아교육 전공', '위생 관리 철저', '밝은 에너지'],
    // Business casual woman portrait
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop',
  },
];