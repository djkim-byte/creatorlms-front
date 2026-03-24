export default {
    name: 'MySite',
    layout: 'default',

    data() {
        return {
            loading: false,
            fromFree: false,
            openMenuId: null,
            sites: [],
            demoSites: [
                {
                    id: 1,
                    name: 'DJ테크트리',
                    domain: 'djtechtree.solsol.com',
                    adminUrl: 'https://admin-creatorlms.pages.dev/admin/',
                    plan: 'Free',
                    billingCycle: null,
                    price: 0,
                    nextPaymentDate: null,
                    subscriptionStart: '2026.01.15',
                    subscriptionEnd: null,
                    status: 'active',
                    storageUsed: 2,
                    storageTotal: 40,
                    enrollmentUsed: 5,
                    enrollmentTotal: 20,
                    enrollmentUnlimited: true
                },
                {
                    id: 2,
                    name: 'MONZO',
                    domain: 'monzo.solsol.com',
                    adminUrl: 'https://admin-creatorlms.pages.dev/admin/',
                    plan: 'Basic',
                    billingCycle: 'monthly',
                    price: 100000,
                    nextPaymentDate: '2026.03.13',
                    subscriptionStart: '2026.02.14',
                    subscriptionEnd: '2027.02.13',
                    status: 'active',
                    storageUsed: 200,
                    storageTotal: 1024,
                    enrollmentUsed: 100,
                    enrollmentTotal: 200
                },
                {
                    id: 3,
                    name: 'MONZO',
                    domain: 'monzo.solsol.com',
                    adminUrl: 'https://admin-creatorlms.pages.dev/admin/',
                    plan: 'Basic',
                    billingCycle: 'annual',
                    price: 840000,
                    nextPaymentDate: '2027.02.13',
                    subscriptionStart: '2026.02.14',
                    subscriptionEnd: '2027.02.13',
                    status: 'active',
                    storageUsed: 200,
                    storageTotal: 1024,
                    enrollmentUsed: 100,
                    enrollmentTotal: 200,
                    annualDiscount: true
                },
                {
                    id: 4,
                    name: 'MONZO',
                    domain: 'monzo.solsol.com',
                    adminUrl: 'https://admin-creatorlms.pages.dev/admin/',
                    plan: 'Basic',
                    billingCycle: 'monthly',
                    price: 100000,
                    nextPaymentDate: null,
                    subscriptionStart: null,
                    subscriptionEnd: null,
                    status: 'payment_failed',
                    paymentFailDaysLeft: 1,
                    storageUsed: 200,
                    storageTotal: 1024,
                    enrollmentUsed: 100,
                    enrollmentTotal: 200
                },
                {
                    id: 5,
                    name: 'MONZO',
                    domain: 'monzo.solsol.com',
                    adminUrl: 'https://admin-creatorlms.pages.dev/admin/',
                    plan: 'Basic',
                    billingCycle: 'monthly',
                    price: 100000,
                    nextPaymentDate: null,
                    subscriptionStart: null,
                    subscriptionEnd: null,
                    status: 'payment_grace',
                    graceDaysLeft: 20,
                    storageUsed: 200,
                    storageTotal: 1024,
                    enrollmentUsed: 100,
                    enrollmentTotal: 200
                },
                {
                    id: 6,
                    name: 'MONZO',
                    domain: 'monzo.solsol.com',
                    adminUrl: 'https://admin-creatorlms.pages.dev/admin/',
                    plan: 'Basic',
                    billingCycle: 'monthly',
                    price: 100000,
                    nextPaymentDate: null,
                    subscriptionStart: null,
                    subscriptionEnd: null,
                    status: 'suspended',
                    storageUsed: 200,
                    storageTotal: 1024,
                    enrollmentUsed: null,
                    enrollmentTotal: null
                },
                {
                    id: 7,
                    name: 'MONZO',
                    domain: 'monzo.solsol.com',
                    adminUrl: 'https://admin-creatorlms.pages.dev/admin/',
                    plan: 'Basic',
                    billingCycle: 'monthly',
                    price: 100000,
                    nextPaymentDate: '2026.03.13',
                    subscriptionStart: '2026.02.14',
                    subscriptionEnd: '2027.02.13',
                    status: 'active',
                    storageUsed: 900,
                    storageTotal: 1024,
                    enrollmentUsed: 180,
                    enrollmentTotal: 200,
                    warning: 'enrollment_90'
                },
                {
                    id: 8,
                    name: 'MONZO',
                    domain: 'monzo.solsol.com',
                    adminUrl: 'https://admin-creatorlms.pages.dev/admin/',
                    plan: 'Basic',
                    billingCycle: 'monthly',
                    price: 100000,
                    nextPaymentDate: '2026.03.13',
                    subscriptionStart: '2026.02.14',
                    subscriptionEnd: '2027.02.13',
                    status: 'active',
                    subscriptionDaysLeft: 20,
                    storageUsed: 200,
                    storageTotal: 1024,
                    enrollmentUsed: 100,
                    enrollmentTotal: 200,
                    warning: 'subscription_expiring'
                },
                {
                    id: 9,
                    name: 'MONZO',
                    domain: 'monzo.solsol.com',
                    adminUrl: 'https://admin-creatorlms.pages.dev/admin/',
                    plan: 'Basic',
                    billingCycle: 'monthly',
                    price: 100000,
                    nextPaymentDate: '2026.03.13',
                    subscriptionStart: '2026.01.14',
                    subscriptionEnd: '2026.02.13',
                    status: 'expired',
                    storageUsed: 200,
                    storageTotal: 1024,
                    enrollmentUsed: 100,
                    enrollmentTotal: 200
                },
                {
                    id: 10,
                    name: 'MONZO',
                    domain: 'monzo.solsol.com',
                    adminUrl: 'https://admin-creatorlms.pages.dev/admin/',
                    plan: 'Basic',
                    billingCycle: 'monthly',
                    price: 100000,
                    nextPaymentDate: '2026.03.13',
                    subscriptionStart: '2026.01.14',
                    subscriptionEnd: '2026.02.13',
                    status: 'suspended_expired',
                    storageUsed: 200,
                    storageTotal: 1024,
                    enrollmentUsed: 100,
                    enrollmentTotal: 200
                },
                {
                    id: 11,
                    name: 'MONZO',
                    domain: 'monzo.solsol.com',
                    adminUrl: 'https://admin-creatorlms.pages.dev/admin/',
                    plan: 'Basic',
                    billingCycle: 'monthly',
                    price: 100000,
                    nextPaymentDate: null,
                    subscriptionStart: '2026.02.14',
                    subscriptionEnd: '2027.02.13',
                    status: 'cancelled',
                    storageUsed: 200,
                    storageTotal: 1024,
                    enrollmentUsed: 100,
                    enrollmentTotal: 200
                }
            ]
        };
    },

    async mounted() {
        this.fromFree = this.getParam('from') === 'free';
        await this.loadSites();
    },

    methods: {
        async loadSites() {
            this.loading = true;
            try {
                // TODO: API 연동 시 교체
                this.sites = this.demoSites;
            } catch (error) {
                console.error('사이트 목록 로딩 실패:', error);
            } finally {
                this.loading = false;
            }
        },

        goToCreate() {
            this.navigateTo('/mysite/create', { plan: this.fromFree ? 'free' : 'basic' });
        },

        goToPricing() {
            this.navigateTo('/price/pricing');
        },

        formatPrice(price) {
            if (!price) return '0원';
            return price.toLocaleString() + '원';
        },

        getBillingCycleLabel(site) {
            if (!site.billingCycle) return '';
            if (site.billingCycle === 'monthly') return '월간 자동결제';
            if (site.billingCycle === 'annual') return '연간 결제';
            return '';
        },

        getStatusLabel(site) {
            switch (site.status) {
                case 'active': return '사용중';
                case 'payment_failed': return `결제 실패 - 사용중(${site.paymentFailDaysLeft}일 남음)`;
                case 'payment_grace': return `결제유예(${site.graceDaysLeft}일 남음)`;
                case 'suspended': return '서비스 중지';
                case 'expired': return '기간 만료';
                case 'suspended_expired': return '서비스 중지';
                case 'cancelled': return '사용중 - 구독취소';
                default: return '알 수 없음';
            }
        },

        getStatusClass(site) {
            switch (site.status) {
                case 'active': return 'mysite-status-green';
                case 'payment_failed': return 'mysite-status-yellow';
                case 'payment_grace': return 'mysite-status-red';
                case 'suspended': return 'mysite-status-red';
                case 'expired': return 'mysite-status-red';
                case 'suspended_expired': return 'mysite-status-red';
                case 'cancelled': return 'mysite-status-teal';
                default: return 'mysite-status-gray';
            }
        },

        getStoragePercent(site) {
            if (!site.storageTotal) return 0;
            return Math.round((site.storageUsed / site.storageTotal) * 100);
        },

        formatStorage(site) {
            const used = site.storageUsed >= 1024 ? (site.storageUsed / 1024).toFixed(1) + 'TB' : site.storageUsed + 'GB';
            const total = site.storageTotal >= 1024 ? (site.storageTotal / 1024).toFixed(1) + 'TB' : site.storageTotal + 'GB';
            const percent = this.getStoragePercent(site);
            return `${used}(${percent}%)/${total}`;
        },

        getEnrollmentPercent(site) {
            if (!site.enrollmentTotal || !site.enrollmentUsed) return 0;
            return Math.round((site.enrollmentUsed / site.enrollmentTotal) * 100);
        },

        formatEnrollment(site) {
            if (site.enrollmentUsed === null) return '-';
            const percent = this.getEnrollmentPercent(site);
            const totalLabel = site.enrollmentUnlimited ? '무제한' : `${site.enrollmentTotal}명`;
            return `${site.enrollmentUsed}명(${percent}%)/${totalLabel}`;
        },

        isStorageWarning(site) {
            return this.getStoragePercent(site) >= 90;
        },

        isEnrollmentWarning(site) {
            return this.getEnrollmentPercent(site) >= 90;
        },

        getWarningMessages(site) {
            const messages = [];
            if (this.isEnrollmentWarning(site)) {
                messages.push('수강 신청 제한 90% 도달 - 플랜 업그레이드가 필요합니다');
            }
            if (this.isStorageWarning(site)) {
                messages.push('영상 용량 제한 90% 도달 - 플랜 업그레이드가 필요합니다');
            }
            if (site.warning === 'subscription_expiring') {
                messages.push(`구독기간 ${site.subscriptionDaysLeft}일 남음 - 사용 연장이 필요합니다`);
            }
            if (site.status === 'expired' || site.status === 'suspended_expired') {
                messages.push('1개월내 사용 연장하시면 서비스는 정상 유지됩니다.');
            }
            return messages;
        },

        getActionButtons(site) {
            if (site.status === 'suspended') return [];

            const buttons = [];

            buttons.push({ label: 'X 구독 취소하기', type: 'outline', action: 'cancel' });

            if (site.status === 'payment_failed' || site.status === 'payment_grace') {
                buttons.push({ label: 'O 즉시 결제', type: 'danger', action: 'payNow' });
            }

            if (site.warning === 'subscription_expiring' || site.status === 'expired' || site.status === 'suspended_expired') {
                buttons.push({ label: 'O 사용 연장하기', type: 'danger', action: 'extend' });
            }

            buttons.push({ label: '^ 플랜 업그레이드', type: 'dark', action: 'upgrade' });

            return buttons;
        },

        toggleMenu(siteId) {
            this.openMenuId = this.openMenuId === siteId ? null : siteId;
        },

        closeMenu() {
            this.openMenuId = null;
        },

        handleSiteAction(action, site) {
            this.openMenuId = null;
            switch (action) {
                case 'cancel':
                    this.navigateTo('/mysite/cancel', { siteId: site.id });
                    break;
                case 'payNow':
                    this.navigateTo('/mysite/pay-now', { siteId: site.id });
                    break;
                case 'extend':
                    this.navigateTo('/mysite/extend', { siteId: site.id });
                    break;
                case 'upgrade':
                    this.navigateTo('/mysite/upgrade', { siteId: site.id });
                    break;
            }
        },

        getSubscriptionPeriod(site) {
            if (!site.subscriptionStart) return '-';
            const end = site.subscriptionEnd || '무제한';
            return `${site.subscriptionStart} ~ ${end}`;
        },

        getPriceDisplay(site) {
            if (site.annualDiscount) {
                return { price: this.formatPrice(site.price), discount: '(30% 할인)' };
            }
            return { price: this.formatPrice(site.price), discount: null };
        }
    }
};
