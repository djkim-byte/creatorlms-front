export default {
    name: 'InquiryHistoryDetail',
    layout: 'default',

    data() {
        return {
            newComment: '',
            replyContent: '',
            replyingTo: null,
            openMenuId: null,
            inquiry: {
                id: 1,
                status: 'waiting',
                category: '결제',
                title: '결제 후 플랜 변경이 적용되지 않습니다',
                content: '안녕하세요.\n\n3월 15일에 Basic 플랜에서 Growth 플랜으로 업그레이드 결제를 완료했습니다.\n결제 확인 메일도 수신하였으나, 현재 관리자 페이지에서 확인해보면 여전히 Basic 플랜으로 표시되고 있습니다.\n\n확인 부탁드립니다.\n\n- 결제일: 2026년 3월 15일\n- 결제 금액: 300,000원\n- 결제 수단: 신용카드 (KB국민 ****-1234)\n- 주문번호: ORD-2026031500042\n\n감사합니다.',
                createdAt: '2026.03.15',
                commentCount: 10,
                attachments: [
                    { name: 'image.jpg', url: '#' },
                    { name: 'image.jpg', url: '#' }
                ]
            },
            comments: [
                {
                    id: 1,
                    author: '닉네임',
                    isAdmin: true,
                    timeAgo: '1시간 전',
                    content: '해당 강의는 초보자도 수강할 수 있도록 구성되어 있습니다. 기본 개념부터 차근차근 설명하며, 중간중간 실무 예시를 함께 다루기 때문에 관련 경험이 없으신 분들도 따라오실 수 있습니다.\n다만, 용어 자체가 처음인 경우에는 초반 강의에서 다소 낯설게 느껴질 수는 있으나 강의를 순서대로 수강하시면 자연스럽게 이해하실 수 있도록 구성되어 있습니다.\n기초부터 정리하고 싶은 분들께 특히 추천드립니다.',
                    replies: [
                        {
                            id: 11,
                            author: '닉네임',
                            isAdmin: false,
                            timeAgo: '2000.00.00',
                            mentionTo: '닉네임',
                            content: '해당 강의는 초보자도 수강할 수 있도록 구성되어 있습니다. 기본 개념부터 차근차근 설명하며, 중간중간 실무 예시를 함께 다루기 때문에 관련 경험이 없으신 분들도 따라오실 수 있습니다.\n다만, 용어 자체가 처음인 경우에는 초반 강의에서 다소 낯설게 느껴질 수는 있으나 강의를 순서대로 수강하시면 자연스럽게 이해하실 수 있도록 구성되어 있습니다.\n기초부터 정리하고 싶은 분들께 특히 추천드립니다.'
                        },
                        {
                            id: 12,
                            author: '관리자 닉네임',
                            isAdmin: true,
                            timeAgo: '2000.00.00',
                            mentionTo: '닉네임',
                            content: '해당 강의는 초보자도 수강할 수 있도록 구성되어 있습니다. 기본 개념부터 차근차근 설명하며, 중간중간 실무 예시를 함께 다루기 때문에 관련 경험이 없으신 분들도 따라오실 수 있습니다.\n다만, 용어 자체가 처음인 경우에는 초반 강의에서 다소 낯설게 느껴질 수는 있으나 강의를 순서대로 수강하시면 자연스럽게 이해하실 수 있도록 구성되어 있습니다.\n기초부터 정리하고 싶은 분들께 특히 추천드립니다.'
                        }
                    ]
                }
            ]
        };
    },

    computed: {
        hasAdminReply() {
            return this.comments.some(c =>
                c.isAdmin || (c.replies && c.replies.some(r => r.isAdmin))
            );
        }
    },

    async mounted() {
        document.addEventListener('click', this.closeMenu);
        const id = this.getParam('id');
        if (id) {
            await this.loadInquiry(id);
        }
    },

    beforeUnmount() {
        document.removeEventListener('click', this.closeMenu);
    },

    methods: {
        async loadInquiry(id) {
            // TODO: 실제 API 호출
            this.log('Loading inquiry:', id);
        },

        toggleReplyForm(commentId) {
            if (this.replyingTo === commentId) {
                this.replyingTo = null;
                this.replyContent = '';
            } else {
                this.replyingTo = commentId;
                this.replyContent = '';
            }
        },

        cancelReply() {
            this.replyingTo = null;
            this.replyContent = '';
        },

        async submitReply(parentCommentId, mentionTo) {
            if (!this.replyContent.trim()) return;
            // TODO: 실제 API 호출
            this.log('Reply to comment:', parentCommentId, 'mention:', mentionTo, 'content:', this.replyContent);
            this.replyingTo = null;
            this.replyContent = '';
        },

        async submitComment() {
            if (!this.newComment.trim()) return;
            // TODO: 실제 API 호출
            this.log('New comment:', this.newComment);
            this.newComment = '';
        },

        toggleMenu(id) {
            this.openMenuId = this.openMenuId === id ? null : id;
        },

        closeMenu() {
            this.openMenuId = null;
        },

        editReply(commentId, replyId) {
            this.openMenuId = null;
            // TODO: 실제 수정 로직
            this.log('Edit reply:', replyId, 'in comment:', commentId);
        },

        deleteInquiry() {
            this.openMenuId = null;
            if (this.hasAdminReply) return;
            // TODO: 실제 API 호출
            this.navigateTo('/inquiryhistory/inquiry-history');
        },

        deleteReply(commentId, replyId) {
            this.openMenuId = null;
            const comment = this.comments.find(c => c.id === commentId);
            if (comment) {
                comment.replies = comment.replies.filter(r => r.id !== replyId);
            }
        }
    }
};
