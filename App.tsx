import React, { useState } from 'react';
import { SERVICES, TECH_STACK, CASE_STUDIES } from './constants';
import * as Icons from './components/Icons';

const BellIcon: React.FC<{ size?: number; className?: string }> = ({ size = 18, className = '' }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24"
    fill="#ef4444" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
    <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
  </svg>
);

const CheckIcon: React.FC = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

const Nav: React.FC<{ onOpenAi: () => void }> = ({ onOpenAi }) => {
  const items = [
    { label: '주요 서비스', href: '#services' },
    { label: '기술 역량',   href: '#technology' },
    { label: '성공 사례',   href: '#case-studies' },
    { label: 'AI 상담',    href: '#', ai: true },
  ];
  return (
    <nav className="dbz-nav">
      <div className="dbz-container dbz-nav-inner">
        <a href="#" className="dbz-logo">
          <div className="dbz-logo-tile">DB</div>
          <span className="dbz-logo-word">ZONE</span>
        </a>
        <div className="dbz-nav-links">
          {items.map((it) => (
            <a key={it.label} href={it.href}
               onClick={it.ai ? (e) => { e.preventDefault(); onOpenAi(); } : undefined}
               className="dbz-nav-link">
              <span className="dbz-nav-link-text">
                {it.ai && <BellIcon size={16} className="dbz-bell-bounce" />}
                {it.label}
              </span>
              <span className="dbz-nav-underline" />
            </a>
          ))}
        </div>
        <button onClick={onOpenAi} className="dbz-nav-mobile-cta">
          <BellIcon size={16} className="dbz-bell-bounce" /> AI 상담
        </button>
      </div>
    </nav>
  );
};

const Hero: React.FC<{ onOpenAi: () => void }> = ({ onOpenAi }) => (
  <header className="dbz-hero">
    <div className="dbz-hero-bg" aria-hidden="true">
      <div className="dbz-hero-img" />
      <div className="dbz-hero-fade" />
    </div>
    <div className="dbz-container dbz-hero-inner">
      <div className="dbz-hero-copy">
        <div className="dbz-pill">Data. Intelligence. Future.</div>
        <h1 className="dbz-h1">
          DB <span className="dbz-accent">Innovation</span><br />
          Beyond Managed<br />
          Services.
        </h1>
        <p className="dbz-lede">
          20년 업력의 오라클 전문성과 차세대 AI 기술의 결합.<br />
          DBZone은 귀사의 비즈니스 핵심인 데이터를 가장 안전하고 지능적으로 관리합니다.
        </p>
        <div className="dbz-cta-row">
          <button onClick={onOpenAi} className="dbz-btn dbz-btn-dark">
            <BellIcon size={18} className="dbz-bell-bounce" /> AI 상담
          </button>
          <a href="#services" className="dbz-btn dbz-btn-glass">서비스 보기</a>
        </div>
      </div>
    </div>
  </header>
);

