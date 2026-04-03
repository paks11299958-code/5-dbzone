import React, { useState } from 'react';
import { Popup } from '@typebot.io/react';

const ChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* 말풍선 메시지 */}
      {!isOpen && (
        <div className="absolute -top-20 right-0 bg-white text-slate-700 text-xs px-3 py-2 rounded-xl shadow-lg border border-slate-200 whitespace-nowrap">
          <div className="flex flex-col gap-1">
            <span>🔔 담당자 즉시 호출 중</span>
            <span>📨 메일/문자로 실시간 전달됩니다</span>
          </div>
          {/* 말풍선 꼬리 */}
          <div className="absolute -bottom-2 right-6 w-3 h-3 bg-white border-r border-b border-slate-200 transform rotate-45"></div>
        </div>
      )}

      {/* 스마트 알리미 버튼 */}
      <button
        onClick={() => setIsOpen(true)}
        className="bg-blue-600 text-white px-5 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-all hover:scale-105 flex items-center gap-2 group"
      >
        {/* 벨 아이콘 */}
        <svg 
          width="22" height="22" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className="group-hover:animate-bounce"
        >
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
          <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
        </svg>
        <span className="font-medium text-sm">스마트 알리미</span>
        {/* 빨간 점 (알림 표시) */}
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></span>
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
      </button>

      {/* Typebot 팝업 */}
      <Popup
        typebot="lead-generation-7o4fpsk"
        apiHost="https://bot.dbzone.kr"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
};

export default ChatAssistant;