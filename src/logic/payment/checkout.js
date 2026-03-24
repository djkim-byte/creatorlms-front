export default {
    name: 'Checkout',
    layout: 'logo-only',

    data() {
        return {
            plan: null,
            billingCycle: this.getParam('cycle') || 'monthly',
            hasCard: false,
            agreeTerms: false,
            isSubmitting: false,
            paymentNotice: null,
            paidTerms: { title: '', sections: [] },
            demoRoundRobin: parseInt(sessionStorage.getItem('checkoutRoundRobin') || '0'),
            plans: {
                basic: { name: 'Basic', description: '베이직 플랜', price: 100000, feeRate: '0%' },
                growth: { name: 'Growth', description: '그로스 플랜', price: 300000, feeRate: '0%' },
                advanced: { name: 'Advanced', description: '어드밴스드 플랜', price: 500000, feeRate: '0%' }
            }
        };
    },

    async mounted() {
        const token = localStorage.getItem('auth_token');
        if (!token) {
            const planId = this.getParam('plan') || 'basic';
            this.navigateTo('/login/login', {
                returnUrl: '/payment/checkout',
                returnPlan: planId,
                returnCycle: this.billingCycle
            });
            return;
        }
        await this.loadPaymentNotice();
        await this.loadPaidTerms();
    },

    computed: {
        currentPlan() {
            const planId = this.getParam('plan');
            return this.plans[planId] || this.plans.basic;
        },

        discountRate() {
            return this.billingCycle === 'annual' ? 0.3 : 0;
        },

        monthlyPrice() {
            const base = this.currentPlan.price;
            return this.billingCycle === 'annual' ? Math.round(base * 0.7) : base;
        },

        totalPrice() {
            const base = this.monthlyPrice;
            return this.billingCycle === 'annual' ? base * 12 : base;
        },

        totalPriceWithVat() {
            return Math.round(this.totalPrice * 1.1);
        },

        subscriptionStart() {
            const now = new Date();
            return this.formatDate(now);
        },

        subscriptionEnd() {
            const now = new Date();
            if (this.billingCycle === 'annual') {
                now.setFullYear(now.getFullYear() + 1);
            } else {
                now.setMonth(now.getMonth() + 1);
            }
            now.setDate(now.getDate() - 1);
            return this.formatDate(now);
        },

        nextPaymentDate() {
            const now = new Date();
            if (this.billingCycle === 'annual') {
                now.setFullYear(now.getFullYear() + 1);
            } else {
                now.setMonth(now.getMonth() + 1);
            }
            return this.formatDate(now);
        }
    },

    methods: {
        formatDate(date) {
            const y = date.getFullYear();
            const m = String(date.getMonth() + 1).padStart(2, '0');
            const d = String(date.getDate()).padStart(2, '0');
            return `${y}.${m}.${d}`;
        },

        formatPrice(price) {
            return price.toLocaleString();
        },

        async loadPaymentNotice() {
            try {
                const res = await fetch('data/payment-notice.json');
                this.paymentNotice = await res.json();
            } catch (error) {
                console.error('결제 안내 로딩 실패:', error);
            }
        },

        async loadPaidTerms() {
            try {
                const res = await fetch('data/paid-terms.json');
                this.paidTerms = await res.json();
            } catch (error) {
                console.error('유료약정상품 약관 로딩 실패:', error);
            }
        },

        async registerCard() {
            // TODO: 토스페이먼츠 빌링 결제창 연동
            alert('카드 등록 기능은 준비 중입니다.');
        },

        async handleCheckout() {
            if (!this.agreeTerms) {
                alert('유료약정상품 구매 약관에 동의해 주세요.');
                return;
            }

            // TODO: 실제 서비스에서는 카드 등록 여부 체크 (PG사 외부 페이지 연동)
            // 데모에서는 카드 체크 생략하고 바로 결제 결과 페이지로 이동

            this.isSubmitting = true;
            try {
                // TODO: 실제 결제 API 호출
                await new Promise(resolve => setTimeout(resolve, 1500));

                // 구독 정보 저장 (mock)
                const user = JSON.parse(localStorage.getItem('user') || '{}');
                user.subscription = {
                    planId: this.getParam('plan') || 'basic',
                    planName: this.currentPlan.name,
                    billingCycle: this.billingCycle,
                    startDate: new Date().toISOString(),
                    status: 'active'
                };
                localStorage.setItem('user', JSON.stringify(user));

                // 데모: 라운드로빈으로 성공/실패 교대 표시
                const isSuccess = this.demoRoundRobin % 2 === 0;
                this.demoRoundRobin++;
                sessionStorage.setItem('checkoutRoundRobin', String(this.demoRoundRobin));

                const planId = this.getParam('plan') || 'basic';
                const targetPage = isSuccess ? '/mysite/payment-complete' : '/mysite/payment-failed';
                this.navigateTo(targetPage, {
                    plan: planId,
                    cycle: this.billingCycle,
                    from: 'checkout'
                });
            } catch (error) {
                console.error('결제 실패:', error);
                alert('결제에 실패했습니다. 다시 시도해 주세요.');
            } finally {
                this.isSubmitting = false;
            }
        }
    }
};
