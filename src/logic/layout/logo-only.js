export default {
    name: 'logo-only',
    data() {
        return {
            isScrolled: false
        };
    },
    async mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            this.isScrolled = window.scrollY > 10;
        }
    }
};
