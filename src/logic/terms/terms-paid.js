export default {
    name: 'TermsPaid',
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
                const response = await fetch('data/paid-terms.json');
                this.termsData = await response.json();
            } catch (e) {
                this.log('Failed to load paid terms:', e);
            }
        }
    }
};
