import React, { useState } from 'react';
import { SERVICES, TECH_STACK, CASE_STUDIES } from './constants';
import * as Icons from './components/Icons';

const App: React.FC = () => {
  const adminEmail = "c2clo@naver.com";
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col relative w-full overflow-x-hidden break-keep-all">
      {/* Navigation */}
      <nav className="glass-nav sticky top-0 z-40 px-4 md:px-6 py-4 md:py-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a href="#" className="flex items-center gap-2 md:gap-3 hover:opacity-80 transition-opacity">
            <div className="bg-blue-600 text-white p-2 md:p-2.5 rounded-lg md:rounded-xl font-bold text-lg md:text-2xl leading-none shadow-lg shadow-blue-500/20">DB</div>
            <span className="text-xl md:text-3xl font-black tracking-tighter text-slate-900">ZONE</span>
          </a>
          
          <div className="hidden lg:flex items-center gap-10 xl:gap-14 text-lg font-bold text-slate-700">
            {['주요 서비스', '기술 역량', '성공 사례', 'AI 상담'].map((item) => {
              const href = item === 'AI 상담' ? '#' : `#${item === '주요 서비스' ? 'services' : item === '기술 역량' ? 'technology' : 'case-studies'}`;
              const onClick = item === 'AI 상담' ? (e: React.MouseEvent) => { e.preventDefault(); setIsOpen(true); } : undefined;
              return (
                <a key={item} href={href} onClick={onClick} className="relative group py-2 overflow-hidden whitespace-nowrap cursor-pointer">
  <span className="group-hover:text-blue-600 transition-colors uppercase tracking-tight flex items-center gap-1">
    {item === 'AI 상담' && (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="#ef4444" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-bounce">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
        <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
      </svg>
    )}
    {item}
  </span>
  <span className="absolute bottom-0 left-0 w-full h-[4px] bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
</a>
              );
            })}
          </div>

          <button onClick={() => setIsOpen(true)} className="lg:hidden relative group px-2 py-1">
            <span className="text-blue-600 font-bold text-base flex items-center gap-1">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#ef4444" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-bounce">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
              </svg>
              AI 상담
            </span>
            <span className="absolute bottom-0 left-0 w-full h-[3px] bg-red-500"></span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative overflow-hidden pt-12 md:pt-24 pb-20 md:pb-40 hero-gradient px-4 md:px-6">
        <div className="absolute inset-0 z-0 opacity-[0.9] pointer-events-none">
            <img 
                src="/homebg.png" 
                className="w-full h-full object-cover" 
                alt="modern-office-building-bg"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-50/60 to-slate-50"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10 text-center md:text-left pt-[65vw] md:pt-[45vw] lg:pt-[35vw]">
          <div className="max-w-4xl mx-auto md:mx-0">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-[10px] md:text-xs font-bold mb-6 border border-blue-200 uppercase tracking-widest mx-auto md:mx-0">
              Data. Intelligence. Future.
            </div>
            <h1 className="text-xl sm:text-2xl md:text-4xl font-black text-slate-900 tracking-tight leading-[1.2] md:leading-[1.1] mb-8 break-words">
              DB <span className="text-blue-600">Innovation</span> <br className="hidden sm:block" />
              Beyond Managed <br className="hidden sm:block" />
              Services.
            </h1>
            <p className="text-base md:text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl font-medium px-2 md:px-0 break-keep-all">
              20년 업력의 오라클 전문성과 차세대 AI 기술의 결합.<br className="hidden md:block" />
              DBZone은 귀사의 비즈니스 핵심인 데이터를 가장 안전하고 지능적으로 관리합니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start px-4 md:px-0">
              <button onClick={() => setIsOpen(true)} className="bg-slate-900 text-white px-8 md:px-10 py-4 rounded-xl font-bold hover:bg-slate-800 transition-all text-center shadow-xl hover:-translate-y-1 text-base md:text-lg flex items-center gap-2 justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#ef4444" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-bounce">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
                  <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
                </svg>
                AI 상담
              </button>
              <a href="#services" className="bg-white/80 backdrop-blur-sm text-slate-900 border border-slate-200 px-8 md:px-10 py-4 rounded-xl font-bold hover:bg-slate-50 transition-all text-center text-base md:text-lg">서비스 보기</a>
            </div>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-32 px-4 md:px-6 relative bg-white scroll-mt-24 md:scroll-mt-32">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12 md:mb-24 text-center md:text-left">
            <h2 className="text-[10px] md:text-sm font-bold text-blue-600 uppercase tracking-[0.4em] mb-4">Our Expertise</h2>
            <h3 className="text-2xl md:text-6xl font-black text-slate-900 mb-6 md:mb-8 tracking-tight break-keep-all">지능형 데이터 매니지먼트의 4대 핵심 가치</h3>
            <p className="text-base md:text-xl text-slate-500 leading-relaxed font-medium break-keep-all">
              전통적인 DB 기술력부터 미래형 AI 솔루션까지 <br className="hidden md:block" />
              귀사의 비즈니스 안정을 위한 통합 서비스를 제공합니다.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-6 md:gap-12">
            {SERVICES.map((service, index) => {
              const IconComp = (Icons as any)[service.icon] || Icons.Database;
              return (
                <div key={service.id} className="group relative bg-slate-50/50 rounded-[1.5rem] md:rounded-[3rem] p-6 md:p-14 border border-slate-100 hover:border-blue-400/50 transition-all duration-500 hover:shadow-xl hover:bg-white flex flex-col">
                  <div className="flex justify-between items-start mb-6 md:mb-10">
                    <div className="w-12 h-12 md:w-20 md:h-20 bg-blue-600 text-white rounded-xl md:rounded-3xl flex items-center justify-center shadow-xl shadow-blue-200 transition-transform group-hover:scale-110 duration-500">
                      <IconComp />
                    </div>
                    <span className="text-slate-200 text-4xl md:text-7xl font-black italic select-none">0{index + 1}</span>
                  </div>
                  
                  <h4 className="text-xl md:text-3xl font-black text-slate-900 mb-3 md:mb-6 group-hover:text-blue-600 transition-colors tracking-tight">
                    {service.title}
                  </h4>
                  <p className="text-slate-600 text-sm md:text-lg mb-6 md:mb-10 leading-relaxed font-semibold break-keep-all">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3 md:space-y-5 flex-1">
                    {service.features.map((f, i) => (
                      <div key={i} className="flex items-start gap-3 md:gap-4 text-left">
                        <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mt-0.5 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all">
                          <Icons.Check />
                        </div>
                        <p className="text-slate-700 font-bold leading-tight text-xs md:text-base break-keep-all">{f}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-16 md:py-32 bg-slate-900 text-white px-4 md:px-6 relative overflow-hidden scroll-mt-24 md:scroll-mt-32">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-24 items-center">
            <div className="text-center md:text-left">
              <h2 className="text-blue-400 font-bold tracking-widest text-[10px] md:text-sm uppercase mb-4">Technical Strength</h2>
              <h3 className="text-2xl md:text-5xl font-black mb-6 md:mb-8 tracking-tight">독보적인 기술 스택.</h3>
              <p className="text-slate-400 text-base md:text-xl mb-10 md:mb-12 leading-relaxed font-medium break-keep-all">
                RAC, Data Guard, Exadata 최적화 등 오라클 하이엔드 아키텍처를 완벽하게 제어합니다.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 md:gap-8">
                {TECH_STACK.map((tech, idx) => (
                  <div key={idx} className="group p-5 md:p-8 rounded-xl md:rounded-3xl bg-slate-800/40 border border-slate-700/50 hover:border-blue-500/50 transition-all text-left">
                    <div className="text-blue-400 text-[9px] md:text-xs font-bold mb-2 uppercase tracking-tighter">{tech.category}</div>
                    <div className="text-lg md:text-2xl font-black mb-2">{tech.name}</div>
                    <div className="text-slate-400 text-[11px] md:text-sm leading-relaxed font-medium break-keep-all">{tech.description}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-[#0f172a] border border-slate-700 rounded-3xl md:rounded-[2.5rem] p-8 md:p-12 shadow-2xl font-mono text-xs md:text-sm relative overflow-hidden hidden md:block">
              <div className="flex gap-2 mb-8">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
              </div>
              <div className="space-y-4 text-base md:text-lg">
                <p className="text-slate-500">$ dbzone --analyze-performance</p>
                <p className="text-blue-400">SQL&gt; CONNECT / AS SYSDBA</p>
                <p className="text-slate-300">Connected to: Oracle 19c EE</p>
                <p className="text-green-400 font-bold">STATUS: OPEN (RAC ENABLED)</p>
                <p className="text-blue-400">SQL&gt; EXEC dbzone_ai.predict();</p>
                <p className="text-green-400 font-semibold">&gt;&gt; Health Index 99%</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section id="case-studies" className="py-16 md:py-32 px-4 md:px-6 bg-slate-50/50 scroll-mt-24 md:scroll-mt-32">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 md:mb-20 gap-6 text-center md:text-left">
            <div className="max-w-2xl">
              <h2 className="text-[10px] md:text-sm font-bold text-blue-600 uppercase tracking-widest mb-4">Proven Results</h2>
              <h3 className="text-2xl md:text-5xl font-black text-slate-900 tracking-tight break-keep-all">숫자와 결과로 증명합니다</h3>
            </div>
            <button onClick={() => setIsOpen(true)} className="text-blue-600 font-black flex items-center gap-2 group text-sm md:text-lg">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#ef4444" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-bounce">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
              </svg>
              AI 상담
            </button>
          </div>
          <div className="grid md:grid-cols-2 gap-6 md:gap-10">
            {CASE_STUDIES.map((study, idx) => (
              <div key={idx} className="bg-white p-6 md:p-14 rounded-[1.5rem] md:rounded-[3.5rem] border border-slate-200/50 shadow-lg hover:-translate-y-2 transition-all duration-500 group">
                <div className="text-blue-600 font-bold text-[9px] md:text-xs mb-3 md:mb-6 uppercase tracking-[0.2em]">{study.industry}</div>
                <h4 className="text-xl md:text-3xl font-black text-slate-900 mb-6 md:mb-10 group-hover:text-blue-600 transition-colors break-keep-all">{study.client}</h4>
                <div className="space-y-6 md:space-y-8">
                  <div>
                    <div className="text-slate-400 text-[9px] md:text-xs font-bold uppercase mb-2 tracking-tighter">Business Challenge</div>
                    <p className="text-slate-600 text-sm md:text-lg font-medium leading-relaxed break-keep-all">{study.challenge}</p>
                  </div>
                  <div className="pt-6 md:pt-8 border-t border-slate-100">
                    <div className="text-blue-500 text-[9px] md:text-xs font-bold uppercase mb-2 tracking-tighter">DBZone Solution & Result</div>
                    <p className="text-slate-900 font-black text-lg md:text-2xl leading-tight break-keep-all">{study.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 md:py-24 px-4 md:px-6 relative scroll-mt-24 md:scroll-mt-32">
        <div className="max-w-5xl mx-auto bg-slate-900 rounded-[2rem] md:rounded-[4rem] p-8 md:p-24 text-white text-center shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 opacity-[0.1] pointer-events-none group-hover:scale-110 transition-transform duration-1000">
             <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000" className="w-full h-full object-cover" alt="contact-building-bg" />
          </div>
          <div className="relative z-10">
            <h3 className="text-2xl md:text-6xl font-black mb-4 md:mb-8 tracking-tight break-keep-all">전문 엔지니어 상담</h3>
            <p className="text-slate-400 mb-8 md:mb-14 max-w-2xl mx-auto text-sm md:text-xl font-medium leading-relaxed px-2 break-keep-all">
              귀사의 데이터베이스 환경을 정밀하게 분석하여 성능 향상 전략을 제안해 드립니다.
            </p>
            <button
              onClick={() => setIsOpen(true)}
              className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-blue-700 transition-all hover:-translate-y-1 shadow-xl flex items-center gap-3 mx-auto"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="#ef4444" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-bounce">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
              </svg>
              AI 상담
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 md:py-24 border-t border-slate-200 text-center bg-slate-50 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <a href="#" className="flex justify-center items-center gap-2 mb-8 md:mb-12 hover:opacity-80 transition-opacity">
            <div className="bg-slate-900 text-white p-2 rounded-lg font-black text-lg md:text-xl leading-none">DB</div>
            <span className="text-xl md:text-4xl font-black tracking-tighter text-slate-900 uppercase">Zone</span>
          </a>
          <div className="space-y-2 md:space-y-4 text-slate-500 text-xs md:text-lg font-medium">
            <p className="text-slate-900 font-black text-sm md:text-xl mb-3 md:mb-6">DBZone Managed Services Inc.</p>
            <p className="break-keep-all">본사: 충청북도 청주시 흥덕구 오송</p>
            <div className="pt-8 md:pt-16">
              <p className="text-[9px] md:text-[12px] text-slate-400 uppercase tracking-[0.2em] md:tracking-[0.5em] font-black leading-relaxed">
                © 2024 DBZone. <br className="md:hidden" /> Data. Intelligence. Future. <br className="md:hidden" /> All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Typebot 스마트 알리미 팝업 */}
    {isOpen && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4" onClick={() => setIsOpen(false)}>
    <div
      className="relative flex w-full max-w-4xl bg-white rounded-2xl overflow-hidden shadow-2xl"
      style={{ height: 'min(620px, 90vh)' }}
      onClick={e => e.stopPropagation()}
    >
      {/* 닫기 버튼 */}
      <button
        onClick={() => setIsOpen(false)}
        className="absolute top-3 right-3 z-20 bg-white/90 backdrop-blur-sm rounded-full p-1.5 shadow-md hover:bg-slate-100 transition-colors"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6 6 18M6 6l12 12"/></svg>
      </button>

      {/* 왼쪽: 3D 캐릭터 */}
      <div className="hidden sm:block w-2/5 shrink-0 h-full">
        <iframe
          src="/avatar.html"
          className="w-full h-full border-0"
          title="AI 상담 캐릭터"
        />
      </div>

      {/* 오른쪽: Typebot 채팅 */}
      <div className="flex-1 h-full">
        <iframe
          src="https://bot.dbzone.kr/lead-generation-7o4fpsk"
          className="w-full h-full border-0"
          title="AI 상담 채팅"
        />
      </div>
    </div>
  </div>
)}
    </div>
  );
};

export default App;