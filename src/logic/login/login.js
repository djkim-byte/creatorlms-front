export default {
    name: 'Login',
    layout: 'default',

    data() {
        return {
            form: {
                email: '',
                password: ''
            },
            showPassword: false,
            rememberEmail: false,
            errors: {},
            isSubmitting: false
        };
    },

    mounted() {
        // 저장된 이메일 복원
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
                this.errors.email = '아이디를 입력해 주세요';
            }

            if (!this.form.password) {
                this.errors.password = '비밀번호를 입력해 주세요';
            }

            return Object.keys(this.errors).length === 0;
        },

        async handleLogin() {
            if (!this.validate()) return;

            this.isSubmitting = true;

            try {
                if (this.rememberEmail) {
                    localStorage.setItem('remembered_email', this.form.email);
                } else {
                    localStorage.removeItem('remembered_email');
                }

                await new Promise(resolve => setTimeout(resolve, 300));

                const token = 'demo_token_' + Date.now();
                localStorage.setItem('auth_token', token);
                localStorage.setItem('user', JSON.stringify({
                    id: 1,
                    email: this.form.email,
                    name: this.form.email.split('@')[0],
                    loginAt: new Date().toISOString()
                }));

                const returnUrl = this.getParam('returnUrl');
                if (returnUrl === '/payment/checkout') {
                    const plan = this.getParam('returnPlan');
                    const cycle = this.getParam('returnCycle');
                    this.navigateTo('/payment/checkout', { plan, cycle });
                } else {
                    this.navigateTo(returnUrl || '/home');
                }
            } finally {
                this.isSubmitting = false;
            }
        },

        handleResetPassword() {
            this.navigateTo('/login/reset-password');
        }
    }
};
