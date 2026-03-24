export default {
    name: 'GnbLogo',

    props: {
        small: {
            type: Boolean,
            default: false
        }
    },

    template: `
        <a href="#/home" class="text-decoration-none d-inline-flex align-items-center">
            <div class="logo-animated" :class="{ 'logo-animated-sm': small }">
                <div class="logo-frame logo-frame-first">
                    <div class="logo-kr-title">쏠쏠</div>
                    <div class="logo-kr-sub">크리에이터 플랫폼</div>
                </div>
                <div class="logo-frame logo-frame-second">
                    <img src="/images/logo.svg" alt="SOLSOL" class="logo-en-img">
                </div>
            </div>
        </a>
    `
}
