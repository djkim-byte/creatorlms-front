export default {
    name: 'PaymentHistory',
    layout: 'default',

    data() {
        return {
            searchQuery: '',
            filters: {
                period: '',
                status: '',
                method: ''
            },
            displayCount: 10,
            summary: {
                monthlyAmount: 199000,
                totalAmount: 2388000,
                totalCount: 12,
                nextPaymentDate: '2026.03.14'
            },
            payments: [
                {
                    id: 1,
                    date: '2026.01.01',
                    productName: 'Basic 플랜',
                    billingType: '월간 자동결제',
                    siteName: 'DJ테크트리',
                    method: '신용카드',
                    amount: 110000,
                    status: 'completed',
                    cancelledAt: null
                },
                {
                    id: 2,
                    date: '2025.12.01',
                    productName: 'Basic 플랜',
                    billingType: '월간 자동결제',
                    siteName: 'DJ테크트리',
                    method: '신용카드',
                    amount: 110000,
                    status: 'completed',
                    cancelledAt: null
                },
                {
                    id: 3,
                    date: '2025.12.01',
                    productName: 'Basic 플랜',
                    billingType: '월간 자동결제',
                    siteName: 'DJ테크트리',
                    method: '신용카드',
                    amount: 110000,
                    status: 'cancelled',
                    cancelledAt: '2025.12.02 09:00:00'
                },
                {
                    id: 4,
                    date: '2025.11.01',
                    productName: 'Basic 플랜',
                    billingType: '월간 자동결제',
                    siteName: 'DJ테크트리',
                    method: '신용카드',
                    amount: 110000,
                    status: 'completed',
                    cancelledAt: null
                },
                {
                    id: 5,
                    date: '2025.10.01',
                    productName: 'Basic 플랜',
                    billingType: '월간 자동결제',
                    siteName: 'DJ테크트리',
                    method: '신용카드',
                    amount: 110000,
                    status: 'completed',
                    cancelledAt: null
                },
                {
                    id: 6,
                    date: '2025.09.01',
                    productName: 'Basic 플랜',
                    billingType: '월간 자동결제',
                    siteName: 'DJ테크트리',
                    method: '신용카드',
                    amount: 110000,
                    status: 'completed',
                    cancelledAt: null
                },
                {
                    id: 7,
                    date: '2025.08.01',
                    productName: 'Basic 플랜',
                    billingType: '월간 자동결제',
                    siteName: 'DJ테크트리',
                    method: '신용카드',
                    amount: 110000,
                    status: 'completed',
                    cancelledAt: null
                },
                {
                    id: 8,
                    date: '2025.07.01',
                    productName: 'Basic 플랜',
                    billingType: '월간 자동결제',
                    siteName: 'DJ테크트리',
                    method: '신용카드',
                    amount: 110000,
                    status: 'completed',
                    cancelledAt: null
                },
                {
                    id: 9,
                    date: '2025.06.01',
                    productName: 'Basic 플랜',
                    billingType: '월간 자동결제',
                    siteName: 'DJ테크트리',
                    method: '신용카드',
                    amount: 110000,
                    status: 'completed',
                    cancelledAt: null
                },
                {
                    id: 10,
                    date: '2025.05.01',
                    productName: 'Basic 플랜',
                    billingType: '월간 자동결제',
                    siteName: 'DJ테크트리',
                    method: '신용카드',
                    amount: 110000,
                    status: 'completed',
                    cancelledAt: null
                },
                {
                    id: 11,
                    date: '2025.04.01',
                    productName: 'Basic 플랜',
                    billingType: '월간 자동결제',
                    siteName: 'DJ테크트리',
                    method: '신용카드',
                    amount: 110000,
                    status: 'completed',
                    cancelledAt: null
                },
                {
                    id: 12,
                    date: '2025.03.01',
                    productName: 'Basic 플랜',
                    billingType: '월간 자동결제',
                    siteName: 'DJ테크트리',
                    method: '신용카드',
                    amount: 110000,
                    status: 'completed',
                    cancelledAt: null
                }
            ]
        };
    },

    computed: {
        filteredPayments() {
            let result = this.payments;

            if (this.filters.status) {
                result = result.filter(p => p.status === this.filters.status);
            }

            if (this.filters.method) {
                const methodMap = { credit: '신용카드', debit: '체크카드' };
                result = result.filter(p => p.method === methodMap[this.filters.method]);
            }

            if (this.searchQuery.trim()) {
                const query = this.searchQuery.trim().toLowerCase();
                result = result.filter(p => p.productName.toLowerCase().includes(query));
            }

            return result.slice(0, this.displayCount);
        },
        hasMore() {
            let result = this.payments;
            if (this.filters.status) {
                result = result.filter(p => p.status === this.filters.status);
            }
            if (this.filters.method) {
                const methodMap = { credit: '신용카드', debit: '체크카드' };
                result = result.filter(p => p.method === methodMap[this.filters.method]);
            }
            if (this.searchQuery.trim()) {
                const query = this.searchQuery.trim().toLowerCase();
                result = result.filter(p => p.productName.toLowerCase().includes(query));
            }
            return result.length > this.displayCount;
        }
    },

    methods: {
        formatPrice(price) {
            if (!price) return '0원';
            return price.toLocaleString() + '원';
        },

        resetFilters() {
            this.filters = { period: '', status: '', method: '' };
            this.searchQuery = '';
        },

        loadMore() {
            this.displayCount += 10;
        },

        viewReceipt(item) {
            alert(`영수증 조회: ${item.productName} (${item.date})\n금액: ${this.formatPrice(item.amount)}`);
        }
    }
};
