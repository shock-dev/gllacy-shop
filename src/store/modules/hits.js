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
                title: 'Сливочно-кофейное с кусочками шоколада',
                price: 380,
                imageUrl: require('@/assets/img/ice-cream-2.jpg')
            },
            {
                title: 'Сливочно-клубничное с присыпкой из белого шоколада',
                price: 355,
                imageUrl: require('@/assets/img/ice-cream-3.jpg')
            },
            {
                title: 'Сливочное крем-брюле с карамельной подливкой',
                price: 415,
                imageUrl: require('@/assets/img/ice-cream-4.jpg')
            }
        ]
    },
    getters: {
        items: ({ items }) => items
    }
}
