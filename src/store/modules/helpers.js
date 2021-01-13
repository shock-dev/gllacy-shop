export default {
    state: {
        overlay: false,
        sort: false
    },
    mutations: {
        toggleOverlay(state) {
            state.overlay = !state.overlay
        },
        toggleSort(state) {
            state.sort = !state.sort
        },
        hideAll(state) {
            document.body.classList.remove('lock')
            state.overlay = false
            state.sort = false
        }
    },
    getters: {
        overlay: ({ overlay }) => overlay,
        sort: ({ sort }) => sort
    }
}
