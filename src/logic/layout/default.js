export default {
    name: 'default',
    data() {
        return {
            isLoggedIn: false,
            userName: '',
            mobileMenuOpen: false,
            megaMenuOpen: false,
            megaMenuType: '',
            megaMenuOffset: 0,
            mobileSubMenu: '',
            mysiteToggle: false,
            paymentHistoryToggle: false,
            inquiryHistoryToggle: false,
            isScrolled: false,
            currentRoute: '',
            legalTerms: { title: '', sections: [] },
            legalPrivacy: { title: '', intro: '', sections: [] },
            legalMarketing: { title: '', sections: [] }
        };
    },
    computed: {
        showLoggedIn() {
            if (this.currentRoute === '/pricing') return false;
            return this.isLoggedIn;
        }
    },
    async mounted() {
        this.currentRoute = this.getCurrentRoute();
        this.checkAuth();
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener('hashchange', this.handleRouteChange);
        await this.loadLegalDocs();
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener('hashchange', this.handleRouteChange);
    },
    methods: {
        checkAuth() {
            const token = localStorage.getItem('auth_token');
            if (token) {
                this.isLoggedIn = true;
                const user = JSON.parse(localStorage.getItem('user') || '{}');
                this.userName = user.name || 'User';
            }
        },
        toggleMobileMenu() {
            this.mobileMenuOpen = !this.mobileMenuOpen;
            if (!this.mobileMenuOpen) {
                this.mobileSubMenu = '';
            }
        },
        toggleMegaMenu(type) {
            if (this.megaMenuOpen && this.megaMenuType === type) {
                this.megaMenuOpen = false;
            } else {
                this.megaMenuType = type;
                this.calcMegaMenuOffset();
                this.megaMenuOpen = true;
            }
        },
        calcMegaMenuOffset() {
            const link = this.$refs.gnbServiceLink;
            const container = link?.closest('.container');
            if (link && container) {
                this.megaMenuOffset = link.getBoundingClientRect().left - container.getBoundingClientRect().left;
            }
        },
        closeMegaMenu() {
            this.megaMenuOpen = false;
        },
        handleRouteChange() {
            this.currentRoute = this.getCurrentRoute();
        },
        handleScroll() {
            this.isScrolled = window.scrollY > 10;
        },
        handleLogout() {
            localStorage.removeItem('auth_token');
            localStorage.removeItem('user');
            this.isLoggedIn = false;
            this.mobileMenuOpen = false;
            this.navigateTo('/home');
        },
        goToMySite() {
            this.mobileMenuOpen = false;
            this.mysiteToggle = !this.mysiteToggle;
            this.navigateTo(this.mysiteToggle ? '/mysite' : '/mysite/empty');
        },
        goToPaymentHistory() {
            this.mobileMenuOpen = false;
            this.paymentHistoryToggle = !this.paymentHistoryToggle;
            this.navigateTo(this.paymentHistoryToggle ? '/payhistory/payment-history' : '/payhistory/payment-history-empty');
        },
        goToInquiryHistory() {
            this.mobileMenuOpen = false;
            this.inquiryHistoryToggle = !this.inquiryHistoryToggle;
            this.navigateTo(this.inquiryHistoryToggle ? '/inquiryhistory/inquiry-history' : '/inquiryhistory/inquiry-history-empty');
        },
        goToFreeCta() {
            this.mobileMenuOpen = false;
            const toggle = sessionStorage.getItem('freeCta_toggle') === 'true';
            sessionStorage.setItem('freeCta_toggle', String(!toggle));
            if (toggle) {
                this.navigateTo('/mysite', { from: 'free' });
            } else {
                this.navigateTo('/mysite/empty');
            }
        },
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
        }
    }
};
