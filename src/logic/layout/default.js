export default {
    name: 'default',
    data() {
        return {
            mobileMenuOpen: false,
            isScrolled: false,
            currentRoute: '',
            isLoggedIn: false,
            userName: ''
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
            if (this.isLoggedIn) {
                try {
                    const user = JSON.parse(localStorage.getItem('user') || '{}');
                    this.userName = user.name || user.email || '회원';
                } catch (e) {
                    this.userName = '회원';
                }
            } else {
                this.userName = '';
            }
        },
        guardNav(event) {
            this.closeMobileMenu();
            if (this.isLoggedIn) return;
            event.preventDefault();
            this.navigateTo('/login/login');
        },
        handleLogout() {
            localStorage.removeItem('auth_token');
            localStorage.removeItem('user');
            localStorage.removeItem('remembered_email');
            this.refreshAuthState();
            this.closeMobileMenu();
            if (this.currentRoute !== '/home') {
                this.navigateTo('/home');
            }
        }
    }
};
