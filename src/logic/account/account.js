export default {
    name: 'Account',
    layout: 'default',

    data() {
        return {
            userEmail: '',
            billingEmail: '',
            form: {
                lastName: '',
                firstName: '',
                currentPassword: '',
                newPassword: '',
                newPasswordConfirm: '',
                marketingConsent: true,
                twoFactorEnabled: false
            },
            cards: [],
            errors: {
                currentPassword: '',
                newPassword: '',
                newPasswordConfirm: ''
            },
            isSaving: false,
            hasCards: true,
            modal: {
                show: false,
                type: 'confirm',
                icon: 'bi-credit-card',
                message: '',
                action: null
            },
            deleteModal: {
                show: false,
                agreed: false,
                password: '',
                errors: {
                    agreed: '',
                    password: ''
                }
            }
        };
    },

    async mounted() {
        this.loadUserData();
        this.loadCards();
    },

    methods: {
        loadUserData() {
            const user = JSON.parse(localStorage.getItem('user') || '{}');
            this.userEmail = user.email || 'djkim@example.com';
            this.billingEmail = user.billingEmail || 'billing@malgnsoft.com';

            const fullName = user.name || '김동주';
            if (fullName.length >= 2) {
                this.form.lastName = fullName.charAt(0);
                this.form.firstName = fullName.slice(1);
            }

            this.form.marketingConsent = user.marketingConsent !== false;
            this.form.twoFactorEnabled = user.twoFactorEnabled === true;
        },

        loadCards() {
            const savedCards = JSON.parse(localStorage.getItem('payment_cards') || 'null');

            if (savedCards) {
                this.cards = savedCards;
            } else {
                // 데모용 카드 데이터
                this.cards = [
                    {
                        id: 1,
                        brand: 'MASTER',
                        maskedNumber: '************5547',
                        displayNumber: '1234 · 5678 · 9012 · 3456',
                        registeredDate: '2000.00.00',
                        isDefault: true
                    },
                    {
                        id: 2,
                        brand: 'VISA',
                        maskedNumber: '************5547',
                        displayNumber: '1234 · 5678 · 9012 · 3456',
                        registeredDate: '20000.00.00',
                        isDefault: false
                    }
                ];
            }
        },

        validate() {
            this.errors.currentPassword = '';
            this.errors.newPassword = '';
            this.errors.newPasswordConfirm = '';

            let hasError = false;

            if (this.form.currentPassword || this.form.newPassword || this.form.newPasswordConfirm) {
                if (!this.form.currentPassword) {
                    this.errors.currentPassword = '비밀번호를 입력해 주세요';
                    hasError = true;
                }
                if (!this.form.newPassword) {
                    this.errors.newPassword = '비밀번호를 입력해 주세요';
                    hasError = true;
                } else if (this.form.newPassword.length < 8) {
                    this.errors.newPassword = '최소 8자 이상 특수문자 기호를 포함해 주세요';
                    hasError = true;
                }
                if (!this.form.newPasswordConfirm) {
                    this.errors.newPasswordConfirm = '비밀번호가 맞지 않습니다. 다시 입력해 주세요.';
                    hasError = true;
                } else if (this.form.newPassword !== this.form.newPasswordConfirm) {
                    this.errors.newPasswordConfirm = '비밀번호가 맞지 않습니다. 다시 입력해 주세요.';
                    hasError = true;
                }
            }

            return !hasError;
        },

        async handleSave() {
            if (!this.validate()) return;

            this.isSaving = true;
            try {
                // TODO: API call to save account info
                const payload = {
                    lastName: this.form.lastName,
                    firstName: this.form.firstName,
                    marketingConsent: this.form.marketingConsent,
                    twoFactorEnabled: this.form.twoFactorEnabled
                };

                if (this.form.currentPassword && this.form.newPassword) {
                    payload.currentPassword = this.form.currentPassword;
                    payload.newPassword = this.form.newPassword;
                }

                this.log('Account save payload:', payload);

                // 임시: localStorage 업데이트
                await new Promise(resolve => setTimeout(resolve, 500));

                const user = JSON.parse(localStorage.getItem('user') || '{}');
                user.name = this.form.lastName + this.form.firstName;
                user.marketingConsent = this.form.marketingConsent;
                user.twoFactorEnabled = this.form.twoFactorEnabled;
                localStorage.setItem('user', JSON.stringify(user));

                // 비밀번호 필드 초기화
                this.form.currentPassword = '';
                this.form.newPassword = '';
                this.form.newPasswordConfirm = '';

                alert('계정 정보가 저장되었습니다.');
            } catch (error) {
                console.error('계정 정보 저장 실패:', error);
            } finally {
                this.isSaving = false;
            }
        },

        resetPassword() {
            this.navigateTo('/login/reset-password');
        },

        registerCard() {
            // TODO: 카드 등록 모달 또는 PG 연동
            alert('카드 등록 기능은 준비 중입니다.');
        },

        showModal(type, icon, message, action) {
            this.modal.show = true;
            this.modal.type = type;
            this.modal.icon = icon;
            this.modal.message = message;
            this.modal.action = action;
        },

        closeModal() {
            this.modal.show = false;
            this.modal.action = null;
        },

        confirmModal() {
            if (this.modal.action) {
                this.modal.action();
            }
            this.closeModal();
        },

        confirmSetDefault(card) {
            const last5 = card.maskedNumber.slice(-5);
            this.showModal(
                'confirm',
                'bi-credit-card-2-front',
                `${card.brand}(*****${last5}) 카드를 대표카드로 등록 하시겠습니까?`,
                () => this.setDefaultCard(card.id)
            );
        },

        confirmDeleteCard(card) {
            if (this.cards.length <= 1) {
                this.showModal(
                    'alert',
                    'bi-exclamation-circle',
                    '1개 이상 카드가 등록되어있어야 합니다.',
                    null
                );
                return;
            }
            const last5 = card.maskedNumber.slice(-5);
            this.showModal(
                'confirm',
                'bi-credit-card-2-front',
                `${card.brand}(*****${last5}) 카드를 삭제하시겠어요?`,
                () => this.deleteCard(card.id)
            );
        },

        setDefaultCard(cardId) {
            this.cards.forEach(card => {
                card.isDefault = card.id === cardId;
            });
            localStorage.setItem('payment_cards', JSON.stringify(this.cards));
        },

        deleteCard(cardId) {
            this.cards = this.cards.filter(card => card.id !== cardId);
            localStorage.setItem('payment_cards', JSON.stringify(this.cards));
        },

        deleteAccount() {
            this.deleteModal.show = true;
            this.deleteModal.agreed = false;
            this.deleteModal.password = '';
            this.deleteModal.errors.agreed = '';
            this.deleteModal.errors.password = '';
        },

        closeDeleteModal() {
            this.deleteModal.show = false;
        },

        validateDeleteAccount() {
            this.deleteModal.errors.agreed = '';
            this.deleteModal.errors.password = '';
            let hasError = false;

            if (!this.deleteModal.agreed) {
                this.deleteModal.errors.agreed = '탈퇴를 진행하려면 동의해 주세요.';
                hasError = true;
            }
            if (!this.deleteModal.password) {
                this.deleteModal.errors.password = '현재 비밀번호를 입력해 주세요.';
                hasError = true;
            }

            return !hasError;
        },

        async confirmDeleteAccount() {
            if (!this.validateDeleteAccount()) return;

            // TODO: API call to delete account with password verification
            localStorage.removeItem('auth_token');
            localStorage.removeItem('user');
            localStorage.removeItem('payment_cards');
            localStorage.removeItem('my_sites');
            this.closeDeleteModal();
            this.showModal(
                'alert',
                'bi-check-circle',
                '탈퇴가 완료되었습니다.\n그동안 쏠쏠을 이용해 주셔서 감사합니다.',
                () => this.navigateTo('/home')
            );
        },

        changeBillingEmail() {
            this.navigateTo('/account/change-billing-email');
        }
    }
};
