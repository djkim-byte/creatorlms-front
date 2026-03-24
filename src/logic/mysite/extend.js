export default {
    name: 'MySiteExtend',
    layout: 'logo-only',

    data() {
        return {
            site: {},
            demoRoundRobin: parseInt(sessionStorage.getItem('extendRoundRobin') || '0'),
            plans: {
                free: { name: 'Free', description: '프리 플랜', feeRate: '10%' },
                basic: { name: 'Basic', description: '베이직 플랜', feeRate: '0%' },
                growth: { name: 'Growth', description: '그로스 플랜', feeRate: '0%' },
                advanced: { name: 'Advanced', description: '어드밴스드 플랜', feeRate: '0%' }
            },
            demoSites: {
                8: {
                    id: 8, name: 'MONZO', plan: 'Basic', planId: 'basic',
                    billingCycle: 'monthly', nextPaymentDate: '2026.03.13',
                    subscriptionStart: '2026.02.14', subscriptionEnd: '2027.02.13'
                },
                9: {
                    id: 9, name: 'MONZO', plan: 'Basic', planId: 'basic',
                    billingCycle: 'monthly', nextPaymentDate: '2026.03.13',
                    subscriptionStart: '2026.01.14', subscriptionEnd: '2026.02.13'
                },
                10: {
                    id: 10, name: 'MONZO', plan: 'Basic', planId: 'basic',
                    billingCycle: 'monthly', nextPaymentDate: '2026.03.13',
                    subscriptionStart: '2026.01.14', subscriptionEnd: '2026.02.13'
                }
            }
        };
    },

    mounted() {
        const siteId = parseInt(this.getParam('siteId')) || 9;
        this.site = this.demoSites[siteId] || this.demoSites[9];
    },

    computed: {
        planData() {
            return this.plans[this.site.planId] || this.plans.basic;
        },

        cycleLabel() {
            if (!this.site.billingCycle) return '월간';
            return this.site.billingCycle === 'annual' ? '연간' : '월간';
        }
    },

    methods: {
        goBack() {
            this.navigateTo('/mysite');
        },

        async handleExtend() {
            this.navigateTo('/payment/checkout', {
                plan: this.site.planId,
                cycle: this.site.billingCycle,
                siteId: this.site.id,
                type: 'extend'
            });
        }
    }
};
