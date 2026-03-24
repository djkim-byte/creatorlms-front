export default {
    name: 'InquiryHistory',
    layout: 'default',

    data() {
        return {
            searchQuery: '',
            displayCount: 10,
            openMenuId: null,
            inquiries: [
                {
                    id: 1,
                    status: 'waiting',
                    planLabel: '무료플랜',
                    category: '결제',
                    title: '문의 제목이 들어갑니다.',
                    content: '온라인 강의는 단순히 콘텐츠를 잘 만드는 것만으로는 수익이 발생하지 않습니다. 수익이 나는 강의는 기획 단계부터 구조가 다르게 설계됩니다. 이번 심화 특강에서는 강의 상품을 기획할 때 반드시 고려해야 할 수익 구조 설계 방식을 다룹니다.무료 콘텐츠와 유료 콘텐츠의 경계 설정 방...',
                    timeAgo: '방금전',
                    commentCount: 10,
                    createdAt: '2026.03.18'
                },
                {
                    id: 2,
                    status: 'inProgress',
                    planLabel: '무료플랜',
                    category: '상품',
                    title: '문의 제목이 들어갑니다.',
                    content: '온라인 강의는 단순히 콘텐츠를 잘 만드는 것만으로는 수익이 발생하지 않습니다. 수익이 나는 강의는 기획 단계부터 구조가 다르게 설계됩니다. 이번 심화 특강에서는 강의 상품을 기획할 때 반드시 고려해야 할 수익 구조 설계 방식을 다룹니다.무료 콘텐츠와 유료 콘텐츠의 경계 설정 방...',
                    timeAgo: '1시간전',
                    commentCount: 10,
                    createdAt: '2026.03.18'
                },
                {
                    id: 3,
                    status: 'completed',
                    planLabel: '무료플랜',
                    category: '서비스',
                    title: '문의 제목이 들어갑니다.',
                    content: '온라인 강의는 단순히 콘텐츠를 잘 만드는 것만으로는 수익이 발생하지 않습니다. 수익이 나는 강의는 기획 단계부터 구조가 다르게 설계됩니다. 이번 심화 특강에서는 강의 상품을 기획할 때 반드시 고려해야 할 수익 구조 설계 방식을 다룹니다.무료 콘텐츠와 유료 콘텐츠의 경계 설정 방...',
                    timeAgo: '6시간전',
                    commentCount: 10,
                    createdAt: '2026.03.17'
                },
                {
                    id: 4,
                    status: 'completed',
                    planLabel: '무료플랜',
                    category: '결제',
                    title: '문의 제목이 들어갑니다.',
                    content: '온라인 강의는 단순히 콘텐츠를 잘 만드는 것만으로는 수익이 발생하지 않습니다. 수익이 나는 강의는 기획 단계부터 구조가 다르게 설계됩니다. 이번 심화 특강에서는 강의 상품을 기획할 때 반드시 고려해야 할 수익 구조 설계 방식을 다룹니다.무료 콘텐츠와 유료 콘텐츠의 경계 설정 방...',
                    timeAgo: '2000.00.00',
                    commentCount: 10,
                    createdAt: '2026.03.16'
                },
                {
                    id: 5,
                    status: 'completed',
                    planLabel: '무료플랜',
                    category: '기타',
                    title: '문의 제목이 들어갑니다.',
                    content: '온라인 강의는 단순히 콘텐츠를 잘 만드는 것만으로는 수익이 발생하지 않습니다. 수익이 나는 강의는 기획 단계부터 구조가 다르게 설계됩니다. 이번 심화 특강에서는 강의 상품을 기획할 때 반드시 고려해야 할 수익 구조 설계 방식을 다룹니다.무료 콘텐츠와 유료 콘텐츠의 경계 설정 방...',
                    timeAgo: '2000.00.00',
                    commentCount: 10,
                    createdAt: '2026.03.15'
                }
            ]
        };
    },

    computed: {
        statusCounts() {
            return {
                waiting: this.inquiries.filter(i => i.status === 'waiting').length,
                inProgress: this.inquiries.filter(i => i.status === 'inProgress').length,
                completed: this.inquiries.filter(i => i.status === 'completed').length
            };
        },

        filteredInquiries() {
            let result = this.inquiries;
            if (this.searchQuery.trim()) {
                const query = this.searchQuery.trim().toLowerCase();
                result = result.filter(i =>
                    i.title.toLowerCase().includes(query) ||
                    i.content.toLowerCase().includes(query)
                );
            }
            return result.slice(0, this.displayCount);
        },

        hasMore() {
            let result = this.inquiries;
            if (this.searchQuery.trim()) {
                const query = this.searchQuery.trim().toLowerCase();
                result = result.filter(i =>
                    i.title.toLowerCase().includes(query) ||
                    i.content.toLowerCase().includes(query)
                );
            }
            return result.length > this.displayCount;
        }
    },

    mounted() {
        document.addEventListener('click', this.closeMenu);
    },

    beforeUnmount() {
        document.removeEventListener('click', this.closeMenu);
    },

    methods: {
        goToDetail(id) {
            this.navigateTo('/inquiryhistory/detail', { id });
        },

        loadMore() {
            this.displayCount += 10;
        },

        toggleMenu(id) {
            this.openMenuId = this.openMenuId === id ? null : id;
        },

        closeMenu() {
            this.openMenuId = null;
        },

        deleteInquiry(id) {
            this.openMenuId = null;
            this.inquiries = this.inquiries.filter(i => i.id !== id);
        }
    }
};
