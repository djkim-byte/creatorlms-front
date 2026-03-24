export default {
    name: 'Inquiry',
    layout: 'default',

    data() {
        return {
            guides: null,
            form: {
                inquiryType: 'product',
                productSubType: 'all',
                title: '',
                content: '',
                files: []
            },
            fileError: '',
            isSubmitting: false,
            isSubmitted: false,
            submittedData: {},
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
        currentGuide() {
            if (!this.guides) return null;
            if (this.form.inquiryType === 'product') {
                return this.guides.product?.[this.form.productSubType] || null;
            }
            return this.guides[this.form.inquiryType] || null;
        },

        currentGuideTitle() {
            if (this.form.inquiryType === 'product') {
                const sub = this.productSubTypes.find(s => s.value === this.form.productSubType);
                return `상품 - ${sub?.label || ''}`;
            }
            const type = this.inquiryTypes.find(t => t.value === this.form.inquiryType);
            return type?.label || '';
        },

        isFormValid() {
            if (!this.form.inquiryType || !this.form.title.trim() || !this.form.content.trim()) return false;
            const maxSize = 10 * 1024 * 1024;
            if (this.form.files.some(f => f.size > maxSize)) return false;
            return true;
        },

        submittedTypeName() {
            if (this.submittedData.inquiryType === 'product') {
                const sub = this.productSubTypes.find(s => s.value === this.submittedData.productSubType);
                return `상품 - ${sub?.label || ''}`;
            }
            const type = this.inquiryTypes.find(t => t.value === this.submittedData.inquiryType);
            return type?.label || '';
        }
    },

    watch: {
        'form.inquiryType'() {
            this.updateGuideContent();
        },
        'form.productSubType'() {
            if (this.form.inquiryType === 'product') {
                this.updateGuideContent();
            }
        }
    },

    async mounted() {
        await this.loadGuides();
        this.updateGuideContent();
    },

    methods: {
        async loadGuides() {
            try {
                const res = await fetch('data/inquiry-guides.json');
                this.guides = await res.json();
            } catch (error) {
                console.error('문의 가이드 로딩 실패:', error);
            }
        },

        updateGuideContent() {
            const guide = this.currentGuide;
            if (guide && !this.form.content.trim()) {
                this.form.content = guide.guide || '';
            } else if (guide) {
                this.form.content = guide.guide || '';
            }
        },

        handleFileSelect(event) {
            const newFiles = Array.from(event.target.files);
            const maxFiles = 5;
            const maxSize = 10 * 1024 * 1024;
            this.fileError = '';

            for (const file of newFiles) {
                if (this.form.files.length >= maxFiles) {
                    this.fileError = '첨부파일은 최대 5개까지 가능합니다.';
                    break;
                }
                this.form.files.push(file);
                if (file.size > maxSize) {
                    this.fileError = '파일 용량이 업로드 가능한 최대 용량을 초과하였습니다';
                }
            }
            event.target.value = '';
        },

        removeFile(index) {
            this.form.files.splice(index, 1);
            this.validateFiles();
        },

        validateFiles() {
            const maxSize = 10 * 1024 * 1024;
            const hasOversized = this.form.files.some(f => f.size > maxSize);
            this.fileError = hasOversized ? '파일 용량이 업로드 가능한 최대 용량을 초과하였습니다' : '';
        },

        async handleSubmit() {
            if (!this.isFormValid) return;

            this.isSubmitting = true;
            try {
                // TODO: 실제 API 호출
                await new Promise(resolve => setTimeout(resolve, 1500));

                this.navigateTo('/inquiry/inquiry-complete', {
                    type: this.form.inquiryType,
                    subType: this.form.productSubType,
                    title: this.form.title,
                    content: this.form.content
                });
            } catch (error) {
                console.error('문의 접수 실패:', error);
                alert('문의 접수에 실패했습니다. 다시 시도해 주세요.');
            } finally {
                this.isSubmitting = false;
            }
        }
    }
};