const Services: React.FC = () => (
  <section id="services" className="dbz-section dbz-section-white">
    <div className="dbz-container">
      <div className="dbz-section-head">
        <div className="dbz-eyebrow">Our Expertise</div>
        <h2 className="dbz-h2">지능형 데이터 매니지먼트의 4대 핵심 가치</h2>
        <p className="dbz-section-lede">
          전통적인 DB 기술력부터 미래형 AI 솔루션까지<br />
          귀사의 비즈니스 안정을 위한 통합 서비스를 제공합니다.
        </p>
      </div>
      <div className="dbz-grid-2">
        {SERVICES.map((s, i) => {
          const IconComp = (Icons as any)[s.icon] || Icons.Database;
          return (
            <div key={s.id} className="dbz-card-service">
              <div className="dbz-card-service-head">
                <div className="dbz-icon-tile"><IconComp /></div>
                <span className="dbz-numeral">0{i + 1}</span>
              </div>
              <h4 className="dbz-card-service-title">{s.title}</h4>
              <p className="dbz-card-service-desc">{s.description}</p>
              <ul className="dbz-feature-list">
                {s.features.map((f, j) => (
                  <li key={j}>
                    <span className="dbz-check"><CheckIcon /></span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

const Technology: React.FC = () => (
  <section id="technology" className="dbz-section dbz-section-dark">
    <div className="dbz-container dbz-tech-grid">
      <div>
        <div className="dbz-eyebrow dbz-eyebrow-onDark">Technical Strength</div>
        <h3 className="dbz-h2 dbz-onDark">독보적인 기술 스택.</h3>
        <p className="dbz-section-lede dbz-onDarkMuted">
          RAC, Data Guard, Exadata 최적화 등 오라클 하이엔드 아키텍처를 완벽하게 제어합니다.
        </p>
        <div className="dbz-tech-tiles">
          {TECH_STACK.map((t) => (
            <div key={t.name} className="dbz-tech-tile">
              <div className="dbz-tech-tile-cat">{t.category}</div>
              <div className="dbz-tech-tile-name">{t.name}</div>
              <div className="dbz-tech-tile-desc">{t.description}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="dbz-terminal">
        <div className="dbz-terminal-dots">
          <span className="dot-r" /><span className="dot-y" /><span className="dot-g" />
        </div>
        <div className="dbz-terminal-body">
          <p className="t-muted">$ dbzone --analyze-performance</p>
          <p className="t-blue">SQL&gt; CONNECT / AS SYSDBA</p>
          <p className="t-ink">Connected to: Oracle 19c EE</p>
          <p className="t-green">STATUS: OPEN (RAC ENABLED)</p>
          <p className="t-blue">SQL&gt; EXEC dbzone_ai.predict();</p>
          <p className="t-green">&gt;&gt; Health Index 99%</p>
        </div>
      </div>
    </div>
  </section>
);

const CaseStudies: React.FC<{ onOpenAi: () => void }> = ({ onOpenAi }) => (
  <section id="case-studies" className="dbz-section dbz-section-soft">
    <div className="dbz-container">
      <div className="dbz-section-head-row">
        <div>
          <div className="dbz-eyebrow">Proven Results</div>
          <h3 className="dbz-h2">숫자와 결과로 증명합니다</h3>
        </div>
        <button onClick={onOpenAi} className="dbz-linkbtn">
          <BellIcon size={16} className="dbz-bell-bounce" /> AI 상담
        </button>
      </div>
      <div className="dbz-grid-2">
        {CASE_STUDIES.map((c, i) => (
          <div key={i} className="dbz-card-case">
            <div className="dbz-case-industry">{c.industry}</div>
            <h4 className="dbz-case-client">{c.client}</h4>
            <div>
              <div className="dbz-case-label">Business Challenge</div>
              <p className="dbz-case-body">{c.challenge}</p>
            </div>
            <div className="dbz-case-result-wrap">
              <div className="dbz-case-label dbz-case-label-blue">DBZone Solution &amp; Result</div>
              <p className="dbz-case-result">{c.result}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Contact: React.FC<{ onOpenAi: () => void }> = ({ onOpenAi }) => (
  <section id="contact" className="dbz-section-narrow">
    <div className="dbz-container">
      <div className="dbz-contact-block">
        <div className="dbz-contact-bg" />
        <div className="dbz-contact-inner">
          <h3 className="dbz-h2 dbz-onDark">전문 엔지니어 상담</h3>
          <p className="dbz-section-lede dbz-onDarkMuted">
            귀사의 데이터베이스 환경을 정밀하게 분석하여 성능 향상 전략을 제안해 드립니다.
          </p>
          <button onClick={onOpenAi} className="dbz-btn dbz-btn-primary dbz-btn-lg">
            <BellIcon size={22} className="dbz-bell-bounce" /> AI 상담
          </button>
        </div>
      </div>
    </div>
  </section>
);

const Footer: React.FC = () => (
  <footer className="dbz-footer">
    <div className="dbz-container dbz-footer-inner">
      <a href="#" className="dbz-logo">
        <div className="dbz-logo-tile dbz-logo-tile-dark">DB</div>
        <span className="dbz-logo-word dbz-footer-zone">Zone</span>
      </a>
      <div className="dbz-footer-text">
        <p className="dbz-footer-company">DBZone Managed Services Inc.</p>
        <p>본사: 충청북도 청주시 흥덕구 오송</p>
        <div className="dbz-footer-legal">
          <p>&copy; 2024 DBZone. Data. Intelligence. Future. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  </footer>
);

const FloatingChat: React.FC<{ onOpenAi: () => void }> = ({ onOpenAi }) => {
  const [hover, setHover] = useState(false);
  return (
    <div className="dbz-float-wrap"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}>
      {hover && (
        <div className="dbz-float-bubble">
          <div>담당자 즉시 호출 중</div>
          <div>메일/문자로 실시간 전달됩니다</div>
          <span className="dbz-float-bubble-tail" />
        </div>
      )}
      <button onClick={onOpenAi} className="dbz-float-btn">
        <BellIcon size={18} className="dbz-bell-bounce" />
        <span>스마트 알리미</span>
        <span className="dbz-float-dot dbz-float-dot-ping" />
        <span className="dbz-float-dot" />
      </button>
    </div>
  );
};

const Modal: React.FC<{ open: boolean; onClose: () => void }> = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className="dbz-modal-scrim" onClick={onClose}>
      <div className="dbz-modal" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="dbz-modal-close">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2.5">
            <path d="M18 6 6 18M6 6l12 12"/>
          </svg>
        </button>
        <div className="dbz-modal-avatar">
          <iframe src="/avatar.html" title="AI 상담 캐릭터"
            style={{width:'100%', height:'100%', border:0}} />
        </div>
        <div className="dbz-modal-chat">
          <iframe src="https://bot.dbzone.kr/lead-generation-7o4fpsk"
            title="AI 상담 채팅"
            style={{width:'100%', height:'100%', border:0}} />
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openAi = () => setIsOpen(true);
  return (
    <div>
      <Nav onOpenAi={openAi} />
      <Hero onOpenAi={openAi} />
      <Services />
      <Technology />
      <CaseStudies onOpenAi={openAi} />
      <Contact onOpenAi={openAi} />
      <Footer />
      <FloatingChat onOpenAi={openAi} />
      <Modal open={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};

export default App;
