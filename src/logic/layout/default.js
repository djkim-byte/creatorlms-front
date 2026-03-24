export default {
    name: 'default',
    data() {
        return {
            isLoggedIn: false,
            userName: '',
            notificationCount: 5,
            mobileMenuOpen: false,
            isScrolled: false,
            currentRoute: '',
            legalTerms: { title: '', sections: [] },
            legalPrivacy: { title: '', intro: '', sections: [] },
            legalMarketing: { title: '', sections: [] }
        };
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
                this.userName = user.name || '홍길동';
            }
        },
        toggleMobileMenu() {
            this.mobileMenuOpen = !this.mobileMenuOpen;
        },
        handleRouteChange() {
            this.currentRoute = this.getCurrentRoute();
            this.mobileMenuOpen = false;
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
            this.navigateTo('/mysite');
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
