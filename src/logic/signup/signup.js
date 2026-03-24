export default {
    name: 'Signup',
    layout: 'logo-only',

    data() {
        return {
            selectedPlan: 'free',
            plans: [
                {
                    id: 'free',
                    name: 'Free',
                    price: 0,
                    priceLabel: '영구 무료',
                    feeRate: '10%',
                    features: [
                        { label: '발행 상품 수', value: '무제한' },
                        { label: '동영상 저장 용량', value: '40GB' },
                        { label: '학생/회원수 제한', value: '20명' },
                        { label: '월 수강신청 제한', value: '무제한' },
                        { label: '관리자 계정 수', value: '무제한' },
                        { label: '도메인 & SSL', value: '없음' },
                        { label: '사이트 수', value: '1개' }
                    ]
                },
                {
                    id: 'basic',
                    name: 'Basic',
                    price: 59000,
                    priceLabel: '월',
                    feeRate: '3%',
                    features: [
                        { label: '발행 상품 수', value: '무제한' },
                        { label: '동영상 저장 용량', value: '300GB' },
                        { label: '학생/회원수 제한', value: '500명' },
                        { label: '월 수강신청 제한', value: '무제한' },
                        { label: '관리자 계정 수', value: '무제한' },
                        { label: '도메인 & SSL', value: '무료 제공' },
                        { label: '사이트 수', value: '3개' }
                    ]
                },
                {
                    id: 'growth',
                    name: 'Growth',
                    price: 99000,
                    priceLabel: '월',
                    feeRate: '1%',
                    features: [
                        { label: '발행 상품 수', value: '무제한' },
                        { label: '동영상 저장 용량', value: '1TB' },
                        { label: '학생/회원수 제한', value: '2,000명' },
                        { label: '월 수강신청 제한', value: '무제한' },
                        { label: '관리자 계정 수', value: '무제한' },
                        { label: '도메인 & SSL', value: '무료 제공' },
                        { label: '사이트 수', value: '5개' }
                    ]
                },
                {
                    id: 'advanced',
                    name: 'Advanced',
                    price: 199000,
                    priceLabel: '월',
                    feeRate: '0%',
                    features: [
                        { label: '발행 상품 수', value: '무제한' },
                        { label: '동영상 저장 용량', value: '무제한' },
                        { label: '학생/회원수 제한', value: '무제한' },
                        { label: '월 수강신청 제한', value: '무제한' },
                        { label: '관리자 계정 수', value: '무제한' },
                        { label: '도메인 & SSL', value: '무료 제공' },
                        { label: '사이트 수', value: '10개' }
                    ]
                }
            ],

            form: {
                lastName: '',
                firstName: '',
                email: '',
                verificationCode: ['', '', '', '', '', ''],
                password: '',
                passwordConfirm: ''
            },

            isCodeSent: false,
            isCodeVerified: false,
            codeTimer: 0,
            timerInterval: null,
            showCodeModal: false,

            agreements: {
                all: false,
                terms: false,
                privacy: false,
                age: false,
                marketing: false
            },

            legalTerms: { title: '', sections: [] },
            legalPrivacy: { title: '', intro: '', sections: [] },
            legalMarketing: { title: '', sections: [] },

            errors: {},
            isSubmitting: false
        };
    },

    computed: {
        currentPlan() {
            return this.plans.find(p => p.id === this.selectedPlan);
        },
        formattedTimer() {
            const minutes = Math.floor(this.codeTimer / 60);
            const seconds = this.codeTimer % 60;
            return `${minutes}분 ${seconds.toString().padStart(2, '0')}초 남음`;
        }
    },

    async mounted() {
        // 로그인된 회원인 경우 무료 플랜 체크
        const token = localStorage.getItem('auth_token');
        if (token) {
            this.handleLoggedInUser();
        }
        await this.loadLegalDocs();
    },

    beforeUnmount() {
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
        }
    },

    methods: {
        handleLoggedInUser() {
            const sites = JSON.parse(localStorage.getItem('my_sites') || '[]');
            const hasFreeSite = sites.some(s => s.plan === 'Free');

            if (hasFreeSite) {
                // 무료 사이트가 이미 있으면 홈으로 이동
                this.navigateTo('/home');
                return;
            }

            // 무료 사이트가 없으면 자동 개설 후 홈으로 이동
            this.createFreeSite();
            this.navigateTo('/home');
        },

        createFreeSite() {
            const user = JSON.parse(localStorage.getItem('user') || '{}');
            const sites = JSON.parse(localStorage.getItem('my_sites') || '[]');

            const newSite = {
                id: Date.now(),
                name: '내 사이트',
                url: `https://my-site.solsol.so`,
                plan: 'Free',
                status: '활성',
                color: '#6366f1',
                createdAt: new Date().toISOString().slice(0, 10).replace(/-/g, '.')
            };

            sites.push(newSite);
            localStorage.setItem('my_sites', JSON.stringify(sites));
        },

        formatPrice(price) {
            return price.toLocaleString();
        },

        // Verification code input handling
        onCodeInput(idx, event) {
            const val = event.target.value.replace(/[^0-9]/g, '');
            this.form.verificationCode[idx] = val;
            event.target.value = val;
            if (val && idx < 5) {
                const inputs = document.querySelectorAll('.code-input');
                if (inputs[idx + 1]) inputs[idx + 1].focus();
            }
        },

        onCodeKeydown(idx, event) {
            if (event.key === 'Backspace' && !this.form.verificationCode[idx] && idx > 0) {
                const inputs = document.querySelectorAll('.code-input');
                if (inputs[idx - 1]) inputs[idx - 1].focus();
            }
        },

        onCodePaste(event) {
            const paste = event.clipboardData.getData('text').replace(/[^0-9]/g, '').slice(0, 6);
            for (let i = 0; i < 6; i++) {
                this.form.verificationCode[i] = paste[i] || '';
            }
            const inputs = document.querySelectorAll('.code-input');
            const focusIdx = Math.min(paste.length, 5);
            if (inputs[focusIdx]) inputs[focusIdx].focus();
        },

        openVerifyEmail() {
            this.showCodeModal = false;
            // 데모용 가상 인증코드 생성 (6자리 랜덤)
            this.demoCode = String(Math.floor(100000 + Math.random() * 900000));
            window.open('/templates/email/verify-email.html?code=' + this.demoCode, '_blank', 'width=700,height=800,scrollbars=yes');
        },

        // Send verification code
        async sendVerificationCode() {
            this.errors = {};
            if (!this.form.email || !this.form.email.includes('@')) {
                this.errors.email = '이메일 주소를 입력해 주세요';
                return;
            }

            // TODO: API call to send verification code
            this.isCodeSent = true;
            this.isCodeVerified = false;
            this.showCodeModal = true;
            this.startTimer();
        },

        startTimer() {
            if (this.timerInterval) clearInterval(this.timerInterval);
            this.codeTimer = 180;
            this.timerInterval = setInterval(() => {
                this.codeTimer--;
                if (this.codeTimer <= 0) {
                    clearInterval(this.timerInterval);
                    this.timerInterval = null;
                }
            }, 1000);
        },

        // Verify code
        async verifyCode() {
            const code = this.form.verificationCode.join('');
            if (code.length !== 6) {
                this.errors.code = '이메일로 보내 드린 인증코드를 입력해 주세요';
                return;
            }
            if (this.codeTimer <= 0) {
                this.errors.code = '만료되었거나 유효하지 않은 인증코드입니다. 인증코드 재발송으로 새로운 인증코드를 입력해 주세요';
                return;
            }

            // TODO: API call to verify code
            this.isCodeVerified = true;
            this.errors.code = '';
            if (this.timerInterval) {
                clearInterval(this.timerInterval);
                this.timerInterval = null;
            }
        },

        // Legal docs loading
        async loadLegalDocs() {
            try {
                const [terms, privacy, marketing] = await Promise.all([
                    fetch('data/terms.json').then(r => r.json()),
                    fetch('data/privacy.json').then(r => r.json()),
                    fetch('data/marketing.json').then(r => r.json())
                ]);
                this.legalTerms = terms;
                this.legalPrivacy = privacy;
                this.legalMarketing = marketing;
            } catch (e) {
                this.log('Failed to load legal docs:', e);
            }
        },

        // Agreement handling
        toggleAll() {
            const val = this.agreements.all;
            this.agreements.terms = val;
            this.agreements.privacy = val;
            this.agreements.age = val;
            this.agreements.marketing = val;
        },

        checkAll() {
            this.agreements.all = this.agreements.terms && this.agreements.privacy &&
                                  this.agreements.age && this.agreements.marketing;
        },

        // Validation
        validate() {
            this.errors = {};

            if (!this.form.lastName || !this.form.firstName) {
                this.errors.name = '성과 이름을 입력해 주세요';
                if (!this.form.lastName) this.errors.lastName = true;
                if (!this.form.firstName) this.errors.firstName = true;
            }

            if (!this.form.email || !this.form.email.includes('@')) {
                this.errors.email = '이메일 주소를 입력해 주세요';
            }

            if (!this.isCodeVerified) {
                const code = this.form.verificationCode.join('');
                if (code.length !== 6) {
                    this.errors.code = '이메일로 보내 드린 인증코드를 입력해 주세요';
                } else {
                    this.errors.code = '만료되었거나 유효하지 않은 인증코드입니다. 인증코드 재발송으로 새로운 인증코드를 입력해 주세요';
                }
            }

            if (!this.form.password || this.form.password.length < 8) {
                this.errors.password = '최소 8자 이상 특수문자 기호를 포함해 주세요';
            }

            if (this.form.password !== this.form.passwordConfirm) {
                this.errors.passwordConfirm = '비밀번호가 맞지 않아요. 다시 입력해 주세요';
            }

            if (!this.agreements.terms || !this.agreements.privacy || !this.agreements.age) {
                this.errors.agreements = '필수 동의를 체크해 주세요';
            }

            return Object.keys(this.errors).length === 0;
        },

        // Submit
        async handleSignup() {
            if (!this.validate()) return;

            this.isSubmitting = true;
            try {
                // TODO: API call to register
                const payload = {
                    plan: this.selectedPlan,
                    lastName: this.form.lastName,
                    firstName: this.form.firstName,
                    email: this.form.email,
                    password: this.form.password,
                    marketing: this.agreements.marketing
                };
                this.log('Signup payload:', payload);

                // 임시: 개발용 로그인 시뮬레이션
                await new Promise(resolve => setTimeout(resolve, 1000));

                const token = 'dev_token_' + Date.now();
                localStorage.setItem('auth_token', token);
                localStorage.setItem('user', JSON.stringify({
                    id: Date.now(),
                    name: this.form.lastName + this.form.firstName,
                    email: this.form.email,
                    loginAt: new Date().toISOString()
                }));

                if (this.selectedPlan === 'free') {
                    // 무료 플랜: 자동 개설 후 웰컴 페이지로 이동
                    this.createFreeSite();
                    this.navigateTo('/signup/welcome', { email: this.form.email, plan: 'Free' });
                } else {
                    // 유료 플랜: 결제 페이지로 이동 (결제 완료 후 웰컴 페이지)
                    this.navigateTo('/payment/checkout', { plan: this.selectedPlan, email: this.form.email, isNewUser: 'true' });
                }
            } catch (error) {
                console.error('회원가입 실패:', error);
            } finally {
                this.isSubmitting = false;
            }
        }
    }
};
