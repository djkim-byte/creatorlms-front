export default {
    name: 'PaymentComplete',
    layout: 'default',

    data() {
        return {
            planId: '',
            billingCycle: 'monthly',
            isNewUser: false,
            email: '',
            plans: {
                basic: { name: 'Basic', label: '씨베이직', description: '씨베이직 플랜', price: 100000 },
                growth: { name: 'Growth', label: '씨그로스', description: '씨그로스 플랜', price: 300000 },
                advanced: { name: 'Advanced', label: '씨어드밴스드', description: '씨어드밴스드 플랜', price: 500000 }
            }
        };
    },

    mounted() {
        this.planId = this.getParam('plan') || 'basic';
        this.billingCycle = this.getParam('cycle') || 'monthly';
        this.isNewUser = this.getParam('isNewUser') === 'true';
        this.email = this.getParam('email') || '';
    },

    computed: {
        currentPlan() {
            return this.plans[this.planId] || this.plans.basic;
        },

        planName() {
            return this.currentPlan.name;
        },

        planFullName() {
            return `C- ${this.currentPlan.name} (${this.currentPlan.description})`;
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
        },

        goToWelcome() {
            this.navigateTo('/signup/welcome', {
                email: this.email,
                plan: this.currentPlan.name
            });
        }
    }
};
