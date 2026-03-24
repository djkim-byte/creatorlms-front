export default {
    name: 'MySiteCreate',
    layout: 'default',

    data() {
        return {
            form: {
                siteName: '',
                domain: ''
            },
            errors: {
                siteName: '',
                domain: ''
            },
            domainCheckCount: 0,
            domainChecked: false,
            domainAvailable: false,
            isLoading: false,
            isCheckingDomain: false,
            agreeTerms: false,
            freeNotice: null,
            freeTerms: { title: '', sections: [] },
            isFreePlan: false
        };
    },

    async mounted() {
        const plan = this.getParam('plan');
        this.isFreePlan = !plan || plan.toLowerCase() === 'free';

        if (this.isFreePlan) {
            await this.loadFreeNotice();
            await this.loadFreeTerms();
        }
    },

    computed: {
        fullDomain() {
            return this.form.domain ? `https://${this.form.domain}.solsol.com` : '';
        }
    },

    methods: {
        async loadFreeNotice() {
            try {
                const res = await fetch('data/free-plan-notice.json');
                this.freeNotice = await res.json();
            } catch (error) {
                console.error('무료 플랜 안내 로딩 실패:', error);
            }
        },

        async loadFreeTerms() {
            try {
                const res = await fetch('data/free-terms.json');
                this.freeTerms = await res.json();
            } catch (error) {
                console.error('무료약정상품 약관 로딩 실패:', error);
            }
        },

        onDomainInput() {
            this.domainChecked = false;
            this.domainAvailable = false;
            this.errors.domain = '';
        },

        validate() {
            let valid = true;
            this.errors.siteName = '';
            this.errors.domain = '';

            if (!this.form.siteName || this.form.siteName.length < 2) {
                this.errors.siteName = '사이트 이름을 2자 이상 입력해 주세요.';
                valid = false;
            }

            if (!this.form.domain || this.form.domain.length < 3) {
                this.errors.domain = '도메인을 3자 이상 입력해 주세요.';
                valid = false;
            } else if (!this.domainChecked) {
                this.errors.domain = '도메인 중복 체크를 해주세요.';
                valid = false;
            } else if (!this.domainAvailable) {
                this.errors.domain = '사용할 수 없는 도메인입니다. 다른 도메인을 선택해 주세요.';
                valid = false;
            }

            if (this.isFreePlan && !this.agreeTerms) {
                alert('무료약정상품 구매 약관에 동의해 주세요.');
                valid = false;
            }

            return valid;
        },

        async checkDomain() {
            if (!this.form.domain || this.form.domain.length < 3) return;

            this.isCheckingDomain = true;
            try {
                // TODO: API 연동 시 교체
                // const response = await this.$api.post('/api/sites/check-domain', { domain: this.form.domain });
                // const available = response.data.available;

                // 데모: 라운드로빈으로 사용 가능/불가 번갈아 표시
                await new Promise(resolve => setTimeout(resolve, 500));
                const available = this.domainCheckCount % 2 === 0;
                this.domainCheckCount++;

                this.showDomainCheckModal(available, this.fullDomain);
            } catch (error) {
                console.error('도메인 확인 실패:', error);
            } finally {
                this.isCheckingDomain = false;
            }
        },

        showDomainCheckModal(available, domainUrl) {
            const existing = document.getElementById('domainCheckModal');
            if (existing) existing.remove();

            const successIcon = `<svg width="72" height="72" viewBox="0 0 72 72" fill="none"><circle cx="36" cy="36" r="36" fill="#16a34a"/><path d="M21 36L31 46L51 26" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
            const errorIcon = `<svg width="72" height="72" viewBox="0 0 72 72" fill="none"><circle cx="36" cy="36" r="36" fill="#ef4444"/><path d="M24 24L48 48" stroke="white" stroke-width="5" stroke-linecap="round"/><path d="M48 24L24 48" stroke="white" stroke-width="5" stroke-linecap="round"/></svg>`;

            const icon = available ? successIcon : errorIcon;
            const title = available ? '사용 가능한 도메인입니다' : '이미 사용 중인 도메인입니다';
            const desc = available ? '이 도메인을 사용하실 수 있습니다.' : '다른 도메인을 선택해 주세요.';

            const modalHtml = `
                <div class="modal fade" id="domainCheckModal" tabindex="-1" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" style="max-width: 400px;">
                        <div class="modal-content" style="border: none; border-radius: 1.25rem;">
                            <div class="modal-body position-relative" style="padding: 3rem 2rem 2rem;">
                                <button type="button" class="btn-close position-absolute" style="top: 1rem; right: 1rem; z-index: 1;" data-bs-dismiss="modal" aria-label="Close"></button>
                                <div class="text-center" style="margin-bottom: 1.5rem;">${icon}</div>
                                <h4 style="font-weight: 700; text-align: center; margin-bottom: 0.5rem; font-size: 1.35rem;">${title}</h4>
                                <p style="color: #6c757d; text-align: center; font-size: 0.9rem; margin-bottom: 2.5rem;">${desc}</p>
                                <div style="background: #f5f5f4; border-radius: 0.75rem; padding: 1.25rem; text-align: center; font-size: 0.95rem; font-weight: 500; color: #1e293b; margin-bottom: 2.5rem;">${domainUrl}</div>
                                <button type="button" style="width: 100%; background: #1e293b; color: white; border: none; padding: 0.875rem; border-radius: 0.625rem; font-size: 1rem; font-weight: 600; cursor: pointer;" data-bs-dismiss="modal">확인</button>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            document.body.insertAdjacentHTML('beforeend', modalHtml);

            const modalEl = document.getElementById('domainCheckModal');
            const modal = new bootstrap.Modal(modalEl);
            const vm = this;

            modalEl.addEventListener('hidden.bs.modal', () => {
                vm.domainChecked = true;
                vm.domainAvailable = available;
                vm.errors.domain = '';
                modal.dispose();
                modalEl.remove();
            }, { once: true });

            modal.show();
        },

        async handleSubmit() {
            if (!this.validate()) return;

            this.isLoading = true;
            try {
                // TODO: API 연동 시 교체
                // await this.$api.post('/api/sites', this.form);
                await new Promise(resolve => setTimeout(resolve, 1000));
                this.navigateTo('/mysite');
            } catch (error) {
                console.error('사이트 생성 실패:', error);
            } finally {
                this.isLoading = false;
            }
        }
    }
};
