export default {
    name: 'InquiryComplete',
    layout: 'default',

    data() {
        return {
            inquiryType: '',
            productSubType: '',
            inquiryTitle: '',
            content: '',
            inquiryTypes: [
                { value: 'product', label: '상품' },
                { value: 'payment', label: '결제(구매 및 환불)' },
                { value: 'partnership', label: '제휴 문의' },
                { value: 'service', label: '서비스 문의' },
                { value: 'etc', label: '기타' }
            ],
            productSubTypes: [
                { value: 'all', label: '상품전반' },
                { value: 'free', label: '무료플랜' },
                { value: 'paid', label: '유료플랜' },
                { value: 'enterprise', label: '엔터프라이즈' }
            ]
        };
    },

    computed: {
        typeName() {
            if (this.inquiryType === 'product') {
                const sub = this.productSubTypes.find(s => s.value === this.productSubType);
                return `상품 - ${sub?.label || ''}`;
            }
            const type = this.inquiryTypes.find(t => t.value === this.inquiryType);
            return type?.label || '';
        }
    },

    mounted() {
        this.inquiryType = this.getParam('type') || 'product';
        this.productSubType = this.getParam('subType') || 'free';
        this.inquiryTitle = this.getParam('title') || '블라블라블라 ~~~~~~~~~';
        this.content = this.getParam('content') || '블라블라블라 블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라\n블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라\n블라블라블라블라블라블라블라블라블라블라블라블라블라블라~~~~~~~~~';
    }
};
