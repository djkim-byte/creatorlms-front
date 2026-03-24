export default {
    name: 'MySiteCancel',
    layout: 'logo-only',

    data() {
        return {
            siteId: null,
            showConfirmModal: false
        };
    },

    mounted() {
        this.siteId = this.getParam('siteId');
    },

    methods: {
        goBack() {
            this.navigateTo('/mysite');
        },

        async confirmCancel() {
            // TODO: 실제 구독 취소 API 호출
            this.showConfirmModal = true;
        },

        goToMysite() {
            this.showConfirmModal = false;
            this.navigateTo('/mysite');
        }
    }
};
