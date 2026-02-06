
import { Service, TechStackItem, CaseStudy } from './types';

export const SERVICES: Service[] = [
  {
    id: 'expert-maintenance',
    title: 'Oracle DB 전문 유지보수',
    description: '20년 이상의 업력과 공공기관 사업 수행 경험을 바탕으로 중단 없는 비즈니스 환경을 제공합니다.',
    icon: 'ShieldCheck',
    features: [
      '24/7 실시간 모니터링: 장애 징후 조기 발견 및 즉각적인 기술 대응 체계 가동',
      '정기 점검 및 예방 관리: 체계적인 Health Check를 통한 시스템 안정성 확보',
      '긴급 장애 복구: 장애 발생 시 숙련된 엔지니어의 즉각 투입으로 다운타임 최소화'
    ]
  },
  {
    id: 'performance-tuning',
    title: '성능 진단 및 고도화 튜닝',
    description: '데이터베이스의 병목 현상을 해결하고 시스템 자원을 최적화하여 최상의 퍼포먼스를 끌어냅니다.',
    icon: 'Zap',
    features: [
      'SQL & Instance 튜닝: 비효율적인 쿼리 개선 및 파라미터 최적화',
      '아키텍처 설계 컨설팅: 데이터 증가에 따른 유연한 인프라 확장 및 재설계',
      '가용성 극대화: RAC(Real Application Clusters) 등 고가용성 환경 구축 및 운영 지원'
    ]
  },
  {
    id: 'migration-licensing',
    title: '마이그레이션 및 라이선스 컨설팅',
    description: '설치부터 업그레이드, 이관까지 데이터베이스의 생애주기 전반을 책임집니다.',
    icon: 'FileText',
    features: [
      '데이터 이관 (Migration): 온프레미스에서 클라우드로의 안정적인 데이터 마이그레이션',
      'Oracle 라이선스 판매: 고객사의 규모와 환경에 최적화된 합리적인 구매 가이드 제공',
      '설치 및 패치 관리: 최신 보안 패치 및 엔진 설치를 통한 취약점 방어'
    ]
  },
  {
    id: 'ai-db-solution',
    title: 'AI 기반 지능형 DB 솔루션',
    description: '전통적인 관리를 넘어, AI가 스스로 진단하고 대응하는 차세대 데이터 관리 솔루션을 개발합니다.',
    icon: 'Cpu',
    features: [
      '지능형 자동 관리: AI 모델을 통한 미래 장애 예측 및 선제적 대응',
      '스마트 모니터링: 딥러닝 기반의 이상 징후 탐지 알고리즘 탑재',
      '데이터 인텔리전스: 방대한 DB 로그 분석을 통한 비즈니스 통찰력 제공'
    ]
  }
];

export const TECH_STACK: TechStackItem[] = [
  { name: 'Oracle RAC', category: '고가용성', description: '중단 없는 서비스 확장을 위한 Real Application Clusters 구성.' },
  { name: 'Data Guard', category: '재해 복구', description: '엔터프라이즈급 DR을 위한 실시간 동기식 복제 기술.' },
  { name: 'GoldenGate', category: '데이터 통합', description: '이기종 환경 간의 실시간 데이터 동기화 및 복제.' },
  { name: 'Exadata', category: '엔지니어드 시스템', description: '오라클 전용 하드웨어에서의 극한의 성능 극대화.' }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    client: '글로벌 핀테크 기업',
    industry: '금융 서비스',
    challenge: '핵심 RAC 클러스터에서 피크 타임 시 빈번한 서비스 지연 발생.',
    solution: 'Exadata 기반의 심층 SQL 튜닝 및 스토리지 입출력 최적화 수행.',
    result: '가동률 99.999% 달성 및 쿼리 응답 시간 40% 단축.'
  },
  {
    client: '에코헬스 물류',
    industry: '의료/물류',
    challenge: '보안 취약점이 노출된 노후화된 11g 환경 운영 중.',
    solution: 'TDE 암호화가 적용된 OCI 기반 오라클 19c로의 무중단 마이그레이션.',
    result: '보안 컴플라이언스 완벽 준수 및 총소유비용(TCO) 30% 절감.'
  }
];

export const SLOGANS = [
  "Data. Intelligence. Future.",
  "미션 크리티컬 오라클 지원, 24/7 전문가가 함께합니다.",
  "정밀한 성능, 절대적인 가용성, 타협 없는 안정성."
];
