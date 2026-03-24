export default {
    name: 'Privacy',
    layout: 'default',
    data() {
        return {
            privacyData: { title: '', effectiveDate: '', intro: '', toc: [], sections: [] }
        };
    },
    async mounted() {
        await this.loadPrivacy();
    },
    methods: {
        async loadPrivacy() {
            try {
                const response = await fetch('data/privacy.json');
                this.privacyData = await response.json();
            } catch (e) {
                this.log('Failed to load privacy:', e);
            }
        }
    }
};
