export default {
    name: 'default',
    data() {
        return {
            mobileMenuOpen: false,
            isScrolled: false,
            currentRoute: ''
        };
    },
    mounted() {
        this.currentRoute = this.getCurrentRoute();
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
