export default {
    name: 'ResetPassword',
    layout: 'logo-only',

    data() {
        return {
            form: {
                email: ''
            },
            rememberEmail: false,
            errors: {},
            isSubmitting: false,
            isEmailSent: false
        };
    },

    mounted() {
        const savedEmail = localStorage.getItem('remembered_email');
        if (savedEmail) {
            this.form.email = savedEmail;
            this.rememberEmail = true;
        }
    },

    methods: {
        validate() {
            this.errors = {};

            if (!this.form.email) {
                this.errors.email = '이메일을 입력해 주세요';
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.form.email)) {
                this.errors.email = '올바른 이메일 형식을 입력해 주세요';
            }

            return Object.keys(this.errors).length === 0;
        },

        async handleSubmit() {
            if (!this.validate()) return;

            this.isSubmitting = true;

            try {
                if (this.rememberEmail) {
                    localStorage.setItem('remembered_email', this.form.email);
                } else {
                    localStorage.removeItem('remembered_email');
                }

                // TODO: 실제 API 호출로 교체
                // await this.$api.post('/api/auth/reset-password', { email: this.form.email });
                await new Promise(resolve => setTimeout(resolve, 800));

                // 데모: 비밀번호 재설정 인증 메일을 새 창으로 표시
                window.open('templates/email/reset-password.html', '_blank');

                // 이메일 발송 완료 상태로 전환
                this.isEmailSent = true;
            } catch (error) {
                this.errors.email = '인증 메일 발송에 실패했습니다. 다시 시도해 주세요.';
            } finally {
                this.isSubmitting = false;
            }
        }
    }
};
