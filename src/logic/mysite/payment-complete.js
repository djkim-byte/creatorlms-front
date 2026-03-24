export default {
    name: 'MySitePaymentComplete',
    layout: 'logo-only',

    data() {
        return {
            planId: 'basic',
            billingCycle: 'monthly',
            fromCheckout: false,
            plans: {
                basic: { name: 'Basic', description: '베이직 플랜', price: 100000 },
                growth: { name: 'Growth', description: '그로스 플랜', price: 300000 },
                advanced: { name: 'Advanced', description: '어드밴스드 플랜', price: 500000 }
            }
        };
    },

    mounted() {
        this.planId = this.getParam('plan') || 'basic';
        this.billingCycle = this.getParam('cycle') || 'monthly';
        this.fromCheckout = this.getParam('from') === 'checkout';
    },

    computed: {
        currentPlan() {
            return this.plans[this.planId] || this.plans.basic;
        },

        planName() {
            return this.currentPlan.name;
        },

        planFullName() {
            return `${this.currentPlan.name} (${this.currentPlan.description})`;
        },

        orderNumber() {
            const now = new Date();
            const y = now.getFullYear();
            const m = String(now.getMonth() + 1).padStart(2, '0');
            const d = String(now.getDate()).padStart(2, '0');
            return `ORDER-${y}-${m}-${d}-001234`;
        },

        totalAmount() {
            const base = this.currentPlan.price;
            const discounted = this.billingCycle === 'annual' ? Math.round(base * 0.7) : base;
            const total = this.billingCycle === 'annual' ? discounted * 12 : discounted;
            return Math.round(total * 1.1);
        },

        cardInfo() {
            return '신한카드 **** **** **** 1234';
        },

        subscriptionStart() {
            return this.formatDate(new Date());
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
        }
    }
};
