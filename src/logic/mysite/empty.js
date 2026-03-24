export default {
    name: 'MySiteEmpty',
    layout: 'default',

    data() {
        return {};
    },

    methods: {
        goToCreate() {
            this.navigateTo('/mysite/create', { plan: 'free' });
        },
        goToPricing() {
            this.navigateTo('/price/pricing');
        }
    }
};
