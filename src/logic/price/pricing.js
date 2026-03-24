export default {
    name: 'Pricing',
    layout: 'default',

    data() {
        return {
            isLoggedIn: false,
            billingCycle: 'annual',
            annualDiscount: 0.3,

            plans: [
                {
                    id: 'free',
                    name: 'Free',
                    monthlyPrice: 0,
                    feeRate: '10%',
                    isFree: true,
                    priceLabel: '영구 무료',
                    recommended: false,
                    features: [
                        { label: '발행 상품 수', value: '무제한' },
                        { label: '동영상 저장 용량', value: '20GB' },
                        { label: '학생/회원수 제한', value: '무제한' },
                        { label: '월 수강신청 제한', value: '무제한' },
                        { label: '관리자 계정 수', value: '무제한' },
                        { label: '도메인 & SSL', value: '없음' },
                        { label: '사이트 수', value: '1개' }
                    ],
                    aiFeatures: [
                        { label: 'AI 튜터', value: '강좌당 1개 무료' },
                        { label: 'AI 영상자막', value: '영상당 1개 무료' },
                        { label: '영상자동번역', value: '영상당 1개 무료' }
                    ],
                    ctaText: '무료로 시작하기',
                    ctaStyle: 'outline'
                },
                {
                    id: 'basic',
                    name: 'Basic',
                    monthlyPrice: 100000,
                    feeRate: '0%',
                    isFree: false,
                    recommended: true,
                    badge: '추천! 가장 인기',
                    features: [
                        { label: '발행 상품 수', value: '무제한' },
                        { label: '동영상 저장 용량', value: '200GB' },
                        { label: '학생/회원수 제한', value: '무제한' },
                        { label: '월 수강신청 제한', value: '200건' },
                        { label: '관리자 계정 수', value: '무제한' },
                        { label: '도메인 & SSL', value: '1개 무료' },
                        { label: '사이트 수', value: '1개' }
                    ],
                    aiFeatures: [
                        { label: 'AI 튜터', value: '강좌당 5개 무료' },
                        { label: 'AI 영상자막', value: '영상당 20개 무료' },
                        { label: '영상자동번역', value: '영상당 20개 무료' }
                    ],
                    ctaText: '구매하기',
                    ctaStyle: 'solid'
                },
                {
                    id: 'growth',
                    name: 'Growth',
                    monthlyPrice: 300000,
                    feeRate: '0%',
                    isFree: false,
                    recommended: false,
                    features: [
                        { label: '발행 상품 수', value: '무제한' },
                        { label: '동영상 저장 용량', value: '500GB' },
                        { label: '학생/회원수 제한', value: '무제한' },
                        { label: '월 수강신청 제한', value: '500건' },
                        { label: '관리자 계정 수', value: '무제한' },
                        { label: '도메인 & SSL', value: '1개 무료' },
                        { label: '사이트 수', value: '1개' }
                    ],
                    aiFeatures: [
                        { label: 'AI 튜터', value: '강좌당 10개 무료' },
                        { label: 'AI 영상자막', value: '영상당 40개 무료' },
                        { label: '영상자동번역', value: '영상당 40개 무료' }
                    ],
                    ctaText: '구매하기',
                    ctaStyle: 'solid'
                },
                {
                    id: 'advanced',
                    name: 'Advanced',
                    monthlyPrice: 500000,
                    feeRate: '0%',
                    isFree: false,
                    recommended: false,
                    features: [
                        { label: '발행 상품 수', value: '무제한' },
                        { label: '동영상 저장 용량', value: '1TB' },
                        { label: '학생/회원수 제한', value: '무제한' },
                        { label: '월 수강신청 제한', value: '1,000건' },
                        { label: '관리자 계정 수', value: '무제한' },
                        { label: '도메인 & SSL', value: '1개 무료' },
                        { label: '사이트 수', value: '1개' }
                    ],
                    aiFeatures: [
                        { label: 'AI 튜터', value: '강좌당 30개 무료' },
                        { label: 'AI 영상자막', value: '영상당 100개 무료' },
                        { label: '영상자동번역', value: '영상당 100개 무료' }
                    ],
                    ctaText: '구매하기',
                    ctaStyle: 'solid'
                }
            ],

            enterprise: {
                title: 'Enterprise',
                description: '대규모 조직과 기업을 위한 맞춤형 솔루션입니다.\n무제한 확장성과 전담 지원으로 여러분의 비즈니스를 성장시키세요.',
                highlights: [
                    { icon: 'bi-infinity', title: '무제한 확장', desc: '저장공간, 회원수, AI 기능 등 모두 무제한으로 제공합니다' },
                    { icon: 'bi-shield-lock', title: '엔터프라이즈 보안', desc: 'SSO, 2FA, 고급 권한 관리 등 기업급 보안 기능' },
                    { icon: 'bi-headset', title: '전담 지원팀', desc: '24/7 전담 개발팀과 계정 매니저 배정' },
                    { icon: 'bi-patch-check', title: 'SLA 보장', desc: '99.9% 가동률 보장 및 우선 지원' }
                ]
            },

            featureCategories: [
                {
                    icon: 'bi-info-circle',
                    name: '가격 정보',
                    features: [
                        { name: '플랫폼 수수료', free: '10% (90% 정산)', basic: '0%', growth: '0%', advanced: '0%' },
                        { name: '결제 처리 수수료', free: '4%', basic: '3.5%', growth: '3.3%', advanced: '3.0%' },
                        { name: '무료 체험', free: '무료', basic: '무료', growth: '무료', advanced: '무료' }
                    ]
                },
                {
                    icon: 'bi-box',
                    name: '상품·콘텐츠 제한',
                    features: [
                        { name: '발행 상품 수', free: '무제한', basic: '무제한', growth: '무제한', advanced: '무제한' },
                        { name: '동영상 저장 용량', free: '20GB', basic: '200GB', growth: '500GB', advanced: '1TB' },
                        { name: '학생/회원 수 제한', free: '무제한', basic: '무제한', growth: '무제한', advanced: '무제한' },
                        { name: '월 수강신청 제한', free: '무제한', basic: '200', growth: '500', advanced: '1,000' },
                        { name: '관리자 계정 수', free: '무제한', basic: '무제한', growth: '무제한', advanced: '무제한' },
                        { name: '도메인 & SSL', free: false, basic: '1개 무료', growth: '1개 무료', advanced: '1개 무료' },
                        { name: '웹사이트 수', free: '1', basic: '1', growth: '1', advanced: '1' }
                    ]
                },
                {
                    icon: 'bi-stars',
                    name: '종량 요금 (AI)',
                    features: [
                        { name: 'AI 튜터 기본 제공 (강좌당)', free: '강좌 1개', basic: '강좌 5개', growth: '강좌 15개', advanced: '강좌 30개' },
                        { name: 'AI 튜터 추가 시 포인트 소진', free: '10,000원', basic: '10,000원', growth: '10,000원', advanced: '10,000원' },
                        { name: 'AI 학습리포트 기본 제공 (강좌당)', free: '강좌 1개', basic: '강좌 5개', growth: '강좌 15개', advanced: '강좌 30개' },
                        { name: 'AI 학습리포트 추가 시 포인트 소진', free: '5,000원', basic: '5,000원', growth: '5,000원', advanced: '5,000원' },
                        { name: 'AI 영상 자막 추출 기본 제공 (영상당)', free: '1개 영상', basic: '20개 영상', growth: '60개 영상', advanced: '110개 영상' },
                        { name: 'AI 영상 자막 추출 추가 시', free: '100원/영상당', basic: '100원/영상당', growth: '100원/영상당', advanced: '100원/영상당' },
                        { name: '영상 자막 자동 번역 기본 제공 (영상당, 언어당)', free: '언어 1개/영상당', basic: '언어 20개/영상당', growth: '언어 60개/영상당', advanced: '언어 110개/영상당' },
                        { name: '영상 자막 자동 번역 추가 시', free: '100원/영상당', basic: '100원/영상당', growth: '100원/영상당', advanced: '100원/영상당' }
                    ]
                },
                {
                    icon: 'bi-bell',
                    name: '종량 요금 (Notification)',
                    features: [
                        { name: '이메일', free: '0.65원/1건당', basic: '0.65원/1건당', growth: '0.65원/1건당', advanced: '0.65원/1건당' },
                        { name: 'SMS', free: '9.9원/1건당', basic: '9.9원/1건당', growth: '9.9원/1건당', advanced: '9.9원/1건당' },
                        { name: 'LMS', free: '28.80원/1건당', basic: '28.80원/1건당', growth: '28.80원/1건당', advanced: '28.80원/1건당' },
                        { name: '알림톡', free: '10원/1건당', basic: '9.5원/1건당', growth: '9원/1건당', advanced: '8.5원/1건당' }
                    ]
                },
                {
                    icon: 'bi-mortarboard',
                    name: '코스 관리 기능',
                    features: [
                        { name: 'VOD 강의', free: true, basic: true, growth: true, advanced: true },
                        { name: '실시간 라이브 강의', free: true, basic: true, growth: true, advanced: true },
                        { name: '화상강의 (Cohorts Courses)', free: true, basic: true, growth: true, advanced: true },
                        { name: '자동 퀴즈/평가', free: true, basic: true, growth: true, advanced: true },
                        { name: '과제 기능', free: true, basic: true, growth: true, advanced: true },
                        { name: '단답형 평가', free: true, basic: true, growth: true, advanced: true },
                        { name: '수료증 발급', free: true, basic: true, growth: true, advanced: true },
                        { name: '진도율 추적', free: true, basic: true, growth: true, advanced: true },
                        { name: '레슨 댓글', free: true, basic: true, growth: true, advanced: true },
                        { name: '멤버십 프로그램', free: true, basic: true, growth: true, advanced: true },
                        { name: '디지털 다운로드', free: true, basic: true, growth: true, advanced: true },
                        { name: '코스별 순차 학습 지원', free: true, basic: true, growth: true, advanced: true },
                        { name: '비디오 자막 및 번역', free: true, basic: true, growth: true, advanced: true },
                        { name: 'AI Features', free: true, basic: true, growth: true, advanced: true }
                    ]
                },
                {
                    icon: 'bi-megaphone',
                    name: '마케팅·판매 기능',
                    features: [
                        { name: '커뮤니티 판매', free: true, basic: true, growth: true, advanced: true },
                        { name: '쿠폰/할인', free: true, basic: true, growth: true, advanced: true },
                        { name: '번들 판매', free: true, basic: true, growth: true, advanced: true },
                        { name: '이메일 마케팅', free: true, basic: true, growth: true, advanced: true },
                        { name: '알림톡 마케팅', free: true, basic: true, growth: true, advanced: true },
                        { name: '랜딩 페이지', free: true, basic: true, growth: true, advanced: true }
                    ]
                },
                {
                    icon: 'bi-credit-card',
                    name: '결제·세금 처리',
                    features: [
                        { name: '신용카드 결제 (플랫폼 / 강의)', free: true, basic: true, growth: true, advanced: true },
                        { name: '자체 결제 시스템', free: true, basic: true, growth: true, advanced: true },
                        { name: '정기 결제', free: true, basic: true, growth: true, advanced: true },
                        { name: '일회성 결제', free: true, basic: true, growth: true, advanced: true }
                    ]
                },
                {
                    icon: 'bi-headset',
                    name: '고객 지원',
                    features: [
                        { name: '이메일 지원', free: true, basic: true, growth: true, advanced: true },
                        { name: '톡 상담', free: true, basic: true, growth: true, advanced: true }
                    ]
                },
                {
                    icon: 'bi-palette',
                    name: '커스터마이징',
                    features: [
                        { name: '교육 프로그램', free: false, basic: '향후 제공', growth: '향후 제공', advanced: '향후 제공' },
                        { name: '커스텀 도메인', free: false, basic: true, growth: true, advanced: true },
                        { name: '화이트 라벨', free: true, basic: true, growth: true, advanced: true },
                        { name: '브랜딩 제거', free: true, basic: true, growth: true, advanced: true }
                    ]
                }
            ]
        };
    },

    mounted() {
        this.isLoggedIn = !!localStorage.getItem('auth_token');
    },

    computed: {
        displayPlans() {
            return this.plans.map(plan => ({
                ...plan,
                displayPrice: plan.isFree
                    ? 0
                    : this.billingCycle === 'annual'
                        ? Math.round(plan.monthlyPrice * (1 - this.annualDiscount))
                        : plan.monthlyPrice
            }));
        }
    },

    methods: {
        formatPrice(price) {
            return price.toLocaleString();
        },

        renderValue(val) {
            if (val === true) return '<i class="bi bi-check-lg pricing-check"></i>';
            if (val === false) return '<i class="bi bi-x-lg pricing-cross"></i>';
            return val;
        },

        handleCtaClick(plan) {
            if (plan.isFree) {
                const token = localStorage.getItem('auth_token');
                if (token) {
                    const toggle = sessionStorage.getItem('freeCta_toggle') === 'true';
                    sessionStorage.setItem('freeCta_toggle', String(!toggle));
                    if (toggle) {
                        this.navigateTo('/mysite', { from: 'free' });
                    } else {
                        this.navigateTo('/mysite/empty');
                    }
                } else {
                    this.navigateTo('/login/login', { plan: plan.id });
                }
                return;
            }

            const token = localStorage.getItem('auth_token');
            if (token) {
                this.navigateTo('/payment/checkout', { plan: plan.id, cycle: this.billingCycle });
            } else {
                this.navigateTo('/login/login', {
                    returnUrl: '/payment/checkout',
                    returnPlan: plan.id,
                    returnCycle: this.billingCycle
                });
            }
        },

        handleEnterpriseCta() {
            this.navigateTo('/signup/signup', { plan: 'enterprise' });
        }
    }
};
