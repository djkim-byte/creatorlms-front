export default {
    name: 'Demo',
    layout: 'default',

    data() {
        return {
            activeCategory: '전체 보기',
            categories: ['전체 보기', 'AI 기능', '강의 관리', '학습자 관리', '분석 & 리포트'],
            demos: [
                {
                    id: 1,
                    category: 'AI 기능',
                    badge: '인기',
                    title: 'AI 콘텐츠 자동생성',
                    description: '영상만 업로드하면 AI가 자동으로 퀴즈, 요약본, 학습 자료를 생성합니다.',
                    features: ['자막 자동 생성', '퀴즈 생성', '요약 생성'],
                    icon: 'stars',
                    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                },
                {
                    id: 2,
                    category: 'AI 기능',
                    badge: null,
                    title: 'AI 튜터 맑은샘',
                    description: '24시간 학습자의 질문에 즉시 답변하는 AI 튜터로 학습 효과를 극대화합니다.',
                    features: ['24/7 응답', '맥락 이해', '다국어 지원'],
                    icon: 'chat-dots',
                    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
                },
                {
                    id: 3,
                    category: '강의 관리',
                    badge: null,
                    title: '직관적인 강의 관리',
                    description: '드래그 앤 드롭으로 커리큘럼을 구성하고 학습 진도를 체계적으로 관리합니다.',
                    features: ['드래그 앤 드롭', '순차 공개', '진도 관리'],
                    icon: 'collection-play',
                    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
                },
                {
                    id: 4,
                    category: '학습자 관리',
                    badge: '신규',
                    title: 'YouTube 멤버십 자동 연동',
                    description: 'YouTube 채널 멤버십과 자동 연동하여 학습자를 원스톱으로 관리합니다.',
                    features: ['자동 동기화', '권한 관리', '탈퇴 처리'],
                    icon: 'youtube',
                    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
                },
                {
                    id: 5,
                    category: '분석 & 리포트',
                    badge: null,
                    title: '데이터 기반 인사이트',
                    description: '학습자의 행동 데이터를 분석하여 이탈 예측과 맞춤형 리포트를 제공합니다.',
                    features: ['행동 분석', '이탈 예측', '맞춤 리포트'],
                    icon: 'graph-up-arrow',
                    gradient: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)'
                },
                {
                    id: 6,
                    category: '강의 관리',
                    badge: null,
                    title: '퀴즈 & 과제 시스템',
                    description: 'AI 자동 채점과 즉시 피드백으로 효율적인 학습 평가를 지원합니다.',
                    features: ['자동 채점', '즉시 피드백', '성적 관리'],
                    icon: 'pencil-square',
                    gradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)'
                }
            ]
        };
    },
    computed: {
        filteredDemos() {
            if (this.activeCategory === '전체 보기') {
                return this.demos;
            }
            return this.demos.filter(d => d.category === this.activeCategory);
        }
    }
};
