export default {
    name: 'PaymentHistoryEmpty',
    layout: 'default',

    data() {
        return {};
    },

    methods: {
        goToPricing() {
            this.navigateTo('/price/pricing');
        }
    }
};
