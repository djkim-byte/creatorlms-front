export default {
    name: 'default',
    data() {
        return {
            mobileMenuOpen: false,
            isScrolled: false,
            currentRoute: '',
            lang: 'ko'
        };
    },
    mounted() {
        this.currentRoute = this.getCurrentRoute();
        this.lang = localStorage.getItem('lang') || 'ko';
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener('hashchange', this.handleRouteChange);
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener('hashchange', this.handleRouteChange);
    },
    methods: {
        toggleMobileMenu() {
            this.mobileMenuOpen = !this.mobileMenuOpen;
        },
        closeMobileMenu() {
            this.mobileMenuOpen = false;
        },
        setLang(lang) {
            this.lang = lang;
            localStorage.setItem('lang', lang);
            if (this.$i18n && typeof this.$i18n.setLanguage === 'function') {
                this.$i18n.setLanguage(lang);
            }
        },
        isActive(path) {
            return this.currentRoute === path || this.currentRoute.startsWith(path + '/');
        },
        handleRouteChange() {
            this.currentRoute = this.getCurrentRoute();
            this.mobileMenuOpen = false;
        },
        handleScroll() {
            this.isScrolled = window.scrollY > 10;
        }
    }
};
