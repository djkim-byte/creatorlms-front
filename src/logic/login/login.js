export default {
    name: 'Login',
    layout: 'logo-only',

    data() {
        return {
            form: {
                email: '',
                password: ''
            },
            showPassword: false,
            rememberEmail: false,
            errors: {},
            isSubmitting: false,

            // 임시 테스트 계정
            testAccount: {
                email: 'test@solsol.so',
                password: 'test1234!',
                user: {
                    id: 1,
                    name: '테스트 사용자',
                    email: 'test@solsol.so'
                }
            }
        };
    },

    mounted() {
        // 이미 로그인된 경우 홈으로 이동
        if (localStorage.getItem('auth_token')) {
            this.navigateTo('/home');
            return;
        }

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
                this.errors.email = '이메일을 입력해 주세요';
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
                // 이메일 기억하기
                if (this.rememberEmail) {
                    localStorage.setItem('remembered_email', this.form.email);
                } else {
                    localStorage.removeItem('remembered_email');
                }

                // TODO: 실제 API 호출로 교체
                // const response = await this.$api.post('/api/auth/login', {
                //     email: this.form.email,
                //     password: this.form.password
                // });
                // const { token, user } = response;

                // 임시: 테스트 계정 검증
                await new Promise(resolve => setTimeout(resolve, 500));

                if (this.form.email !== this.testAccount.email || this.form.password !== this.testAccount.password) {
                    this.errors.password = '이메일 또는 비밀번호가 올바르지 않습니다.';
                    return;
                }

                const token = 'dev_token_' + Date.now();
                localStorage.setItem('auth_token', token);
                localStorage.setItem('user', JSON.stringify({
                    ...this.testAccount.user,
                    loginAt: new Date().toISOString()
                }));

                // returnUrl이 있으면 해당 경로로, 없으면 홈으로 이동
                const returnUrl = this.getParam('returnUrl');
                if (returnUrl === '/payment/checkout') {
                    const plan = this.getParam('returnPlan');
                    const cycle = this.getParam('returnCycle');
                    this.navigateTo('/payment/checkout', { plan, cycle });
                } else {
                    this.navigateTo(returnUrl || '/home');
                }
            } catch (error) {
                this.errors.password = '로그인에 실패했습니다. 다시 시도해 주세요.';
            } finally {
                this.isSubmitting = false;
            }
        },

        quickLogin() {
            this.form.email = this.testAccount.email;
            this.form.password = this.testAccount.password;
            this.handleLogin();
        },

        handleResetPassword() {
            this.navigateTo('/login/reset-password');
        }
    }
};
