export default {
    state: {
        overlay: false,
        sort: false,
        mobileMenu: false,
        loginForm: false
    },
    mutations: {
        toggleOverlay(state) {
            state.overlay = !state.overlay
        },
        toggleSort(state) {
            state.sort = !state.sort
        },
        toggleMobileMenu(state) {
            state.mobileMenu = !state.mobileMenu
        },
        toggleLoginForm(state) {
            state.loginForm = !state.loginForm
        },
        hideAll(state) {
            document.body.classList.remove('lock')
            state.mobileMenu = false
            state.overlay = false
            state.sort = false
            state.loginForm = false
        }
    },
    getters: {
        overlay: ({ overlay }) => overlay,
        sort: ({ sort }) => sort,
        mobileMenu: ({ mobileMenu }) => mobileMenu,
        loginForm: ({ loginForm }) => loginForm
    }
}
