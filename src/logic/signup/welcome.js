export default {
    name: 'Welcome',
    layout: 'logo-only',

    data() {
        return {
            email: '',
            planName: 'Free'
        };
    },

    mounted() {
        this.email = this.getParam('email') || 'user@example.com';
        this.planName = this.getParam('plan') || 'Free';
    },

    methods: {
        goToAdmin() {
            this.navigateTo('/mysite/create', { plan: this.planName.toLowerCase() });
        }
    }
};
