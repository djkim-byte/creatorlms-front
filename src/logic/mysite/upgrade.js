export default {
    name: 'MySiteUpgrade',
    layout: 'logo-only',

    data() {
        return {
            hasCard: false,
            agreeTerms: false,
            isSubmitting: false,
            selectedPlan: null,
            billingCycle: 'monthly',
            site: {},
            paymentNotice: null,
            demoRoundRobin: parseInt(sessionStorage.getItem('upgradeRoundRobin') || '0'),
            plans: {
                free: { name: 'Free', price: 0, feeRate: '10%' },
                basic: { name: 'Basic', price: 100000, feeRate: '0%' },
                growth: { name: 'Growth', price: 300000, feeRate: '0%' },
                advanced: { name: 'Advanced', price: 500000, feeRate: '0%' }
            },
            planOrder: ['free', 'basic', 'growth', 'advanced'],
            demoSites: {
                1: {
                    id: 1, name: 'DJ테크트리', domain: 'djtechtree.solsol.com',
                    plan: 'Free', planId: 'free', billingCycle: null, price: 0,
                    nextPaymentDate: null, subscriptionStart: '2026.01.15', subscriptionEnd: null,
                    status: 'active'
                },
                2: {
                    id: 2, name: 'MONZO', domain: 'monzo.solsol.com',
                    plan: 'Basic', planId: 'basic', billingCycle: 'monthly', price: 100000,
                    nextPaymentDate: '2026.03.13', subscriptionStart: '2026.02.14', subscriptionEnd: '2027.02.13',
                    status: 'active'
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

        const siteId = parseInt(this.getParam('siteId')) || 2;
        this.site = this.demoSites[siteId] || this.demoSites[2];
        this.billingCycle = this.site.billingCycle || 'monthly';

        const currentIdx = this.planOrder.indexOf(this.currentPlanId);
        const nextPlan = this.planOrder[currentIdx + 1];
        this.selectedPlan = nextPlan || this.currentPlanId;

        await this.loadPaymentNotice();
    },

    computed: {
        currentPlanId() {
            return this.site.planId || 'free';
        },

        currentSitePlan() {
            return this.site.plan || 'Free';
        },

        currentCycleLabel() {
            if (!this.site.billingCycle) return '';
            return this.site.billingCycle === 'annual' ? '연간' : '월간';
        },

        isSamePlan() {
            return this.selectedPlan === this.currentPlanId;
        },

        isCurrentMonthly() {
            return this.site.billingCycle === 'monthly';
        },

        isCurrentAnnual() {
            return this.site.billingCycle === 'annual';
        },

        upgradePlans() {
            const currentIdx = this.planOrder.indexOf(this.currentPlanId);
            return this.planOrder.map((id, idx) => ({
                id,
                name: this.plans[id].name,
                available: idx > currentIdx || (idx === currentIdx && this.isCurrentMonthly)
            }));
        },

        selectedPlanData() {
            return this.plans[this.selectedPlan] || this.plans.basic;
        },

        monthlyPrice() {
            const base = this.selectedPlanData.price;
            return this.billingCycle === 'annual' ? Math.round(base * 0.7) : base;
        },

        totalPrice() {
            return this.billingCycle === 'annual' ? this.monthlyPrice * 12 : this.monthlyPrice;
        },

        totalPriceWithVat() {
            return Math.round(this.finalPrice * 1.1);
        },

        unusedCredit() {
            if (!this.site.price || !this.site.subscriptionStart) return 110000;
            const start = this.parseDate(this.site.subscriptionStart);
            const end = this.site.nextPaymentDate ? this.parseDate(this.site.nextPaymentDate) : null;
            if (!end) return 110000;

            const today = new Date();
            const totalDays = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
            const usedDays = Math.ceil((today - start) / (1000 * 60 * 60 * 24));
            const remainingDays = Math.max(0, totalDays - usedDays);

            if (totalDays <= 0) return 110000;
            const dailyRate = this.site.price / totalDays;
            return Math.round(dailyRate * remainingDays);
        },

        finalPrice() {
            return Math.max(0, this.totalPrice - this.unusedCredit);
        },

        annualSavings() {
            const monthlyTotal = this.selectedPlanData.price * 12;
            const annualTotal = Math.round(this.selectedPlanData.price * 0.7) * 12;
            return monthlyTotal - annualTotal;
        },

        canUpgrade() {
            if (!this.selectedPlan) return false;
            if (this.isSamePlan) {
                return this.billingCycle === 'annual' && this.isCurrentMonthly;
            }
            return true;
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

        selectPlan(planId) {
            const currentIdx = this.planOrder.indexOf(this.currentPlanId);
            const planIdx = this.planOrder.indexOf(planId);
            if (planIdx > currentIdx || (planIdx === currentIdx && this.isCurrentMonthly)) {
                this.selectedPlan = planId;
                if (planId === this.currentPlanId) {
                    this.billingCycle = 'annual';
                }
            }
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
            // TODO: 토스페이먼츠 빌링 결제창 연동
            alert('카드 등록 기능은 준비 중입니다.');
        },

        async handleUpgrade() {
            if (!this.agreeTerms) {
                alert('유료약정상품 구매 약관에 동의해 주세요.');
                return;
            }

            // TODO: 실제 서비스에서는 카드 등록 여부 체크 (PG사 외부 페이지 연동)
            // 데모에서는 카드 체크 생략하고 바로 결제 결과 페이지로 이동

            this.isSubmitting = true;
            try {
                // TODO: 실제 플랜 업그레이드 API 호출
                await new Promise(resolve => setTimeout(resolve, 1500));

                // 데모: 라운드로빈으로 성공/실패 교대 표시
                const isSuccess = this.demoRoundRobin % 2 === 0;
                this.demoRoundRobin++;
                sessionStorage.setItem('upgradeRoundRobin', String(this.demoRoundRobin));

                const targetPage = isSuccess ? '/mysite/payment-complete' : '/mysite/payment-failed';
                this.navigateTo(targetPage, {
                    plan: this.selectedPlan,
                    cycle: this.billingCycle
                });
            } catch (error) {
                console.error('업그레이드 실패:', error);
                alert('업그레이드에 실패했습니다. 다시 시도해 주세요.');
            } finally {
                this.isSubmitting = false;
            }
        }
    }
};
