export default {
    name: 'ChangeBillingEmail',
    layout: 'default',

    data() {
        return {
            form: {
                currentEmail: '',
                newEmail: '',
                verificationCode: ['', '', '', '', '', ''],
                password: ''
            },
            isCodeSent: false,
            isCodeVerified: false,
            codeTimer: 0,
            timerInterval: null,
            errors: {
                currentEmail: '',
                newEmail: '',
                code: '',
                password: ''
            },
            isSubmitting: false,
            showCodeModal: false,
            isCompleted: false
        };
    },

    computed: {
        formattedTimer() {
            const minutes = Math.floor(this.codeTimer / 60);
            const seconds = this.codeTimer % 60;
            return `${minutes}분 ${seconds.toString().padStart(2, '0')}초 남음`;
        }
    },

    async mounted() {
        const user = JSON.parse(localStorage.getItem('user') || '{}');
        this.form.currentEmail = user.billingEmail || user.email || '';
    },

    beforeUnmount() {
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
        }
    },

    methods: {
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
            this.demoCode = String(Math.floor(100000 + Math.random() * 900000));
            window.open('/templates/email/verify-email.html?code=' + this.demoCode, '_blank', 'width=700,height=800,scrollbars=yes');
        },

        async sendVerificationCode() {
            this.errors.newEmail = '';
            if (!this.form.newEmail || !this.form.newEmail.includes('@')) {
                this.errors.newEmail = '이메일 주소를 입력해 주세요';
                return;
            }

            // TODO: API call
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

        async verifyCode() {
            this.errors.code = '';
            const code = this.form.verificationCode.join('');
            if (code.length !== 6) {
                this.errors.code = '이메일로 보내 드린 인증코드를 입력해 주세요';
                return;
            }
            if (this.codeTimer <= 0) {
                this.errors.code = '만료되었거나 유효하지 않은 인증코드입니다. 인증코드 재발송으로 새로운 인증코드를 입력해 주세요';
                return;
            }

            // TODO: API call
            this.isCodeVerified = true;
            this.errors.code = '';
            if (this.timerInterval) {
                clearInterval(this.timerInterval);
                this.timerInterval = null;
            }
        },

        validate() {
            this.errors.currentEmail = '';
            this.errors.newEmail = '';
            this.errors.code = '';
            this.errors.password = '';
            let hasError = false;

            if (!this.form.currentEmail || !this.form.currentEmail.includes('@')) {
                this.errors.currentEmail = '이메일 주소를 입력해 주세요';
                hasError = true;
            }

            if (!this.form.newEmail || !this.form.newEmail.includes('@')) {
                this.errors.newEmail = '이메일 주소를 입력해 주세요';
                hasError = true;
            }

            if (!this.isCodeVerified) {
                const code = this.form.verificationCode.join('');
                if (code.length !== 6) {
                    this.errors.code = '이메일로 보내 드린 인증코드를 입력해 주세요';
                } else {
                    this.errors.code = '인증코드 확인을 완료해 주세요';
                }
                hasError = true;
            }

            if (!this.form.password) {
                this.errors.password = '비밀번호가 맞지 않네요. 다시 입력해 주세요.';
                hasError = true;
            }

            return !hasError;
        },

        async handleSubmit() {
            if (!this.validate()) return;

            this.isSubmitting = true;
            try {
                // TODO: API call
                await new Promise(resolve => setTimeout(resolve, 500));

                const user = JSON.parse(localStorage.getItem('user') || '{}');
                user.billingEmail = this.form.newEmail;
                localStorage.setItem('user', JSON.stringify(user));

                this.navigateTo('/account/change-billing-email-complete');
            } catch (error) {
                console.error('결제 이메일 변경 실패:', error);
            } finally {
                this.isSubmitting = false;
            }
        }
    }
};
