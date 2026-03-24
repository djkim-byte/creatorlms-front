export default {
    name: 'Terms',
    layout: 'default',
    data() {
        return {
            termsData: { title: '', effectiveDate: '', sections: [] }
        };
    },
    async mounted() {
        await this.loadTerms();
    },
    methods: {
        async loadTerms() {
            try {
                const response = await fetch('data/terms.json');
                this.termsData = await response.json();
            } catch (e) {
                this.log('Failed to load terms:', e);
            }
        }
    }
};
