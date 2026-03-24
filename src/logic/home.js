export default {
    name: 'Home',
    layout: 'default',

    data() {
        return {
            solutions: [
                {
                    id: 1,
                    icon: 'bi bi-cpu fs-5',
                    iconBg: '#6366f1',
                    problem: '콘텐츠 제작 부담',
                    answer: 'AI 자동 생성',
                    before: '멤버십 전용 콘텐츠 이중 제작으로 작업량 폭증',
                    after: '영상만 올리면 학습자료, 퀴즈 자동 생성'
                },
                {
                    id: 2,
                    icon: 'bi bi-file-earmark-check fs-5',
                    iconBg: '#10b981',
                    problem: '학습 관리 시스템 부재',
                    answer: '완벽한 LMS',
                    before: 'YouTube 플랫폼의 기능적 한계와 도구 미지원',
                    after: '체계적인 커리큘럼과 진도 관리 시스템'
                },
                {
                    id: 3,
                    icon: 'bi bi-people fs-5',
                    iconBg: '#f97316',
                    problem: '회원 참여도 및 이탈',
                    answer: '이탈률 40-60%↓',
                    before: '가입 3개월 내 높은 이탈률과 참여 저하',
                    after: 'AI 학습 분석으로 이탈 위험 조기 감지'
                },
                {
                    id: 4,
                    icon: 'bi bi-chat-text fs-5',
                    iconBg: '#6366f1',
                    problem: '질의응답 대응 한계',
                    answer: 'AI 튜터 24/7',
                    before: '회원 증가 시 개별 질문 대응 불가능',
                    after: 'AI 튜터가 24시간 자동으로 질문 응답'
                },
                {
                    id: 5,
                    icon: 'bi bi-collection-play fs-5',
                    iconBg: '#ef4444',
                    problem: '콘텐츠 검색 및 관리',
                    answer: '스마트 분류',
                    before: '수백 개 영상 누적 시 체계적 분류 불가',
                    after: 'AI 기반 자동 태깅과 카테고리 분류'
                },
                {
                    id: 6,
                    icon: 'bi bi-wallet2 fs-5',
                    iconBg: '#10b981',
                    problem: '수익 다각화 한계',
                    answer: '수수료 30%↓',
                    before: '높은 플랫폼 수수료와 제한적 가격 정책',
                    after: '자유로운 가격 설정과 다양한 수익 모델'
                }
            ],
            comparisons: [
                { feature: 'AI 콘텐츠 자동생성', us: true, compA: false, compB: false },
                { feature: 'AI 튜터 (24/7 자동 답변)', us: true, compA: false, compB: false },
                { feature: 'YouTube 멤버십 연동', us: true, compA: false, compB: false },
                { feature: '학습 분석 & 리포트', us: true, compA: true, compB: true },
                { feature: '자동 퀴즈 생성', us: true, compA: false, compB: true },
                { feature: '수료증 자동 발급', us: true, compA: true, compB: false },
                { feature: '커뮤니티 기능', us: true, compA: true, compB: true },
                { feature: '한국어 지원', us: true, compA: false, compB: false }
            ],
            features: [
                {
                    id: 1,
                    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=600&h=400&q=80',
                    bgColor: '#e8eeff',
                    title: 'AI 콘텐츠 자동생성',
                    description: '콘텐츠 제작 시간을 80% 단축. 영상만 올리면 학습자료와 퀴즈가 자동으로 생성됩니다.'
                },
                {
                    id: 2,
                    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&h=400&q=80',
                    bgColor: '#fde8d8',
                    title: 'AI 튜터 맑은샘',
                    description: '24/7 실시간 AI 튜터가 학습자의 질문에 즉시 응답합니다.'
                },
                {
                    id: 3,
                    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&h=400&q=80',
                    bgColor: '#1e293b',
                    title: '스마트 학습 분석',
                    description: '맞춤형 학습 경로 추천과 이탈 위험 조기 감지로 수강 완료율을 높입니다.'
                },
                {
                    id: 4,
                    image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=600&h=400&q=80',
                    bgColor: '#ede9fe',
                    title: 'YouTube 멤버십 연동',
                    description: '별도의 회원 관리 없이 YouTube 멤버십과 간편하게 연동하여 운영할 수 있습니다.'
                },
                {
                    id: 5,
                    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=600&h=400&q=80',
                    bgColor: '#dbeafe',
                    title: '자동 퀴즈 생성',
                    description: 'AI가 학습 콘텐츠를 분석하여 이해도를 측정할 수 있는 퀴즈를 자동으로 만듭니다.'
                },
                {
                    id: 6,
                    image: 'https://images.unsplash.com/photo-1627556704302-624286467c65?auto=format&fit=crop&w=600&h=400&q=80',
                    bgColor: '#f1f5f9',
                    title: '수료증 자동 발급',
                    description: '커스터마이징 가능한 디지털 수료증을 학습 완료 시 자동으로 발급합니다.'
                }
            ],
            protoStudent: [
                {
                    icon: 'bi bi-mortarboard',
                    title: '마이페이지 (학습 대시보드)',
                    desc: '나의 학습 현황, 진도율, 수강 중인 강의를 한눈에 확인',
                    color: '#6366f1'
                },
                {
                    icon: 'bi bi-play-btn',
                    title: 'AI 통합 학습 뷰어',
                    desc: '영상 시청과 AI 요약, 퀴즈를 하나의 화면에서 학습',
                    color: '#3b82f6'
                },
                {
                    icon: 'bi bi-file-earmark-bar-graph',
                    title: 'AI 학습분석 리포트',
                    desc: 'AI가 분석한 나의 학습 패턴과 맞춤형 개선 방향 제시',
                    color: '#8b5cf6'
                },
                {
                    icon: 'bi bi-award',
                    title: '수료증 & 배지 시스템',
                    desc: '학습 완료 시 자동 발급되는 디지털 수료증과 배지 수집',
                    color: '#f59e0b'
                }
            ],
            protoAdmin: [
                {
                    icon: 'bi bi-grid-1x2',
                    title: '통합 관리자 대시보드',
                    desc: '매출, 회원 수, 수강률 등 핵심 지표를 실시간 모니터링',
                    color: '#10b981'
                },
                {
                    icon: 'bi bi-collection-play',
                    title: '강의 관리 시스템',
                    desc: '커리큘럼 구성, 콘텐츠 업로드, 순차 공개까지 원클릭 관리',
                    color: '#3b82f6'
                },
                {
                    icon: 'bi bi-youtube',
                    title: 'YouTube 멤버십 연동',
                    desc: 'YouTube 채널 멤버십과 자동 동기화로 별도 관리 불필요',
                    color: '#ef4444'
                },
                {
                    icon: 'bi bi-bar-chart-line',
                    title: '학습 통계 & 분석',
                    desc: '수강생 행동 분석, 이탈 예측, 콘텐츠 성과 리포트 제공',
                    color: '#8b5cf6'
                }
            ]
        };
    },

    methods: {
        handleStartClick() {
            if (this.isAuth()) {
                this.navigateTo('/mypage');
            } else {
                this.navigateTo('/login/login');
            }
        }
    }
};
