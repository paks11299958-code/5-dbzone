
import React from 'react';
import { SERVICES, TECH_STACK, CASE_STUDIES } from './constants';
import * as Icons from './components/Icons';

const App: React.FC = () => {
  // 담당자 이메일 주소
  const adminEmail = "c2clo@naver.com";

  return (
    <div className="min-h-screen flex flex-col relative w-full overflow-x-hidden break-keep-all">
      {/* Navigation */}
      <nav className="glass-nav sticky top-0 z-40 px-4 md:px-6 py-4 md:py-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a href="#" className="flex items-center gap-2 md:gap-3 hover:opacity-80 transition-opacity">
            <div className="bg-blue-600 text-white p-2 md:p-2.5 rounded-lg md:rounded-xl font-bold text-lg md:text-2xl leading-none shadow-lg shadow-blue-500/20">DB</div>
            <span className="text-xl md:text-3xl font-black tracking-tighter text-slate-900">ZONE</span>
          </a>
          
          {/* Desktop Menu with Red Bar Points */}
          <div className="hidden lg:flex items-center gap-10 xl:gap-14 text-lg font-bold text-slate-700">
            {['주요 서비스', '기술 역량', '성공 사례', '문의하기'].map((item) => {
              const href = item === '문의하기' ? `mailto:${adminEmail}` : `#${item === '주요 서비스' ? 'services' : item === '기술 역량' ? 'technology' : 'case-studies'}`;
              return (
                <a key={item} href={href} className="relative group py-2 overflow-hidden whitespace-nowrap">
                  <span className="group-hover:text-blue-600 transition-colors uppercase tracking-tight">{item}</span>
                  <span className="absolute bottom-0 left-0 w-full h-[4px] bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </a>
              );
            })}
          </div>

          {/* Mobile simple contact link with Red Point */}
          <a href={`mailto:${adminEmail}`} className="lg:hidden relative group px-2 py-1">
            <span className="text-blue-600 font-bold text-base">문의하기</span>
            <span className="absolute bottom-0 left-0 w-full h-[3px] bg-red-500"></span>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative overflow-hidden pt-12 md:pt-24 pb-20 md:pb-40 hero-gradient px-4 md:px-6">
        <div className="absolute inset-0 z-0 opacity-[0.12] pointer-events-none">
            <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop" 
                className="w-full h-full object-cover" 
                alt="modern-office-building-bg"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-50 to-slate-50"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10 text-center md:text-left">
          <div className="max-w-4xl mx-auto md:mx-0">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-[10px] md:text-xs font-bold mb-6 border border-blue-200 uppercase tracking-widest mx-auto md:mx-0">
              Data. Intelligence. Future.
            </div>
            {/* Mobile-optimized font size and word break */}
            <h1 className="text-3xl sm:text-5xl md:text-8xl font-black text-slate-900 tracking-tight leading-[1.2] md:leading-[1.1] mb-8 break-words">
              DB <span className="text-blue-600">Innovation</span> <br className="hidden sm:block" />
              Beyond Managed <br className="hidden sm:block" />
              Services.
            </h1>
            <p className="text-base md:text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl font-medium px-2 md:px-0 break-keep-all">
              20년 업력의 오라클 전문성과 차세대 AI 기술의 결합.<br className="hidden md:block" />
              DBZone은 귀사의 비즈니스 핵심인 데이터를 가장 안전하고 지능적으로 관리합니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start px-4 md:px-0">
              <a href={`mailto:${adminEmail}`} className="bg-slate-900 text-white px-8 md:px-10 py-4 rounded-xl font-bold hover:bg-slate-800 transition-all text-center shadow-xl hover:-translate-y-1 text-base md:text-lg">기술 상담 문의</a>
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
                  
                  <div className="space-y-3 md:space-y-5 mb-8 md:mb-10 flex-1">
                    {service.features.map((f, i) => (
                      <div key={i} className="flex items-start gap-3 md:gap-4 text-left">
                        <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mt-0.5 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all">
                          <Icons.Check />
                        </div>
                        <p className="text-slate-700 font-bold leading-tight text-xs md:text-base break-keep-all">{f}</p>
                      </div>
                    ))}
                  </div>

                  <a 
                    href={`mailto:${adminEmail}`} 
                    className="inline-flex items-center justify-between px-6 md:px-10 py-4 md:py-6 bg-white border border-slate-200 text-slate-900 rounded-xl md:rounded-2xl font-black hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 group/btn"
                  >
                    <span className="text-xs md:text-base">서비스 상세 문의하기</span>
                    <svg className="transform group-hover/btn:translate-x-2 transition-transform" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </a>
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
            
            {/* Terminal Interface - Hidden on small mobile */}
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
            <a href={`mailto:${adminEmail}`} className="text-blue-600 font-black flex items-center gap-2 group text-sm md:text-lg">
              상담 문의하기 <Icons.Check />
            </a>
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
            
            <div className="bg-slate-800/50 backdrop-blur-md rounded-xl md:rounded-3xl p-6 md:p-12 border border-slate-700/50 inline-block w-full max-w-full overflow-hidden">
              <div className="flex flex-col items-center gap-3 md:gap-4">
                <span className="text-blue-400 font-bold uppercase tracking-[0.2em] text-[9px] md:text-sm">Contact Person Email</span>
                <a 
                  href={`mailto:${adminEmail}`} 
                  className="text-sm sm:text-lg md:text-2xl font-bold text-white hover:text-blue-400 transition-colors tracking-tight break-all underline decoration-blue-500/30"
                >
                  {adminEmail}
                </a>
                <p className="text-slate-500 text-[10px] md:text-sm mt-2 md:mt-4 break-keep-all">메일을 보내주시면 2시간 이내에 전문 엔지니어가 회신 드립니다.</p>
              </div>
            </div>
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
    </div>
  );
};

export default App;
