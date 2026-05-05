export default {
    name: 'Signup',
    layout: 'default',

    data() {
        return {
            form: {
                lastName: '',
                firstName: '',
                email: '',
                verificationCode: '',
                password: '',
                passwordConfirm: ''
            },

            touched: {
                lastName: false,
                firstName: false,
                email: false,
                password: false,
                passwordConfirm: false,
                codeRequired: false
            },

            isCodeSent: false,
            isCodeVerified: false,
            codeTimer: 0,
            timerInterval: null,
            showCodeModal: false,
            showApprovalModal: false,
            generatedCode: '',

            showPassword: false,
            showPasswordConfirm: false,

            agreement: false,
            errors: {},
            isSubmitting: false
        };
    },

    computed: {
        formattedTimer() {
            const m = Math.floor(this.codeTimer / 60);
            const s = this.codeTimer % 60;
            return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
        },

        passwordStrength() {
            const pw = this.form.password || '';
            let score = 0;
            if (pw.length >= 8) score++;
            if (/[A-Z]/.test(pw) && /[a-z]/.test(pw)) score++;
            if (/[0-9]/.test(pw)) score++;
            if (/[^A-Za-z0-9]/.test(pw)) score++;
            if (pw.length >= 12 && score === 4) score = 4;
            return score;
        },

        passwordStrengthPercent() {
            const map = { 0: 10, 1: 25, 2: 50, 3: 75, 4: 100 };
            return map[this.passwordStrength] ?? 10;
        },

        passwordStrengthClass() {
            const s = this.passwordStrength;
            if (s <= 1) return 'pw-weak';
            if (s === 2) return 'pw-medium';
            if (s === 3) return 'pw-good';
            return 'pw-strong';
        },

        passwordStrengthLabel() {
            const s = this.passwordStrength;
            if (s <= 1) return '약함';
            if (s === 2) return '보통';
            if (s === 3) return '양호';
            return '강함';
        },

        canSubmit() {
            return !this.isSubmitting;
        }
    },

    mounted() {
        this.resetForm();
    },

    beforeUnmount() {
        if (this.timerInterval) clearInterval(this.timerInterval);
    },

    methods: {
        resetForm() {
            this.form.lastName = '';
            this.form.firstName = '';
            this.form.email = '';
            this.form.verificationCode = '';
            this.form.password = '';
            this.form.passwordConfirm = '';
            this.touched.lastName = false;
            this.touched.firstName = false;
            this.touched.email = false;
            this.touched.password = false;
            this.touched.passwordConfirm = false;
            this.touched.codeRequired = false;
            this.isCodeSent = false;
            this.isCodeVerified = false;
            this.codeTimer = 0;
            this.showPassword = false;
            this.showPasswordConfirm = false;
            this.agreement = false;
            this.errors = {};
            this.isSubmitting = false;
            if (this.timerInterval) {
                clearInterval(this.timerInterval);
                this.timerInterval = null;
            }
        },

        runValidation() {
            const errs = {};

            if (this.touched.lastName && !this.form.lastName) errs.lastName = true;
            if (this.touched.firstName && !this.form.firstName) errs.firstName = true;

            if (this.touched.email) {
                if (!this.form.email) {
                    errs.email = '필수 항목입니다';
                } else if (!this.isValidEmail(this.form.email)) {
                    errs.email = '이메일 형식을 준수하여 작성해 주세요.';
                }
            }

            if (this.touched.password) {
                if (!this.form.password) {
                    errs.password = '필수 항목입니다';
                } else if (!this.isValidPassword(this.form.password)) {
                    errs.password = '8~16자, 영문 대소문자·숫자·특수문자를 모두 포함해야 합니다';
                }
            }

            if (this.touched.passwordConfirm) {
                if (!this.form.passwordConfirm) {
                    errs.passwordConfirm = '필수 항목입니다';
                } else if (this.form.password !== this.form.passwordConfirm) {
                    errs.passwordConfirm = '입력하신 비밀번호가 다릅니다';
                }
            }

            this.errors = errs;
        },

        isValidEmail(email) {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        },

        isValidPassword(pw) {
            if (pw.length < 8 || pw.length > 16) return false;
            if (!/[A-Z]/.test(pw)) return false;
            if (!/[a-z]/.test(pw)) return false;
            if (!/[0-9]/.test(pw)) return false;
            if (!/[^A-Za-z0-9]/.test(pw)) return false;
            return true;
        },

        async sendVerificationCode() {
            this.touched.email = true;
            this.runValidation();

            if (!this.form.email) {
                this.errors = { ...this.errors, email: '필수 항목입니다' };
                return;
            }
            if (!this.isValidEmail(this.form.email)) {
                this.errors = { ...this.errors, email: '이메일 형식을 준수하여 작성해 주세요.' };
                return;
            }

            this.generatedCode = String(Math.floor(100000 + Math.random() * 900000));
            this.isCodeSent = true;
            this.isCodeVerified = false;
            this.form.verificationCode = '';
            this.errors = { ...this.errors, code: '' };
            delete this.errors.code;
            this.startTimer();
            this.showCodeModal = true;
        },

        startTimer() {
            if (this.timerInterval) clearInterval(this.timerInterval);
            this.codeTimer = 600;
            this.timerInterval = setInterval(() => {
                this.codeTimer--;
                if (this.codeTimer <= 0) {
                    clearInterval(this.timerInterval);
                    this.timerInterval = null;
                }
            }, 1000);
        },

        async verifyCode() {
            const code = (this.form.verificationCode || '').trim();
            this.touched.codeRequired = true;

            if (!code || code.length !== 6) {
                this.errors = { ...this.errors, code: '인증코드를 다시 한 번 작성해주세요' };
                return;
            }
            if (this.codeTimer <= 0) {
                this.errors = { ...this.errors, code: '인증코드가 만료되었습니다. 인증코드를 재발송해 주세요' };
                return;
            }

            // Demo: 어떤 6자리든 통과 (실제로는 generatedCode와 비교)
            this.isCodeVerified = true;
            const next = { ...this.errors };
            delete next.code;
            this.errors = next;

            if (this.timerInterval) {
                clearInterval(this.timerInterval);
                this.timerInterval = null;
            }
        },

        onModalConfirm() {
            this.showCodeModal = false;
        },

        validateForSubmit() {
            this.touched.lastName = true;
            this.touched.firstName = true;
            this.touched.email = true;
            this.touched.password = true;
            this.touched.passwordConfirm = true;

            this.runValidation();

            const errs = { ...this.errors };

            if (!this.form.lastName) errs.lastName = true;
            if (!this.form.firstName) errs.firstName = true;
            if (!this.form.email) {
                errs.email = '필수 항목입니다';
            } else if (!this.isValidEmail(this.form.email)) {
                errs.email = '이메일 형식을 준수하여 작성해 주세요.';
            }
            if (!this.form.password) {
                errs.password = '필수 항목입니다';
            } else if (!this.isValidPassword(this.form.password)) {
                errs.password = '8~16자, 영문 대소문자·숫자·특수문자를 모두 포함해야 합니다';
            }
            if (!this.form.passwordConfirm) {
                errs.passwordConfirm = '필수 항목입니다';
            } else if (this.form.password !== this.form.passwordConfirm) {
                errs.passwordConfirm = '입력하신 비밀번호가 다릅니다';
            }

            this.errors = errs;
            return Object.keys(errs).filter(k => errs[k]).length === 0;
        },

        async handleSignup() {
            if (!this.validateForSubmit()) return;

            this.isSubmitting = true;
            try {
                const payload = {
                    lastName: this.form.lastName,
                    firstName: this.form.firstName,
                    email: this.form.email,
                    password: this.form.password,
                    status: 'pending_approval'
                };
                this.log && this.log('Signup payload:', payload);

                await new Promise(resolve => setTimeout(resolve, 600));

                this.showApprovalModal = true;
            } catch (error) {
                console.error('회원가입 실패:', error);
            } finally {
                this.isSubmitting = false;
            }
        },

        onApprovalConfirm() {
            const email = this.form.email;
            this.showApprovalModal = false;
            this.resetForm();
            this.navigateTo('/login/login', { email });
        }
    }
};
