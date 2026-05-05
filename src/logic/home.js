export default {
    name: 'Home',
    layout: 'default',

    data() {
        return {
            isLoggedIn: false,
            hero: {
                tag: 'DRONE',
                title: 'Skyrider X9: 차세대 전술 정찰 드론의 표준',
                desc: '고고도 장기 체공과 AI 기반 표적 식별을 결합해 현대 전장의 ISR 요구를 충족시키는 차세대 무인기 플랫폼을 소개합니다.',
                date: '2026.05.01',
                read: '8분 읽기',
                image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=1400&h=900&q=80',
                href: '#/drone/detail?id=1'
            },
            posts: [
                {
                    id: 'd1',
                    category: 'DRONE',
                    title: 'Skyrider X9 전술 정찰 쿼드콥터',
                    desc: 'AI 기반 자동 표적 추적과 35km 데이터링크를 갖춘 분대급 ISR 자산.',
                    date: '2026.05.01',
                    read: '6분 읽기',
                    image: 'https://images.unsplash.com/photo-1508444845599-5c89863b1c44?auto=format&fit=crop&w=800&h=520&q=80',
                    href: '#/drone/detail?id=1'
                },
                {
                    id: 'c1',
                    category: 'C-DRONE',
                    title: 'Aegis RF 재밍 시스템',
                    desc: '광대역 RF 재밍과 GNSS 기만을 동시에 수행하는 통합 대드론 솔루션.',
                    date: '2026.04.28',
                    read: '5분 읽기',
                    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&h=520&q=80',
                    href: '#/c-drone/detail?id=1'
                },
                {
                    id: 'o1',
                    category: 'OTHERS',
                    title: '파일럿 트레이닝 시뮬레이터',
                    desc: '실기 훈련 시간을 절감하는 고충실도 가상현실 기반 조종사 양성 시스템.',
                    date: '2026.04.25',
                    read: '5분 읽기',
                    image: 'https://images.unsplash.com/photo-1535378620166-273708d44e4c?auto=format&fit=crop&w=800&h=520&q=80',
                    href: '#/others/detail?id=1'
                },
                {
                    id: 'd2',
                    category: 'DRONE',
                    title: 'Maritime Surveillance UAV Mk.IV',
                    desc: '해양 광역 감시를 위한 장기 체공 고정익 무인기 플랫폼 분석.',
                    date: '2026.04.22',
                    read: '9분 읽기',
                    image: 'https://images.unsplash.com/photo-1521405924368-64c5b84bec60?auto=format&fit=crop&w=800&h=520&q=80',
                    href: '#/drone/detail?id=2'
                },
                {
                    id: 't1',
                    category: 'TACTICS',
                    title: '도시 작전 드론 군집 교리',
                    desc: '시가지 환경에서의 다중 드론 협동 운용과 지휘통제 절차.',
                    date: '2026.04.20',
                    read: '10분 읽기',
                    image: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=800&h=520&q=80',
                    href: '#/tactics/detail?id=1'
                },
                {
                    id: 'c2',
                    category: 'C-DRONE',
                    title: 'Falcon Net 포획형 인터셉터',
                    desc: '저고도 침입 드론을 그물탄으로 포획·회수하는 비파괴 대응 수단.',
                    date: '2026.04.15',
                    read: '4분 읽기',
                    image: 'https://images.unsplash.com/photo-1534224039826-c7a0eda0e6b3?auto=format&fit=crop&w=800&h=520&q=80',
                    href: '#/c-drone/detail?id=2'
                },
                {
                    id: 'o2',
                    category: 'OTHERS',
                    title: '배터리 군수 관리 플랫폼',
                    desc: '드론 배터리 수명·온도·충전 사이클을 통합 관리하는 군수 백엔드.',
                    date: '2026.04.12',
                    read: '6분 읽기',
                    image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=800&h=520&q=80',
                    href: '#/others/detail?id=1'
                },
                {
                    id: 'd3',
                    category: 'DRONE',
                    title: 'Stealth Wing 저피탐 전술기',
                    desc: '저피탐 형상과 전기추진을 결합한 침투형 정찰기의 운용 개념.',
                    date: '2026.04.10',
                    read: '7분 읽기',
                    image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=800&h=520&q=80',
                    href: '#/drone/detail?id=3'
                },
                {
                    id: 't2',
                    category: 'TACTICS',
                    title: '대드론 야전 매뉴얼 v3',
                    desc: '대대급 부대를 위한 대드론 위협 식별·대응 표준 절차서 개정판.',
                    date: '2026.04.05',
                    read: '12분 읽기',
                    image: 'https://images.unsplash.com/photo-1530870110042-98b2cb110834?auto=format&fit=crop&w=800&h=520&q=80',
                    href: '#/tactics/detail?id=2'
                },
                {
                    id: 'c3',
                    category: 'C-DRONE',
                    title: 'RadarShield 탐지 스위트',
                    desc: '소형 드론 RCS에 최적화된 X-band AESA 레이다와 EO/IR 센서 융합.',
                    date: '2026.03.30',
                    read: '8분 읽기',
                    image: 'https://images.unsplash.com/photo-1517976547714-720226b864c1?auto=format&fit=crop&w=800&h=520&q=80',
                    href: '#/c-drone/detail?id=3'
                },
                {
                    id: 'o3',
                    category: 'OTHERS',
                    title: '오픈 드론 텔레메트리 표준',
                    desc: '이종 기체 간 상호 운용성을 보장하는 오픈소스 텔레메트리 프로토콜.',
                    date: '2026.03.28',
                    read: '4분 읽기',
                    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&h=520&q=80',
                    href: '#/others/detail?id=1'
                },
                {
                    id: 't3',
                    category: 'TACTICS',
                    title: '합동 방공 플레이북',
                    desc: '저고도 무인기 위협에 대응하기 위한 합동 방공 통합 절차.',
                    date: '2026.03.18',
                    read: '7분 읽기',
                    image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=800&h=520&q=80',
                    href: '#/tactics/detail?id=1'
                }
            ]
        };
    },

    computed: {
        sortedPosts() {
            return [...this.posts].sort((a, b) => b.date.localeCompare(a.date));
        }
    },

    mounted() {
        this.isLoggedIn = !!localStorage.getItem('auth_token');
    },

    methods: {
        guardNav(event) {
            if (this.isLoggedIn) return;
            event.preventDefault();
            this.navigateTo('/login/login');
        }
    }
};
