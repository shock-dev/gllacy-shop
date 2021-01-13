export default {
    state: {
        overlay: false,
        sort: false,
        mobileMenu: false
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
        hideAll(state) {
            document.body.classList.remove('lock')
            state.mobileMenu = false
            state.overlay = false
            state.sort = false
        }
    },
    getters: {
        overlay: ({ overlay }) => overlay,
        sort: ({ sort }) => sort,
        mobileMenu: ({ mobileMenu }) => mobileMenu
    }
}
