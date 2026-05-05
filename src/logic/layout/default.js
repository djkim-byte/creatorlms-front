export default {
    name: 'default',
    data() {
        return {
            mobileMenuOpen: false,
            isScrolled: false,
            currentRoute: '',
            isLoggedIn: false
        };
    },
    mounted() {
        this.currentRoute = this.getCurrentRoute();
        this.refreshAuthState();
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener('hashchange', this.handleRouteChange);
        window.addEventListener('storage', this.refreshAuthState);
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener('hashchange', this.handleRouteChange);
        window.removeEventListener('storage', this.refreshAuthState);
    },
    methods: {
        toggleMobileMenu() {
            this.mobileMenuOpen = !this.mobileMenuOpen;
        },
        closeMobileMenu() {
            this.mobileMenuOpen = false;
        },
        isActive(path) {
            return this.currentRoute === path || this.currentRoute.startsWith(path + '/');
        },
        handleRouteChange() {
            this.currentRoute = this.getCurrentRoute();
            this.mobileMenuOpen = false;
            this.refreshAuthState();
        },
        handleScroll() {
            this.isScrolled = window.scrollY > 10;
        },
        refreshAuthState() {
            this.isLoggedIn = !!localStorage.getItem('auth_token');
        }
    }
};
