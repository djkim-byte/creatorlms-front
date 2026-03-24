export default {
    name: 'Marketing',
    layout: 'default',
    data() {
        return {
            marketingData: { title: '', sections: [] }
        };
    },
    async mounted() {
        await this.loadMarketing();
    },
    methods: {
        async loadMarketing() {
            try {
                const response = await fetch('data/marketing.json');
                this.marketingData = await response.json();
            } catch (e) {
                this.log('Failed to load marketing:', e);
            }
        }
    }
};
