export default {
    namespaced: true,
    state: {
        items: [
            {
                title: 'Сливочное с апельсиновым джемом и цитрусовой стружкой',
                price: 310,
                imageUrl: require('@/assets/img/ice-cream-1.jpg')
            },
            {
                title: 'Сливочно-клубничное с присыпкой из белого шоколада',
                price: 355,
                imageUrl: require('@/assets/img/ice-cream-3.jpg')
            }
        ]
    },
    getters: {
        items: ({ items }) => items
    }
}
