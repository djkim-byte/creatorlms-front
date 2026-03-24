export default {
    name: 'MySitePayNow',
    layout: 'logo-only',

    data() {
        return {
            hasCard: false,
            agreeTerms: false,
            isSubmitting: false,
            paymentNotice: null,
            demoRoundRobin: parseInt(sessionStorage.getItem('payNowRoundRobin') || '0'),
            site: {},
            plans: {
                free: { name: 'Free', description: '프리 플랜', price: 0, feeRate: '10%' },
                basic: { name: 'Basic', description: '베이직 플랜', price: 100000, feeRate: '0%' },
                growth: { name: 'Growth', description: '그로스 플랜', price: 300000, feeRate: '0%' },
                advanced: { name: 'Advanced', description: '어드밴스드 플랜', price: 500000, feeRate: '0%' }
            },
            demoSites: {
                4: {
                    id: 4, name: 'MONZO', domain: 'monzo.solsol.com',
                    plan: 'Basic', planId: 'basic', billingCycle: 'monthly', price: 100000,
                    nextPaymentDate: null, subscriptionStart: '2026.02.14', subscriptionEnd: '2027.02.13',
                    status: 'payment_failed'
                },
                5: {
                    id: 5, name: 'MONZO', domain: 'monzo.solsol.com',
                    plan: 'Basic', planId: 'basic', billingCycle: 'monthly', price: 100000,
                    nextPaymentDate: null, subscriptionStart: '2026.02.14', subscriptionEnd: '2027.02.13',
                    status: 'payment_grace'
                }
            }
        };
    },

    async mounted() {
        const token = localStorage.getItem('auth_token');
        if (!token) {
            this.navigateTo('/login/login', { returnUrl: '/mysite' });
            return;
        }

        const siteId = parseInt(this.getParam('siteId')) || 4;
        this.site = this.demoSites[siteId] || this.demoSites[4];

        await this.loadPaymentNotice();
    },

    computed: {
        planData() {
            return this.plans[this.site.planId] || this.plans.basic;
        },

        planDescription() {
            return this.planData.description;
        },

        cycleLabel() {
            if (!this.site.billingCycle) return '월간';
            return this.site.billingCycle === 'annual' ? '연간' : '월간';
        },

        basePrice() {
            return this.site.price || this.planData.price;
        },

        elapsedCost() {
            if (!this.site.subscriptionStart) return 110000;
            const start = this.parseDate(this.site.subscriptionStart);
            const today = new Date();
            const totalDays = this.site.billingCycle === 'annual' ? 365 : 30;
            const elapsedDays = Math.min(totalDays, Math.ceil((today - start) / (1000 * 60 * 60 * 24)));

            if (totalDays <= 0) return 110000;
            const dailyRate = this.basePrice / totalDays;
            return Math.round(dailyRate * elapsedDays);
        },

        finalPrice() {
            return this.basePrice + this.elapsedCost;
        },

        totalPriceWithVat() {
            return Math.round(this.finalPrice * 1.1);
        }
    },

    methods: {
        parseDate(dateStr) {
            const parts = dateStr.split('.');
            return new Date(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2]));
        },

        formatPrice(price) {
            return price.toLocaleString();
        },

        getSubscriptionPeriod() {
            if (!this.site.subscriptionStart) return '-';
            const end = this.site.subscriptionEnd || '무제한';
            return `${this.site.subscriptionStart} ~ ${end}`;
        },

        async loadPaymentNotice() {
            try {
                const res = await fetch('data/payment-notice.json');
                this.paymentNotice = await res.json();
            } catch (error) {
                console.error('결제 안내 로딩 실패:', error);
            }
        },

        async registerCard() {
            // TODO: 토스페이먼츠 빌링 결제창 연동 (PG사 외부 페이지)
            alert('카드 등록 기능은 준비 중입니다.');
        },

        async handlePayment() {
            if (!this.agreeTerms) {
                alert('유료약정상품 구매 약관에 동의해 주세요.');
                return;
            }

            // TODO: 실제 서비스에서는 카드 등록 여부 체크 (PG사 외부 페이지 연동)
            // 데모에서는 카드 체크 생략하고 바로 결제 결과 페이지로 이동

            this.isSubmitting = true;
            try {
                // TODO: 실제 즉시 결제 API 호출
                await new Promise(resolve => setTimeout(resolve, 1500));

                // 데모: 라운드로빈으로 성공/실패 교대 표시
                const isSuccess = this.demoRoundRobin % 2 === 0;
                this.demoRoundRobin++;
                sessionStorage.setItem('payNowRoundRobin', String(this.demoRoundRobin));

                const targetPage = isSuccess ? '/mysite/payment-complete' : '/mysite/payment-failed';
                this.navigateTo(targetPage, {
                    plan: this.site.planId,
                    cycle: this.site.billingCycle
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
