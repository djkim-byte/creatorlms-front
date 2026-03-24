export default {
    name: 'ResetPasswordConfirm',
    layout: 'logo-only',

    data() {
        return {
            form: {
                password: '',
                passwordConfirm: ''
            },
            showPassword: false,
            showPasswordConfirm: false,
            passwordStrength: 0,
            errors: {},
            isSubmitting: false,
            showCompleteModal: false
        };
    },

    computed: {
        strengthColor() {
            const colors = ['', '#ef4444', '#f59e0b', '#3b82f6', '#10b981'];
            return colors[this.passwordStrength] || 'var(--gray-200)';
        }
    },

    methods: {
        checkPasswordStrength() {
            const pw = this.form.password;
            let strength = 0;

            if (pw.length >= 8) strength++;
            if (/[a-z]/.test(pw) && /[A-Z]/.test(pw)) strength++;
            if (/\d/.test(pw)) strength++;
            if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(pw)) strength++;

            this.passwordStrength = strength;
        },

        validate() {
            this.errors = {};

            if (!this.form.password) {
                this.errors.password = '새 비밀번호를 입력해 주세요';
            } else if (this.form.password.length < 8 || this.form.password.length > 16) {
                this.errors.password = '비밀번호는 8~16자로 입력해 주세요';
            } else if (!/(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])/.test(this.form.password)) {
                this.errors.password = '영문, 숫자, 특수문자를 모두 포함해 주세요';
            }

            if (!this.form.passwordConfirm) {
                this.errors.passwordConfirm = '비밀번호 확인을 입력해 주세요';
            } else if (this.form.password !== this.form.passwordConfirm) {
                this.errors.passwordConfirm = '비밀번호가 일치하지 않습니다';
            }

            return Object.keys(this.errors).length === 0;
        },

        async handleSubmit() {
            if (!this.validate()) return;

            this.isSubmitting = true;

            try {
                // TODO: 실제 API 호출로 교체
                // await this.$api.post('/api/auth/reset-password-confirm', {
                //     token: this.getParam('token'),
                //     password: this.form.password
                // });
                await new Promise(resolve => setTimeout(resolve, 800));

                // 완료 모달 표시
                this.showCompleteModal = true;
            } catch (error) {
                this.errors.password = '비밀번호 변경에 실패했습니다. 다시 시도해 주세요.';
            } finally {
                this.isSubmitting = false;
            }
        }
    }
};
